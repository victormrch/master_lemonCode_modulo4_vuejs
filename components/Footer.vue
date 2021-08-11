<template>
  <v-footer padless>
    <v-card-text>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-card-text>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Victor M. Ramón</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-github', 'mdi-twitter', 'mdi-linkedin'],
  }),
};
</script>
<style scoped>
.v-card__text {
  display: flex;
  justify-content: center;
}
</style>
