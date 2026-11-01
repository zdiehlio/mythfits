import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";

export { site } from "./content/site.js";

export function render() {
  return renderToString(createSSRApp(App));
}
