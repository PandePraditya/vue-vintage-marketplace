<template>
    <div class="col-10 w-50 bg-white border rounded-3 p-3">
        <p class="text-secondary">Add New Products</p>
        <form class="py-3" @submit.prevent="addNewProduct">
            <div class="mb-3">
                <base-input
                    type="file"
                    identity="productImage"
                    label="Product Image"
                    @input="checkImage">
                </base-input>
                <div>
                    <img :src="productData.imageLink" :alt="productData.name" class="rounded-2" width="200">
                </div>
            </div>
            <div class="mb-3">
                <base-input
                    type="text" 
                    identity="name" 
                    placeholder="Enter product name" 
                    label="Product Name"
                    v-model="productData.name">
                </base-input>
            </div>
            <div class="mb-3">
                <base-text-area
                    type="text" 
                    identity="description" 
                    placeholder="Enter product description" 
                    label="Product Description"
                    v-model="productData.description">
                </base-text-area>
            </div>
            <div class="mb-3">
                <base-input
                    type="text" 
                    identity="category" 
                    placeholder="Enter product category" 
                    label="Product Category"
                    v-model="productData.category">
                </base-input>
            </div>
            <div class="mb-3">
                <base-input
                    type="text" 
                    identity="size" 
                    placeholder="Enter product size" 
                    label="Product Size"
                    v-model="productData.size">
                </base-input>
            </div>
            <div class="mb-3">
                <base-input
                    type="text" 
                    identity="color" 
                    placeholder="Enter product color" 
                    label="Product Color"
                    v-model="productData.color">
                </base-input>
            </div>
            <div class="mb-3">
                <base-input
                    type="number" 
                    identity="price" 
                    placeholder="Enter product price" 
                    label="Product Price"
                    v-model="productData.price">
                </base-input>
            </div>
            <div class="mb-3">
                <base-input
                    type="number" 
                    identity="shippingPrice" 
                    placeholder="Enter product shipping" 
                    label="Shipping Price"
                    v-model="productData.shipping">
                </base-input>
            </div>
            <div class="mb-3">
                <base-select
                    label="Condition"
                    identity="condition"
                    :data="['Very Good', 'Good', 'Average', 'Second', 'Bad',]" 
                    v-model="productData.condition">
                </base-select>
            </div>
            <base-button class="btn btn-teal float-end">Add Product</base-button>
        </form>
    </div>
</template>

<script setup>
    import BaseInput from '../ui/BaseInput.vue';
    import BaseTextArea from '../ui/BaseTextArea.vue';
    import BaseButton from '../ui/BaseButton.vue';
    import BaseSelect from '../ui/BaseSelect.vue';
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const productData = ref({
        name: "",
        imageLink: "",
        description: "",
        category: "",
        size: "",
        color: "",
        price: "",
        shipping: "",
        condition: [],
    });

    const checkImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load", () => {
            productData.value.imageLink = reader.result;
        });
    };

    const addNewProduct = () => {
        store.dispatch("product/addNewProduct", productData.value);
        router.push("/");
    };
</script>