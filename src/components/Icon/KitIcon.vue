<template>
  <FontAwesomeIcon class="kit-icon" :icon="icon" :title="title" :size="iconSize" :style="style" />
</template>
<script>
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
import Vue from 'vue'
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

export default Vue.extend({
  name: 'KitIcon',
  components: { FontAwesomeIcon },
  props: {
    type: {
      type: String,
      required: true
    },
    iconStyle: {
      type: String,
      default: 'solid',
      required: false,
      validator(v) {
        return ['solid', 'regular', 'brands'].includes(v)
      }
    },
    size: {
      type: String,
      default: '1x',
      required: false
    },
    color: {
      type: String,
      default: 'inherit'
    },
    bgColor: {
      type: String,
      default: 'transparent',
      required: false
    },
    margin: {
      type: String,
      default: '0px',
      required: false
    },
    padding: {
      type: String,
      default: '0px',
      required: false
    },
    title: {
      type: String,
      default: undefined,
      required: false
    }
  },
  computed: {
    icon() {
      return {
        prefix: prefix(this.iconStyle),
        iconName: this.type
      }
    },
    style() {
      /** @type CSSStyleDeclaration */
      const style = this.$props.style || {}
      if (this.color && this.color !== 'inherit') {
        style.color = this.color
      }
      if (this.padding) {
        style.padding = this.padding
      }
      if (this.margin) {
        style.margin = this.margin
      }
      if (this.bgColor && this.bgColor !== 'transparent') {
        style.backgroundColor = this.bgColor
      }
      if (/(em|px)$/.test(this.size)) {
        style.fontSize = this.size
      }
      return style
    },
    iconSize() {
      if (/(em|px)$/.test(this.size)) {
        return '1x'
      }
      return this.size
    }
  }
})
</script>
