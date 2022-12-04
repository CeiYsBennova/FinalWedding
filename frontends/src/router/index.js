import { createRouter,createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Faqs from "../views/Faqs.vue";
import Products from "../views/Products.vue";
import Places from "../views/Places.vue";

// Products
import AllProducts from "../views/Product/AllProducts.vue";
import Max3d from "../views/Product/Max3d.vue";
import Max3dPro from "../views/Product/Max3dPro.vue";
import Mega645 from "../views/Product/Mega645.vue";
import Power655 from "../views/Product/Power655.vue";
import ProductShop from "../views/Product/ProductShop.vue";

// Results
import Max3dResult from "../views/Result/Max3dResult.vue";
import Max3dProResult from "../views/Result/Max3dProResult.vue";
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
    {path: '/products/all-products', component: AllProducts},
    {path: '/products/max3d', component: Max3d},
    {path: '/products/max3d-pro', component: Max3dPro},
    {path: '/products/mega645', component: Mega645},
    {path: '/products/power655', component: Power655},
    {path: '/products/product-shop', component: ProductShop},   

    // Results
    {path: '/results/max3d-result', component: Max3dResult},
    {path: '/results/max3d-pro-result', component: Max3dProResult},
    {path: '/results/mega645-result', component: Mega645Result},
    {path: '/results/power655-result', component: Power655Result},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;