<template>
  <div class="search">
    <div class="search__input">
      <v-text-field
        v-model="message"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-account-search"
      ></v-text-field>
    </div>
    <div class="btn">
      <v-btn color="blue lighten-1" @click="onClick">Search</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.onClick();
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit('updateMessage', value);
      },
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch('loadMembers', this.message);
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.search__input {
  width: 100%;
  margin-right: 10px;
}
</style>
