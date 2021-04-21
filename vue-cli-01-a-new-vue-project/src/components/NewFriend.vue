<template>
  <form action="" class="addFriend">
    <div>
      <input type="text" placeholder="First Name" v-model="fname" />
      <input type="text" placeholder="Last Name" v-model="lname" />
    </div>
    <div>
      <input type="text" placeholder="Email address" v-model="email" />
      <input type="text" placeholder="Phone Number" v-model="phone" />
    </div>
    <div>
      <label>Add to favourite</label
      ><input type="checkbox" v-model="favourite" />
    </div>
    <button @click="addNewFriend">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      favourite: false,
    };
  },
  emits: ["new-friend"],
  methods: {
    addNewFriend(event) {
      const friend = {
        id: this.fname.toLowerCase(),
        name: this.fname + " " + this.lname,
        phone: this.phone,
        email: this.email,
        isFavourite: this.favourite,
      };
      this.$emit("add-new-friend", friend);
      event.preventDefault();
    },
  },
};
</script>

<style>
.addFriend {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
input {
  margin: 0.5rem;
  padding: 10px;
  border-radius: 4px;
}
</style>
