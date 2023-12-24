<template>
  <section>
    {{ block }}
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="block.label.for"
    >
      {{ block.label.text }}
    </label>
    <input
      :id=block.input.id
      :value="value"
      :name="block.input.name"
      :type="block.input.type"
      :autocomplete="block.input.autocomplete"
      :required="block.input.required"
      class="shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline"
      @input="updateValue($event.target.value)"
    >
  </section>
</template>
<script>
export default {
  name: 'FormGroup',
  props: {
    value: {
      type: String,
      default: ''
    },
    block: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
