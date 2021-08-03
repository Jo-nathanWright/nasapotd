<template>
  <div>
    <PictureFinder />
    <PictureDetails />
  </div>
</template>

<script>
import { reactive } from 'vue';
import PictureFinder from '../components/PictureFinder.vue'
import PictureDetails from '../components/PictureDetails.vue'
export default {
  name: 'HomePage',
  setup() {
    const state = reactive({

    })
    return {state}
  },
  components: { PictureFinder, PictureDetails }
};
</script>