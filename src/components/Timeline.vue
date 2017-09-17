<template>
    <section class="about-section section-padding">
        <div id="container" ref="container" v-on:mousemove="move">
            <div id="thumbs" ref="thumbs" @click.prevent="thubsClicked">
                <div class="history-block animated slideInUp" v-for="data in timelines">
                    <div class="cover">
                        <div class="year">{{data.year}}</div>
                        <div class="title">{{data.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Timeline',
    data() {
        return {
            thumbs: [],
            container: [],
            thumbsWidth: 0,
            containerWidth: 0,
            timelines: []
        }
    },
    methods: {
        move(e) {
            this.$refs.thumbs.style.left = (this.containerWidth - this.thumbsWidth) * (e.pageX / this.containerWidth) + "px";
        },
        thubsClicked(){
            this.$refs.thumbs.style.left = '0px';
        }
    },
    mounted() {
        this.$refs.thumbs.style.left = '0px';
        this.thumbsWidth = this.$refs.thumbs.clientWidth;
        this.containerWidth = this.$refs.container.clientWidth;
    },
    created() {
        this.timelines = this.$parent.$root.timelines.data;
    }
}

</script>

<style scoped>
.about-section {
    background: #fff;
}

#container {
    height: 150px;
    width: 100%;
    overflow: hidden;
    position: relative;
    overflow-x: scroll;
    display: inline-block;
}

#thumbs {
    position: absolute;
    height: 100%;
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    padding: 0px 50px;
}

.history-block {
    height: 100%;
    width: 300px;
    margin: 0 1px;
    display: inline-block;
    font-family: 'roboto condensed', sans-serif;
    font-size: 60px;
    font-weight: 100;
    color: #FFF;
    cursor: grabbing;
}

.history-block:last-of-type {
    border-right: none;
}

.cover {
    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 1);
}

.year {
    position: absolute;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 500;
}

.title {
    position: absolute;
    width: 260px;
    top: 50px;
    font-size: 14px;
    white-space: normal;
}
</style>
