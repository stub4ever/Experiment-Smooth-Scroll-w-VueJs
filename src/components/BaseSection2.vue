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
// import { bus } from '@/main'
import { pageOnScrollMixin } from '@/mixins/pageOnScrollMixin'
import { sectionOnScrollMixin } from '@/mixins/sectionOnScrollMixin'

export default {
  name: 'BaseSection',
  mixins: [pageOnScrollMixin, sectionOnScrollMixin],
  props: {
    sectionIndex: {
      type: Number,
      default: 0
    },
    hasBgColor: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    updateBgColor () {
      const bodyTag = document.querySelector('body')
      // check the background
      if (this.distanceToSection > -100) {
        const dataBackground = this.$refs['baseSection'].getAttribute('data-background')
        bodyTag.style.backgroundColor = dataBackground
      }
    },
    updateParallaxMovement () {
      // pick the tags to parallax
      const image = this.$refs['baseSection'].querySelector('img')
      const contentTag = this.$refs['baseSection'].querySelector('div')
      // weight down this distance
      let rotation = this.distanceToSection / 100
      let contentDist = -1 * this.distanceToSection / 2

      // for all the even sections, rotate the other way
      // is the index divisible by two
      // is the index's remainder zero?
      // the modulo operator 5 % 2 = 1, 4 % 2 = 0
      if (this.sectionIndex % 2 === 1) {
        rotation = rotation * -1
      }

      // apply some parallax
      image.style.transform = `rotate(${rotation}deg)`

      contentTag.style.top = `${contentDist}px`
      contentTag.style.transform = `rotate(${-1 * rotation}deg)`
    }
  },
  created () {
    // Tracking how much we scroll the page
    // Scroll position and update function
    window.addEventListener('scroll', this.$utils.throttle(() => {
      this.updateBgColor()
    }, 400))
  },
  destroyed () {
    window.removeEventListener('scroll', () => this.updateBgColor())
    window.removeEventListener('scroll', () => this.updateParallaxMovement())
    window.removeEventListener('resize', () => this.updateParallaxMovement())
  },
  mounted () {
    window.addEventListener('scroll', () => this.updateParallaxMovement())
    window.addEventListener('resize', () => this.updateParallaxMovement())
  }
}
</script>

<style lang="scss" scoped>
</style>
