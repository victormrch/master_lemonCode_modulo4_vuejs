<template>
  <div>
    <div class="search">
      <v-text-field
        v-model="organization"
        clearable
        flat
        solo-inverted
        hide-details
        class="text"
        label="text"
      ></v-text-field>
      <v-btn color="primary" @click="search()">Search</v-btn>
    </div>
    <div v-if="loading">Loading...</div>
    <h1 v-if="!error">
      Lista de empleados de {{ capitalizeFirstLetter(oldSearches) }}
    </h1>

    <div v-if="!error" class="members">
      <div v-for="member in members" :key="member.id" class="container">
        <nuxt-link :to="'/' + member.login">
          <div
            class="card card0"
            :style="{ backgroundImage: 'url(' + member.avatar_url + ')' }"
          >
            <div class="border">
              <h2>{{ member.login }}</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <v-alert text prominent type="error" icon="mdi-account-search" v-else
      >No result for your search:
      {{ capitalizeFirstLetter(oldSearches) }}</v-alert
    >
  </div>
</template>

<script>
import axios from 'axios';

import capitalizeFirstLetter from '@/assets/utils/capitalizeFirstLetter';
export default {
  data() {
    return {
      organization: 'lemoncode',
      members: [],
      loading: false,
      oldSearches: '',
      error: '',
      page: 1,
    };
  },
  created() {
    this.search();
  },
  computed: {},
  methods: {
    capitalizeFirstLetter,
    async search() {
      const url = `https://api.github.com/orgs/${this.organization}/members`;
      this.oldSearches = this.organization;
      this.loading = true;
      this.error = '';

      try {
        const res = await axios.get(url);
        this.members = res.data;
        this.loading = false;
        console.log(this.members);
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.error = error;
      }
    },
  },
};
</script>
<style scoped>
h1 {
  padding: 10px 2px;
  color: #42a5f5;
}

.members {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.search {
  margin-bottom: 20px;
  color: white;
}
.text {
  width: 250px;
}

.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
}
.border {
  height: 280px;
  width: 250px;
  background: transparent;
  border-radius: 20px;
  transition: border 0.5s;
  position: relative;
}
.border:hover {
  border: 5px solid #42a5f5;
}
.card {
  height: 300px;
  width: 300px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card0 {
  background-size: 300px;
}
.card0:hover {
  background-size: 500px;
  cursor: pointer;
}
.card0:hover h2 {
  opacity: 1;
}

.card0:hover span {
  opacity: 1;
}

h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #42a5f5;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}

span {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #42a5f5;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}
</style>
