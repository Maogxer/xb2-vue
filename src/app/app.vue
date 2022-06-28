<template>
  <h3> {{ name }} </h3>
  <input type="text"
         @input="onInputContent" />
</template>

<script>
export default {
  data () {
    return {
      name: 'NINGHAO',
    }
  },

  methods: {
    onInputContent (event) {
      console.log(event);
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
