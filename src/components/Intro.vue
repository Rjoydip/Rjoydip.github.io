<template>
    <section class="intro-section" v-bind:style="{height: deviceHeight + 'px'}">
        <!--===== HEADER AREA =====-->
        <header class="navbar custom-navbar navbar-fixed-top" v-if="!showInfo">
            <div class="container">
                <div class="row infoRow">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="logo animated" v-bind:class="{'fadeInLeft': !showInfo, 'fadeOutLeft': showInfo }">
                            <!--== logo ==-->
                            <img :src="`./src/assets/${intro.author.image}`" :alt="`${intro.author.name}`">
                            <a href="javascript:;">
                                <strong>{{intro.author.name}}</strong>
                            </a>
                        </div>
                    </div>
                </div>
                <!--/.row-->
            </div>
            <!--/.container-->
        </header>

        <header class="navbar navbar-fixed-top" v-if="showInfo">
            <div class="container">
                <div class="row animated" v-bind:class="{'fadeInLeft': showInfo, 'fadeOutLeft': !showInfo }">
                    <div class="col-md-12 text-center">
                        <SocialIcons></SocialIcons>
                    </div>
                </div>
                <!--/.row-->
            </div>
            <!--/.container-->
        </header>
        <!--===== END HEADER AREA ======-->

        <!--======= WELCOME AREA =======-->
        <div class="welcome-area">
            <div class="welcome-table">
                <div class="welcome-cell">
                    <div class="container">
                        <div class="row animated fadeInUp">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="welcome-text">
                                    <div class="myname">{{intro.author.original_name}}</div>
                                    <div class="gap30"></div>
                                    <h3 class="white">{{intro.author.intro_description}}</h3>
                                </div>
                            </div>
                        </div>
                        <!--/.row-->
                    </div>
                    <!--/.container-->
                </div>
            </div>
        </div>
        <!--===== END WELCOME AREA =====-->
    </section>
</template>

<script>
// Import the EventBus.
import { EventBus } from '../services/event-bus.js';
import SocialIcons from '../components/SocialIcons.vue';

export default {
    name: 'Intro',
    components: {
        SocialIcons
    },
    data() {
        return {
            showInfo: true,
            deviceWidth: 0,
            deviceHeight: 0,
            deviceColorDepth: 0,
            devicePixelDepth: 0,
            deviceOrientation: {},
            intro: {}
        }
    },
    mounted() {
        this.deviceWidth = window.screen.availWidth;
        this.deviceHeight = window.screen.availHeight;
        this.deviceColorDepth = window.screen.colorDepth;
        this.devicePixelDepth = window.screen.pixelDepth;
        this.deviceOrientation = window.screen.orientation;
    },
    created() {
        this.intro = this.$parent.$root.intro;
        // Listen for the i-got-clicked event and its payload.
        EventBus.$on('scroll', paylaod => {
            (paylaod.position >= 125) ? this.showInfo = false : this.showInfo = true;
        });
    }
}
</script>

<style>

.logo {
    text-align: left;
}

.logo a {
    color: #ffffff;
    font-size: 1.1em;
    margin-left: 0.4em;
    font-family: 'Oswald', sans-serif;
}

.navbar {
    min-height: 30px !important;
}

.logo img {
    height: 2.3em;
    width: 2.3em;
    border-radius: 50%;
}

.intro-section {
    height: 100%;
}

.infoRow {
    margin: 0em;
}

.custom-navbar {
    padding: .3em;
    background: #000;
}

.custom-navbar.top-nav-collapse .logo a {
    color: #fff;
    margin-top: 20px;
}

.custom-navbar.top-nav-collapse .main-menu ul.navbar-nav li a {
    color: #fff;
    padding: 22px 13px;
}

.custom-navbar.top-nav-collapse {
    background: #000;
}

.custom-navbar .container {
    margin: 0em;
}

/***** WELCOME SECTION */

.welcome-area {
    height: 100%;
    position: relative;
    z-index: 3;
    background: url("../assets/quotes-bg.jpg");
    background-size: cover;
    z-index: 1;
    position: relative;
    height: 100%;
}

.welcome-area:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .8;
    z-index: -1;
}

.welcome-table {
    display: table;
    width: 100%;
    height: 100%;
    text-align: center;
}

.welcome-cell {
    display: table-cell;
    vertical-align: middle;
}

.welcome-text .myname {
    font-size: 3.4em;
    color: #DC143C;
    font-family: 'Oswald', sans-serif;
}

.welcome-text h2,
h3,
h4,
h5 {
    font-family: 'Droid Serif', serif;
}

.welcome-text h1 {
    font-size: 110px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
    letter-spacing: 8px;
}

.welcome-text h3 {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 3px;
}
</style>
