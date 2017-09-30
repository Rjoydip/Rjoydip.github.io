<template>
    <div>
        <div class="preloader" v-if="loader">
            <div class="spinner" v-if="loader"></div>
        </div>
        <div v-if="!loader">
            <Intro></Intro>
            <About></About>
            <Skils></Skils>
            <Projects></Projects>
            <Timeline></Timeline>
            <Quotes></Quotes>
            <Contacts></Contacts>
            <Footr></Footr>
        </div>
    </div>
</template>

<script>

import Intro from "./Intro.vue";
import About from "./About.vue";
import Skils from "./Skils.vue";
import Quotes from "./Quotes.vue";
import Timeline from './Timeline.vue';
import Contacts from "./Contacts.vue";
import Projects from "./Projects.vue";
import Footr from "./Footer.vue";

export default {
    name: 'Preloader',
    components: {
        Intro,
        About,
        Skils,
        Quotes,
        Contacts,
        Footr,
        Projects,
        Timeline
    },
    data() {
        return {
            loader: true
        }
    },
    created() {
        this.loader = false;
    },
    destroyed() {
        this.loader = true;
    }
}

</script>

<style scoped>
.preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: #fff;
    background-color: #000;
    z-index: 9999999;
}

.preloader .spinner {
    left: 50%;
    margin-left: -20px;
    margin-top: -20px;
    position: absolute;
    top: 50%;
}

.spinner {
    width: 40px;
    height: 40px;
    background-color: #fff;
    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
    0% {
        -webkit-transform: perspective(120px)
    }
    50% {
        -webkit-transform: perspective(120px) rotateY(180deg)
    }
    100% {
        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
    }
}

@keyframes sk-rotateplane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    }
    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    }
    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}
</style>
