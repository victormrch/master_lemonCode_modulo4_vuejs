<template>
  <div>
    <div v-if="!getError">
      <h1>Lista de empleados de {{ capitalizeFirstLetter(getOldSearch) }}</h1>
      <div class="members">
        <div
          v-for="member in displayedMembers"
          :key="member.id"
          class="container"
        >
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
    </div>

    <v-alert v-else prominent type="error" icon="mdi-account"
      >No result for your search:
      {{ capitalizeFirstLetter(getOldSearch) }}</v-alert
    >
    <div class="text-center">
      <v-pagination v-model="page" :length="setPages"></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import capitalizeFirstLetter from '@/assets/utils/capitalizeFirstLetter';
export default {
  data() {
    return {
      page: 1,
      perPage: 8,
      pages: [],
    };
  },
  computed: {
    ...mapGetters(['getMembers', 'getError', 'getOldSearch']),
    ...mapState(['members']),
    displayedMembers() {
      return this.paginate(this.members);
    },
    setPages() {
      const numberPages = Math.ceil(this.members.length / this.perPage);
      return numberPages;
    },
  },
  methods: {
    capitalizeFirstLetter,
    paginate(members) {
      const page = this.page;
      const perPage = this.perPage;
      const from = page * perPage - perPage;
      const to = page * perPage;

      return members.slice(from, to);
    },
  },
  watch: {},
};
</script>
<style scoped>
h1 {
  text-align: center;
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
