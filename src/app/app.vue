<template>
  <h3 @click="name='宁皓网'"> {{ name }} </h3>
  <div @click="user.name='WANGHAO'">{{ user.name }}</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');

    const user = reactive({
      name: '王皓'
    });

    console.log(name.value);

    console.log(user);

    return {
      name,
      user
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
