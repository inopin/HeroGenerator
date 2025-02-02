<template>
  <section>
    <h1>Превью</h1>
    <div class="container">
      <img src="../assets/imgs/hero.jpg" alt="hero" width="240" />
      <div class="info">
        <ul class="info-list">
          <li>
            <h2>Имя</h2>
            <p>Иванов Иван</p>
          </li>
          <li>
            <h2>Возраст</h2>
            <p>30</p>
          </li>
          <li>
            <h2>Пол</h2>
            <p>Мужчина</p>
          </li>
          <li>
            <h2>Раса</h2>
            <p>минотавр</p>
          </li>
        </ul>
        <h2>заметки</h2>
        <p class="info-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi in
          officia officiis labore excepturi, pariatur voluptatem totam commodi
          perspiciatis culpa quod maiores voluptatum id esse aperiam doloremque,
          ducimus impedit voluptas dolores! Perferendis optio similique atque
          quis laborum ipsam omnis asperiores eum provident, necessitatibus non
          deleniti voluptas corporis ullam ipsum est ex veritatis saepe id,
          itaque exercitationem obcaecati. Officia, eaque commodi.
        </p>
      </div>
    </div>
    <div class="card flex justify-center"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.info {
  flex-grow: 1;
}

.info-list {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

li h2 {
  margin-right: 10px;
}
</style>
