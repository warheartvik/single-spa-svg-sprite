<template>
  <div id="app">
    <h1>Below you should see a SVG icon</h1>
              <ComIcon
              style="width: 100px; height: 100px"
              ></ComIcon>
  </div>
</template>

<script>
import ComIcon from './components/ComIcon.vue'

export default {
  name: 'App',
  components: {
    ComIcon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
