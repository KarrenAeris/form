<template>
  <div id="root">
    <Input />
    <Output />
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'App',
  components: {
    Input,
    Output,
  },
}
</script>

<style>

#root {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 95%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  background: linear-gradient(#CB356B, #BD3F32);
}

.app {
  background: #333;
  color: #fff;
  padding: 20px;
  width: 600px;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
}

.app__header {
  font-size: 1.8em;
  padding: 20px;
  text-align: center;
}

.app__content {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
}
</style>
