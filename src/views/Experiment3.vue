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

</style>
