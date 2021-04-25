<template>
  <div class="container">
    <h2>
      Username:
      {{ userName }}
    </h2>
    <h3>
      Age:
      {{ age }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: mediumslateblue;
  max-width: 20rem;
  min-width: 20rem;
  max-height: 8rem;
  min-height: 8rem;
  margin: 1rem;
}
h2 {
  padding-top: 1rem;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
h3 {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 1rem;
}
</style>
