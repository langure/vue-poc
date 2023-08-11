<template>
  <div>
    
    <div>
    <h1>Featured Products</h1>
    <ul v-if="loading">
      <li>Loading...</li>
    </ul>
    <ul v-else>
      <li v-for="product in featuredProducts" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>

  </div>
</template>

<script>
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
          console.log(response.data);
          this.featuredProducts = response.data;
        })
        .catch(error => {
          console.error('Error fetching featured products:', error);
        })
        .finally(() => {
          this.loading = false;
        });
  }// methods   

} // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
