<template>
    <div id="app">
        <Topbtn></Topbtn>
        <!-- eslint-disable max-len -->
        <!-- spinner/dots/bars -->
        <loading loader="bars"
                color="#86FFF8"
                background-color="#B38C4D"
                :active.sync="isLoading">
        </loading>
        <div class="jumbotron jumbotron-fluid productsjumbotron">
            <Header></Header>
        </div>
        <div class="container d-none productsmain" :class="{ 'd-block' : products !== [] }">
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
            <Pagination class="col-12" :pages="pagination" @update="getProducts" v-if="!Object.keys(pagination).length == 0"></Pagination>
        </div>
        <Footer></Footer>

        <div class="modal fade" id="detailProductModal" tabindex="-1" aria-labelledby="detailProductModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="detailProductModalLabel">{{ tempProduct.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body d-flex flex-column mx-3">
                        <h3 class="mt-4 text-left" v-html="tempProduct.description"></h3>
                        <p class="mt-4 text-right" v-html="tempProduct.content"></p>

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
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  },
};
</script>
