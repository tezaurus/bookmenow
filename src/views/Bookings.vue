<template>
  <div>
    <div class="page-wrapper">
      <h1>Текущие брони</h1>

      <div class="bookings" v-if="bookings.length">
        <div class="booking" v-for="booking in bookings" :key="booking.id">
          <div class="card">
            <div class="card-header">{{ booking.hotel.title }}</div>

            <div class="card-body">
              <p>Имя: {{ booking.name }}</p>
              <p>E-mail: {{ booking.email }}</p>
              <p>Телефон: {{ booking.phone }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bookings" v-else>
        <p>Еще нет ни одной текущей брони, <router-link to="/">выберите отель</router-link>, чтобы выполнить бронь</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Bookings extends Vue {
  get bookings() {
    return this.$store.getters.bookings;
  }
}
</script>

<style scoped>

</style>