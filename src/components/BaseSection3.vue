<template>
  <section
      :data-background="hasBgColor"
      ref="baseSection"
      >
      <div v-if="$slots.content" class="content">
        <slot name="content"></slot>
      </div>
  </section>
</template>

<script>
// https://github.com/codrops/SmoothScrollAnimations/
// import { bus } from '@/main'
import { pageOnScrollMixin } from '@/mixins/pageOnScrollMixin'
import { sectionOnScrollMixin } from '@/mixins/sectionOnScrollMixin'

export default {
  name: 'BaseSection',
  mixins: [pageOnScrollMixin, sectionOnScrollMixin],
  props: {

  },
  data () {
    return {
    }
  },
  methods: {

  },
  created () {
    // Tracking how much we scroll the page
    // Scroll position and update function
  },
  destroyed () {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
</style>
