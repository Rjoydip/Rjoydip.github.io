<template>
    <section class="projects-section">
        <div class="container">
            <div class="section-top">
                <div class="projRow animated fadeInUp" v-on:click="openLink(project.html_url, $event)" v-for="project in myProjects">
                    {{project.name}}
                </div>
            </div>
        </div>
        <!--/.container-->
    </section>
</template>

<script>

export default {
    name: 'Projects',
    data() {
        return {
            myProjects: null
        }
    },
    methods: {
        openLink: function(url, $event) {
            window.open(url, "_blank")
            console.log(url);
        }
    },
    created() {
        const chunkSize = 3;
        var self = this;
        fetch(`https://api.github.com/users/${this.$parent.$root.intro.author.name}/repos`)
            .then(function(response) {
                if (response.status !== 200) {
                    throw new Error();
                }
                response.json().then(function(data) {
                    self.myProjects = data;
                });
            })
            .catch(function(error) {
                console.log(error);
            });

    }
}

</script>

<style scoped>
.projects-section {
    background: #ffffff;
}

.container {
    margin-top: 25px;
}

.section-top{
        margin-top: 30px;
}

.projRow {
    display: inline-flex;
    width: 30%;
    background: #000;
    margin: 5px;
    color: #fff;
    padding: 2%;
    font-size: 12px;
    cursor: pointer;
    border-radius: 5px;
}
</style>