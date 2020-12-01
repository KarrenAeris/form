<template>
  <div id="output">
    <div class="app">
      <div class="app__header">
        Вывод
      </div>
      <div class="app__content">
        <ul>
          {
          <li v-for="(item, name, index) in getBase"
              :key="index">

            <span class="key">{{ name }}</span> :
            <span class="value">{{ item }}</span>
          </li>
          }
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(["getJSON", "getBase"]),
}
</script>

<style scoped>
  ul, li {
    list-style: none;
  }
  li {
    margin: 10px 2rem;
  }
  .key {
    color: rgb(151, 50, 40);
  }
  .value {
    color: #D19A66;
  }
</style>