// vue-cropper.d.ts
declare module 'vue-cropper' {
  import { DefineComponent } from 'vue'

  export const VueCropper: DefineComponent<{
    img: String
    info: Boolean
    autoCrop: Boolean
    autoCropWidth: Number
    autoCropHeight: Number
    fixedBox: Boolean
    outputType: String
  }> & {
    changeScale: (scale: number) => void
    rotateLeft: () => void
    rotateRight: () => void
  }
}
