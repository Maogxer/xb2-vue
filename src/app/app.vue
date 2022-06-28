<template>
  <h3> {{ name }} </h3>
  <!-- <input type="text"
         v-model="content" /> -->
  <input type="text"
         :value="content"
         @input="content = $event.target.value" />
  <span>→ Content: {{ content }}</span>
</template>

<script>
export default {
  data () {
    return {
      name: 'NINGHAO',
      content: '天地玄黄'
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
