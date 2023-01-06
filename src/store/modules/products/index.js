// import router from '../../../router/index.js'
export default {
    namespaced: true,
    state: {
        products: [
            {
                code: '001',
                name: 'Product1',
                price: '2$',
                // category: 'Good',
            },
            {
                code: '002',
                name: 'Product2',
                price: '3$',
                // category: 'Best',
            },
            {
                code: '003',
                name: 'Product3',
                price: '2$',
            }
        ],
        proCategories: [
            {
                category: 'Good'
            },
            {
                category: 'Better'
            },
            {
                category: 'Best'
            }
        ]
    },
    getters: {
        getProduct(state){
            return state.products;
        },
        getProCategories(state){
            return state.proCategories;
        }
    },
    mutations: {
        
    },
    actions: {

    }
}