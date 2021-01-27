<template>
  <div id="profiler"></div>
</template>

<script>
import Stats from 'stats.js'

let stats = new Stats()
export default {
  mounted(){
    this.init()
    this.update()
  },
  methods: {
    init(){
      stats.showPanel( 0 )
      document.getElementById('profiler').appendChild( stats.dom )
    },

    update(){
      stats.begin()

      stats.end()
      requestAnimationFrame(this.update)
    }
  }
}
</script>