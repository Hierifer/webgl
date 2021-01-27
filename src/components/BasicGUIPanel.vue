<template>
  <a-card class="basic-panel">
    <template v-slot:title>
      <slot name="header" />
    </template>

    <template v-slot:content>
      <slot name="description" />
    </template>

    <slot></slot>
  </a-card>
</template>

<script>
export default {
  name: 'BasicGUIPanel'
}
</script>

<style lang="less">
  .basic-panel {
    position: absolute;
  }
</style>