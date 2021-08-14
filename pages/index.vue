<template>
  <div class="background__main">
    <div class="background__main--left">
      <div class="content__left">
        <Input />
        <Title />
      </div>
    </div>
    <div class="background__main--right">
      <Member />
    </div>
  </div>
</template>

<style scoped>
.background__main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.background__main--left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 50%;
  background: url(@/assets/img/main_header.jpeg);
  background-size: cover;
  background-position: center center;
}
.background__main--right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #1d3557;
}
.content__left {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
}
</style>
