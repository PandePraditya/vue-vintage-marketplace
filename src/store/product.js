import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            products: [],
            productDetail: {},
            cart: [],
        }
    },
    getters: {
        cartItems(state) {
            return state.cart;
        },
    },
    mutations: {
        setProductData(state, payload) {
            state.products = payload;
        },
        setProductDetail(state, payload) {
            state.productDetail = payload;
        },
        // add new product
        setNewProduct(state, payload) {
            state.products.push(payload);
        },

        // Transactions
        setTransactions(state, payload) {
            state.transactions = payload;
        },
        setTransactionDetail(state, payload) {
            state.transactionDetail = payload;
        },
        setNewTransaction(state, payload) {
            state.transactions.push(payload);
        },

        // add product to cart
        addToCart(state, payload) {
            state.cart.push(payload);
        },
        // remove product from cart
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        clearCart(state) {
            state.cart = [];
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
        // add new product to database
        async addNewProduct({ commit, rootState }, payload) {
            const newData = {
                ...payload,
                username: rootState.auth.userLogin.username,
                createdAt: Date.now(),
                likes: ["null"],
                userId: rootState.auth.userLogin.userId,
            }
            try {
                const { data } = await axios.post(
                    `https://market-place-vintage-default-rtdb.firebaseio.com/products.json?auth=${rootState.auth.token}`, newData
                );
                commit("setNewProduct", { id:  data.name, ...newData });
            } catch(err) {
                console.log(err);
            }
        },
        // Update product
        async updateProduct({ dispatch, rootState }, { id, newProduct }) {
            console.log(newProduct);
            try {
                await axios.put(
                    `https://market-place-vintage-default-rtdb.firebaseio.com/products/${id}.json?auth=${rootState.auth.token}`, newProduct
                );
                await dispatch("getProductData");
            } catch(err) {
                console.log(err);
            }
        },
        // Delete product
        async deleteProduct({ dispatch, rootState}, payload) {
            try {
                await axios.delete(
                    `https://market-place-vintage-default-rtdb.firebaseio.com/products/${payload}.json?auth=${rootState.auth.token}`
                );
                await dispatch("getProductData");
            } catch(err) {
                console.log(err);
            }
        },
        // add product to cart
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        async sendTransactionData({ commit }, payload) {
            try {
                await axios.post(
                    "https://market-place-vintage-default-rtdb.firebaseio.com/transactions.json", 
                    payload
                );
                commit("setNewTransaction", payload);
                commit("clearCart");
                console.log("Transaction data sent successfully:", payload);
            } catch (err) {
                console.log("Error sending transaction data:", err);
            }
        },
        async getTransactionsData({ commit }) {
            try {
                const { data } = await axios.get(
                    "https://market-place-vintage-default-rtdb.firebaseio.com/transactions.json"
                );
                const arr = [];
                for (let key in data) {
                    arr.push({ id: key, ...data[key] });
                }
                commit("setTransactions", arr);
            } catch (err) {
                console.log(err);
            }
        },
        async getTransactionDetail({ commit }, payload) {
            try {
                const { data } = await axios.get(
                    `https://market-place-vintage-default-rtdb.firebaseio.com/transactions/${payload}.json`
                );
                commit("setTransactionDetail", data);
            } catch (err) {
                console.log(err);
            }
        },
    },
}