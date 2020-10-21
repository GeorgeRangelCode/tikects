// importa modulos de Vue.js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Librería para realizar peticiones endpoints REST
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

// Importa los componentes de Vue.js
import App from "./App.vue";
import DisplayTikect from "./components/DisplayTikect.vue";
import CreateTikect from "./components/CreateTikect.vue";
import EditTikect from "./components/EditTikect.vue";

// Se definen las rutas de de la aplicación
const routes = [
  {
    name: "DisplayTikect",
    path: "/",
    component: DisplayTikect,
  },
  {
    name: "CreateTikect",
    path: "/create/tikect",
    component: CreateTikect,
  },
  {
    name: "EditTikect",
    path: "/edit/tikect/:id",
    component: EditTikect,
  },
];

// Configuración del enrutador de la aplicación
const router = new VueRouter({ mode: "history", routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");
