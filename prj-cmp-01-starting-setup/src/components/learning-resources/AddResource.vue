<template>
  <div>
    <base-dialog
      v-if="inputIsInvalid === true"
      title="Invalid Input"
      @close="confirmedError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs, and make sure you entered at least a few
          characters into each input filed.
        </p>
      </template>
      <template #actions>
        <base-button @click="confirmedError"> Okay </base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="for-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
        </div>
        <div class="for-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            ref="descInput"
          ></textarea>
        </div>
        <div class="for-control">
          <label for="link">Link</label>
          <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <div>
          <base-button id="quick-hack" type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredURL = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredURL.trim() === ''
      ) {
        return (this.inputIsInvalid = true);
      }

      this.addResource(enteredTitle, enteredDescription, enteredURL);
    },
    confirmedError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
#quick-hack {
  margin-top: 1rem;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
