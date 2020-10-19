<template>
    <div>
        <div class="jumbotron jumbotron-fluid py-0 aboutusjumbotron">
          <Header></Header>
        </div>

        <div class="container py-5 aboutuscontainer">
            <div class="row">
                <div class="col-12 col-md-7 col-lg-6 text-right" data-aos="fade-left">
                    <div class="txt">
                        <h2 class="pb-4 h1 font-weight-bold text-center">關於我們</h2>
                        <span class="title-overlay pb-4 text-primary
                         h1 font-weight-bold text-center">關於我們</span>
                        <p class="content pb-4 px-4 text-center">
                            木製產品有一種特殊的魔力，它能夠提升生活品質，讓環境變得更加的舒適、更帶有美感。<br>
                            我們團隊有三位設計師，他們對於設計很有自己的一套。<br>
                            我們致力於生產出兼具美觀、實用性及有品質的木製產品，<br>
                            並使用環保木材，實踐永續經營的理念。
                        </p>
                        <router-link to="/products" class="h4 mr-5">— Go Shop. </router-link>
                    </div>
                </div>
                <div class="d-none d-md-block col-md-5 col-lg-6 picture" data-aos="zoom-in"></div>
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
