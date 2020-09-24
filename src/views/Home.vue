<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <nav class="navbar navbar-expand-lg navClass py-3">
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
              <router-link to="/" class="navbar-brand text-white
              font-weight-bold logo">木's design</router-link>
            </h1>
            <button class="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
                data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/aboutus"
                        class="nav-link px-4 font-weight-bold">關於我們</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/sustainability"
                        class="nav-link px-4 font-weight-bold">永續經營</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products"
                        class="nav-link px-4 font-weight-bold">產品列表</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart"
                        class="nav-link px-4 font-weight-bold">購物車</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

            <h5 class="text-white font-weight-bold h2 slogan">
                <span data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="50"
                    data-aos-duration="1500">好的設計，</span>
                <br>
                <span data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="650"
                    data-aos-duration="1500">讓您木不轉睛。</span>
            </h5>

            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner carouselClass">
                <div class="carousel-item active"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
            </div>
        </div>
      </div>

      <div class="container py-5 px-0 aboutus">
          <div class="row">
              <div class="col-12 col-md-7 col-lg-6 text-right" data-aos="fade-left">
                  <div class="txt">
                      <h2 class="pb-4 h1 font-weight-bold text-center">關於我們</h2>
                      <span class="title-overlay pb-4 text-primary h1
                        font-weight-bold text-center">關於我們</span>
                      <p class="content pb-4 px-4 text-center">
                          <span class="h1 text-primary">木</span><span>
                            ，是一個很有氣質的材質，無論是室內裝潢、傢俱或是個人配件，都時常看見它的出現。</span>
                          <br>
                          <span>我們致力於生產出兼具美觀、實用性及有品質的木製產品，
                          <br>
                          並使用環保木材，實踐<router-link to="/sustainability"
                        class="font-weight-bold">永續經營</router-link>的理念。</span>
                      </p>
                      <router-link to="/products" class="h4 mr-4">— Go Shop. </router-link>
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
                          我們建立於<router-link to="/sustainability"
                        class="font-weight-bold text-accent">永續經營</router-link>的基礎
                            ，只採用環保木材製作產品，達到了永續經營的訴求，也間接地幫助地球環保減碳。
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row introduce-title" data-aos="flip-left">
              <h2 class="mx-auto pt-5 h1 font-weight-bold">設計師</h2>
              <span class="title-overlay pt-5 text-primary h1 font-weight-bold">設計師</span>
          </div>
          <div class="row introduce py-5">
              <div class="col-12 mt-4 col-md-4 mt-md-0 text-center" data-aos="flip-left">
                  <div class="mx-auto photo"></div>
                  <h3 class="my-4">SHANE WOOD</h3>
                  <p></p>
              </div>
              <div class="col-12 mt-4 col-md-4 mt-md-0 text-center" data-aos="flip-left">
                  <div class="mx-auto photo"></div>
                  <h3 class="my-4">COLLIN VINSON</h3>
                  <p></p>
              </div>
              <div class="col-12 mt-4 col-md-4 mt-md-0 text-center" data-aos="flip-left">
                  <div class="mx-auto photo"></div>
                  <h3 class="my-4">GARRETT JUAREZ</h3>
                  <p></p>
              </div>
          </div>
      </div>

      <div class="container-fluid footer bg-primary text-center">
          <div class="container py-4">
              <div class="row">
                  <div class="col-md-4 mb-4 mb-md-0 d-flex flex-column
                    justify-content-center align-items-center">
                    <router-link to="/" class="h1 text-white font-weight-bold px-4 logo"
                    >木's design</router-link>
                  </div>
                  <div class="col-md-4 mb-4 mb-md-0 d-flex flex-column
                    justify-content-center align-items-center">
                      <p class="text-white mb-0">Copyright © 2020 木's design</p>
                      <p class="text-white mb-0">純屬練習，不做商業行為。</p>
                      <p class="text-white mb-0">圖片來源：unsplash、pexels</p>
                  </div>
                  <div class="col-md-4">
                      <ul class="d-flex justify-content-around  align-items-center mb-0 pl-0">
                          <li>
                              <a href="https://www.facebook.com/profile.php?id=100003064961458" class="icon">
                                  <font-awesome-icon :icon="['fab', 'facebook']" />
                              </a>
                          </li>
                          <li>
                              <a href="https://www.instagram.com/8736.yo/" class="icon">
                                  <font-awesome-icon :icon="['fab', 'instagram']" />
                              </a>
                          </li>
                          <li>
                              <a href="https://github.com/yo02741" class="icon">
                                  <font-awesome-icon :icon="['fab', 'github']" />
                              </a>
                          </li>
                          <li>
                              <a href="https://codepen.io/yo02741" class="icon">
                                  <font-awesome-icon :icon="['fab', 'codepen']" />
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
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
