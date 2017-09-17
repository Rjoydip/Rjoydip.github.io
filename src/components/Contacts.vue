<template>
    <section id="contact" class="contact-info-section section-padding">
        <div class="container">
            <div class="row animated fadeInUp">
                <div class="col-md-3 col-sm-12 col-xs-12"></div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="full-adress">
                        <div class="contact-padding col-md-12">
                            <p class="phone">Phone:
                                <a :href="`tel:${contacts.code}${contacts.phone}`">{{contacts.code}} {{contacts.phone}}</a>
                            </p>
                        </div>
                        <div class="contact-padding col-md-12">
                            <p class="mail">Email:
                                <a href="mailto:joydipand@gmail.com">{{contacts.email}}</a>
                            </p>
                        </div>
                        <div class="contact-padding col-md-12">
                            <p class="adress">
                                Address: {{contacts.address}}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-12 col-xs-12"></div>

            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </section>
</template>

<script>

export default {
    name: 'Contacts',
    data(){
        return {
            contacts: {}
        }
    },
    created(){
        this.contacts = this.$parent.$root.contacts;
    }
}

</script>

<style scoped>
.contact-info-section {
    background: #f0f0f0;
}

.contact-form {
    position: relative;
}

.contact-form .form-group {
    margin-bottom: 20px;
}

.form-control {
    padding: 15px;
    height: auto;
    box-shadow: none !important;
    border: none;
    border-radius: 0;
    background: #fff;
    border-radius: 5px;
}

textarea.form-control {
    resize: vertical;
    height: 120px;
}

.form-control:focus {
    border: 0 solid;
}

.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 1;
}

.btn.btn-effect.disabled {
    box-shadow: 0 7px 16px 0 rgba(50, 50, 50, 0.2);
    cursor: not-allowed;
}

.btn.btn-effect.disabled:hover {
    box-shadow: 0px 16px 22px 0px rgba(50, 50, 50, 0.2);
    top: -5px;
}

.contact-padding.col-md-12 {
    padding: 15px;
    background: #fff;
    margin-bottom: 15px;
    border-radius: 5px;
}

.full-adress p.phone,
.full-adress p.mail,
.full-adress p.adress {
    position: relative;
    padding-left: 25px;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    margin: 0;
}

.full-adress p.phone:before,
.full-adress p.mail:before,
.full-adress p.adress:before {
    position: absolute;
    content: "\f041";
    font-family: "FontAwesome";
    top: 0;
    left: 0;
}

.full-adress p.phone:before {
    content: "\f095";
    color: #DC143C;
}

.full-adress p.mail:before {
    content: "\f003 ";
    color: #DC143C;
}

.full-adress p.adress:before {
    content: "\f041";
    color: #DC143C;
}

.full-adress p.phone a,
.full-adress p.mail a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
}
</style>
