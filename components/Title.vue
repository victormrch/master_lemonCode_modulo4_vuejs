<template>
  <div class="title__box">
    <h1 v-if="!getError">
      {{ capitalizeFirstLetter(getOldSearch) }} Employee List
    </h1>
    <h2 v-else>
      No Result for {{ capitalizeFirstLetter(getOldSearch) }}, try again!
    </h2>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import capitalizeFirstLetter from '@/assets/utils/capitalizeFirstLetter';

export default {
  computed: {
    ...mapGetters(['getOldSearch', 'getError']),
  },
  methods: {
    capitalizeFirstLetter,
  },
};
</script>
<style scope>
.title__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 150px;
  background-color: #1d3557;
}
h1,
h2 {
  text-align: center;
}
.hr {
  height: 10px;
  background-color: #fff;
}
</style>
