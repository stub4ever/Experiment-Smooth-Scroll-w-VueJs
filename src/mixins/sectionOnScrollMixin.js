export const sectionOnScrollMixin = {
  data () {
    return {
      topSection: 0,
      midSection: 0
    }
  },
  computed: {
    // how far away is the section from the visible area of the page
    distanceToSection () {
      return this.pageMidOffset - this.midSection
    }
  },
  mounted () {
    // Set props to find the middle of each section
    this.topSection = this.$refs.baseSection.offsetTop
    this.midSection = this.topSection + (this.$refs.baseSection.offsetHeight / 2)
  }
}
