<template>
  <BasicGUIPanel class="Debugger-panel">
    <template v-slot:header>调试</template>
    {{mainStates}}
  </BasicGUIPanel>
</template>

<script>
import { mapState } from 'vuex'


export default {
  data(){
    return {
      record: [],
      total: [],
      collection: {},
    }
  },
  computed:{
    ...mapState('controller', ['mainStates'])
  },
  methods:{
    
  }
}
</script>

<style lang="less">
  .Debugger-panel {
    left: 600px;
  }
</style>