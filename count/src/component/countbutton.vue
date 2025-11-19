<script>

export default {
 props: {
   count: {
     type: Number,
     required: true
   }
 }, emits: ['updatecount'],
}
</script>


<template>

<button @click="this.$emit(['updatecount'])"> 증가 </button>

</template>