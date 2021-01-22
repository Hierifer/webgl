<template>
  <div>

  </div>
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