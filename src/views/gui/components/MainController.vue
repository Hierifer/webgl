<template>
  <BasicGUIPanel class="Controller-Panel">
      <template v-slot:header>
        主控板
      </template>

      <a-button @click="resumeStopGameStatus">{{pauseText}}</a-button>
      <a-button @click="endGame">结束</a-button>
  </BasicGUIPanel>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data(){
    return {
    }
  },
  mounted(){

  },
  computed:{
    ...mapState('controller', ['mainStates']),

    pauseText(){
      return this.mainStates.general === 'pause'? '继续' : '暂停'
    }
  },
  methods: {
    ...mapActions('controller', ['resumeStopGameStatus', 'endGame'])
  }
}
</script>

<style lang="less">
  .Controller-Panel{
    left: 400px;
  }
</style>