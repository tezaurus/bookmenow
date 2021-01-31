<template>
  <div>
    <loading v-if="isLoading" />

    <div class="page-wrapper" v-else>
      <div v-if="hotel">
        <h1>{{ hotel.title }}</h1>

        <p>{{ hotel.description }}</p>

        <p><img :src="hotel.photo" alt="Hotel photo"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import HotelModel from '@/models/HotelModel'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Loading
  }
})
export default class Hotel extends Vue {
  private id: string;

  constructor() {
    super();

    this.id = this.$route.params.id;
  }

  created() {
    this.fetchHotel();
  }

  get isLoading(): boolean {
    return this.$store.getters.isLoading;
  }

  get hotel(): HotelModel {
    return this.$store.getters.hotel;
  }

  fetchHotel(): void {
    this.$store.dispatch('loadingStarted')

    console.log('start fetchHotel')

    this.$store.dispatch('fetchHotel', this.id)
      .then(() => {
        console.log('end fetchHotel');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.$store.dispatch('loadingStopped')
        }, 600);
      })
  }
}
</script>

<style scoped lang="scss">

</style>