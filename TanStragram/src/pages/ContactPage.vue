<template>
    <div id="contact-page">
        <h1>Contact Page!!!</h1>
        <a :href="backLink">
            <button>
                Back
            </button>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data: function (){
        return {
            backLink: '/'
        }
    }
}
</script>

<style>

</style>