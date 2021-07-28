<template>
  <div>
    <div class="search">
      <v-text-field
        type="text"
        placeholder="lemoncode"
        v-model="organization"
      />
      <v-btn color="primary" @click="search()">Search</v-btn>
    </div>
    <div v-if="loading">Loading...</div>
    <h1 v-if="!error">
      Lista de empleados de {{ capitalizeFirstLetter(oldSearches) }}
    </h1>

    <div v-if="!error" class="members">
      <div v-for="member in members" :key="member.id">
        <v-card class="members-card" tile>
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img :src="member.avatar_url"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{ member.login }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                      member.url
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-alert
      text
      prominent
      type="error"
      icon="mdi-badge-account-alert-outline"
      v-else
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
    };
  },
  created() {
    this.search();
  },
  // watch: {
  //   organization() {
  //     this.search()
  //   },
  // },
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
        console.log(res.data);
        this.loading = false;
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
}
.mx-auto {
  margin: 50px 50px;
}
.members {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.members-card {
  max-width: 250px;
  margin: 20px;
}
.search {
  margin-bottom: 20px;
  color: white;
}
</style>
