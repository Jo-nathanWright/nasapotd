<template>
  <div>
    <h2>{{picture.title}}</h2>
    <img :src="picture.image" alt="" srcset="" class="img-fluid">
    <p>{{picture.description}}</p>
  </div>
</template>

<script>
import {computed, reactive} from 'vue'
import {AppState} from '../AppState'
export default {
  name: 'PictureDetails',
  setup() {
    const state = reactive({

    })
    return {
      state,
      picture: computed(() => AppState.picture)
      }
  },
}
</script>