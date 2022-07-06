<template>
  <h3 @click="changeName"> {{ name }} </h3>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');

    const changeName = () => {
      name.value = '宁皓网'
    }

    return {
      name,
      changeName
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
