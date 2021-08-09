<template>
  <v-toolbar color="blue darken-4" dark>
    <div class="search">
      <div class="search__input">
        <v-text-field
          v-model="organization"
          clearable
          flat
          solo-inverted
          hide-details
          label="Busca al empleado que necesitas de tu organización aquí"
          prepend-inner-icon="mdi-account-search"
        ></v-text-field>
      </div>
      <div class="btn">
        <v-btn color="blue lighten-1">Search</v-btn>
      </div>
    </div>
  </v-toolbar>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  width: 100%;
}

.search__input {
  width: 100%;
}

.btn {
  margin-left: 20px;
}
</style>
