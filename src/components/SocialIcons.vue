<template>
    <div>
        <div class="social-icon" v-for="social in socials">
            <a :href="`${social.link}`" :title="`${social.title}`" :target="`${social.target}`">
                <i :class="`${social.class}`"></i>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SocialIcons',
    data() {
        return {
            socials: {}
        }
    },
    created() {
        this.socials = this.$parent.$root.socials.data;
    }
}

</script>

<style scoped>
.social-icon {
    margin-top: 10px;
    text-align: center;
    display: inline-flex;
}

.social-icon a {
    width: 25px;
    height: 25px;
    display: inline-table;
    text-align: center;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 15px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 1px 1px 4px 1px #f0f0f0;
}

.social-icon a i {
    display: table-cell;
    vertical-align: middle;
}
</style>

