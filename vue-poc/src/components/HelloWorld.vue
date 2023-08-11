<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>

    <h1>Featured Products</h1>
    <ul v-if="loading">
      <li>Loading...</li>
    </ul>
    <ul v-else>

    <li v-for="(product, index) in featuredProducts.products" :key="index">
    <ul>{{ product.id }} </ul>
    <ul>{{ product.name }} </ul>
    <ul>{{ product.sku }} </ul>
    <HR></HR>
    </li>
    </ul>
  </div>


  </div>
</template>

<script>
// Import this service to make API calls
import apiService from '@/services/services';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      loading: true,
      featuredProducts: []
    }
  },
  mounted() {
    this.getFeaturedProducts();
  },// mounted
  methods: {
    getFeaturedProducts() {
      apiService.getFeaturedProducts()
        .then(response => {
          console.log('Featured products:', response.data);
          this.featuredProducts = response.data;
        })
        .catch(error => {
          console.error('Error fetching featured products:', error);
        })
        .finally(() => {
          this.loading = false;
        });
  }// get featured products   
} // methods
}
</script>
