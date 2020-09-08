<template>
  <label :for="context.id" :class="context.classes.label">
    <i v-if="labelIcon.length > 0" :class="labelIcon" />
    {{ context.label }}
    <span v-if="showRequiredLabel" class="text-error">
      ({{ $t('required') }})
    </span>
  </label>
</template>

<script>
export default {
  name: 'BaseInputLabel',
  props: {
    context: {
      type: Object,
      required: true
    },
    labelIcon: {
      type: String,
      default: ''
    },
    showRequiredLabel: {
      type: Boolean,
      default: false
    }
  }
};
</script>
