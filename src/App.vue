<template>
  <div id="app">
    <div id="header">
      <div id="logo">
        bookMeNow
      </div>

      <!-- <div id="nav">
        <router-link to="/">Отели</router-link>
        <router-link to="/about">О программе</router-link>
      </div> -->
    </div>

    <loading v-if="inProgress" />

    <router-view v-show="!inProgress" />

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
  font-weight: 600;
  font-size: 22px;
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
  background-color: #ddd;
  width: 640px;
  height: 56px;
  position: fixed;
  bottom: 0;
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

.text-wrapper {
  padding-top: 16px;

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
</style>
