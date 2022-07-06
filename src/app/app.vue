<template>
  <h3 @click="changeName"> {{ name }} </h3>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');

    const changeName = () => {
      name.value = '宁皓网';
    };

    // 生命周期
    onMounted(() => {
      console.log('mounted')
    })


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
