<template>
  <div>
    <li>
      <h2>{{ name }} {{ friendIsFavourite === "1" ? "(Favourite)" : "" }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="toggleFavourite">
        {{ friendIsFavourite === "1" ? "Unfavourite" : "Favourite" }}
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ phoneNumber }}</li>
        <li><strong>Email:</strong>{{ emailAddress }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "87348732",
        email: "manuel@localhost.com",
      },
      friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      if (this.friendIsFavourite === "1") {
        this.friendIsFavourite = "0";
      } else {
        this.friendIsFavourite = "1";
      }
    },
  },
};
</script>
