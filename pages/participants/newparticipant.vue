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
            <div v-if="FormFields">
              <FormGroup
                v-for="(item, index) in FormFields"
                :key="index"
                :block="item"
              />
            </div>
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
import FormGroup from '~/components/block/FormGroup'
/** https://developpaper.com/promise-axios-async-await/ */
export default {
  components: {
    FormGroup
  },
  data () {
    return {
      FormFields: [
        {
          label: {
            text: 'First Name',
            for: 'first_name'
          },
          input: {
            id: 'first_name',
            model: 'first_name',
            name: 'first_name',
            value: 'this is a test',
            type: 'text',
            autocomplete: 'off',
            required: 'true'
          }
        },
        {
          label: {
            text: 'Second Name',
            for: 'second_name'
          },
          input: {
            id: 'second_name',
            model: 'second_name',
            name: 'second_name',
            value: '',
            type: 'text',
            autocomplete: 'off',
            required: 'true'
          }
        },
        {
          label: {
            text: 'Email',
            for: 'email'
          },
          input: {
            id: 'email',
            model: 'email',
            name: 'email',
            value: '',
            type: 'email',
            autocomplete: 'off',
            required: 'true'
          }
        }
      ],
      success: false,
      errored: false
    }
  },
  methods: {
    handleSubmit () {
      console.log('Submit clicked')
      const data = {
        first_name: this.FormFields[0].input.value,
        last_name: this.FormFields[1].input.value,
        email: this.FormFields[2].input.value,
        academic_title: this.FormFields[3].input.value,
        gender: this.FormFields[4].input.value,
        status: this.FormFields[5].input.value
      }
      console.log('data sent: ', data)
      this.$axios
        .$post('/api/create', data, {
          headers: {
            Accept: 'application/json'
          }
        }).then((res) => {
          this.success = true
          this.errored = false
          const data = JSON.stringify(res)
          console.log(`From the server ${data}`)
          const el = document.getElementById('anchor-notification')
          el.scrollIntoView({ behavior: 'smooth' })
        }).catch((err) => {
          console.log(err)
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
