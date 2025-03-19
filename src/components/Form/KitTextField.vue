<template>
  <div class="kit-text-field" data-cy="input-wrapper" v-on="$listeners">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.kit-text-field {
  --kit-text-field-placeholder-color: #7a869a;
  --kit-text-field-border-color: #dfe1e6;
  --kit-text-field-text-color: #091e42;
  --kit-text-field-bg-color: #fafbfc;
  --kit-text-field-hover-color: #ebecf0;

  --kit-text-field-disabled-bg-color: #f4f5f7;
  --kit-text-field-disabled-text-color: #a5adba;

  --kit-text-field-active-bg-color: #ebecf0;
  --kit-text-field-active-border-color: #f4f5f7;

  --kit-text-field-loading-bg-color: white;

  --kit-text-field-invalid-border-color: #de350b;

  --kit-text-field-select-bg-color: #f4f5f7;
  --kit-text-field-select-border-color: #f4f5f7;
  --kit-text-field-select-hover-color: #ebecf0;
  --kit-text-field-select-hover-border-color: #ebecf0;
}

.kit-dark .kit-text-field {
  --kit-text-field-placeholder-color: #b6c2cf;
  --kit-text-field-border-color: #738496;
  --kit-text-field-text-color: #b6c2cf;
  --kit-text-field-bg-color: #22272B;
  --kit-text-field-hover-color: #282E33;

  --kit-text-field-disabled-bg-color: #282E33;
  --kit-text-field-disabled-text-color: #b6c2cf;

  --kit-text-field-active-bg-color: #22272b;
  --kit-text-field-active-border-color:#579DFF;

  --kit-text-field-loading-bg-color: var(--apw-page-background);

  --kit-text-field-invalid-border-color: #f15b50;

  --kit-text-field-select-bg-color: #2b2a33;
  --kit-text-field-select-border-color: #738496;
  --kit-text-field-select-hover-color: #282E33;
  --kit-text-field-select-hover-border-color: #738496;
}

>>> textarea,
>>> input {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: inherit;
  font-size: inherit;
  outline: none;
  line-height: inherit;
  width: 100%;
  padding: 6px;
  letter-spacing: inherit;
  box-sizing: border-box;
  margin: 0;
}

.kit-text-field[compact] > input,
.kit-text-field[compact] > textarea {
  padding: 0;
}

textarea {
  resize: vertical;
}

textarea::-ms-clear,
input::-ms-clear {
  display: none;
}

textarea::-moz-placeholder,
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  opacity: 1;
  color: var(--kit-text-field-placeholder-color);
}

input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--kit-text-field-placeholder-color);
}

textarea:-moz-placeholder,
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: var(--kit-text-field-placeholder-color);
  opacity: 1;
}

.kit-text-field {
  align-items: center;
  border: solid 2px var(--kit-text-field-border-color);
  border-radius: 3px;
  box-sizing: border-box;
  padding: 0;
  color: var(--kit-text-field-text-color);
  display: flex;
  flex: 1 0 auto;
  position: relative;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  word-wrap: break-word;
  background-color: var(--kit-text-field-bg-color);
}

.kit-text-field[select]:not([is-loading]) {
  background-color: var(--kit-text-field-select-bg-color);
  border-color: var(--kit-text-field-select-border-color);
}

.kit-text-field[editable]:not([is-focused]) {
  border: transparent;
  background-color: inherit;
}

.kit-text-field[should-fit-container] {
  display: flex;
}

.kit-text-field[disabled] {
  pointer-events: none;
  background-color: var(--kit-text-field-disabled-bg-color);
  color: var(--kit-text-field-disabled-text-color);
}

.kit-text-field[disabled] input::placeholder {
  color: var(--kit-text-field-disabled-text-color);
}

.kit-text-field:hover {
  background-color: var(--kit-text-field-hover-color);
}

.kit-text-field[select]:not([is-focused]):not([disabled]):hover {
  background-color: var(--kit-text-field-select-hover-color);
  border-color: var(--kit-text-field-select-hover-border-color);
  cursor: pointer;
}

.kit-text-field[is-focused]:not([disabled]):not([is-loading]) {
  background-color: var(--kit-text-field-active-bg-color);
  border-color: var(--kit-text-field-active-border-color);
}

.kit-text-field[is-invalid]:not([disabled]):not([is-loading]) {
  border-color: var(--kit-text-field-invalid-border-color);
  animation: shake 0.5s linear;
}

.kit-text-field[is-loading] {
  background-color: var(--kit-text-field-loading-bg-color);
  animation: loading 1s linear infinite;
  background-image: linear-gradient(
    90deg,
    rgba(9, 30, 66, 0.08) 30%,
    rgba(9, 30, 66, 0.16) 50%,
    rgba(9, 30, 66, 0.08) 70%
  );
  background-size: 300%;
  background-position: 0% 0%;
  pointer-events: none;
}

@keyframes loading {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}

@keyframes shake {
  8%,
  41% {
    transform: translateX(-10px);
  }
  25%,
  58% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
  92% {
    transform: translateX(5px);
  }
  0%,
  100% {
    transform: translateX(0);
  }
}
</style>
