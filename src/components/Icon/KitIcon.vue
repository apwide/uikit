<template>
  <FontAwesomeIcon class="kit-icon" :icon="icon" :title="title" :size="iconSize" :style="style" />
</template>
<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAtlassian as brandsAtlassian,
  faGithub as brandsGithub,
  faMicrosoft as brandsMicrosoft,
  faSlack as brandsSlack
} from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faAt,
  faCalendar,
  faCalendarAlt,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faCog,
  faDownload,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faForward,
  faHome,
  faInfoCircle,
  faPen,
  faPlug,
  faPlus,
  faPlusCircle,
  faQuestionCircle,
  faQuestion,
  faRobot,
  faSearch,
  faSearchMinus,
  faSearchPlus,
  faShareAlt,
  faShareAltSquare,
  faSlidersH,
  faSyncAlt,
  faTable,
  faTh,
  faThList,
  faTimes,
  faTrash,
  faUndo,
  faUser,
  faUsers,
  faUsersCog,
  faExclamationCircle,
  faCloud,
  faCloudUploadAlt,
  faLock,
  faExclamationTriangle,
  faLink,
  faUnlink,
  faStar as faStarSolid,
  faLongArrowAltLeft,
  faGripVertical,
  faHistory,
  faFilter,
  faCheckCircle,
  faCheckSquare,
  faCompress,
  faEnvelope,
  faExchangeAlt,
  faExpand,
  faGripLines,
  faPlay,
  faSquare,
  faStream,
  faTimesCircle,
  faColumns,
  faDotCircle,
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import { computed, getCurrentInstance } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMinusSquare,
  faPlusSquare,
  faStar,
  faCopy,
  faClone,
  faEye as regularEye,
  faEyeSlash as regularEyeSlash,
  faQuestionCircle as regularQuestionCircle,
  faCalendarAlt as regularCalendarAlt,
  faTimesCircle as regularTimesCircle,
  faCheckSquare as regularCheckSquare,
  faSquare as regularSquare
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faLink,
  faUnlink,
  regularTimesCircle,
  regularCheckSquare,
  regularSquare,
  regularEye,
  regularEyeSlash,
  regularQuestionCircle,
  brandsAtlassian,
  brandsGithub,
  brandsMicrosoft,
  brandsSlack,
  faClone,
  faLock,
  faExclamationTriangle,
  faArrowDown,
  faEdit,
  faStar,
  faMinusSquare,
  faPlusSquare,
  faChevronDown,
  faSyncAlt,
  faPlus,
  faPen,
  faArrowUp,
  faUndo,
  faStarSolid,
  faExternalLinkAlt,
  faExclamationCircle,
  faEllipsisH,
  faShareAlt,
  faPlusCircle,
  faCopy,
  faLongArrowAltLeft,
  faChevronRight,
  faSearchPlus,
  faChevronLeft,
  faDownload,
  faSearch,
  faSearchMinus,
  faTimes,
  faShareAltSquare,
  faTrash,
  faInfoCircle,
  faHome,
  faAngleDown,
  faAngleRight,
  faCog,
  faRobot,
  faPlug,
  faSlidersH,
  faUsersCog,
  faUser,
  faUsers,
  faAt,
  faQuestionCircle,
  faQuestion,
  faCloud,
  faCloudUploadAlt,
  faCalendar,
  faThList,
  faEye,
  faEyeSlash,
  faTable,
  faTh,
  faCalendarAlt,
  faCheck,
  faStar,
  faGripVertical,
  faHistory,
  faFilter,
  faCheckCircle,
  faCheckSquare,
  faCompress,
  faEnvelope,
  faExchangeAlt,
  faExpand,
  faGripLines,
  faPlay,
  faSquare,
  faStream,
  faTimesCircle,
  regularCalendarAlt,
  faColumns,
  faDotCircle,
  faVideo,
  faForward
)

function prefix(/** @type: string */ style) {
  if (style === 'solid') {
    return 'fas'
  }
  if (style === 'brands') {
    return 'fab'
  }
  if (style === 'regular') {
    return 'far'
  }
  return 'unknown'
}

type Props = {
  type: string
  iconStyle?: 'solid' | 'regular' | 'brands'
  size?: string
  color?: string
  bgColor?: string
  margin?: string
  padding?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconStyle: 'solid',
  size: '1x',
  color: 'inherit',
  bgColor: 'transparent',
  margin: '0px',
  padding: '0px'
})

const icon = computed(() => {
  return {
    prefix: prefix(props.iconStyle),
    iconName: props.type
  }
})

const instance = getCurrentInstance()

const style= computed(() => {
  /** @type CSSStyleDeclaration */
  const style = instance.proxy.$props.style || {}
  if (props.color && props.color !== 'inherit') {
    style.color = props.color
  }
  if (props.padding) {
    style.padding = props.padding
  }
  if (props.margin) {
    style.margin = props.margin
  }
  if (props.bgColor && props.bgColor !== 'transparent') {
    style.backgroundColor = props.bgColor
  }
  if (/(em|px)$/.test(props.size)) {
    style.fontSize = props.size
  }
  return style
})

const iconSize = computed(() => {
  if (/(em|px)$/.test(props.size)) {
    return '1x'
  }
  return props.size
})
</script>
