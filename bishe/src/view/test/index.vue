<template>
  <div>
    {{id}}
    {{roterData}}
  </div>
</template>

<script>
export default {
name:'test',
data(){
  return {
    id:'',
    roterData:{}
  }
},
mounted(){
  this. id =this.$route.params.id
this.roterData=this.$route
}
}
</script>

<style>

</style>