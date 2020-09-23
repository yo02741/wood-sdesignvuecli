<template>
    <div id="app">
        <!-- eslint-disable max-len -->
        <!-- spinner/dots/bars -->
        <loading loader="bars"
                color="#86FFF8"
                background-color="#B38C4D"
                :active.sync="isLoading">
        </loading>

        <div class="jumbotron jumbotron-fluid productsjumbotron">
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

        <div class="container d-none" :class="{ 'd-block' : products !== [] }">
            <div class="row productcategory">
                <div class="col-12">
                    <ul class="d-flex flex-column flex-md-row justify-content-center text-center pl-0">
                        <li class="item">
                            <a href="#" @click.prevent="getProducts" :class="{active : categoryNow ==='全部'}">全部</a>
                        </li>
                        <li class="item" v-for="(item, index) in category" :key="index">
                            <a href="#" @click.prevent="getProductsCategory(item)" :class="{active : categoryNow === item}">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="row productlist pl-0">
                <li class="col-12 col-md-6 col-lg-4 my-4" v-for="item in products" :key="item.id">
                    <div class="card mx-auto">
                        <div class="cardimg" :style="{ backgroundImage: `url('${ item.imageUrl[0] }')` }">
                          <div class="card-body">
                            <div class="title d-flex justify-content-between align-items-center mb-4">
                                <h4 class="card-title mb-0 w-75 font-weight-bold">{{ item.title }}</h4>
                                <span class="badge badge-secondary">{{ item.category }}</span>
                            </div>
                            <div v-if="!item.price || item.price === item.origin_price" class="d-flex justify-content-end align-items-end">
                                <div>$<span class="h3 mx-1">{{ item.origin_price }}</span></div>
                            </div>
                            <div class="price d-flex justify-content-between align-items-end" v-else>
                                <del><span>$</span>{{ item.origin_price }}</del>
                                <div><span class="text-danger h3 mx-1">$ {{ item.price }}</span></div>
                            </div>
                        </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <a href="#" class="btn btn-sm btn-secondary" @click.prevent="getProduct(item.id)">查看更多</a>
                            <a href="#" class="btn btn-sm btn-danger" @click.prevent="addToCart(item.id)">加入購物車</a>
                        </div>
                    </div>
                </li>
            </ul>
            <pagination class="col-12" :pages="pagination" @update="getProducts" v-if="!Object.keys(pagination).length == 0"></pagination>
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

        <div class="modal fade" id="detailProductModal" tabindex="-1" aria-labelledby="detailProductModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="detailProductModalLabel">{{ tempProduct.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body d-flex flex-column">
                        <h3 class="mt-4 text-center">{{ tempProduct.description }}</h3>
                        <p class="mt-4 text-right"> — {{ tempProduct.content }}</p>

                        <div class="mt-4">
                            <div v-if="!tempProduct.price || tempProduct.price === tempProduct.origin_price">
                                <div class="text-right">$<span class="h3 mx-1">{{ tempProduct.price }}</span>/{{ tempProduct.unit }}</div>
                            </div>
                            <div class="price d-flex justify-content-between align-items-end" v-else>
                                <del><span>$</span>{{ tempProduct.origin_price }}/{{ tempProduct.unit }}</del>
                                <div><span class="text-danger h3 mx-1">$ {{ tempProduct.price }}</span>/{{ tempProduct.unit }}</div>
                            </div>
                        </div>

                        <div class="form-group mt-4 mb-0">
                            <label for="num" class="sr-only">數量</label>
                            <select id="num" class="form-control" v-model="tempProduct.num" @change="change">
                                <option value="0" selected disabled>請選擇數量</option>
                                <option v-for="(num, index) in 10" :key="index" :value="num">{{ num }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <span class="text-secondary mr-4" v-if="tempProduct.num != 0">小計<strong class="mx-2">{{ tempProduct.price * tempProduct.num }}</strong>元</span>
                        <button type="button" class="btn btn-primary" :disabled="tempProduct.num === 0" @click.prevent="addToCart(tempProduct.id,tempProduct.num)">加入購物車</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
        num: 0,
      },
      categoryNow: '全部',
      category: [],
      pagination: {},
      isLoading: false,
      api: {
        uuid: '3f7b1d29-d350-4de5-92ca-9b0bdfb7ca45',
        apiPath: 'https://course-ec-api.hexschool.io/',
      },
      cart: {},
      cartTotal: 0,
    };
  },
  methods: {
    getProducts(pageNum = 1) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/products?page=${pageNum}`;
      this.isLoading = true;
      this.categoryNow = '全部';
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;

          this.products.forEach((item) => {
            this.category.push(item.category);
          });
          this.category = this.category.filter((item, index, arr) => arr.indexOf(item) === index);
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
    getProductsCategory(category) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/products?page=1`;
      this.categoryNow = category;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = {};

          this.products = this.products.filter((item) => item.category === category);
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
    getProduct(id) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/product/${id}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.tempProduct = res.data.data;
          this.$set(this.tempProduct, 'num', 0);
          $('#detailProductModal').modal('show');
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
    getCart() {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.cartTotal = 0;
          this.isLoading = false;
          this.cart = res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
    change() {
      this.tempProduct.num = parseInt($('#num').val(), 10);
    },
    addToCart(id, num = 1) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping`;

      const repeat = false;
      this.cart.forEach((item) => {
        if (item.product.id === id) {
          this.repeat = true;
        }
      });
      // 遠端的購物車是空的 或是 此物件沒在購物車內 -> 新增至購物車
      if (Object.keys(this.cart).length === 0 || this.repeat === false) {
        const cart = {
          product: id,
          quantity: num,
        };

        this.isLoading = true;

        this.$http.post(url, cart)
          .then((res) => {
            this.isLoading = false;
            this.getCart();
            this.$swal.fire({
              icon: 'success',
              title: '已加入購物車！',
              text: '',
              confirmButtonColor: '#B38C4D',
            });
          })
          .catch((err) => {
            this.isLoading = false;
            this.getCart();
          });
      } else {
        // 遠端的購物車內已有 此物件 -> 將此項商品疊加上去
        this.cart.forEach((item) => {
          if (item.product.id === id) {
            // eslint-disable-next-line no-param-reassign
            num += item.quantity;
            this.changeQuantity(id, num);
            this.$swal.fire({
              icon: 'success',
              title: '已加入購物車！',
              text: '',
              confirmButtonColor: '#B38C4D',
            });
          }
        });
      }

      this.repeat = false;

      $('#detailProductModal').modal('hide');
    },
    changeQuantity(id, num) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping`;

      const cart = {
        product: id,
        quantity: num,
      };

      this.isLoading = true;

      this.$http.patch(url, cart)
        .then((res) => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          this.getCart();
        });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
