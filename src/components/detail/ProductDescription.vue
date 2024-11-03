<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const userData = computed(() => {
    return store.state.auth.userLogin
});
const productDetail = computed(() => {
    return store.state.product.productDetail
});

const showModal = ref(false);
const handleAddToCart = () => {
    if (userData.value) {
        store.dispatch("product/addToCart", productDetail.value);
        showModal.value = true;
        console.log(productDetail.value);
    } else {
        alert("Data failed to add to cart");
    }
};

const goToHome = () => {
    router.push("/");
};

const goToCart = () => {
    router.push("/product/cart");
};
</script>

<template>
    <div class="row">
        <div class="d-flex justify-content-center">
            <!-- Picture -->
            <div class="col-8 d-flex px-4">
                <img :src="productDetail.imageLink" :alt="productDetail.name" class="w-100">
            </div>
            <!-- Detail -->
            <div class="col-4 border rounded-1 p-3">
                <div class="d-flex justify-content-between">
                    <h3>Rp. {{ productDetail.price }}</h3>
                    <h3>♡</h3>
                </div>
                <div class="border-bottom">
                    <p class="text-dark mb-0">{{ productDetail.name }}</p>
                    <ul type="none" class="d-flex text-secondary margin-li" style="margin-left: -30px;">
                        <li>{{ productDetail.size }}</li>
                        <li class="opacity-25">•</li>
                        <li>Very Good</li>
                        <li class="opacity-25">•</li>
                        <li>Denpasar</li>
                    </ul>
                </div>
                <div>
                    <h6 class="text-secondary py-3">Item Description</h6>
                    <p>Size XL but fits more like M Looser fit has a few minor marks (Pictured)</p>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                        <p>Categories</p>
                        <p>{{ productDetail.category }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Size</p>
                        <p>{{ productDetail.size }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Condition</p>
                        <p>Very Good</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Color</p>
                        <p>{{ productDetail.color }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Uploaded</p>
                        <p>5 Hours Ago</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Shipping</p>
                        <p>{{ productDetail.shipping }}</p>
                    </div>
                </div>
                <div class="fw-semibold">
                    <a href="#" class="btn btn-teal w-100 text-decoration-none mb-3">Buy Now</a>
                    <button @click="handleAddToCart" class="btn btn-outline-teal w-100 text-decoration-none">Add to
                        cart</button>
                </div>
                <div class="d-flex align-items-center border border-2 rounded-3 p-2 my-5">
                    <i class="fa-solid fa-user mx-2 fs-5" v-if="!userData.imageLink"></i>
                    <img :src="userData.imageLink" alt="image" class="rounded-circle mx-2" width="50" height="50"
                        v-else>
                    <div class="d-flex flex-column align-items-center">
                        <h5>{{ userData.username }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="custom-modal-overlay">
        <div class="custom-modal">
            <div class="p-3 text-center">
                <!-- Modal content goes here -->
                <img src="../../assets/images/addCart.png" alt="Success">
                <h4>You have successfully added this item to cart</h4>
            </div>
            <div class="custom-modal-footer d-flex flex-column justify-content-center">
                <button type="button" class="teal-btn-outline w-75" @click="goToHome">Continue Shopping</button>
                <button type="button" class="teal-btn w-75" @click="goToCart">Go to cart</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Overlay to darken the background */
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