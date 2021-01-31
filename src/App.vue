<template>
  <div id="app">
    <div id="header">
      <div id="logo" @click="gotoMain">
        bookMe<span>Now</span>
      </div>
    </div>

    <loading v-if="isLoading" />

    <router-view v-show="!isLoading" />

    <div id="footer">
      <div class="tabs">
        <div class="tab"><router-link to="/"><tab-icon-hotels :width="25" :height="25" /></router-link></div>
        <div class="tab"><router-link to="/bookings"><tab-icon-bookings :width="24" :height="24" /></router-link></div>
        <div class="tab"><router-link to="/about"><tab-icon-about :width="20" :height="20" /></router-link></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import TabIconHotels from '@/components/icons/TabIconHotels.vue'
import TabIconBookings from '@/components/icons/TabIconBookings.vue'
import TabIconAbout from '@/components/icons/TabIconAbout.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Loading,
    TabIconHotels,
    TabIconBookings,
    TabIconAbout,
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

  gotoMain() {
    this.$router.push({ name: 'main' })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

$breakpoint-tablet: 768px;
$red: #de4d4d;

* {
  margin: 0;
  padding: 0;
  color: #333;
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
  margin-bottom: 16px;

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

.img-responsive {
  max-width: 100%;
  height: auto;
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

  span {
    color: $red;
  }
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

    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
}

.text-accent {
  background-color: $red;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  padding: 2px 6px 3px;
}

.page-wrapper {
  padding: 16px;

  h1 {
    border-bottom: solid #333 1px;
    padding-bottom: 16px;
  }
}

.text-wrapper {
  h1 + h2 {
    margin-top: 32px;
  }

  p + h2 {
    margin-top: 32px;
  }

  ul + h2,
  ol + h2 {
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
}

.card-transparent {
  padding: 0;
  border: none;
}

.form-group {
  margin-bottom: 16px;

  label {
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin-bottom: 6px;
  }
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
  color: $red;
}

.btn {
  box-sizing: border-box;
  padding: 12px 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;

  &.btn-light {
    background: transparent;
    padding-left: 8px;
    padding-right: 8px;
  }
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.btn-wrapper .btn {
  margin-left: 16px;
}

.text-muted {
  color: #939393;
}

@media (max-width: $breakpoint-tablet) {
  #app {
    width: 100%;
  }

  #header {
    width: 100%;
  }

  #footer {
    width: 100%;
  }

  .tabs {
    .tab {
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
