<template>
  <h3> {{ name }} </h3>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      name: 'NINGHAO',
    };
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
