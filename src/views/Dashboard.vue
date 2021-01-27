<template>
  <div>
    <GUI />
    <GL />
  </div>
</template>

<script>
import GUI from './gui/main.vue'
import GL from './scene/GL.vue'

export default {
  components: {
    GUI,
    GL,
  } 
}
</script>