<template>
  <h3> {{ name }} </h3>
  <AppButton text="确定"
             @tap="onTapAppButton"
             @init="onInitAppButton"></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button />
  <app-demo-button></app-demo-button>
</template>

<script>
import AppButton from './components/app-button.vue';
import AppDemoButton from './components/app-demo-button.vue';

export default {
  data () {
    return {
      name: 'NINGHAO',
    };
  },

  methods: {
    onTapAppButton (text) {
      console.log("On Tap App Button: " + text);
    },

    onInitAppButton () {
      console.log("On Init App Button");
    }
  },

  components: { AppButton, AppDemoButton }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
