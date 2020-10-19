<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item mx-0" :class="{ disabled : 1 === pages.current_page}">
          <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          </a>
      </li>

      <!-- eslint-disable-next-line max-len -->
      <li class="page-item mx-0" v-for="( i , index ) in pages.total_pages" :key="index" :class="{ active : i === pages.current_page }">
          <a class="page-link" href="#" @click.prevent="updatePage(i)">{{ i }}</a>
      </li>

      <li class="page-item mx-0" :class="{ disabled : pages.total_pages === pages.current_page}">
          <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          </a>
      </li>
    </ul>
</nav>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['pages'],
  methods: {
    updatePage(pageNum) {
      this.$emit('update', pageNum);
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    },
  },
};
</script>
