export const progressOnScrollMixin = {
  methods: {
    // when we scroll the page, make a progress bar that track of the distance
    scrollProgressBar () {
      const bodyTag = document.querySelector('body')
      window.onscroll = () => {
        const pageHeight = bodyTag.getBoundingClientRect().height
        const totalScrollableDistance = pageHeight - window.innerHeight
        const percentage = this.pageOffset / totalScrollableDistance
        this.$refs['progress'].style.width = `${100 * percentage}%`
      }
    }
  },
  mounted () {
    this.scrollProgressBar()
  }
}
