<template>
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
</template>

<style lang="scss">
  .navbar {
    position: absolute !important;
  }
</style>
