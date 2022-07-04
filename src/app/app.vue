<template>
  <h3 @click="name='宁皓网'"> {{ name }} </h3>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');
    console.log(name.value);

    return {
      name
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
