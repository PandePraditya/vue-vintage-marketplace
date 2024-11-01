<script setup>
import OtherProduct from "./OtherProduct.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const productDetail = computed(() => {
    return store.state.product.productDetail
});
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
                    <a href="#" class="btn btn-outline-teal w-100 text-decoration-none">Add to cart</a>
                </div>
                <div class="d-flex align-items-center border border-2 rounded-3 p-2 my-5">
                    <i class="fa-solid fa-user me-2 fs-5"></i>
                    <div class="d-flex flex-column align-items-center">
                        <h5>name</h5>
                        <p class="text-secondary">date</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <other-product></other-product>
    </div>
</template>