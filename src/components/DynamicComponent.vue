<script setup lang="ts">
import { AsyncComponentLoader, defineAsyncComponent } from 'vue';

export interface IProps {
  componentKey: 'widget' | 'anotherComponent'; // Add other components here
  componentProps?: Record<string, any>;
}
const props = withDefaults(defineProps<IProps>(), {})

const componentMap: Record<string, AsyncComponentLoader> = {
  widget: () => import(/* @vite-ignore */ "@/components/Widget.vue"),
  // Add other components here
  // Example: AnotherComponent: () => import('@/components/AnotherComponent.vue')
};

const AsyncComp = defineAsyncComponent({
  // the loader function
  loader: () => {
    const loaderFunction = componentMap[props.componentKey];
    if (!loaderFunction) {
      return Promise.reject(new Error(`Component ${props.componentKey} not found`));
    }
    return loaderFunction();
  },

  // !!! TODO: ADD LOADER COMPONENT A component to use while the async component is loading
  // loadingComponent: LoadingComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 0,

  // !!! TODO: ADD ERROR COMPONENT | A component to use if the load fails
  // errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 5000
})
</script>
<template>
  <AsyncComp v-bind="props.componentProps" />
</template>
<style lang="scss" scoped>
</style>