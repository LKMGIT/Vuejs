<script>

import countbutton from './component/countbutton.vue'

export default {
  data(){
    return{
      countValue: 0
    }
  }
}
</script>

<template>

{{ countValue }}

<countbutton :count="countValue" @updatecount="countValue++"/>

</template>