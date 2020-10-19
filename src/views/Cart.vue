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

        <div class="jumbotron jumbotron-fluid cartjumbotron">
            <Header></Header>
        </div>

        <div class="container py-5" style="min-height: 500px;">
          <ul class="d-flex justify-content-around align-items-center pl-0 mb-4">
            <li id="steponeArea" class="d-flex flex-column align-items-center stepstandING">
              <div id="steponeIcon" class="d-flex justify-content-center progressicon mb-2 bg-primary">
                <i class="fas fa-shopping-cart text-white"></i>
              </div>
              <p class="font-weight-bold">確認訂單品項</p>
            </li>
            <li class="stepstandING">
              <i class="fas fa-angle-right iconangleright"></i>
            </li>
            <li id="stepTwoArea" class="stepstandby">
              <div class="d-flex flex-column align-items-center">
                <div id="stepTwoIcon" class="d-flex justify-content-center progressicon mb-2">
                  <i class="fas fa-user-circle text-white"></i>
                </div>
                <p class="font-weight-bold">輸入訂單資訊</p>
              </div>
            </li>
            <li id="stepNext" class="stepstandby">
              <i class="fas fa-angle-right iconangleright"></i>
            </li>
            <li id="stepThreeArea" class="stepstandby">
              <div  class="d-flex flex-column align-items-center">
                <div id="stepThreeIcon" class="d-flex justify-content-center progressicon mb-2">
                  <i class="fas fa-check text-white"></i>
                </div>
                <p class="font-weight-bold">完成訂單送出</p>
              </div>
            </li>
          </ul>
          <div id="cartlist" class="row py-4">
              <div class="col-12 col-md-8 cartlist py-4 px-4 mx-auto">
                  <div class="text-right">
                      <button class="btn btn-outline-danger my-3" @click="delProducts">
                          <i class="fas fa-trash-alt mr-1"></i>
                          刪除所有商品
                      </button>
                  </div>
                  <table class="table table-hover">
                      <thead class="thead-light">
                          <tr>
                              <th width="75">刪除</th>
                              <th width="300">品名</th>
                              <th width="300">數量</th>
                              <th width="75" class="text-center">單價</th>
                              <th width="75" class="text-center">小計</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="item in cart" :key="item.id">
                              <td class="align-middle">
                                  <button class="btn btn-outline-danger
                                  btn-sm" @click="delProduct(item.product.id)">
                                    <i class="fas fa-trash-alt mr-1"></i>
                                  </button>
                              </td>
                              <td class="align-middle">{{ item.product.title }}</td>
                              <td class="align-middle">
                                  <div class="input-group quantity">
                                      <div class="input-group-prepend">
                                        <button class="btn btn-secondary" type="button"
                                        :disabled="item.quantity === 1"
                                        @click="changeQuantity(item.product.id,item.quantity-1)
                                        ">-</button>
                                      </div>
                                      <input type="number" class="form-control text-center px-0 py-0 quantitybtn"
                                        v-model="item.quantity" disabled>
                                      <div class="input-group-append">
                                        <button class="btn btn-secondary" type="button" @click=
                                        "changeQuantity(item.product.id,item.quantity + 1)">
                                        +</button>
                                      </div>
                                    </div>
                              </td>
                              <td class="align-middle text-center">{{ item.product.price }}</td>
                              <td class="align-middle text-center">{{ item.product.price*item.quantity }}</td>
                          </tr>
                      </tbody>
                  </table>
                  <ul class="d-flex flex-column align-items-end pl-0">
                    <li class="mb-4">
                      <div class="input-group">
                        <input type="text" id="coupon" name="coupon"
                            class="form-control float-right text-right w-50"
                            placeholder="請輸入優惠券序號" v-model="form.coupon">
                            <div class="input-group-append">
                              <button type="button" class="btn btn-outline-primary font-weight-bold"
                              @click="searchCoupon">使用優惠券</button>
                            </div>
                      </div>
                    </li>
                    <li class="w-100 pt-4 pb-2 mb-4 text-right textli" v-if="couponMoneySaved !== 0">
                      <del>總計：{{ cartTotal }} 元</del>
                      <p class="font-weight-bold text-danger mb-4">折扣：- {{ couponMoneySaved }}  元 ( {{ 100 - couponPercent }}% 折扣 )</p>
                      <div class="d-flex justify-content-between">
                        <p class="h4 ">總計：</p>
                        <p class="h4">{{ cartTotal - couponMoneySaved }} 元</p>
                      </div>
                    </li>
                    <li class="w-100 pt-4 pb-2 my-4 textli" v-else>
                      <div class="d-flex justify-content-between">
                        <p class="h4 ">總計：</p>
                        <p class="h4 ">{{ cartTotal }} 元</p>
                      </div>
                    </li>
                    <li>
                      <button type="button" class="btn btn-primary" @click="showForm">買單去</button>
                    </li>
                  </ul>
              </div>
          </div>
          <div id="form" class="row py-4 d-none">
              <div class="col-12 col-md-8 mx-auto form py-4 px-4">
                  <validation-observer v-slot="{ invalid }">
                      <form @submit.prevent="createOrder">
                          <div class="form-group">
                              <validation-provider rules="required" v-slot="{ errors, classes }">
                                  <label for="name">收件人姓名</label>
                                  <span class="text-danger">*</span>
                                  <input id="name" type="text" name="收件人姓名" class="form-control" :class="classes" v-model="form.name">
                                  <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                              </validation-provider>
                          </div>
                          <div class="form-group">
                              <validation-provider rules="email|required" v-slot="{ errors,classes }">
                              <label for="email">信箱</label>
                              <span class="text-danger">*</span>
                              <input type="email" name="信箱" id="email" class="form-control" :class="classes" v-model="form.email">
                              <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                              </validation-provider>
                          </div>
                          <div class="form-group">
                              <validation-provider rules="min:8|required" v-slot="{ errors,classes }">
                                  <label for="tel">電話</label>
                                  <span class="text-danger">*</span>
                                  <input type="tel" name="電話" id="tel" class="form-control" :class="classes" v-model="form.tel">
                                  <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                              </validation-provider>
                          </div>
                          <div class="form-group">
                          <validation-provider rules="required" v-slot="{ errors,classes }">
                              <label for="address">地址</label>
                              <span class="text-danger">*</span>
                              <input type="text" name="地址" id="address" class="form-control" :class="classes" v-model="form.address">
                              <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                          </validation-provider>
                          </div>
                          <div class="form-group">
                              <validation-provider rules="required" v-slot="{ errors,classes }">
                                  <label for="payment">購買方式</label>
                                  <span class="text-danger">*</span>
                                  <select name="購買方式" id="payment" class="form-control" :class="classes" v-model="form.payment">
                                      <option value="" disabled>請輸入付款方式</option>
                                      <option v-for="(item, index) in payment" :key="index" :value="item">{{ item }}</option>
                                  </select>
                                  <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                              </validation-provider>
                          </div>
                          <div class="form-group">
                              <label for="message">留言</label>
                              <textarea name="留言" id="message" class="form-control" v-model="form.message"></textarea>
                          </div>
                          <div class="d-flex justify-content-between">
                              <button type="button" class="btn btn-outline-primary border-0" @click="returnToCartlist">
                                <font-awesome-icon class="mr-2" :icon="['fas','angle-left']" />
                                返回
                                </button>
                              <button type="submit" class="btn btn-primary" :disabled="invalid">送出訂單</button>
                          </div>
                      </form>
                  </validation-observer>
              </div>
          </div>
          <div id="thx" class="row py-4 thx d-none">
            <div class="col-12 col-md-7 col-lg-6 text-center py-4 px-4">
              <div class="txt">
                <p class="h2 my-4">訂單建立成功</p>
                <p class="my-4">謝謝您的光臨！</p>
                <button type="button" class="btn btn-primary px-5 py-2" @click="toProducts">繼續逛逛</button>
              </div>
            </div>
            <div class="d-none d-md-block col-md-5 col-lg-6 picture">
              <p class="w-100 text-white text-center pictureTxt">THANK<br>YOU</p>
            </div>
          </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import $ from 'jquery';
/* eslint-disable no-unused-vars */
export default {
  data() {
    return {
      isLoading: false,
      cart: {},
      cartTotal: 0,
      api: {
        uuid: '3f7b1d29-d350-4de5-92ca-9b0bdfb7ca45',
        apiPath: 'https://course-ec-api.hexschool.io/',
      },
      payment: ['WebATM', 'ATM', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
        coupon: '',
      },
      couponPercent: 0,
      couponMoneySaved: 0,
    };
  },
  methods: {
    getCart() {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.cartTotal = 0;
          this.isLoading = false;
          this.cart = res.data.data;
          this.cart.forEach((item) => {
            this.cartTotal += item.product.price * item.quantity;
          });

          if (this.couponPercent !== 0) {
            this.couponMoneySaved = this.cartTotal
             - (parseInt((this.cartTotal / 100) * this.couponPercent, 10));
          }
        })
        .catch((err) => {
          this.isLoading = false;
        });
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
    delProduct(id) {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping/${id}`;

      this.isLoading = true;

      this.$http.delete(url)
        .then((res) => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          this.getCart();
        });
    },
    delProducts() {
      const url = `${this.api.apiPath}api/${this.api.uuid}/ec/shopping/all/product`;

      this.isLoading = true;

      this.$http.delete(url)
        .then((res) => {
          this.isLoading = false;
          this.getCart();
        })
        .catch((err) => {
          this.isLoading = false;
          this.getCart();
        });
    },
    searchCoupon() {
      if (this.form.coupon === '') {
        this.$swal.fire({
          icon: 'error',
          title: '請輸入優惠券序號！',
          text: '',
          confirmButtonColor: '#B38C4D',
        }).then((clicked) => {
          if (clicked) {
            this.form.coupon = '';
            this.couponPercent = 0;
            this.couponMoneySaved = 0;
            this.getCart();
          }
        });
      } else {
        const url = `${this.api.apiPath}api/${this.api.uuid}/ec/coupon/search`;
        this.isLoading = true;

        this.$http.post(url, { code: this.form.coupon })
          .then((res) => {
            this.isLoading = false;

            this.couponPercent = res.data.data.percent;
            this.getCart();
          })
          .catch((err) => {
            this.isLoading = false;
            this.$swal.fire({
              icon: 'error',
              title: '無此優惠券代碼！',
              text: '請再確認一次',
              confirmButtonColor: '#B38C4D',
            }).then((clicked) => {
              if (clicked) {
                this.form.coupon = '';
                this.couponPercent = 0;
                this.couponMoneySaved = 0;
                this.getCart();
              }
            });
          });
      }
    },
    createOrder() {
      if (Object.keys(this.cart).length === 0) {
        this.$swal.fire({
          icon: 'error',
          title: '您的購物車是空的喔！',
          text: "Let's Go Shopping！",
          confirmButtonColor: '#B38C4D',
        }).then((clicked) => {
          if (clicked) {
            this.$router.push('/products');
          }
        });
      } else {
        const url = `${this.api.apiPath}api/${this.api.uuid}/ec/orders`;
        this.isLoading = true;

        this.$http.post(url, this.form)
          .then((res) => {
            this.isLoading = false;

            this.couponPercent = res.data.data.percent;

            $('#form').removeClass('d-block');
            $('#form').addClass('d-none');

            $('#thx').removeClass('d-none');
            $('#thx').addClass('d-flex');

            $('#stepThreeArea').removeClass('stepsstandby');
            $('#stepThreeArea').addClass('stepsING');
            $('#stepThreeIcon').addClass('bg-primary');
            $('html,body').animate({ scrollTop: 200 }, 'slow');
          });
      }
    },
    showForm() {
      $('#cartlist').removeClass('d-block');
      $('#cartlist').addClass('d-none');

      $('#form').removeClass('d-none');
      $('#form').addClass('d-block');

      $('#stepTwoArea').removeClass('stepsstandby');
      $('#stepTwoArea').addClass('stepsING');
      $('#stepNext').removeClass('stepsstandby');
      $('#stepNext').addClass('stepsING');
      $('#stepTwoIcon').addClass('bg-primary');
      $('html,body').animate({ scrollTop: 200 }, 'slow');
    },
    returnToCartlist() {
      $('#form').removeClass('d-block');
      $('#form').addClass('d-none');

      $('#cartlist').removeClass('d-none');
      $('#cartlist').addClass('d-block');

      $('#stepTwoArea').removeClass('stepsING');
      $('#stepTwoArea').addClass('stepsstandby');
      $('#stepNext').removeClass('stepsING');
      $('#stepNext').addClass('stepsstandby');
      $('#stepTwoIcon').removeClass('bg-primary');
      $('html,body').animate({ scrollTop: 200 }, 'slow');
    },
    toProducts() {
      this.$router.push('/products');
    },
  },
  created() {
    this.getCart();
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  },
};
</script>
