<template>
  <h3 @click="name='宁皓网'"> {{ name }} </h3>
  <div @click="username='WANGHAO'">{{ username }}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
  setup () {
    const name = ref('NINGHAO');

    const user = reactive({
      username: '王皓'
    });

    const { username } = toRefs(user);

    console.log(name.value);

    console.log(username);

    return {
      name,
      username
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
