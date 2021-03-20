import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Timeline from "../views/Timeline.vue";
import Henry_VIII from "../views/Henry_VIII.vue";
import TheSixWives from "../views/TheSixWives.vue";
import Elizabeth_I from "../views/Elizabeth_I.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
  },
  {
    path: "/Henry_VIII",
    name: "Henry_VIII",
    component: Henry_VIII,
  },
  {
    path: "/TheSixWives",
    name: "The_Six_Wives",
    component: TheSixWives,
  },
  {
    path: "/Elizabeth_I",
    name: "Elizabeth_I",
    component: Elizabeth_I,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
