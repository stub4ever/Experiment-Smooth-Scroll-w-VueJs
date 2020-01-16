<template>
  <div>
    <div :class="{'white': hasDarkSection}" class="progress" ref="progress"></div>

    <header :class="{'white': hasDarkSection}">
      <h1>Jenna Buchholz Photography</h1>
      <div class="client">{{ clientName }}</div>
      <div class="page">{{ sectionName }}</div>

      <!-- when we scroll the page, update the pixels tag to be how far we've scrolled -->
      <div class="pixels">{{ pageOffset }}</div>
    </header>

    <base-section
      ref="section"
      client-name="Alter Ego"
      section-name="1 / 2"
      >
      <template v-slot:content>
        <div class="square" data-parallax="0.1"></div>
        <img :src="require('@/assets/image1.jpg')">
        <div class="circle" data-parallax="-0.1"></div>
      </template>
    </base-section>

    <base-section
      ref="section"
      client-name="Valencia Clothing"
      section-name="2 / 2"

      data-is-dark
      >
      <template v-slot:content>
        <div class="circle" data-parallax="-0.2"></div>
        <img :src="require('@/assets/image2.jpg')">
        <div class="square" data-parallax="0.2"></div>
      </template>
    </base-section>

    <base-section
      client-name="SuperHi"
      section-name="1 / 3"

      >
      <template v-slot:content>
        <div class="circle" data-parallax="-0.3"></div>
        <img :src="require('@/assets/image3.jpg')">
        <div class="square" data-parallax="0.3"></div>
      </template>
    </base-section>

    <base-section
      client-name="10x Banking"
      section-name="4 / 12"
      >
      <template v-slot:content>
        <div class="circle" data-parallax="0.25"></div>
        <img :src="require('@/assets/image4.jpg')">
        <div class="square" data-parallax="0.1"></div>
      </template>
    </base-section>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSection from '@/components/BaseSection.vue'
import { pageOnScrollMixin } from '@/mixins/pageOnScrollMixin'
import { progressOnScrollMixin } from '@/mixins/progressOnScrollMixin'

import { bus } from '@/main'

export default {
  name: 'Basic',
  mixins: [pageOnScrollMixin, progressOnScrollMixin],
  components: {
    BaseSection
  },
  data () {
    return {
      hasDarkSection: false,
      // Content
      clientName: 'Alter Ego',
      sectionName: '1 / 2'
    }
  },
  created () {
    bus.$on('updateClientName', (data) => { this.clientName = data })
    bus.$on('updateSectionName', (data) => { this.sectionName = data })
    bus.$on('updateDarkSection', (data) => { this.hasDarkSection = data })
  }
}
</script>

<style lang="css" scoped>
  @font-face {
    font-family:  "HK Grotesk";
    src: url('~@/assets/hk-grotesk.woff2'), url('~@/assets/hk-grotesk.woff');
  }

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

  header.white {
    color: #ffffff;
  }

  div.progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 10px;
    background-color: #333333;
    z-index: 1;
    transition: background-color 0.5s;
  }

  div.progress.white {
    background-color: #ffffff;
  }

</style>
