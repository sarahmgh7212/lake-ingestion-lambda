<template>
  <div class="mdi-icon">
    <svg
      viewBox="0 0 24 24"
      :style="svgStyle"
    >
      <path 
        :d="icon"
        :style="pathStyle"
      />
    </svg>
  </div>
</template>

<script>
// import Vue from 'vue';
// import { GenericObject } from '../../common';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    color: {
      type: String,
    },

    size: {
      type: String,
      default: '1.5rem',
    },
  },

  computed: {
    pathStyle() {
      const style = {};
      
      if (this.color !== null) {
        style.fill = this.color;
      }

      return style;
    },

    svgStyle() {
      return {
        width: this.size,
        height: this.size,
      }
    },
  },
}
</script>