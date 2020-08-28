<template>
<div>
        <!-- {{info}} -->
    <div id="fookbest-card">
     <div class="ui card">
  <div class="content">
    <div class="right floated meta">14h</div>
    <img class="ui avatar image" :src="info.avatar"> 
    {{info.first_name}}
  </div>
  <div class="image" >
    <img :src="info.avatar">
  </div>
  <div class="content">
    <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span>
    <i class="comment icon"></i>
    3 comments
  </div>
<Comments></Comments>
</div>
        </div> 
        </div>
</template>

<script>


import Comments from "@/components/Comments"; 

export default {
    name: 'FookbestCard',
    components:{
        Comments
    },
    props:{
        info: Object,
        img: null,
    }

}
</script>

<style>
#fookbest-card{
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>