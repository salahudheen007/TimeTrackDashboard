<template>
  <div class="profile">
    <div class="div1">
      <div>
        <img src="@/assets/image-jeremy.png" alt="dafskdjfsdfsk" />
      </div>
      <div class="names">
        <p>Report for</p>
        <h1 class="nameh1">Jeremy Robson</h1>
      </div>
    </div>
    <button v-for="tab in tabs" v-bind:key="tab" @click="selected(tab)" v-bind:class="{selectedbtn:currentTab==tab}">{{tab}}</button>
  </div>
</template>
<script>

export default {
    name:'Person',
    data:function(){
        return{
            currentTab:'Weakly',
            tabs:['Daily','Weakly','Monthly']
        }
    },
    methods:{
        selected:function(tab){
            this.currentTab=tab;
            this.$emit('select',tab)
        }
    }
}
</script>

<style scoped>
.div1 {
  background-color: hsl(246, 80%, 60%);
  width: fit-content;
  display: flex;
  padding: 1em 2em;
  border-radius: 1.5em;
  gap: 1em;
}
img {
  width: 4em;
  height: 4em;
  border: 5px solid rgb(255, 255, 255);
  border-radius: 3em;
}
p {
  color: hsl(236, 100%, 87%);
}
h1 {
  font-size: 20px;
  color: white;
}
p,
h1 {
  width: fit-content;
}
.profile {
  background-color: hsl(235, 46%, 20%);
  width: fit-content;
  border-radius: 1.3em;
  margin: 0 auto;
}button{
    color: hsl(235, 45%, 61%);
    background-color:hsl(235, 46%, 20%) ;
    border: none;
    border-radius: 1.3em ;
}
.selectedbtn{
    color: white;
}.nameh1{
  font-weight: 300;
}
@media (max-width: 600px) {
  .div1 {
    flex-direction: row;
  }button{
      padding: 2em;
  }.profile{
    margin: auto;
    min-width: 304px;
  }
      
  
}
@media (min-width: 601px) {
  .div1 {
    flex-direction: column;
    width:200px;
  }.profile{
      width: 264px;
  }
  button{
      width: 100%;
      padding: 1.2em 2em;
  }img{
      float: left;
  }
}
</style>