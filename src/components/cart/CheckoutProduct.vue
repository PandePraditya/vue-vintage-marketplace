<template>
    <div class="container-fluid bg-light p-5 d-flex justify-content-center">
        <div class="w-50">
            <div class="bg-white rounded-3 p-3">
                <p class="fs-5 text-secondary">Order</p>
                <div v-for="(item, index) in cartItems" :key="index"
                    class="checkout-item my-2 w-50 bg-white p-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img :src="item.imageLink" :alt="item.name" class="img-fluid rounded-start" width="150px">
                        </div>
                        <div class="col-md-8 d-flex">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text">Size: {{ item.size }}</p>
                                <p class="card-text">Price: Rp. {{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-3 p-3 my-3">
                <p class="fs-5 text-secondary">Address</p>
                <div class="d-flex align-items-center border border-1 rounded-3 p-3">
                    <i class="fa-solid fa-location-dot me-3"></i>
                    <p class="fw-semibold mt-3">PT. Timedoor Indonesia</p>
                </div>
            </div>
            <div class="bg-white rounded-3 p-3 my-3">
                <p class="fs-5 text-secondary">Delivery Details</p>
                <div class="border border-1 rounded-3 p-3">
                    <i class="fa-solid fa-shield me-3 d-inline"></i>
                    <p class="fw-semibold mt-3 d-inline">Fedex Express Shipping</p>
                    <p class="text-secondary">Rp. 20.000</p>
                    <p class="text-secondary"><i class="fa-solid fa-clock me-3"></i>Home delivery in 3-5 days</p>
                </div>
            </div>
            <div class="bg-white rounded-3 p-3 my-3">
                <p class="fs-5 text-secondary">Payment Method</p>
                <div class="border border-1 rounded-3 p-3">
                    <i class="fa-solid fa-credit-card me-3 d-inline"></i>
                    <p class="fw-semibold mt-3 d-inline">Visa Credit Card</p>
                    <p class="text-secondary">23/06/2023</p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column p-3 mx-3 bg-white rounded-3 w-25" style="max-height: 290px;">
            <p>Order Summary</p>
            <p class="d-flex justify-content-between">Order:<span>Rp. {{ totalCartPrice }}</span></p>
            <p class="d-flex justify-content-between">Protection Fee:<span>Rp. 20.000</span></p>
            <p class="border-bottom border-1 pb-2 d-flex justify-content-between">Shipping:<span>Rp. 20.000</span></p>
            <p class="pb-2 d-flex justify-content-between fw-semibold">Total Price:<span>Rp. 20.000</span></p>
            <button class="btn btn-teal" @click="confirmOrder">Confirm Order</button>
        </div>
    </div>

    <!-- Confirm Order Modal -->
    <div v-if="showModal" class="custom-modal-overlay">
        <div class="custom-modal">
            <div class="p-3 text-center">
                <!-- Modal content goes here -->
                <img src="../../assets/images/payment-success.png" alt="Success">
                <h4>Order placed successfully</h4>
            </div>
            <div class="custom-modal-footer d-flex flex-column justify-content-center">
                <button type="button" class="teal-btn-outline w-75" @click="goToProducts">Continue Shopping</button>
                <button type="button" class="teal-btn w-75" @click="goToHome">Open Main Page</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


const router = useRouter(); 
const store = useStore();
const showModal = ref(false);

// Computed property to get the cart data from Vuex state
const cartItems = computed(() => store.state.product.cart);


const totalCartPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + parseInt(item.price), 0);
});

const confirmOrder = () => {
    showModal.value = true;
};

const goToProducts = () => {
    router.push("/products");
};

const goToHome = () => {
    router.push("/");
};
</script>

<style scoped>
.checkout-item {
    border-bottom: 1px solid #ddd;
}

.checkout-item img {
    max-height: 200px;
    object-fit: cover;
}

.custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

/* Modal box styling */
.custom-modal {
    width: 90%;
    max-width: 500px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease;
}

.custom-modal-footer {
    padding: 16px;
    display: flex;
    align-items: center;
}

.custom-modal-footer {
    border-top: 1px solid #ddd;
}

/* Button styles */
.teal-btn {
    padding: 8px 16px;
    margin: 4px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: #099497;
    color: #fff;
}

.teal-btn:hover {
    background-color: #fff;
    border: 1px solid #099497;
    color: #099497;
}

.teal-btn-outline {
    padding: 8px 16px;
    margin: 4px;
    border: 1px solid #099497;
    border-radius: 6px;
    cursor: pointer;
    background-color: #fff;
    color: #099497;
}

.teal-btn-outline:hover {
    background-color: #099497;
    color: #fff;
}

/* Animation for modal */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>