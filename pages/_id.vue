<template>
  <div>
    <div class="btn_home">
      <v-btn class="ma-2" to="/" large fab color="red">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <h2 to="/">Go Home</h2>
    </div>

    <div id="card">
      <h1>{{ member.name }}</h1>
      <div class="image-crop">
        <img id="avatar" :src="member.avatar_url" />
      </div>
      <div id="bio">
        <p>
          {{ member.bio }}
          {{ member.blog }}
        </p>
      </div>
      <div id="stats">
        <div class="col">
          <p class="stat">{{ member.public_repos }}</p>
          <p class="label">Repos</p>
        </div>
        <div class="col">
          <p class="stat">{{ member.followers }}</p>
          <p class="label">Followers</p>
        </div>
        <div class="col">
          <p class="stat">{{ member.following }}</p>
          <p class="label">Following</p>
        </div>
      </div>
      <div id="buttons">
        <v-btn
          class="ma-2"
          small
          fab
          color="blue lighten-1"
          :href="member.html_url"
          target="_blank"
          ><v-icon>mdi-github</v-icon></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      member: [],
    };
  },
  async created() {
    const url = `https://api.github.com/users/${this.$route.params.id}`;

    try {
      const res = await axios.get(url);
      this.member = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
#card {
  background-color: #393b45;
  height: auto;
  width: 350px;
  margin: 10vh auto;
  border-radius: 25px;
  padding-bottom: 1px;
  box-shadow: 2px 2px 5px #4069e2;
}

h1 {
  color: white;
  text-align: center;
  width: 100%;
  background-color: #e6ebee;
  border-radius: 25px 25px 0 0;
  color: #393b45;
  padding: 30px 0;
  font-weight: 800;
  margin: 0;
}

.image-crop {
  display: block;

  position: relative;
  background-color: #e6ebee;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #4069e2;
}

#avatar {
  display: inline;
  height: 230px;
  width: auto;
  margin-left: -34px;
}

#bio {
  display: block;
  margin: 30px auto;
  width: 280px;
  height: auto;
}

#bio p {
  color: #e6ebee;
  font-weight: lighter;
  font-size: 15px;
  text-align: justify;
}

#stats {
  display: flex;
  flex-direction: row;
  height: auto;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-weight: 500;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
}

.stat {
  font-size: 25px;
  margin: 0;
}

.label {
  margin: 0;
}

#buttons {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 280px;
}

button {
  display: block;
  position: relative;
  padding: 10px 0;
  width: 130px;
  margin: 30px 0;
  border-radius: 25px;
  border: none;
  font-size: 20px;
  letter-spacing: 0.2px;
  font-weight: 500;
  background-color: #4069e2;
  color: #e6ebee;
}

button:focus {
  display: none;
}

button:hover {
  transform: scale(1.03);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #fff;
}

#msg {
  background-color: #e6ebee;
  color: #393b45;
}
.btn_home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
