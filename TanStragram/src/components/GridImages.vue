<template>
  <div>
    <div class="ui card" v-for="(userName,i) in userNames" :key="i">
      <div class="content">
        <div class="right floated meta">14h</div>
        <img class="ui avatar image" :src="imgSrc" />
        <!-- {{apis[i].name}} -->
      </div>
      <div class="image">
        <img :src="imgSrc" />
      </div>
      <div class="content">
        <span class="right floated">
          <i class="heart outline like icon"></i>
          17 likes
        </span>
        <i class="comment icon"></i>
        3 comments
      </div>
      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i class="heart outline icon"></i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
{{apis[0].img}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "GridImages",

  data: function() {
    return {
      imgSrc:"https://github.com/tanlull/test_db/raw/master/images/house1.png",
      userNames: ["Tan", "Lull", "Bingo", "Preme"],
      apis: null,
    }
  },
  mounted: function() {
    axios
      .get("http://localhost:3000/api/houses")
      .then((response) => (this.apis = response.data));
  },
};
</script>

<style>
</style>