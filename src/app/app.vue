<template>
  <h3 @click="name='宁皓网'"> {{ name }} </h3>
</template>

<script>
export default {
  setup () {
    const name = 'NINGHAO';

    return {
      name
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
