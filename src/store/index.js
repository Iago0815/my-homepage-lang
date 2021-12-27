import { createStore } from "vuex";

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

      console.log(state.path);
    },
  },

  getters: {
    currentLanguage(state) {
      return state.language;
    },
    getRouteForHeader(state) {
      if (state.path) {
        if (state.path.indexOf("en") > 0) {
          return "en-header";
        } else if (state.path.indexOf("de") > 0) {
          return "de-header";
        } else if (state.path.indexOf("es") > 0) {
          return "es-header";
        }
      }
    },

    getRouteForFooter(state) {
      if (state.path) {
        if (state.path.indexOf("en") > 0) {
          return "en-footer";
        } else if (state.path.indexOf("de") > 0) {
          return "de-footer";
        } else if (state.path.indexOf("es") > 0) {
          return "es-footer";
        }
      }
    },
  },
});

export default store;
