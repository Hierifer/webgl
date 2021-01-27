<template>
  <BasicGUIPanel class="logger-panel">
    <template v-slot:header> 日志 </template>
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
    ...mapState('logger', ['loggerCache'])
  },
  methods:{
    
  }
}
</script>

<style lang="less">
  .logger-panel {
    left: 200px;
  }
</style>