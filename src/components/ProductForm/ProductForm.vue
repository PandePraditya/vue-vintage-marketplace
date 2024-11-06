<template>
    <div class="col-10 w-50 bg-white border rounded-3 p-3">
        <p class="text-secondary">Add New Products</p>
        <form class="py-3" @submit.prevent="addNewProduct">
            <div class="mb-3">
                <base-input
                    class="text-white"
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

    <!-- Modal -->
    <div v-if="showModal" class="custom-modal-overlay">
            <div class="custom-modal">
                <div class="p-3 text-center">
                    <!-- Modal content goes here -->
                    <img src="../../assets/images/box-success.png" alt="Box Success" class="my-2" width="200">
                    <h4>You have successfully added this product</h4>
                    <p>Thank you for adding this product onto our website</p>
                </div>
                <div class="custom-modal-footer justify-content-center">
                    <button type="button" class="teal-btn w-75" @click="goToHome">Go to home page</button>
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

<script setup>
    import BaseInput from '../ui/BaseInput.vue';
    import BaseTextArea from '../ui/BaseTextArea.vue';
    import BaseButton from '../ui/BaseButton.vue';
    import BaseSelect from '../ui/BaseSelect.vue';
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const props = defineProps({
        isEdit: { type: Boolean, default: false },
        detailData: { type: Object, default: () => ({}) },
    })

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

    const showModal = ref(false);
    const addNewProduct = async () => {
        if (props.isEdit) {
            await store.dispatch("product/updateProduct", {
                id: router.params.id,
                newRecipe: productData.value,
            });
        } else {
            await store.dispatch("product/addNewProduct", productData.value);
        }
        showModal.value = true;
        // store.dispatch("product/addNewProduct", productData.value);
        // showModal.value = true;
    };

    onMounted(() => {
        if (props.isEdit) {
            productData.value = store.state.product.productDetail;
            console.log(productData.value);
        } else {
            console.log(productData.value);
        }
    });

    const goToHome = () => {
        router.push("/");
    };
</script>