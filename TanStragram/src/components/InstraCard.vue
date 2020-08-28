<template>
    <div id="instra-card">
        <div class="ui card my-ig-card">
                <div class="content">
                    <div class="right floated meta"> {{ info.duration }}</div>
                    <img class="ui avatar image" :src="info.avatarImg">
                    <b>{{ info.username }}</b> 
                </div>
                <div class="image">
                    <img :src="info.image">
                </div>
                <div class="content">
                    <span class="right floated">
                    <i class="heart outline like icon"></i>
                    {{ info.numOfLikes }} likes
                    </span>
                    <i class="comment icon"></i>
                    {{ info.numOfComment }} comments
                </div>
                <div class="extra content">
                    <div class="ui large transparent left icon input">
                    <i class="heart outline icon"></i>
                    <input type="text" placeholder="Add Comment...">
                    </div>
                </div>
            </div>
        </div> 
</template>

<script>
export default {
    name: 'InstraCard',
    props:{
        info: Object,
    }

}
</script>

<style>

</style>