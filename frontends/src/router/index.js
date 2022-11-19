import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Faqs from "../views/Faqs.vue";
import Results from "../views/Results.vue";
import Products from "../views/Products.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/faqs', component: Faqs},
    {path: '/results', component: Results},
    {path: '/products', component: Products},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;