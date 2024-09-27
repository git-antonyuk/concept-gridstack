<script setup lang="ts">
  import { GridStack, GridStackNode } from 'gridstack';
  import { onMounted } from 'vue';

  let grid: GridStack; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
  const items = [
    {x: 0, y: 0, w: 12, h: 3, content: '1'},
    {x: 4, y: 0, w: 4, h: 4, content: '2'},
    {x: 8, y: 0, w: 2, h: 2, content: '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">'},
    {x: 10, y: 0, w: 2, h: 2, content: '4'},
    {x: 0, y: 2, w: 2, h: 2, content: '5'},
    {x: 2, y: 2, w: 2, h: 4, content: '6'},
    {x: 8, y: 2, w: 4, h: 2, content: '7'},
    {x: 0, y: 4, w: 2, h: 2, content: '8'},
    {x: 4, y: 4, w: 4, h: 2, content: '9'},
    {x: 8, y: 4, w: 2, h: 2, content: '10'},
    {x: 10, y: 4, w: 2, h: 2, content: '11'},
  ];

  onMounted(() => {
    grid = GridStack.init({
      // DO NOT use grid.value = GridStack.init(), see above
      cellHeight: 70,
      column: 12,
      margin: "8px",
    });

    grid.load(items);

    grid.on('added removed change', function(e: Event, items: GridStackNode[]) {
      let str = '';
      items.forEach(function(item) { str += ' (x,y)=' + item.x + ',' + item.y; });
      console.log(e.type + ' ' + items.length + ' items:' + str );
    });
  });
</script>

<template>
  <div>
    <h1>Concept gridstack</h1>
    <div class="grid-stack"></div>
  </div>
</template>

<style scoped></style>
