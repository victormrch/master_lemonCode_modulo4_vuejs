<template>
  <div>
    <div class="profile-content" v-if="!getError">
      <div v-for="member in displayedMembers" :key="member.id">
        <nuxt-link :to="'/' + member.login">
          <div class="profile-card">
            <div
              class="profile-card__image"
              :style="{ backgroundImage: 'url(' + member.avatar_url + ')' }"
            ></div>
            <div class="profile-card__content">
              <h2>{{ member.login }}</h2>
              <p>Id:{{ member.id }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <v-alert v-else prominent type="error" icon="mdi-account"
      >No result for your search:
      {{ capitalizeFirstLetter(getOldSearch) }}</v-alert
    >
    <div v-if="!getError" class="text-center">
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
      perPage: 10,
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
};
</script>
<style scoped>
.profile-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}

.profile-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 5px;
  width: 307px;
  height: 124px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.profile-card:hover {
  transform: translatey(-2px) translatex(-2px) scale(1.05);
  background-color: #42a5f5;
}

.profile-card__image {
  width: 97px;
  height: 97px;
  margin: 12px;
  clip-path: circle(50% at 50% 50%);
  background-size: cover;
  background-position: center center;
}
.profile-card__content {
  display: flex;
  flex-direction: column;
}
h2,
p,
a {
  margin: 0px;
  text-decoration: none;
  color: #393b45;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.text-center {
  margin: 25px;
}
</style>
