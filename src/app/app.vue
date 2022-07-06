<template>
  <h3> {{ name }} </h3>
  <div>{{ errorMessage}}</div>
  <div v-for="post in posts"
       :key="post.id">
    {{post.title}} -
    <small>{{post.user.name}}</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      name: 'NINGHAO',
      posts: [],
      errorMessage: ''
    };
  },

  created () {
    axios.get('http://127.0.0.1:3000/posts1').then(response => {
      console.log(response);
      this.posts = response.data;
    }).catch(error => {
      console.log(error.message);
      console.log(error.response);

      this.errorMessage = error.message;
    })
  }
}
</script>
 
<style scoped>
@import './styles/app.css';
</style>
