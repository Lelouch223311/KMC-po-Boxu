<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="product-list">
            <div v-for="product in products" :key="product.id" class="product-card">
                <!-- <img src="https://i.dummyjson.com/data/products/" alt="product image" /> -->

                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <img :src="images" alt="product image">
                <p><strong>Name: </strong> {{ product.name }}</p>
            </div>

            <div v-for="product in products" :key="product.title">
                <!-- <p>name: {{  }}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "ProductList",
    setup() {
        const title = ref("Product List");
        const products = ref([]);
        products.name = fetch("https://dummyjson.com/product/1")
        const getProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                products.value = data; console.log(data)
            }
            catch (error) { console.error("Error fetching products:", error); }
        };
        getProducts();
        return { title, products };
    },
    methods: { images: 'https://i.dummyjson.com/data/products/1/1.jpg' },
};

</script>

   
<style scoped>
img {
    display: flex;
    width: 100%;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.product-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    width: 100%;
    max-width: 250px;
}
</style>








