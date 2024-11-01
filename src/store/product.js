import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            products: [],
            productDetail: [],
        }
    },
    getters: {},
    mutations: {
        setProductData(state, payload) {
            state.products = payload;
        },
        setProductDetail(state, payload) {
            state.productDetail = payload;
        },
    },
    actions: {
        // get recipe data from database
        async getProductData({ commit }) {
            try {
                const { data } = await axios.get(
                    "https://market-place-vintage-default-rtdb.firebaseio.com/products.json"
                )
                const arr = [];
                for (let key in data) {
                    arr.push({ id: key, ...data[key] });
                }
                commit("setProductData", arr);
            } catch(err) {
                console.log(err);
            }
        },
        // get recipe detail from database as payload
        async getProductDetail({ commit }, payload) {
            try {
                const { data } = await axios.get(
                    `https://market-place-vintage-default-rtdb.firebaseio.com/products/${payload}.json`
                )
                commit("setProductDetail", data);
            } catch(err) {
                console.log(err);
            }
        },
    },
}