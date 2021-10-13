<template>
  <div id="app">
    <div class="per"><Person  v-on:select="changetab($event)"/></div>
    <div class="types">
      <div class="some" v-for="type in data" v-bind:key="type.time"><Card :Item="type"/></div>
    </div>
  </div>
</template>

<script>

import Person from './components/Person.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Person,Card
  },
 data:function(){
   return{
      types:{Weakly:[{title:'Work',time:'32',last:'36', image:'icon-work.svg',color:'hsl(15, 100%, 70%)'},{title:'Play',time:'10',last:'8', image:'icon-play.svg',color:'hsl(195, 74%, 62%)'},{title:'Study',time:'4',last:'7', image:'icon-study.svg',color:'hsl(348, 100%, 68%)'},{title:'Exercise',time:'4',last:'5', image:'icon-exercise.svg',color:'hsl(145, 58%, 55%)'},{title:'Social',time:'5',last:'10', image:'icon-social.svg',color:'hsl(264, 64%, 52%)'},{title:'Self Care',time:'2',last:'2', image:'icon-self-care.svg',color:'hsl(43, 84%, 65%)'}],
            Daily:[{title:'Work',time:'5',last:'7', image:'icon-work.svg',color:'hsl(15, 100%, 70%)'},{title:'Play',time:'1',last:'2', image:'icon-play.svg',color:'hsl(195, 74%, 62%)'},{title:'Study',time:'0',last:'1', image:'icon-study.svg',color:'hsl(348, 100%, 68%)'},{title:'Exercise',time:'1',last:'1', image:'icon-exercise.svg',color:'hsl(145, 58%, 55%)'},{title:'Social',time:'1',last:'3', image:'icon-social.svg',color:'hsl(264, 64%, 52%)'},{title:'Self Care',time:'0',last:'1', image:'icon-self-care.svg',color:'hsl(43, 84%, 65%)'}],
            Monthly:[{title:'Work',time:'103',last:'128', image:'icon-work.svg',color:'hsl(15, 100%, 70%)'},{title:'Play',time:'23',last:'19', image:'icon-play.svg',color:'hsl(195, 74%, 62%)'},{title:'Study',time:'13',last:'19', image:'icon-study.svg',color:'hsl(348, 100%, 68%)'},{title:'Exercise',time:'11',last:'18', image:'icon-exercise.svg',color:'hsl(145, 58%, 55%)'},{title:'Social',time:'21',last:'23', image:'icon-social.svg',color:'hsl(264, 64%, 52%)'},{title:'Self Care',time:'7',last:'11', image:'icon-self-care.svg',color:'hsl(43, 84%, 65%)'}]
            },
      data:null
   }
 },
 mounted:function(){
    this.data=this.types.Weakly
 },
 methods:{
   changetab:function(tab){
     if(tab=='Daily'){
     this.data=this.types.Daily}
     if(tab=='Monthly'){
       this.data=this.types.Monthly
     }if(tab=='Weakly'){
       this.data=this.types.Weakly
     }
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:65em;
  margin: auto;
}
#app{
  display: flex;
}
@media(max-width:600px){
  #app{flex-direction: column ;
    width: 85%;
    margin: auto;
    }
    .types>*{
      margin-top: 10px;
    }
}
@media(min-width: 601px){
  #app{flex-direction: row ;
  margin-top: 7em;}
  .types{
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
    width: fit-content;

  }
  .types>*{
    flex: 1 1 25%;
  }.per{
    padding-right: .5em;
  }
}
</style>
