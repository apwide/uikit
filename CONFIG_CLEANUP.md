# Config & dependency cleanup — audit du 2026-08-12

Contexte : audit post-migration Vue 3 pour simplifier/standardiser les configs qui traînent.
Chaque suppression a été vérifiée par un build réel (`npm run build`, `npm run build-storybook`) avant d'être classée ici.

## 🟢 Sûr à supprimer (vérifié par build) — ✅ fait le 2026-08-12

- [x] Supprimer `postcss.config.js` — référence `autoprefixer` qui n'est même pas installé ; build et build-storybook passent sans ce fichier (testé)
- [x] Retirer `NODE_OPTIONS: --openssl-legacy-provider` des 3 workflows GitHub Actions (`any-test.yml`, `main-test-bump-release.yml`, `patch-test-bump-release.yml`) — nécessaire pour webpack 4 seulement ; build testé sans le flag sur webpack 5.109 + Node 24, ça passe. (Le `Dockerfile` ne l'avait finalement pas.)
- [x] Supprimer `jsconfig.json` — doublon de `tsconfig.json` (mêmes `paths`, et `tsconfig.json` couvre déjà le JS via `allowJs: true`)
- [x] Retirer devDependency `core-js` — aucune référence dans le code, aucune config `useBuiltIns`, build complet passe sans
- [x] Retirer devDependency `assert` — aucune référence, aucun `resolve.fallback` dans webpack, build complet passe sans
- [x] Retirer devDependency `@vue/cli-plugin-babel` — reliquat vue-cli, aucun `vue.config.js` ni référence
- [x] Retirer devDependency `ts-loader` — seul usage est un bloc commenté dans `webpack.config.js`
- [x] Retirer devDependency `typescript-eslint` (version suspecte `0.0.1-alpha.0`) — jamais importé, seuls `@typescript-eslint/eslint-plugin` et `@typescript-eslint/parser` sont utilisés
- [x] Retirer devDependency `eslint-plugin-cypress` — non référencé dans `.eslintrc.js`, et `cypress/` n'est même pas dans le scope du script `lint`
- [x] Retirer devDependency `eslint-import-resolver-alias` — non référencé (`.eslintrc.js` n'a pas de `settings.import/resolver`)
- [x] ~~Retirer devDependency `html-loader`~~ — **annulé**, en fait utilisé via `!!html-loader!` inline dans les stories générées (`stories/Tooltip/*.stories.js` etc.), repéré par l'échec de `build-storybook`. Remis dans `package.json`.

Validé par : `npm run lint` (0 erreur), `npm run unit` (1019 passed), `npm run build` (OK), `npm run build-storybook` (OK).

## 🟡 À corriger (dépendance fantôme, pas une suppression) — ✅ fait le 2026-08-12

- [x] Ajouter `@typescript-eslint/parser` comme devDependency explicite — utilisé directement dans `.eslintrc.js` (`parser: '@typescript-eslint/parser'`) mais n'arrivait auparavant que transitivement via `@vue/eslint-config-typescript`

## 🔵 À discuter avec l'utilisateur (pas de test automatisé possible)

- [ ] `Dockerfile` : `node:16-alpine` (EOL) + image tierce `callmemagnus/nginx4static` non référencée dans le CI actuel — encore utilisé ailleurs ? À supprimer, garder, ou moderniser (`node:24-alpine`)
- [ ] `.npmignore` : référence des fichiers obsolètes (`rollup.config.js`, `build/`) qui n'existent plus, et n'exclut pas `webpack.config.js`/`modules/` correctement (publiés inutilement sur npm) — migrer vers un champ `"files"` dans `package.json` ?
- [ ] Fichiers de doc à la racine (`VUE3_MIGRATION_*.md`, `SESSION_SUMMARY.md`, `CURRENT_STATUS.md`, `TEST_COVERAGE_PROGRESS.md`, `TESTING_STRATEGY.md`, `EXPERT_PROMPT.md`) : garder tel quel, déplacer dans un dossier dédié, ou supprimer une fois digérés ?

## Non touché (légitime)

- `react` / `react-dom` en devDependencies : nécessaires pour Storybook 7 (`addon-docs` et consorts exigent React même avec le framework `vue3-webpack5`)
- `@babel/helper-plugin-utils` : utilisé par `modules/babel-preset-typescript/index.js`
- `vue-svg-loader`, `file-loader` : utilisés dans `.storybook/webpack.config.js`
- `html-loader` : pas dans les configs webpack, mais utilisé via syntaxe inline `!!html-loader!` dans plusieurs `stories/**/*.stories.js` — repéré seulement au build-storybook, corrigé (remis en devDependency)
