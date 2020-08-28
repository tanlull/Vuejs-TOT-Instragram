<template>
    <div id="grid-images">
        <InstraCard :info="info[0]"></InstraCard>
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
            avatarImg: 'https://photos.google.com/share/AF1QipNhmCnzFItlJusnzmIfKTGdr0qhgs9Kg5bw-jfAvPnGkRqURdT5iGTQ8PZVT28WtA/photo/AF1QipMBi9h2V5G9wSz8x2MHi1d8QmwoEqt22Uw-3L9F?key=RV9QTEVzaGZwblpKQkR4aTlKbXoxQUd5ZEI3T1F3',
            image: '',
            numOfLikes: 77,
            numOfComment: 99
         }
      ]
    }
  },
  mounted: function() {
    axios
        .get('https://dog.ceo/api/breed/pomeranian/images/random/10')
        .then(response => this.dogs = response.data.message)

    axios
      .get("http://localhost:3000/api/houses")
      .then((response) => (this.apis = response.data));
  },
};
</script>

<style>
</style>