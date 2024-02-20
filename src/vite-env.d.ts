/// <reference types="vite/client" />
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const componentOptions: DefineComponent<{}, {}, any>;
  export default componentOptions;
}
