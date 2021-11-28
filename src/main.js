import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import Modal from "./components/UI/Modal.vue";

import App from "./App.vue";
import EnHome from "./components/lang/en/EnHome.vue";
import EsHome from "./components/lang/es/EsHome.vue";

import EnProjects from "./components/lang/en/EnProjects.vue";
import EsProjects from "./components/lang/es/EsProjects.vue";

import EnBlog from "./components/lang/en/EnBlog.vue";
import EsBlog from "./components/lang/es/EsBlog.vue";

import EnDesign from "./components/lang/en/EnDesign.vue";
import EsDesign from "./components/lang/es/EsDesign.vue";

import EnAbout from "./components/lang/en/EnAbout.vue";
import EsAbout from "./components/lang/es/EsAbout.vue";

import EnContact from "./components/lang/en/EnContact.vue";
import EsContact from "./components/lang/es/EsContact.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

const store = createStore({
  state() {
    return {
      language: "EN",
      path: null,
    };
  },
  actions: {
    switchLanguage(context, payload) {
      context.commit("switchLanguage", payload);
    },
  },

  mutations: {
    switchLanguage(state, payload) {
      state.language = payload.value;
    },
    SET_ROUTE(state, route) {
      state.path = route.fullPath;
    },
  },

  getters: {
    currentLanguage(state) {
      return state.language;
    },
    getRoute(state) {
      return state.path;
    },
  },
});

const app = createApp(App);

app.use(store);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/en/home" },

    { path: "/en/home", name: "Home", component: EnHome },
    {
      path: "/en/projects",
      name: "Projects",
      component: EnProjects,
      props: true,
    },
    { path: "/en/blog", name: "Blog", component: EnBlog },
    { path: "/en/design", name: "Design", component: EnDesign },
    { path: "/en/about", name: "About", component: EnAbout },
    { path: "/en/contact", name: "Contact", component: EnContact },

    { path: "/es/home", name: "inicio", component: EsHome },
    { path: "/es/projects", name: "projectos", component: EsProjects },
    { path: "/es/blog", name: "articulos", component: EsBlog },
    { path: "/es/design", name: "desino", component: EsDesign },
    { path: "/es/about", name: "acerca de", component: EsAbout },
    { path: "/es/contact", name: "Contacto", component: EsContact },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

router.beforeEach((to, _, next) => {
  store.commit("SET_ROUTE", to);
  next();
});

app.use(router);

app.component("modal-modal", Modal);

app.mount("#app");
