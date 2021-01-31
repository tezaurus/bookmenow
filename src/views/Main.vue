<template>
  <div>
    <div class="list-group">
      <div class="list-group-item" v-for="hotel in hotels" :key="hotel.id">
        <div class="img-wrapper">
          <img :src="hotel.photo" alt="Hotel photo">
        </div>

        <div class="info-wrapper">
          <p class="">{{ hotel.title }}</p>
          <p class="subtitle">{{ hotel.addr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Hotel from '@/models/Hotel'
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
  constructor() {
    super();
  }

  get hotels(): Array<Hotel> {
    return this.$store.getters.hotels;
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
        @include text-overflow;

        &.title {
          font-weight: bold;
        }

        &.subtitle {
          color: #939393;
        }
      }
    }
  }
}
</style>