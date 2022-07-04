<template>
  <h3 @click="name='宁皓网'"> {{ name }} </h3>
</template>

<script>
export default {
  data () {
    return {
      name: 'NINGHAO',
    };
  },

  created () {
    console.log(this.$data)
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
