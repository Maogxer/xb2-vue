<template>
  <h3> {{ name }} </h3>
  <label for="subscription-annual">
    <input id="subscription-annual"
           type="radio"
           value="annual"
           v-model="subscription" />
    一年
  </label>
  <label for="subscription-quarterly">
    <input id="subscription-quarterly"
           type="radio"
           value="quarterly"
           v-model="subscription" />
    季度
  </label>
  <label for="subscription-monthly">
    <input id="subscription-monthly"
           type="radio"
           value="monthly"
           v-model="subscription" />
    按月
  </label>
  <span>→ Subscription: {{ subscription }}</span>
</template>

<script>
export default {
  data () {
    return {
      name: 'NINGHAO',
      subscription: 'annual'
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
