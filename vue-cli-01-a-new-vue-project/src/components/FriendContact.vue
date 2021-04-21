<template>
  <div>
    <li>
      <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="toggleFavourite">
        {{ isFavourite ? "Unfavourite" : "Favourite" }}
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
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favourite"],
  // emits: {
  //   "toggle-favourite": (id) => {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.log("ID is missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>
