<template>
    <svg style="width: 0px; height: 0px">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="urlsvg"></use>
    </svg>
</template>
<script>
export default {
    name: 'com-icono',
    data () {
        return {
            urlsvg: require('../assets/svg/icons.svg') + '#i-' + 'lupa'
        }
    },
    props: {
        iconName: String,
    }
}
</script>