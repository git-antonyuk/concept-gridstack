<script setup lang="ts">
  import UiGrid from '@/components/UiGrid.vue';
  import DynamicComponent from '@/components/DynamicComponent.vue';
  import { IGridStackWidgetExtended } from '@/types';
  import { ref } from 'vue';

  // let grid: GridStack; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
  const items: IGridStackWidgetExtended[] = [
    {
      id: '1',
      x: 0,
      y: 0,
      w: 12,
      h: 3,
      content: '1',
      componentKey: 'widget',
      componentProps: { emoji: '🚀' },
    },
    {
      id: '2',
      x: 4,
      y: 0,
      w: 4,
      h: 4,
      content: '2',
      componentKey: 'widget',
      componentProps: { emoji: '🔥' },
    },
    {
      id: '3',
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      content:
        '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">',
      componentKey: 'widget',
    },
    {
      id: '4',
      x: 10,
      y: 0,
      w: 2,
      h: 2,
      content: '4',
      componentKey: 'widget',
      componentProps: { emoji: '🎉' },
    },
    {
      id: '5',
      x: 0,
      y: 2,
      w: 2,
      h: 2,
      content: '5',
      componentKey: 'widget',
      componentProps: { emoji: '💥' },
    },
    {
      id: '6',
      x: 2,
      y: 2,
      w: 2,
      h: 4,
      content: '6',
      componentKey: 'widget',
      componentProps: { emoji: '👏' },
    },
    {
      id: '7',
      x: 8,
      y: 2,
      w: 4,
      h: 2,
      content: '7',
      componentKey: 'widget',
    },
    {
      id: '8',
      x: 0,
      y: 4,
      w: 2,
      h: 2,
      content: '8',
      componentKey: 'widget',
    },
    {
      id: '9',
      x: 4,
      y: 4,
      w: 4,
      h: 2,
      content: '9',
      componentKey: 'widget',
    },
    {
      id: '10',
      x: 8,
      y: 4,
      w: 2,
      h: 2,
      content: '10',
      componentKey: 'widget',
    },
    {
      id: '11',
      x: 10,
      y: 4,
      w: 2,
      h: 2,
      content: '11',
      componentKey: 'widget',
    },
  ];

  const _items = ref<IGridStackWidgetExtended[]>([...items]);

  const addNew = () => {
    const randomEmoji = () =>
      ['🚀', '🔥', '🎉', '💥', '👏'][Math.floor(Math.random() * 5)];
    _items.value.push({
      x: Math.round(12 * Math.random()),
      y: Math.round(5 * Math.random()),
      w: Math.round(1 + 3 * Math.random()),
      h: Math.round(1 + 3 * Math.random()),
      id: String(_items.value.length + 1),
      content: String(items.length + 1),
      componentKey: 'widget',
      componentProps: { emoji: randomEmoji() },
    });
  };

  const remove = (id: string) => {
    _items.value = _items.value.filter((item) => item.id !== id);
  };
</script>

<template>
  <div>
    <!-- <h1>Concept gridstack</h1>
    <div class="grid-stack"></div> -->

    <h1>Reusable component</h1>
    <div>
      <button @click="addNew">Add new</button>
    </div>
    <UiGrid :items="_items">
      <template #item="{ componentKey, componentProps, id }">
        <div class="item-wrap">
          <button @click="remove(String(id))" class="remove">Remove</button>
          <DynamicComponent
            :componentKey="componentKey"
            :componentProps="componentProps"
          />
        </div>
      </template>
    </UiGrid>
  </div>
</template>

<style lang="scss" scoped>
  .item-wrap {
    position: relative;
    height: 100%;
  }
  .remove {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    cursor: pointer;
    z-index: 10;
  }
</style>
