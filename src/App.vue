<template>
  <div id="app">
    <div id="header">
      <div id="logo">
        bookMeNow
      </div>
    </div>

    <loading v-if="isLoading" />

    <router-view v-show="!isLoading" />

    <div id="footer">
      <div class="tabs">
        <div class="tab"><router-link to="/">Отели</router-link></div>
        <div class="tab">Заглушка</div>
        <div class="tab"><router-link to="/about">Что нового</router-link></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Loading,
  },
})
export default class App extends Vue {
  created() {
    this.fetchHotels();
  }

  get isLoading(): boolean {
    return this.$store.getters.isLoading;
  }

  fetchHotels(): void {
    this.$store.dispatch('loadingStarted');

    console.log('start fetchHotels')

    this.$store.dispatch('fetchHotels')
      .then(() => {
        console.log('end fetchHotels')
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.$store.dispatch('loadingStopped');
        }, 600);
      })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.2;
}

h1 {
  font-size: 22px;
}

h2 {
  font-size: 18px;
}

h3 {
  font-size: 16px;
}

p, li {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
}

ul, ol {
  li {
    margin-bottom: 8px;
  }

  *:last-child {
    margin-bottom: 0;
  }
}

img {
  vertical-align: bottom;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 640px;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 56px;
  overflow: hidden;
}

#header {
  position: fixed;
  height: 56px;
  top: 0;
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid #ddd 1px;
  background-color: #fff;
  box-shadow: 0 4px 6px -6px rgba($color: #000, $alpha: 0.2);
}

#logo {
  font-weight: 600;
  font-size: 22px;
  margin-left: 8px;
}

#nav {
  a {
    color: #2c3e50;
    margin-left: 16px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer {
  width: 640px;
  height: 56px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -4px 16px -4px rgba($color: #000, $alpha: 0.1);
}

.tabs {
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  .tab {
    flex-basis: 33.33%;
    text-align: center;
  }
}

.page-wrapper {
  padding: 16px 16px 0;
}

.text-wrapper {
  p + h2 {
    margin-top: 32px;
  }

  ul {
    padding-left: 32px;
    list-style: circle;
  }

  *:last-child {
    margin-bottom: 0;
  }
}

.card {
  border: solid #ddd 1px;
  border-radius: 16px;
  margin-bottom: 16px;
  padding: 16px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: solid #ddd 1px;
}

.card-body *:last-child {
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-bottom: 6px;
}

.form-control {
  box-sizing: border-box;
  border: solid #ddd 1px;
  padding: 6px;
  display: block;
  width: 100%;
}

.form-control-text {
  font-size: 10px;
  color: #939393;
  margin-top: 4px;
}

.form-control-text-error {
  color: red;
}

.btn {
  box-sizing: border-box;
  padding: 12px 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.btn-wrapper .btn {
  margin-left: 16px;
}
</style>
