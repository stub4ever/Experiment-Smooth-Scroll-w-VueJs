<template>
  <section
      :data-client="clientName"
      :data-section="sectionName"
      ref="baseSection"
      >
      <div v-if="$slots.content" class="content">
        <slot name="content"></slot>
      </div>
  </section>
</template>

<script>
import { bus } from '@/main'
import { pageOnScrollMixin } from '@/mixins/pageOnScrollMixin'
import { sectionOnScrollMixin } from '@/mixins/sectionOnScrollMixin'

export default {
  name: 'BaseSection',
  mixins: [pageOnScrollMixin, sectionOnScrollMixin],
  props: {
    clientName: {
      type: String,
      default: '',
      required: true
    },
    sectionName: {
      type: String,
      default: '',
      required: true
    },
    parallaxSpeedVal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      parallaxTags: null
    }
  },
  methods: {
    updateOnSection () {
      if (this.$refs['baseSection'].offsetTop - 52 <= this.pageOffset) {
        bus.$emit('updateClientName', this.clientName)
        bus.$emit('updateSectionName', this.sectionName)

        // It will update the color in the header
        if (this.$refs['baseSection'].hasAttribute('data-is-dark')) {
          bus.$emit('updateDarkSection', true)
        } else {
          bus.$emit('updateDarkSection', false)
        }
      }
    },
    updateOnParallax () {
      // loop over each parallaxed tag
      this.parallaxTags.forEach(tag => {
        const speed = parseFloat(tag.getAttribute('data-parallax'))
        tag.style.transform = `translate(0, ${this.distanceToSection * speed}px)`
      })
    }
  },
  created () {
    // Tracking how much we scroll the page
    // Scroll position and update function
    window.addEventListener('scroll', this.$utils.throttle(() => {
      this.updateOnSection()
    }, 400))
  },
  destroyed () {
    window.removeEventListener('scroll', () => this.updateOnSection())
    window.removeEventListener('scroll', () => this.updateOnParallax())
  },
  mounted () {
    this.parallaxTags = this.$refs['baseSection'].querySelectorAll(`[data-parallax]`)
    window.addEventListener('scroll', () => this.updateOnParallax())
  }
}
</script>

<style lang="scss" scoped>
  body {
    font-family: "HK Grotesk", Arial;
    font-size: 36px;
    line-height: 1.25;
    background-color: #ffffff;
    color: #333333;
  }

  header {
    position: fixed;
    top: 36px;
    left: 36px;
    z-index: 1;
    transition: color 0.5s;
  }

 section {
    background-color: #c8dee0;
    min-height: 100vh;
    padding: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.content {
    position: relative;
  }

  div.square {
    width: 100px;
    height: 100px;
    background-color: #d54156;

    position: absolute;
    top: 50px;
    left: -50px;
  }

  div.circle {
    width: 100px;
    height: 100px;
    background-color: #5982a0;

    position: absolute;
    bottom: 50px;
    right: -50px;

    border-radius: 50%;
  }

  div.content img {
    position: relative;
  }

  section.s2 {
    background-color: #c5c5c5;
  }

  section.s2 div.square {
    background-color: #d6ac35;
  }

  section.s2 div.circle {
    background-color: #be3c52;
  }

  section.s3 {
    background-color: #292121;
  }

  section.s3 div.square {
    background-color: #5f3736;
  }

  section.s3 div.circle {
    background-color: #6e5f67;
  }

  section.s4 {
    background-color: #f3f1f2;
  }

  section.s4 div.square {
    background-color: #d54156;
  }

  section.s4 div.circle {
    background-color: #5982a0;
  }
</style>
