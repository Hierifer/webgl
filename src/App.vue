<template>
  <div>
    <dashboard />
  </div>
</template>

<script>

import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard
  },
}
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
</style>
