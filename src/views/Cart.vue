<template>
    <div id="app">
        <!-- eslint-disable max-len -->
        <!-- spinner/dots/bars -->
        <loading loader="bars"
                color="#86FFF8"
                background-color="#B38C4D"
                :active.sync="isLoading">
        </loading>

        <div class="jumbotron jumbotron-fluid cartjumbotron">
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

        <div class="container py-5" style="min-height: 500px;">
            <div class="row cartlist py-4 d-none" :class="{'d-block' : cart !== {}  }">
                <div class="col-12">
                    <div class="text-right">
                        <button class="btn btn-outline-danger my-3" @click="delProducts">
                            <font-awesome-icon class="mr-1" :icon="['fas', 'trash-alt']" />
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
                                <th width="75" class="text-center">單位</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart" :key="item.id">
                                <td class="align-middle">
                                    <button class="btn btn-outline-danger
                                    btn-sm" @click="delProduct(item.product.id)">
                                      <font-awesome-icon class="mr-1" :icon="['fas', 'trash-alt']"/>
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
                                <td class="align-middle text-center">{{ item.product.unit }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3">
                                    <input type="text" id="coupon" name="coupon"
                                    class="form-control float-right text-right w-50"
                                    placeholder="請輸入優惠券序號" v-model="form.coupon">
                                </td>
                                <td colspan="2">
                                    <button type="button" class="btn btn-primary"
                                     @click="searchCoupon">使用優惠券</button>
                                </td>
                            </tr>
                            <tr v-if="couponMoneySaved !== 0">
                                <td colspan="3" class="text-right"><del>總計：</del></td>
                                <td colspan="2" class="text-right"><del>{{ cartTotal }} 元</del></td>
                            </tr>
                            <tr v-else>
                                <td colspan="3" class="text-right">總計：</td>
                                <td colspan="2" class="text-right">{{ cartTotal }}  元</td>
                            </tr>
                            <tr v-if="couponMoneySaved !== 0">
                                <td colspan="3" class="text-right text-secondary">折扣：</td>
                                <td colspan="2" class="text-right text-secondary">
                                    - {{ couponMoneySaved }}  元 ( {{ 100 - couponPercent }}% 折扣 )</td>
                            </tr>
                            <tr v-if="couponMoneySaved !== 0">
                                <td colspan="3" class="text-right">總計：</td>
                                <td colspan="2" class="text-right text-danger h3">
                                    {{ cartTotal - couponMoneySaved }}  元</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="row form py-4">
                <div class="col-12 col-md-8 mx-auto">
                    <validation-observer v-slot="{ invalid }">
                        <form @submit.prevent="createOrder">
                            <div class="form-group">
                                <validation-provider rules="required" v-slot="{ errors, classes }">
                                    <label for="name">收件人姓名</label>
                                    <span class="text-danger">*</span>
                                    <input id="name" type="text" class="form-control" :class="classes" v-model="form.name">
                                    <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="form-group">
                                <validation-provider rules="email|required" v-slot="{ errors,classes }">
                                <label for="email">信箱</label>
                                <span class="text-danger">*</span>
                                <input type="email" name="email" id="email" class="form-control" :class="classes" v-model="form.email">
                                <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="form-group">
                                <validation-provider rules="min:8|required" v-slot="{ errors,classes }">
                                    <label for="tel">電話</label>
                                    <span class="text-danger">*</span>
                                    <input type="tel" name="tel" id="tel" class="form-control" :class="classes" v-model="form.tel">
                                    <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="form-group">
                            <validation-provider rules="required" v-slot="{ errors,classes }">
                                <label for="address">地址</label>
                                <span class="text-danger">*</span>
                                <input type="text" name="address" id="address" class="form-control" :class="classes" v-model="form.address">
                                <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                            </validation-provider>
                            </div>
                            <div class="form-group">
                                <validation-provider rules="required" v-slot="{ errors,classes }">
                                    <label for="payment">購買方式</label>
                                    <span class="text-danger">*</span>
                                    <select name="payment" id="payment" class="form-control" :class="classes" v-model="form.payment">
                                        <option value="" disabled>請輸入付款方式</option>
                                        <option v-for="(item, index) in payment" :key="index" :value="item">{{ item }}</option>
                                    </select>
                                    <span class="text-danger" v-if="errors[0]">{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="form-group">
                                <label for="message">留言</label>
                                <textarea name="message" id="message" class="form-control" v-model="form.message"></textarea>
                            </div>
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary" :disabled="invalid">送出訂單</button>
                            </div>
                        </form>
                    </validation-observer>
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

            this.$swal.fire({
              icon: 'success',
              title: '購物成功！',
              text: '謝謝您的光臨！',
              confirmButtonColor: '#B38C4D',
            }).then((clicked) => {
              if (clicked) {
                this.$router.push('/');
              }
            });
          })
          .catch((err) => {
            this.isLoading = false;
            this.getCart();
          });
      }
    },
  },
  created() {
    this.getCart();
  },
};
</script>
