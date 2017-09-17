<template>
    <section class="about-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="author-image-holder animated fadeInUp">
                        <div class="btn author-image" :style="`background-image: url(./src/assets/${about.image})`"></div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="about-text animated fadeInUp">
                        <div class="text-center">
                            <p>{{about.desc}}</p>
                            <a class="btn theme-color" :href="`${about.resume_link}`">
                                <i :class="`${about.download_icon}`"></i>{{about.resume_btn_text}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </section>
</template>

<<script>

export default {
  name: 'About',
  data() {
      return {
          about: []
      }
  },
  created() {
      this.about = this.$parent.$root.about;
  }
}

</script>

<style scoped>

.about-section {
    background: #fff;
}

.author-image-holder {
    text-align: center;
}

.author-image {
    height: 15em !important;
    width: 15em !important;
    border-radius: 50% !important;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0px solid #ccc;
}

.about-text {
    padding: 20px 0;
}

.about-text h3 {
    font-size: 32px;
    font-weight: 700;
}

.about-text p {
    font-size: 16px;
    line-height: 28px;
}

.about-text .btn {
    margin-right: 15px;
    margin-top: 15px;
}

.btn,
a.btn {
    border-radius: 48px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    height: 48px;
    letter-spacing: 0.2em;
    line-height: 48px;
    overflow: hidden;
    padding: 0 30px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    box-shadow: 0 7px 16px 0 rgba(50, 50, 50, 0.2);
}

.btn:hover,
a.btn:hover,
.btn.btn-effect:hover {
    box-shadow: 0px 16px 22px 0px rgba(50, 50, 50, 0.2);
    top: -5px;
}

.btn.extra,
a.btn.extra {
    background: #f0f0f0;
    /* color: #000; */
}

.btn:focus,
a.btn:focus {
    outline: none;
}
</style>
