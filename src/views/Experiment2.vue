<template>
  <div>
    <header>
      <img :src="require('@/assets/logo.svg')" alt="Words by Womxn">
    </header>

    <base-section2 :section-index=0>
      <template v-slot:content>
        <img :src="require('@/assets/laverne.jpg')">
        <div>
          <h2>
            “Your lives matter. Your voices matter. Your stories matter.”
          </h2>
          <p>
            Laverne Cox
          </p>
        </div>
      </template>
    </base-section2>

    <base-section2 :section-index=1 has-bg-color="#ffd5b1">
      <template v-slot:content>
        <img :src="require('@/assets/malala.jpg')">
      <div>
        <h2>
          “If one man can destroy everything, why can one girl change it?”
        </h2>
        <p>
          Malala Yousafzai
        </p>
      </div>
      </template>
    </base-section2>

    <base-section2 :section-index=2 has-bg-color="#eeeeee">
      <template v-slot:content>
        <img :src="require('@/assets/maya.jpg')">
        <div>
          <h2>
            “You may not control all the events that happen to you, but you can decide not to be reduced by them.”
          </h2>
          <p>
            Maya Angelou
          </p>
        </div>
      </template>
    </base-section2>

    <base-section2 :section-index=3>
      <template v-slot:content>
        <img :src="require('@/assets/roxane.jpg')">
        <div>
          <h2>
            “[Unlikeable women] accept the consequences of their choices, and those consequences become stories worth reading.”
          </h2>
          <p>
            Roxane Gay
          </p>
        </div>
      </template>
    </base-section2>

    <div class="stamps"></div>
    <!-- this is where our stamps go -->
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSection2 from '@/components/BaseSection2.vue'
import { pageOnScrollMixin } from '@/mixins/pageOnScrollMixin'
// import { bus } from '@/main'

export default {
  name: 'Basic',
  mixins: [pageOnScrollMixin],
  components: { BaseSection2 },
  data () {
    return {
    }
  },
  created () {
    // bus.$on('updateClientName', (data) => { this.clientName = data })
  },
  mounted () {
  }
}
</script>

<style lang="css" scoped>
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg);}
  }

  @font-face {
    font-family: "Syne";
    src: url('~@/assets/syne-regular.woff2'), url('~@/assets/syne-regular.woff');
  }

  @font-face {
    font-family:  "Syne Extra";
    src: url('~@/assets/syne-extra.woff2'), url('~@/assets/syne-extra.woff');
  }

  body {
    font-family: "Syne", Arial;
    font-size: 32px;
    line-height: 1.25;

    background-color: #f4e6d8;
    color: #15403d;
    margin: 240px auto 240px auto;
    max-width: 1120px;

    overflow-x: hidden;

    transition: background-color 1s;
  }

  p {
    font-family: "Syne Extra";
    color: #e5745d;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 32px;
    text-align: center;
    z-index: 1;
  }

  header img {
    width: 136px;
    transition: width 0.5s;
  }

  header.scrolled img {
    width: 64px;
  }

  section .content {
    margin: 80px 0 80px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  section:nth-child(even) .content {
    flex-direction: row-reverse;
  }

  section div {
    padding: 40px;
    position: relative;
  }

  section img {
    position: relative;
  }

  div.stamps {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
  }

  div.stamps img {
    position: absolute;
    transform: translate(-50%, -50%);
    animation: spin 30s linear infinite;
  }
</style>
