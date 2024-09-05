import SvgIcon from './SvgIcon/index.vue'
import ImgCorpper from './imgCorpper/index.vue'
import RedPoint from './redPoint/index.vue'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = {
  SvgIcon,
  ImgCorpper,
  RedPoint,
}
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
