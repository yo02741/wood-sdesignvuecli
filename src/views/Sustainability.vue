<template>
    <div>
        <div class="jumbotron jumbotron-fluid sustainabilityjumbotron">
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
