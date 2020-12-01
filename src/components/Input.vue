<template>
  <div id="input">
    <div class="app">
      <div class="app__header">
        Ввод 
      </div>
      <form method="POST" class="app__content" @submit.prevent="checkForm()">
        <div class="input">
          <label for="name" >Имя</label>
          <input type="text"
            id="name"
            placeholder="имя..."
            name="name"
            v-model="base.name"
            required>
        </div>
        
        <div class="input">
          <label for="surname">Фамилия</label>
          <input type="text"
            id="surname"
            placeholder="Фамилия..."
            name="surname"
            v-model="base.surname"
            required>
        </div>
        
        <div class="input">
          <label for="date">День рождения</label>
          <input type="date"
                 id="date"
                 name="birthDate"
                 v-model="base.date" required>
        </div>
        
        <div class="input">
          <select name="" v-model="base.select">
            <option value="Star">⭐</option>
            <option value="Heart">❤</option>
            <option value="Octagon">🔷</option>
          </select>
        </div>
        <button type="submit" class="btn">Ok</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      base: {
        name: '',
        surname: '',
        date: '',
        select: '',
      }
    }
  },

  methods: {
    ...mapMutations(["setJSON", "setBase"]),
    checkForm() {
      
      // отправляем наши данные через VUEX
      this.setJSON(this.base)
      
      // запрос на получения данных в JSON формате
      console.log(JSON.parse(JSON.stringify(this.base)))      
    }
  },
  beforeMount() {
    return this.setBase(this.base)
  },
}
</script>

<style scoped>
    .input {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .input label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 3px;
        color: #acacac;
        font-family: GothamPro, sans-serif;
        font-size: .8rem;
        font-weight: normal;
        line-height: 1.2rem;
    }

    .input input {
        display: block;
        width: 100%;
        max-height: 2.8rem;
        padding: .8rem 1rem;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4;
        color: #000;
        background: #fff none;
        border: 1px solid #999;
        border-radius: 5px;
    }

    .btn {
        display: inline-block;
        padding: 1rem 2.3rem;
        margin-bottom: 0;
        font-weight: normal;
        font-family: GothamPro, sans-serif;
        font-size: 1rem;
        line-height: 1.3rem;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        background: #fad64e;
        color: #3f3f3f;
        border: none;
        border-radius: 2.8rem;
        transition: transform .2s ease-in-out, box-shadow .2s ease-in-out, -webkit-transform .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;
        will-change: transform;
    }

    .btn:disabled {
        background: #ccc !important;
        border: 1px solid #ccc;
        color: #000;
        cursor: not-allowed;
    }

    .btn:active {
        transition: transform .1s ease-in-out, box-shadow .1s ease-in-out !important;
        transform: none !important;
        box-shadow: none !important;
    }

    .btn:hover {
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, .2);
        transform: translateY(-1px);
    }
</style>