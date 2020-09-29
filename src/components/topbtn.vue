<template>
  <div id="topbtn" class="topbtn">
    <button type="button" class="d-flex justify-content-center
    align-items-center bg-primary" @click="totop">
        <font-awesome-icon :icon="['fas','angle-up']" />
    </button>
  </div>
</template>

<script>
import $ from 'jquery';

$(window).scroll(() => {
  const scrollVal = $(window).scrollTop();
  if (scrollVal > 400) {
    $('#topbtn').fadeIn();
  } else {
    $('#topbtn').fadeOut();
  }
});

export default {
  methods: {
    totop() {
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    },
  },
  mounted() {
    $('#topbtn').hide();
  },
};
</script>
