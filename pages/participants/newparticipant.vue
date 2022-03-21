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
        <form
          id="registrationForm"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          accept-charset="UTF-8"
          @submit.prevent="handleSubmit"
        >
          <div class="form-group mb-4">
            <label
              for="first_name"
              class="block text-gray-700 text-sm font-bold mb-2"
            >First Name</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              autocomplete="off"
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
              name="last_name"
              type="text"
              autocomplete="off"
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
            <label for="email">Second Name</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="off"
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
      error: false,
      form: {
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },
  methods: {
    async handleSubmit () {
      const formData = new FormData()
      for (const [key, value] of Object.entries(this.form)) {
        formData.append(key, value)
      }
      console.log('inside of submission: ' + JSON.stringify(formData))
      await this.$axios
        .$post('/api/participants/newparticipant', formData, {
          headers: { 'Content-Type': 'multipart/formdata' }
        })
        .then(function (response) {
          console.log(response)
          this.success = true
          this.error = false
          const el = document.getElementById('anchor-notification')
          el.scrollIntoView({ behavior: 'smooth' })
        })
        .catch(function (error) {
          console.log(error)
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
