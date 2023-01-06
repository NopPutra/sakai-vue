import { createStore } from "vuex";
import productsModules from './modules/products/index.js';
const store = createStore({
    modules: {
        products:productsModules,
    }
});
export default store;