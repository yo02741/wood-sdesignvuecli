<template>
    <button type="button" id="topbtn" class="topbtn bg-primary" @click="totop">
        <font-awesome-icon :icon="['fas','angle-up']" />
    </button>
</template>

<script>
import $ from 'jquery';

$(window).scroll(() => {
  const scrollVal = $(window).scrollTop();
  console.log(scrollVal);
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
