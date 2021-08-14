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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin: 10px;
}
.search__input {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 75%;
  margin-right: 10px;
}

.btn {
  margin-top: 32px;
}
</style>
