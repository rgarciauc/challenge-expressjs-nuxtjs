<template>
  <section class="container mx-auto px-4">
    <div>
      <Logo />
      <h1 class="text-center text-6xl font-normal leading-normal mt-0 mb-2">
        PARTICIPANTS
      </h1>
      <div class="flex flex-col py-8">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table
                class="
                  min-w-full
                  divide-y divide-gray-200
                  table-fixed
                  dark:divide-gray-700
                "
              >
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            rounded
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        >
                        <label
                          for="checkbox-all"
                          class="sr-only"
                        >checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="
                        py-3
                        px-6
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      class="
                        py-3
                        px-6
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      class="
                        py-3
                        px-6
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        py-3
                        px-6
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-700
                        uppercase
                        dark:text-gray-400
                      "
                    >
                      Email
                    </th>
                    <th scope="col" class="p-4">
                      <span class="sr-only">Edit</span>
                    </th>
                    <th scope="col" class="p-4">
                      <span class="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="
                    bg-white
                    divide-y divide-gray-200
                    dark:bg-gray-800 dark:divide-gray-700
                  "
                >
                  <tr
                    v-for="(participant, index) in participants"
                    :key="index"
                    :index="index"
                    class="participant hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td class="p-4 w-4">
                      <span class="flex items-center">
                        <input
                          id="checkbox-table-num"
                          type="checkbox"
                          class="
                            w-4
                            h-4
                            text-blue-600
                            bg-gray-100
                            rounded
                            border-gray-300
                            focus:ring-blue-500
                            dark:focus:ring-blue-600 dark:ring-offset-gray-800
                            focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600
                          "
                        >
                        <label
                          for="checkbox-table-num"
                          class="sr-only"
                        >checkbox</label>
                      </span>
                    </td>
                    <td
                      class="
                        py-4
                        px-6
                        text-sm
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      "
                    >
                      {{ participant.first_name }} {{ participant.last_name }}
                    </td>
                    <td
                      class="
                        py-4
                        px-6
                        text-sm
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      "
                    >
                      {{ participant.gender }}
                    </td>
                    <td
                      class="
                        py-4
                        px-6
                        text-sm
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      "
                    >
                      {{ participant.status }}
                    </td>
                    <td
                      class="
                        py-4
                        px-6
                        text-sm
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      "
                    >
                      {{ participant.email }}
                    </td>
                    <td
                      class="
                        py-4
                        px-6
                        text-sm
                        font-medium
                        text-right
                        whitespace-nowrap
                      "
                    >
                      <nuxt-link
                        :to="{ name: 'participants-id', params: { id: participant.id } }"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        More
                      </nuxt-link>
                    </td>
                    <td>
                      <!-- `/delete/${participant.id}` -->
                      <span @click="deleteParticipant(participant.id, index)">x</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="text-gray-900 flex flex-row">
          <nuxt-link
            class="
              content-center
              bg-green-500
              hover:bg-green-700
              text-white
              font-bold
              py-2
              px-4
              border border-green-700
              rounded
            "
            to="/participants/newparticipant"
          >
            New participant
          </nuxt-link>
        </div>
        <div class="text-gray-900 flex flex-row">
          <nuxt-link
            class="
              m-4
              text-center
              content-center
              w-1/2
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              border border-blue-700
              rounded
            "
            to="#"
          >
            ALL to BM
          </nuxt-link>
          <nuxt-link
            class="
              m-4
              text-center
              content-center
              w-1/2
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              border border-blue-700
              rounded
            "
            to="#"
          >
            Delete ALL participants
          </nuxt-link>
          <nuxt-link
            class="
              m-4
              text-center
              content-center
              w-1/2
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              border border-blue-700
              rounded
            "
            to="#"
          >
            Participant to BM
          </nuxt-link>
          <nuxt-link
            class="
              m-4
              text-center
              content-center
              w-1/2
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              border border-blue-700
              rounded
            "
            to="#"
          >
            Delete participant
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData ({ $axios }) {
    return $axios.$get('/api/participants')
      .then((res) => {
        console.log({ participants: res.data })
        return { participants: res.data }
      })
      .catch(e =>
        console.log('Error by listing participants: ', e)
      )
  },
  data () {
    return {
      participants: {}
    }
  },
  head () {
    return {
      title: 'Participants'
    }
  },
  methods: {
    deleteParticipant (id, index) {
      console.log('val passed from the row', index)
      this.$axios.delete(`/api/participant/${id}`)
        .then((res) => {
          this.participants.splice(index, 1)
          console.log(`deleted ${res.data.data}`)
        }).catch((err) => {
          console.log('something went wrong axios: ' + err)
        })
    }
  }
}
</script>
