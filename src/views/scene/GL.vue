<template>
  <div id='gl-panel'></div>
</template>

<script>
import * as THREE from 'three';
import { mapGetters } from 'vuex'

let scene = new THREE.Scene()
export default {
  data(){
    return {
      renderer: new THREE.WebGLRenderer(),
      camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
    }
  },
  computed: {
    ...mapGetters('controller', ['GL_RUNNING', 'GL_PAUSED'])
  },
  mounted(){
    this.init()
    this.update()
  },
  methods:{
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
      if(this.GL_RUNNING){
        requestAnimationFrame( this.update );
        if(!this.GL_PAUSED){
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

<style scoped>

</style>