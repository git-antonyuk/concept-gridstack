<script setup lang="ts">
  import { ref } from 'vue';

  export interface IProps {
    emoji?: string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    emoji: '',
  });

  const randomEmoji = () =>
    ['🚀', '🔥', '🎉', '💥', '👏'][Math.floor(Math.random() * 5)];

  const _emoji = ref(props.emoji || randomEmoji());
</script>
<template>
  <div class="widget">
    {{ _emoji }}
  </div>
</template>
<style lang="scss" scoped>
  .widget {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
  }
</style>
