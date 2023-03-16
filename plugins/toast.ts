import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toasity, {
    autoClose: 7000,
    newestOnTop: true,
  } as ToastContainerOptions);
});
