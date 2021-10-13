<template>
    <div class="card"  v-bind:style="{'background-image':'url('+require('@/assets/'+item.image+'')+')','background-color':item.color}"> 
        <div class="sub">
            <div>
            <p class="p1">{{item.title}}</p>
            <h3 class="h3">{{item.time}}hrs</h3>
            </div>
            <div>
                <img src="@/assets/icon-ellipsis.svg" alt="">
                <p class="last">Last Week - {{item.last}}hrs</p>         
            </div>
        </div>
    </div>
</template>
<script>

export default {
   name:'Card',
   props:['Item'],
   data:function(){
       return{
           item:this.Item
       }
   }
}
</script>
<style scoped>
.card{
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 1.3em;
    padding-top: 2em;
    margin:  auto
}.sub{
    background-color: hsl(235, 46%, 20%);
    border-radius: 1.3em;
    display: flex;
    gap :1em;
    

}.sub>*{
    flex-basis: 100%;
    margin:1em ;
}.p1,.h3{
    color: white;
}.last{
    color: hsl(235, 45%, 61%);
    font-size: .8em;
    margin-top: 3em;
}.h3{
    font-weight: 100 ;
}
@media(max-width:600px){
    .card{
        width: 19em;
    }
}@media(min-width:601px){
    .card{
        width:14em
    }
}
</style>