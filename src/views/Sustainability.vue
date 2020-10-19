<template>
  <div>
    <div class="jumbotron jumbotron-fluid sustainabilityjumbotron">
      <Header></Header>
    </div>

    <div class="container py-5 sustainabilitycontainer">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-6 text-right" data-aos="fade-left">
          <div class="txt">
            <h2 class="pb-4 h1 font-weight-bold text-center">永續經營</h2>
            <span class="title-overlay pb-4 text-primary
              h1 font-weight-bold text-center">永續經營</span>
            <p class="content pb-4 px-4 text-center">
                隨著科技的發達，全球暖化日益嚴重。<br>
                我們建立於循環性森林的基礎，計畫下適量的砍伐老齡樹，並接續種植幼齡樹
                ，達到了永續經營的訴求，也間接地幫助地球環保減碳。<br>
                我們只採用環保木材製作產品，取代塑膠材質，讓地球更健康。
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
