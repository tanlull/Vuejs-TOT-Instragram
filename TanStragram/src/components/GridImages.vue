<template>
  <div>
    <div class="ui card" v-for="(userName,i) in userNames" :key="i">
      <div class="content">
        <div class="right floated meta">14h</div>
        <img class="ui avatar image" :src="imgSrc" />
        {{userName}}
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

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "GridImages",

  data: function() {
    return {
      imgSrc:
        "https://lh3.googleusercontent.com/tTZthVZ5z9Y7mqNHIcjkb9Jf2Snjc95ym40WCaZDPoK_hs-IAuWOvmYVy0_N1NGXui15dEq9JoDuaCYck7QP-jdJSszQyGpdZh4d1msMN-2G__JRNCDNDWo1YcFMVUyho2mUs-xp7ewn-5jxyE35yjeLzp-elql8Kk8CRlkwR3BdrOpbSoPvSJ2ZdOUcS_ZXKoTIJ2cIbjm-aLUw8FCDF4n0DbiIb4XN9oU8yQRmRe3HCGGYkqrfL2C26HVQbkIKZyPJ0AmtCV3VdgpQ0hKngV7bx1zgyrAo_0Y0xY0oG8vjDV2FFSz190uy8iO-9cqdynG1csr1-1ySFODDBEVIjVWKc2CNAIQIp9mk6f5kZijz8bP8rs_tC6YV0B2VOwQCiYcI_KQD1Jurl1XJJW9e-2UokEg2UTBU10EerPGxf3uJZefmnnSHlq5tbtxfz1vV48xEyJmjeKWe0yxy3fmKAJbhOYNvZnLmVHxJfX5qmud1RYKh83lu064JHOVBtX8lw_eLvDbSLGhVZT1bt0r7gU3DPFELq6fMTvzhTnm8pgS-wgfHPqHihVh81n2t2m3KWXrKwEGzg72iK6wAb0BO0OtW7WRwXL58fEB4P-5BP3n6aV1lwRX8ylrRpfveNgjVt_aOf8ECHbhohNaiYOxfTP_RzOCAyb-X4y8ll61Gzu7Y_cgKINZVU2bLk73LiQ=w1066-h799-no?authuser=0",
      userNames: ["Tan", "Lull", "Bingo", "Preme"],
      apis: null,
    }
  },
  mounted: function() {
    axios
      .get("https://dog.ceo/api/breed/pomeranian/images/random/10")
      .then((response) => (this.apis = response));
  },
};
</script>

<style>
</style>