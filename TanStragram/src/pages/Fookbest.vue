<template>
    <div id="home-page">
        <FookbestFeed></FookbestFeed>
    </div>
</template>

<script>
import Profile from '@/components/Profile'
import FookbestFeed from '@/components/FookbestFeed'

export default {
    name: 'HomePage',
    components: {
        Profile,
        FookbestFeed
    }
}
</script>

<style>

</style>