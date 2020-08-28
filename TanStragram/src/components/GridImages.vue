<template>
<div>
    <div id="grid-images" >
        <InstraCard 
        v-for="(data,idx) in info"
        :info="data"
        :img="apis[idx].img"
        :key="data.username+idx"
        >

        </InstraCard>

    </div>

    {{apis[0].img}}
    </div>
</template>

<script>
import axios from 'axios';
import InstraCard from '@/components/InstraCard';

export default {
  name: "GridImages",
 components: {
        InstraCard
    },
  data: function() {
    return {
      imgSrc:"https://github.com/tanlull/test_db/raw/master/images/house1.png",
      userNames: ["Tan", "Lull", "Bingo", "Preme"],
      apis: null,
      dogs:null,
      info:[
          {
            username: 'TanStragram',
            avatarImg: 'https://github.com/tanlull/test_db/raw/master/images/tan.jpg',
            image: '',
            numOfLikes: 77,
            numOfComment: 99
         },
              {
            username: 'LullStragram',
            avatarImg: 'https://github.com/tanlull/test_db/raw/master/images/lull.jpg',
            image: '',
            numOfLikes: 177,
            numOfComment: 199
         },
      ]
    }
  },
  mounted: function() {
    axios
        .get('https://dog.ceo/api/breed/pomeranian/images/random/10')
        .then(response => this.dogs = response.data.message)

    axios
      .get("http://localhost:3000/api/images")
      .then((response) => (this.apis = response.data));
  },
};
</script>

<style>
</style>