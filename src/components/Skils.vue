<template>
    <section id="skils" class="skils-section section-padding">
        <div class="container">
            <div class="row animated fadeInUp" v-for="s in skils">
                <div class="col-md-4 col-sm-4" v-for="a in s">
                    <div class="single-skils text-left">
                        <div class="skils-content">
                            <img :src="`./src/assets/${a.image}`" :alt="a.name">
                            <h3>
                                <strong>{{a.name}}</strong>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/.row-->
        </div>
        <!--/.container-->
    </section>
</template>

<script>

export default {
    name: 'Skils',
    data() {
        return {
            skils: {}
        }
    },
    created() {
        const chunkSize = 3;
        const array = this.$parent.$root.skils.data;
        this.skils = [].concat.apply([],
            array.map(function(elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }
}

</script>

<style scoped>
.skils-space {
    height: 60px;
}

.skils-icon {
    float: left;
    width: 40px;
    font-size: 38px;
    line-height: 0;
}

.skils-content {
    margin-left: 55px;
}

.skils-content img {
    height: 3em;
    width: 3em;
    float: left;
    border-radius: 50%;
}

.skils-content h3 {
    line-height: 2em;
    padding-left: 4em;
    letter-spacing: 1px;
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 400;
    color: #ffffff;
}

.skils-content p {
    line-height: 24px;
}
</style>

