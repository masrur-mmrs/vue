<template>
  <div class="container">
    <div class="containerA">
      <active-user
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :userName="user.userName"
        :age="user.age"
      >
        ></active-user
      >
    </div>
    <div class="containerB">
      <user-data
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        @update-user-data="updateUserData"
      ></user-data>
    </div>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      users: [
        { id: "gh3h12b", userName: "Masrur", age: 18 },
        { id: "hndikjsnds", userName: "Sakib", age: 19 },
        { id: "hndiksdfsf", userName: "Walter White", age: 40 },
      ],
    };
  },
  methods: {
    updateUserData(userID, updatedData) {
      const requiredUser = this.users.find((user) => user.id === userID);

      requiredUser.userName = updatedData.userName;
      requiredUser.age = updatedData.age;
    },
  },
};
</script>

<style>
.containerA {
  display: flex;
  align-items: flex-end;
  flex: 1;
  flex-direction: column;
}
.containerB {
  display: flex;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
}
</style>
