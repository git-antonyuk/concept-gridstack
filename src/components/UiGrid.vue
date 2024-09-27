<script setup lang="ts">
  import { GridStack } from 'gridstack';
  import { onBeforeUnmount, onMounted, watch, nextTick } from 'vue';
  import { IGridStackWidgetExtended } from '@/types';

  export interface IProps {
    items: IGridStackWidgetExtended[];
  }
  const props = withDefaults(defineProps<IProps>(), {});

  let grid: GridStack | null = null; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see

  const createGrid = () => {
    grid = GridStack.init({
      // DO NOT use grid.value = GridStack.init(), see above
      cellHeight: 70,
      column: 12,
      margin: '8px',
    });
  };

  const destroyGrid = () => {
    if (!grid) {
      return;
    }
    grid.destroy();
    grid = null;
  };

  const updateGridStackAddItems = async (
    grid: GridStack,
    newItems: IGridStackWidgetExtended[]
  ): Promise<void> => {
    const findNodeOnGridEngine = (node: IGridStackWidgetExtended) =>
      grid.engine.nodes.find((n) => n.id === node.id);
    const diffNewItems = newItems.filter((item) => !findNodeOnGridEngine(item));

    await nextTick();
    for (const node of diffNewItems) {
      grid.makeWidget(String(node.id));
    }
  };

  const updateGridStackRemoveItems = (
    grid: GridStack,
    newItems: IGridStackWidgetExtended[]
  ): void => {
    const diffRemovedItems = grid.engine.nodes.filter(
      (node) => !newItems.find((item) => item.id === node.id)
    );

    for (const node of diffRemovedItems || []) {
      grid.removeWidget(String(node.id), false);
    }
  };

  const unwatchItemsUpdate = watch(
    () => props.items,
    async (newItems) => {
      if (!grid) {
        return;
      }
      updateGridStackRemoveItems(grid, newItems);
      await updateGridStackAddItems(grid, newItems);
    },
    { deep: true }
  );

  onMounted(() => {
    createGrid();
  });

  onBeforeUnmount(() => {
    unwatchItemsUpdate();
    destroyGrid();
  });
</script>
<template>
  <div class="grid-stack">
    <div
      v-for="item in items"
      class="grid-stack-item"
      :gs-x="item.x"
      :gs-y="item.y"
      :gs-w="item.w"
      :gs-h="item.h"
      :gs-id="item.id"
      :id="item.id"
      :key="item.id"
      :title="item.id"
    >
      <div class="grid-stack-item-content">
        <slot name="item" v-bind="item" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
