<template>
    <div class="footer">
        <div class="container">
            <div class="row animated fadeInLeft">
                <div class="col-md-12 text-center">
                    <SocialIcons></SocialIcons>
                    <div class="footer-text">
                        <p>
                            <small v-html="footer.copyright"></small>
                            <small v-html="footer.reserved_message"></small>
                            <br>
                            <small v-html="footer.made_by"></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SocialIcons from '../components/SocialIcons.vue';

export default {
    name: 'Footr',
    components: {
        SocialIcons
    },
    data() {
        return {
            footer: {}
        }
    },
    created(){
        this.footer = this.$parent.$root.footer;
    }
}

</script>

<style scoped>
.footer {
    position: relative;
    z-index: 1;
}

footer:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3e3434;
    opacity: .7;
    z-index: -1;
}

.footer-text p {
    font-size: 12px;
    color: #fff;
    margin-bottom: 0px;
}
</style>
