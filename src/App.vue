<script setup lang="ts">
  import UiGrid from '@/components/UiGrid.vue';
  import DynamicComponent from '@/components/DynamicComponent.vue';
  import { IGridStackWidgetExtended } from '@/types';
  import { ref } from 'vue';
  import { GridLayout, GridItem } from 'vue3-grid-layout-next';
  import GridPlus from '@/components/GridPlus.vue';

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

  const visibleLayout = ref([
    {
      x: 0,
      y: 17,
      w: 12,
      h: 3,
      i: 'b71ac3d2-0147-435d-87d0-831c181dc11d',
      moved: false,
    },
    {
      x: 6,
      y: 14,
      w: 6,
      h: 3,
      i: '960cdc0f-0dd2-4f54-ae73-d250daa452fd',
      moved: false,
    },
    {
      x: 0,
      y: 20,
      w: 6,
      h: 3,
      i: '01922e53-c9c8-7cad-a620-aa80c155afb7',
      moved: false,
    },
    {
      x: 0,
      y: 7,
      w: 12,
      h: 4,
      i: 'ac1ad5bc-b0e4-4416-bc69-ae947ee17a36',
      moved: false,
    },
    {
      x: 0,
      y: 11,
      w: 6,
      h: 3,
      i: 'e067050e-c889-4493-a46f-9711a77a01b2',
      moved: false,
    },
    {
      x: 9,
      y: 0,
      w: 3,
      h: 1,
      i: 'f372526d-eb40-4dc1-8f90-a2f51d868964',
      moved: false,
    },
    {
      x: 6,
      y: 0,
      w: 3,
      h: 1,
      i: '92c040da-ba3d-4ad6-92bb-a8ea37245fa1',
      moved: false,
    },
    {
      x: 6,
      y: 11,
      w: 6,
      h: 3,
      i: '9fc873c0-b6b2-4cb1-9d68-809c8a439a22',
      moved: false,
    },
    {
      x: 0,
      y: 0,
      w: 3,
      h: 1,
      i: '3d0bed08-cc09-4108-b587-b902c13ba692',
      moved: false,
    },
    {
      x: 3,
      y: 0,
      w: 3,
      h: 1,
      i: 'a0346cd9-b0cf-4f9d-8c68-9e762860f01a',
      moved: false,
    },
    {
      x: 0,
      y: 1,
      w: 8,
      h: 3,
      i: 'd9b85c23-8f19-45de-af7e-a92ac29531c8',
      moved: false,
    },
    {
      x: 8,
      y: 1,
      w: 4,
      h: 3,
      i: 'b3a6f3bf-a734-4ef1-a8d7-f37d7ef6f918',
      moved: false,
    },
    {
      x: 0,
      y: 14,
      w: 6,
      h: 3,
      i: '2b8334e7-f95f-4f38-b81d-565ca86b5495',
      moved: false,
    },
    {
      x: 0,
      y: 4,
      w: 12,
      h: 3,
      i: '65f887d9-e0c4-4873-ae05-f200cd264372',
      moved: false,
    },
  ]);

  const getSelectedDashboardWidgets = ref([
    {
      id: 'b71ac3d2-0147-435d-87d0-831c181dc11d',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'cases-activity',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 17, width: 12, height: 3 },
    },
    {
      id: '960cdc0f-0dd2-4f54-ae73-d250daa452fd',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'case-load-by-analyst',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 6, y: 14, width: 6, height: 3 },
    },
    {
      id: '01922e53-c9c8-7cad-a620-aa80c155afb7',
      title: 'Open Cases',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 1,
      measures: ['Cases.count'],
      dimension: ['Cases.labels'],
      tag: '',
      createdAt: { seconds: '1727354096', nanos: 76246000 },
      updatedAt: { seconds: '-62135596800', nanos: 0 },
      position: { x: 0, y: 20, width: 6, height: 3 },
    },
    {
      id: 'ac1ad5bc-b0e4-4416-bc69-ae947ee17a36',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'cases-by-category',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 7, width: 12, height: 4 },
    },
    {
      id: 'e067050e-c889-4493-a46f-9711a77a01b2',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'mttr-by-category',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 11, width: 6, height: 3 },
    },
    {
      id: 'f372526d-eb40-4dc1-8f90-a2f51d868964',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'closed-cases-with-automation',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 9, y: 0, width: 3, height: 1 },
    },
    {
      id: '92c040da-ba3d-4ad6-92bb-a8ea37245fa1',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'closed-cases',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 6, y: 0, width: 3, height: 1 },
    },
    {
      id: '9fc873c0-b6b2-4cb1-9d68-809c8a439a22',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'mtti-by-category',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 6, y: 11, width: 6, height: 3 },
    },
    {
      id: '3d0bed08-cc09-4108-b587-b902c13ba692',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'created-cases',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 0, width: 3, height: 1 },
    },
    {
      id: 'a0346cd9-b0cf-4f9d-8c68-9e762860f01a',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'open-cases',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 3, y: 0, width: 3, height: 1 },
    },
    {
      id: 'd9b85c23-8f19-45de-af7e-a92ac29531c8',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'sla-compliance',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 1, width: 8, height: 3 },
    },
    {
      id: 'b3a6f3bf-a734-4ef1-a8d7-f37d7ef6f918',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'cases-by-severity',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 8, y: 1, width: 4, height: 3 },
    },
    {
      id: '2b8334e7-f95f-4f38-b81d-565ca86b5495',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'time-to-resolve-by-analyst',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 14, width: 6, height: 3 },
    },
    {
      id: '65f887d9-e0c4-4873-ae05-f200cd264372',
      title: '',
      description: '',
      workspaceId: 'aa916594-e534-4c88-88d5-120765e55109',
      type: 0,
      measures: [],
      dimension: [],
      tag: 'states-over-time',
      createdAt: { seconds: '1727079710', nanos: 978406000 },
      updatedAt: { seconds: '1727348057', nanos: 546702000 },
      position: { x: 0, y: 4, width: 12, height: 3 },
    },
  ]);

  const doSomethingEnd = (item: typeof GridItem) => {
    console.log('dragend', item);
  };
</script>

<template>
  <div class="main">
    <div>
      <a href="https://github.com/xhlife/vue3-grid-layout" target="_blank">
        <h1>Vue3 grid layout next (In app)</h1>
      </a>
      <grid-layout
        v-model:layout="visibleLayout"
        :col-num="12"
        :row-height="125"
        :restoreOnDrag="true"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :isBounded="true"
        :vertical-compact="true"
        :margin="[20, 20]"
        :use-css-transforms="true"
        class="layout"
      >
        <grid-item
          v-for="(item, key) in visibleLayout"
          :key="key"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="key"
          class="item-wrap"
        >
          <DynamicComponent componentKey="widget" :componentProps="{}" />
        </grid-item>
      </grid-layout>
    </div>

    <div>
      <a href="https://github.com/gridstack/gridstack.js" target="_blank">
        <h1>Gridstack example (Pure JS):</h1>
      </a>

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

    <GridPlus />
  </div>
</template>

<style lang="scss" scoped>
  .main {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; */
    padding: 20px;
  }
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

  .layout {
    background: yellowgreen;
  }

  .item-wrap {
    background: lightblue;
  }
</style>
