<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <Header></Header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

            <h5 class="text-white font-weight-bold h2 slogan">
                <p data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="50"
                    data-aos-duration="1500">好的設計，</p>
                <br>
                <p data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="650"
                    data-aos-duration="1500">讓您木不轉睛。</p>
            </h5>

            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div class="carousel-inner carouselClass">
                <div class="carousel-item active" />
                <div class="carousel-item" />
                <div class="carousel-item" />
            </div>
        </div>
    </div>

    <div class="container py-5 px-0 aboutus">
        <div class="row mx-0">
            <div class="col-12 col-md-7 col-lg-6 text-right px-0" data-aos="fade-left">
                <div class="txt">
                    <h2 class="pb-4 h1 font-weight-bold text-center">關於我們</h2>
                    <span class="pb-4 h1 font-weight-bold text-center text-primary
                     title-overlay">關於我們</span>
                    <p class="pb-4 px-4 text-center content">
                        <span class="h1 text-primary">木</span>
                        <span>，是一個很有氣質的材質，無論是室內裝潢、傢俱或是個人配件，都時常看見它的出現。</span>
                        <br>
                        <span>我們致力於生產出兼具美觀、實用性及有品質的木製產品，並使用環保木材，實踐
                          <router-link to="/sustainability"
                    class="font-weight-bold">永續經營</router-link>的理念。</span>
                    </p>
                    <router-link to="/products" class="h4 pr-4">— Go Shop. </router-link>
                </div>
            </div>
            <div class="d-none d-md-block col-md-5 col-lg-6 picture" data-aos="zoom-in"></div>
        </div>
    </div>

    <div class="container-fluid  sustainability">
        <div class="row overlay">
            <div class="col-12 col-md-6 mx-auto" data-aos="fade-up" data-aos-duration="2000">
                <div class="txt text-white text-center">
                    <h2 class="mx-auto pb-4 h1 font-weight-bold">永續經營</h2>
                    <p class="content">
                        我們建立於
                        <router-link to="/sustainability" class="font-weight-bold text-accent">
                        永續經營</router-link>
                        的基礎，只採用環保木材製作產品，達到了永續經營的訴求，也間接地幫助地球環保減碳。
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row introduce-title" data-aos="flip-left">
            <h2 class="pt-5 h1 font-weight-bold mx-auto">設計師</h2>
            <span class="pt-5 h1 font-weight-bold  text-primary title-overlay">設計師</span>
        </div>
        <div class="row introduce py-5 text-center">
            <div class="col-12 mt-4 col-md-4 mt-md-0" data-aos="flip-left">
                <div class="mx-auto photo"></div>
                <h3 class="my-4">SHANE WOOD</h3>
                <p></p>
            </div>
            <div class="col-12 mt-4 col-md-4 mt-md-0" data-aos="flip-left">
                <div class="mx-auto photo"></div>
                <h3 class="my-4">COLLIN VINSON</h3>
                <p></p>
            </div>
            <div class="col-12 mt-4 col-md-4 mt-md-0" data-aos="flip-left">
                <div class="mx-auto photo"></div>
                <h3 class="my-4">GARRETT JUAREZ</h3>
                <p></p>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  created() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  },
};
</script>
