export const pageOnScrollMixin = {
  data () {
    return {
      pageOffset: 0,
      pageMidOffset: 0,
      pageHitBottom: false
    }
  },
  methods: {
    updatePageOnScroll (e) {
      this.pageOffset = window.pageYOffset || document.documentElement.scrollTop
      this.pageMidOffset = this.pageOffset + (window.innerHeight / 2)

      // Check if a user has scrolled to the bottom
      let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
      if (bottomOfWindow) {
        this.pageHitBottom = true // replace it with your code
      }
    }
  },
  watch: {
    // pageOffset (val) { // add callbacks
    //   // this.callbackFunc()
    // }
  },
  created () {
    // Tracking how much we scroll the page
    // Scroll position and update function
    window.addEventListener('scroll', () => this.updatePageOnScroll())
  },
  destroyed () {
    window.removeEventListener('scroll', () => this.updatePageOnScroll())
  }
}
