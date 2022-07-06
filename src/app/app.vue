<template>
  <h3 @click="changeName"> {{ nameEmoji }} </h3>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue';

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

    // 计算属性
    const nameEmoji = computed(() => `${name.value} 🧀 `);

    return {
      name,
      changeName,
      nameEmoji
    }
  }
}
</script>

<style scoped>
@import './styles/app.css';
</style>
