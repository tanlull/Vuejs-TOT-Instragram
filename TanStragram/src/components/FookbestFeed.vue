<template>
<div>
    <!-- {{apis}} -->
  <div v-for="(data,idx) in apis" :key="idx">

    <FookbestCard :info='data'></FookbestCard>

  </div>
</div>
</template>

<script>
import axios from "axios";
import FookbestCard from "@/components/FookbestCard";

export default {
  name: "FookbestFeed",
  components: {
    FookbestCard,
  },
  data: function () {
    return {
      imgSrc: "https://github.com/tanlull/test_db/raw/master/images/house1.png",
      userNames: ["Tan", "Lull", "Bingo", "Preme"],
      apis: null,
    };
  },
  mounted: function () {
    
    axios
      .get("https://reqres.in/api/users")
      .then((response) => (this.apis = response.data.data));
  },
};
</script>

<style>
</style>