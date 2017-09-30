<template>
    <div>
        <Root></Root>
    </div>
</template>

<script>

// Import the EventBus we just created.
import { EventBus } from './services/event-bus.js';
import Root from "./components/Root.vue";

export default {
    name: 'app',
    components: {
        Root,
    },
    data() {
        return {
            deviceWidth: 0,
            deviceHeight: 0,
            deviceColorDepth: 0,
            devicePixelDepth: 0,
            deviceOrientation: {}
        }
    },
    mounted() {
        this.deviceWidth = window.screen.availWidth;
        this.deviceHeight = window.screen.availHeight;
        this.deviceColorDepth = window.screen.colorDepth;
        this.devicePixelDepth = window.screen.pixelDepth;
        this.deviceOrientation = window.screen.orientation;
        // console.log(this.$parent);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
            EventBus.$emit('scroll', { position: window.scrollY, scrolled: this.scrolled });
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss">
html {
    box-sizing: border-box;
    background: #000000;
}

*,
*:before,
*:after {
    box-sizing: inherit
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 24px;
    background: #000000;
    height: 100%;
    -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
    display: none;
}

.white {
    color: #ffffff;
}

.alignleft {
    float: left;
    margin-right: 15px;
}

.alignright {
    float: right;
    margin-left: 15px;
}

.aligncenter {
    display: block;
    margin: 0 auto 15px;
}

a {
    color: #DC143C;
}

a:focus,
a:hover {
    outline: 0 solid;
    color: #DC143C;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 15px;
    font-weight: 700;
    color: #000;
}

p {
    color: #444;
}

a:hover {
    text-decoration: none
}

.gap10 {
    display: block;
    height: 10px;
}

.gap20 {
    display: block;
    height: 20px;
}

.gap30 {
    display: block;
    height: 30px;
}

.gap40 {
    display: block;
    height: 40px;
}

.gap50 {
    display: block;
    height: 50px;
}

.delay {
    -webkit-transition-delay: 6s;
    /* Safari */
    transition-delay: 6s;
}

/*================================================
        SECTION TITLE AND SECTION PADDING
==================================================*/

.section-title {
    color: #000;
    margin-bottom: 65px;
    display: inline-block;
    padding-left: 12px;
}

.section-title h2 {
    font-size: 28px;
    position: relative;
    display: inline-block;
    margin-bottom: 5px;
}

.section-title p {
    max-width: 600px;
    font-size: 14px;
}

.section-padding {
    padding: 50px 0;
}
</style>
