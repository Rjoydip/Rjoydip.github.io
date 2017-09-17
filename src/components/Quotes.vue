<template>
    <div class="quotes-area section-padding">
        <div class="container">
            <div class="row animated fadeInUp">
                <div class="col-md-12">
                    <div class="quotes-content text-center">
                        <h3>{{quotes['title']}}</h3>
                        <p>{{quotes['sub-title']}}</p>
                    </div>
                </div>
            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </div>
</template>

<script>

export default {
    name: 'Quotes',
    data(){
        return {
            quotes: {}
        }
    },
    created(){
        this.quotes = this.$parent.$root.quotes;    
    }
}

</script>

<style scoped>
.quotes-area {
    background: url("../assets/quotes-bg.jpg");
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 1;
}

.quotes-area:after {
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

.quotes-content h3 {
    font-size: 42px;
    color: #fff;
    margin-bottom: 25px;
    font-size: 800;
}

.quotes-content p {
    color: #fff;
}

.quotes-content a {
    margin-top: 25px;
}

.quotes-area i.fa.fa-pencil {
    font-size: 16px;
    padding-right: 6px;
}
</style>
