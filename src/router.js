import { createRouter, createWebHistory } from "vue-router";

import EnHome from "./components/lang/en/EnHome.vue";
import EsHome from "./components/lang/es/EsHome.vue";
import DeHome from "./components/lang/de/DeHome.vue";

import EnProjects from "./components/lang/en/EnProjects.vue";
import EsProjects from "./components/lang/es/EsProjects.vue";
import DeProjects from "./components/lang/de/DeProjects.vue";

import EnBlog from "./components/lang/en/EnBlog.vue";
import EsBlog from "./components/lang/es/EsBlog.vue";
import DeBlog from "./components/lang/de/DeBlog.vue";

import EnDsign from "./components/lang/en/EnDsign.vue";
import EsDsign from "./components/lang/es/EsDsign.vue";
import DeDsign from "./components/lang/de/DeDsign.vue";

import EnAbout from "./components/lang/en/EnAbout.vue";
import EsAbout from "./components/lang/es/EsAbout.vue";
import DeAbout from "./components/lang/de/DeAbout.vue";

import EnContact from "./components/lang/en/EnContact.vue";
import EsContact from "./components/lang/es/EsContact.vue";
import DeContact from "./components/lang/de/DeContact.vue";
import store from "./store";

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
    { path: "/en/dsign", name: "Design", component: EnDsign },
    { path: "/en/about", name: "About", component: EnAbout },
    { path: "/en/contact", name: "Contact", component: EnContact },

    { path: "/es/home", name: "inicio", component: EsHome },
    { path: "/es/projects", name: "projectos", component: EsProjects },
    { path: "/es/blog", name: "articulos", component: EsBlog },
    { path: "/es/dsign", name: "desino", component: EsDsign },
    { path: "/es/about", name: "acerca de", component: EsAbout },
    { path: "/es/contact", name: "Contacto", component: EsContact },

    { path: "/de/home", name: "start", component: DeHome },
    { path: "/de/projects", name: "projekte", component: DeProjects },
    { path: "/de/blog", name: "artikel", component: DeBlog },
    { path: "/de/dsign", name: "designd", component: DeDsign },
    { path: "/de/about", name: "ueber", component: DeAbout },
    { path: "/de/contact", name: "kontakt", component: DeContact },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

router.beforeEach((to, _, next) => {
  store.commit("SET_ROUTE", to);
  next();
});

export default router;
