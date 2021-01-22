<template>
  <div>
    <div id="ui-panel">
      <Logger />
      <Profiler />
      <MainController />
    </div>
    
    <div id="gl-panel">
      <GL />
    </div>
  </div>
</template>

<script>
import Logger from './components/Logger.vue';
import Profiler from './components/Profiler.vue';
import GL from './components/GL.vue';
import MainController from './components/MainController.vue';

export default {
  name: 'App',
  data(){
    return {
      status: {
        stop: false,
        running: true,
      },
    }
  },
  components: {
    Logger,
    Profiler,
    GL,
    MainController
  },
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;

    #ui-panel{
      position: absolute;
      top: 0;
      left: 0;
      color: #FFF;
    }

    #gl-panel{
      
    }
  }
}

</style>
