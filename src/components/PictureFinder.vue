<template>
<div>
  <form @submit.prevent="getPicture">
    <input v-model="state.query" type="date" name="" id="" />
    <button>Search</button>
  </form>
</div>
</template>

<script>
import {reactive} from 'vue'
import {picturesService} from '../services/PicturesService'
export default {
  name: 'PictureFinder',
  setup() {
    const state =  reactive({
      query: ''
    })
    return {
      state,
      getPicture(){
        picturesService.getPicture(state.query)
        state.query = '' //Resets the form
      }
    }
  },  
};
</script>