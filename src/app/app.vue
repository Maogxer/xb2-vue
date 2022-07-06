<template>
  <h3 @click="changeName"> {{ name }} </h3>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');

    const changeName = () => {
      name.value = '宁皓网';
    };

    // 生命周期
    onMounted(() => {
      console.log('mounted')
    });

    // 监视的数据
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });


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
