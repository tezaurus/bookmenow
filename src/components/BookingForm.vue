<template>
  <div>
    <div class="card card-transparent" v-if="sended">
      <div class="card-header">Поздравляем, бронь успешно отправлена!</div>

      <div class="card-body">
        <form>
          <div class="btn-wrapper">
            <button class="btn" @click.prevent="gotoBookings">Текущие брони</button>
            <button class="btn" @click.prevent="ok">OK</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card card-transparent" v-else>
      <div class="card-header">Заполните форму для бронирования отеля</div>

      <div class="card-body">
        <form @submit.prevent="submitBooking">
          <div class="form-group">
            <label for="">E-mail</label>
            <input type="text" class="form-control" name="email" v-model="email">
            <div class="form-control-text form-control-text-error" v-show="!email">Поле обязательно для заполнения</div>
          </div>

          <div class="form-group">
            <label for="">Имя гостя</label>
            <input type="text" class="form-control" name="name" v-model="name">
            <div class="form-control-text form-control-text-error" v-show="!name">Поле обязательно для заполнения</div>
          </div>

          <div class="form-group">
            <label for="">Телефон гостя</label>
            <input type="text" class="form-control" name="phone" v-model="phone">
            <div class="form-control-text form-control-text-error" v-show="!phone">Поле обязательно для заполнения</div>
          </div>

          <div class="btn-wrapper">
            <button class="btn" @click.prevent="fillForm">Заполнить форму</button>
            <button class="btn" type="submit" :disabled="!fieldsIsValid">Забронировать</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HotelModel from '@/models/HotelModel'
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BookingForm extends Vue {
  private name = '';
  private email = '';
  private phone = '';
  private sended = false;

  get fieldsIsValid(): boolean {
    return this.email.length > 0 && this.name.length > 0 && this.phone.length > 0;
  }

  get hotel(): HotelModel {
    return this.$store.getters.hotel;
  }

  submitBooking() {
    this.$store.dispatch('loadingStarted')

    console.log('start submitBookig');

    const booking = {
      id: Date.now().toString(),
      hotel: this.hotel,
      name: this.name,
      email: this.email,
      phone: this.phone,
    }

    this.$store.dispatch('sendBooking', booking)
      .then(() => {
        this.resetForm();

        this.sended = true;

        console.log('end submitBookig');
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.$store.dispatch('loadingStopped');
        });
      });
  }

  ok(): void {
    this.sended = false;
  }

  gotoBookings() {
    this.$router.push({ name: 'bookings' });
  }

  fillForm() {
    this.email = 'jobguess@mail.ru';
    this.name = 'Азаров Сергей'
    this.phone = '+7 (909) 452-35-08';
  }

  resetForm() {
    this.email = this.name = this.phone = '';
  }
}
</script>

<style scoped>

</style>