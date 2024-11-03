<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";


const store = useStore();
const router= useRouter();

// Computed property to get the cart data from Vuex state
const cartItems = computed(() => store.state.product.cart);

// Function to remove an item from the cart
const removeFromCart = (index) => {
    store.commit("product/removeFromCart", index);
};

const goToCheckout = () => {
    router.push("/product/checkout");
};

</script>

<template>
    <div class="container-fluid bg-light">
        <div v-if="cartItems.length === 0" class="d-flex flex-column align-items-center justify-content-center p-5">
            <img src="../../assets/images/cart.png" alt="cart" width="150">
            <h2>Your cart is empty</h2>
            <router-link to="/products" class="text-teal text-decoration-none fs-5">Continue Shopping</router-link>
        </div>
        <div class="p-5" v-else>
            <h2>Shopping Cart</h2>
            <div class="p-3 m-3 float-end border border-3 rounded-3">
                <div class="d-flex">
                    <div class="me-3">
                        <h4>Order Summary</h4>
                        <p>{{ cartItems.length }} Items</p>
                    </div>
                </div>
                <button type="button" class="btn btn-teal w-100" @click="goToCheckout">Checkout ({{ cartItems.length }})</button>
            </div>
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item my-3 w-75 bg-white">
                <div class="row">
                    <div class="col-md-4">
                        <img :src="item.imageLink" :alt="item.name" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8 d-flex p-3">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">Price: Rp. {{ item.price }}</p>
                            <p class="card-text">Size: {{ item.size }}</p>
                            <p class="card-text">Color: {{ item.color }}</p>
                            <p class="card-text"><small class="text-muted">Condition: Very Good</small></p>
                        </div>
                        <p @click="removeFromCart(index)" class="text-danger me-3 cursor-pointer fs-5 fw-semibold">
                            Remove</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.cart-item {
    border: 1px solid #ddd;
    border-radius: 10px;
}

.cart-item img {
    max-height: 200px;
    object-fit: cover;
}
</style>
