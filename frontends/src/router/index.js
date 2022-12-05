import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Faqs from "../views/Faqs.vue";
import Products from "../views/Products.vue";
import Places from "../views/Places.vue";

// Products
import Mega645 from "../views/Product/Mega645.vue";
import Power655 from "../views/Product/Power655.vue";

// Results
import Mega645Result from "../views/Result/Mega645Result.vue";
import Power655Result from "../views/Result/Power655Result.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
    {path: '/faqs', component: Faqs},
    {path: '/products', component: Products},
    {path: '/places', component: Places},

    // Products
    {path: '/products/mega645', component: Mega645},
    {path: '/products/power655', component: Power655},  

    // Results
    {path: '/results/mega645-result', component: Mega645Result},
    {path: '/results/power655-result', component: Power655Result},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;