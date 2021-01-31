<template>
  <div>
    <div class="list-group">
      <div class="list-group-item" v-for="hotel in hotels" :key="hotel.id" @click="gotoHotel(hotel.id)">
        <div class="img-wrapper">
          <img :src="hotel.photo" alt="Hotel photo">
        </div>

        <div class="info-wrapper">
          <p class="">{{ hotel.title }}</p>
          <p class="subtitle">{{ hotel.description }}</p>
        </div>
      </div>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import HotelModel from '@/models/HotelModel'
import InfiniteLoading from 'vue-infinite-loading';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Loading,
    InfiniteLoading
  }
})
export default class Main extends Vue {
  constructor() {
    super();
  }

  get hotels(): Array<HotelModel> {
    return this.$store.getters.hotels;
  }

  gotoHotel(id: string): void {
    this.$router.push({ name: 'hotel', params: { id: id } });
  }

  infiniteHandler($state: any): void {
    console.log('hit the bottom');
    console.log('start fetchHotels');

    this.$store.dispatch('fetchHotels')
      .then((response) => {
        if (response === 'enough') {
          $state.complete();

          console.log('end fetchHotels and enough');
        } else {
          $state.loaded();

          console.log('end fetchHotels');
        }
      })
      .catch((error) => {
        console.log(error);

        $state.complete();
      })
  }
}
</script>

<style scoped lang="scss">
@mixin text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-group {
  border-top: solid #ddd 1px;

  .list-group-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid #ddd 1px;
    padding: 8px;

    .img-wrapper {
      margin-right: 12px;
    }

    .info-wrapper {
      min-width: 0;

      p {
        margin: 0;
        font-size: 16px;
        @include text-overflow;

        &.title {
          font-weight: bold;
        }

        &.subtitle {
          color: #939393;
          font-size: 14px;
        }
      }
    }
  }
}
</style>