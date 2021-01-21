<template>
  <div>
    <div id="ui-panel">
      <a-button @click="endSystem">End</a-button>
      <a-button @click="playShifter">{{pauseText}}</a-button>
      <Logger />
      {{status}}
    </div>
    
    <div id="gl-panel">

    </div>
  </div>
</template>

<script>
import Logger from './components/Logger.vue';
import * as THREE from 'three';

let scene = new THREE.Scene()
export default {
  name: 'App',
  data(){
    return {
      status: {
        stop: false,
        running: true,
      },
      renderer: new THREE.WebGLRenderer(),
      camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    }
  },
  computed:{
    pauseText(){
      return this.stop? 'RESUME' : 'STOP'
    }
  },
  components: {
    Logger,
  },
  mounted(){
    this.init()
    this.update()
  },
  methods: {
    endSystem(){
      this.status.running = false
    },
    playShifter(){
      this.status.stop = !this.status.stop
    },
    init(){
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.getElementById('gl-panel').appendChild( this.renderer.domElement );

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      this.camera.position.z = 5;
    },
    update(){
      if(this.status.running){
        requestAnimationFrame( this.update );
        if(!this.status.stop){
          let cube = scene.children[0]
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          this.renderer.render( scene, this.camera );
        }
      }
    }
  }
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
