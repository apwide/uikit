#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
UI_DIR=$(dirname "${SCRIPT_DIR}")
SRC_DIR="${UI_DIR}/src"

VUE_MODE_OPTIONS=$(grep -rE "<script\\s*(?lang=\"ts\")?\\s*>" ${SRC_DIR} | wc -l)
VUE_MODE_COMPOSITION=$(grep -rE "<script.*setup" ${SRC_DIR} | wc -l)

SCRIPT_JS=$(find ${SRC_DIR} -name "*.js" | wc -l)
SCRIPT_TS=$(find ${SRC_DIR} -name "*.ts" | wc -l)

VUE_JS=$(grep -rE "<script\\s*>" ${SRC_DIR} | wc -l)
VUE_TS=$(grep -rE "<script.*lang" ${SRC_DIR} | wc -l)

UI_FW_UIKIT=$(grep -rE "<Kit" ${SRC_DIR} | wc -l)
UI_FW_AUI_TABLE=$(grep -rE "class=\"aui\"" ${SRC_DIR} | wc -l)
UI_FW_AUI_ITEM=$(grep -rE "aui-(group|item)" ${SRC_DIR} | wc -l)
UI_FW_AUI_PAGE=$(grep -rE "aui-(page|nav)" ${SRC_DIR} | wc -l)
UI_FW_AUI_ICON=$(grep -rE "aui-(icon)" ${SRC_DIR} | wc -l)

# lines of code

echo """
 Looking into: ${SRC_DIR}

 Vue Mode:
 - Options: ${VUE_MODE_OPTIONS}
 - Composition: ${VUE_MODE_COMPOSITION}

 Vue Language:
 - JS: ${VUE_JS}
 - TS: ${VUE_TS}

 Script Language:
 - JS: ${SCRIPT_JS}
 - TS: ${SCRIPT_TS}

 UI FW:
 - uikit: ${UI_FW_UIKIT}
 - aui-table: ${UI_FW_AUI_TABLE}
 - aui-group/item: ${UI_FW_AUI_ITEM}
 - aui-page/nav: ${UI_FW_AUI_PAGE}
 - aui-icon: ${UI_FW_AUI_ICON}
"""
