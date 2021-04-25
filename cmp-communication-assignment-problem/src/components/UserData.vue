<template>
  <div class="form">
    <form>
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Age" v-model="age" />
    </form>
    <button class="btn" @click="updateData">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
    };
  },
  props: { id: { type: String, required: true } },
  emits: ["update-user-data"],
  methods: {
    updateData(event) {
      event.preventDefault();
      const user = {
        userName: this.name,
        age: +this.age,
      };

      this.$emit("update-user-data", this.id, user);
    },
  },
};
</script>

<style scoped>
.form {
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 20rem;
  max-height: 8rem;
  margin: 2rem;
}
form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  margin-bottom: 0.1rem;
  width: 100%;
  border: 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  color: #ffffff;
  font-size: 11px;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  min-height: 6rem;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
</style>
