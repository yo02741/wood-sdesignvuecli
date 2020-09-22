<template>
    <div>
        <div class="jumbotron jumbotron-fluid aboutusjumbotron">
            <nav class="navbar navbar-expand-lg navClass py-3">
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
              <router-link to="/" class="navbar-brand text-white
              font-weight-bold ml-4 logo">木's design</router-link>
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
