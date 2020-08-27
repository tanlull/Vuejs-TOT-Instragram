<template>
    <div id="home-page">
        <Profile></Profile>
        <GridImages></GridImages>
    </div>
</template>

<script>
import Profile from '@/components/Profile'
import GridImages from '@/components/GridImages'

export default {
    name: 'HomePage',
    components: {
        Profile,
        GridImages
    }
}
</script>

<style>

</style>