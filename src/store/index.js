/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import $ from 'jquery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {
      uuid: '3f7b1d29-d350-4de5-92ca-9b0bdfb7ca45',
      apiPath: 'https://course-ec-api.hexschool.io/',
    },
    isLoading: false,
    products: [],
    pagination: {},
    category: [],
    categoryNow: '全部',
    tempProduct: {
      imageUrl: [],
      num: 0,
    },
    cart: [],
  },
  actions: {
    getProducts(context, pageNum = 1) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/products?page=${pageNum}`;
      context.commit('LOADING', true);
      context.commit('CATEGORYNOW', '全部');
      axios.get(url)
        .then((res) => {
          context.commit('LOADING', false);
          context.commit('PRODUCTS', res.data.data);
          context.commit('PAGINATION', res.data.meta.pagination);
          context.commit('CATEGORY');
        })
        .catch((err) => {
          context.commit('LOADING', false);
        });
    },
    getProductsCategory(context, category) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/products?page=1`;
      context.commit('LOADING', true);
      context.commit('CATEGORYNOW', category);
      axios.get(url)
        .then((res) => {
          context.commit('LOADING', false);

          context.commit('PRODUCTS', res.data.data);
          context.commit('PRODUCTS_WITHCATEGORY', category);

          context.commit('PAGINATION', {});
        })
        .catch((err) => {
          context.commit('LOADING', false);
        });
    },
    getProduct(context, id) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/product/${id}`;
      context.commit('LOADING', true);
      axios.get(url)
        .then((res) => {
          context.commit('LOADING', false);
          context.commit('TEMPPRODUCT', res.data.data);
          $('#detailProductModal').modal('show');
        })
        .catch((err) => {
          context.commit('LOADING', false);
        });
    },
    change(context) {
      context.commit('TEMPPRODUCT_CHANGENUM', parseInt($('#num').val(), 10));
    },
    getCart(context) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/shopping`;
      context.commit('LOADING', true);
      axios.get(url)
        .then((res) => {
          context.commit('LOADING', false);
          context.commit('CART', res.data.data);
        })
        .catch((err) => {
          context.commit('LOADING', false);
        });
    },
    addToCart(context, payload) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/shopping`;

      let repeat = false;
      context.state.cart.forEach((item) => {
        if (item.product.id === payload.id) {
          repeat = true;
        }
      });

      // 遠端的購物車是空的 或是 此物件沒在購物車內 -> 新增至購物車
      if (Object.keys(context.state.cart).length === 0 || repeat === false) {
        const cart = {
          product: payload.id,
          quantity: payload.num,
        };

        context.commit('LOADING', true);

        axios.post(url, cart)
          .then((res) => {
            context.commit('LOADING', false);
            context.dispatch('getCart');
            Vue.swal.fire({
              icon: 'success',
              title: '已加入購物車！',
              text: '',
              confirmButtonColor: '#B38C4D',
            });
          })
          .catch((err) => {
            context.commit('LOADING', false);
            context.dispatch('getCart');
          });
      } else {
        // 遠端的購物車內已有 此物件 -> 將此項商品疊加上去
        context.state.cart.forEach((item) => {
          if (item.product.id === payload.id) {
            // eslint-disable-next-line no-param-reassign
            payload.num += item.quantity;
            context.dispatch('changeQuantity', payload);
            Vue.swal.fire({
              icon: 'success',
              title: '已加入購物車！',
              text: '',
              confirmButtonColor: '#B38C4D',
            });
          }
        });
      }

      repeat = false;

      $('#detailProductModal').modal('hide');
    },
    changeQuantity(context, payload) {
      const url = `${context.state.api.apiPath}api/${context.state.api.uuid}/ec/shopping`;

      const cart = {
        product: payload.id,
        quantity: payload.num,
      };

      context.commit('LOADING', true);

      axios.patch(url, cart)
        .then((res) => {
          context.commit('LOADING', false);
          context.dispatch('getCart');
        })
        .catch((err) => {
          context.commit('LOADING', false);
          context.dispatch('getCart');
        });
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCTS_WITHCATEGORY(state, payload) {
      state.products = state.products.filter((item) => item.category === payload);
    },
    TEMPPRODUCT(state, payload) {
      state.tempProduct = payload;
      // this.$set
      Vue.set(state.tempProduct, 'num', 0);
    },
    TEMPPRODUCT_CHANGENUM(state, payload) {
      state.tempProduct.num = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    CATEGORY(state) {
      state.products.forEach((item) => {
        state.category.push(item.category);
      });
      state.category = state.category.filter((item, index, arr) => arr.indexOf(item) === index);
    },
    CATEGORYNOW(state, payload) {
      state.categoryNow = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    products(state) {
      return state.products;
    },
    tempProduct(state) {
      return state.tempProduct;
    },
    pagination(state) {
      return state.pagination;
    },
    category(state) {
      return state.category;
    },
    categoryNow(state) {
      return state.categoryNow;
    },
  },
  modules: {

  },
});
