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
        <div class="container productsmain">
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
import { mapGetters } from 'vuex';
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  methods: {
    getProducts(pageNum = 1) {
      this.$store.dispatch('getProducts', pageNum);
    },
    getProductsCategory(category) {
      this.$store.dispatch('getProductsCategory', category);
    },
    getProduct(id) {
      this.$store.dispatch('getProduct', id);
    },
    change() {
      this.$store.dispatch('change');
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    addToCart(id, num = 1) {
      this.$store.dispatch('addToCart', { id, num });
    },
    changeQuantity(id, num) {
      this.$store.dispatch('changeQuantity', { id, num });
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'products',
      'tempProduct',
      'pagination',
      'category',
      'categoryNow',
    ]),
  },
  created() {
    this.getProducts();
    this.getCart();
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  },
};
</script>
