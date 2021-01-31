<template>
  <div id="app">
    <div id="header">
      <div id="logo">
        bookMeNow
      </div>

      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <loading v-if="inProgress" />

    <router-view v-show="!inProgress" />

    <div id="footer"></div>
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
  private inProgress: boolean;

  constructor() {
    super();

    this.inProgress = true;

    this.fetchHotels();
  }

  fetchHotels(): void {
    this.inProgress = true;
    console.log('init fetching')

    this.$store.dispatch('fetchHotels')
      .then(() => {
        // Emulate delay
        setTimeout(() => {
          this.inProgress = false;
        }, 600);

        console.log('fetching complete');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

img {
  vertical-align: bottom;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 640px;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 56px;
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
}

#logo {
  font-weight: bold;
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
  background-color: #fff;
  width: 640px;
  height: 56px;
  position: fixed;
  bottom: 0;
}
</style>
