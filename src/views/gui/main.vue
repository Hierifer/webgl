<template>
  <div class="gui-panel">
    <Logger />
    <Profiler />
    <Debugger />
    <MainController />
  </div>
</template>

<script>
import Logger from './components/Logger.vue';
import Debugger from './components/Debugger';
import Profiler from './components/Profiler.vue';
import MainController from './components/MainController.vue';

export default {
  components: {
    Logger,
    Profiler,
    Debugger,
    MainController,
  }
}
</script>

<style lang="less">
  .gui-panel{
    position: absolute;
    top: 0;
    left: 0;
    color: #FFF;
    z-index: 100;
  }
</style>