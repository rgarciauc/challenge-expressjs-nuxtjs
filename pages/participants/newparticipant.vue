<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <div class="">
        <div
          class="
            registration
            ext-center
            text-6xl
            font-normal
            leading-normal
            mt-0
            mb-2
          "
        >
          <h1>Add new participant</h1>
          <div id="anchor-notification" />
        </div>
        <div v-if="success" class="rounded bg-green-500 text-white text-center text-lg p-4 mb-4">
          Great! Participant sent successfully.
        </div>
        <form
          v-else
          id="registrationForm"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          accept-charset="UTF-8"
          @submit.prevent="handleSubmit"
        >
          <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
            Something went wrong. :( Did you fill in all the fields?
          </div>
          <div class="form-group mb-4">
            <label
              for="first_name"
              class="block text-gray-700 text-sm font-bold mb-2"
            >First Name</label>
            <input
              id="first_name"
              v-model="first_name"
              name="first_name"
              type="text"
              autocomplete="off"
              required
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            >
          </div>
          <div class="form-group mb-6">
            <label for="last_name">Second Name</label>
            <input
              id="last_name"
              v-model="last_name"
              name="last_name"
              type="text"
              autocomplete="off"
              required
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            >
          </div>
          <div class="form-group mb-6">
            <label for="email">E mail</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="off"
              required
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            >
          </div>
          <div class="form-group flex items-center justify-between">
            <input
              class="
                bg-green-500
                hover:bg-green-700
                text-white
                font-bold
                py-2
                px-4
                rounded
              "
              type="submit"
              value="Submit"
            >
          </div>
        </form>
      </div>
      <div class="">
        <nuxt-link
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-12
            rounded
          "
          to="/"
        >
          To HOME
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      success: false,
      errored: false,
      first_name: '',
      last_name: '',
      email: ''
    }
  },
  methods: {
    async handleSubmit () {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
      }
      console.log('data sent: ', data)
      await this.$axios
        .$post('/api/participants/newparticipant', data, {
          headers: {
            Accept: 'application/json'
          }
        })
        .then((response) => {
          this.success = true
          this.errored = false
          const el = document.getElementById('anchor-notification')
          el.scrollIntoView({ behavior: 'smooth' })
        })
        .catch((error) => {
          this.errored = true
        })
    }
  }
}
</script>
<style scoped>
.registration #anchor-notification {
  display: block;
  position: relative;
  visibility: hidden;
  top: -5rem;
}
</style>
