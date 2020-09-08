<template>
  <FormulateForm
    :key="formName"
    :name="formName"
    :schema="getSchema(formName)"
    v-model="values"
    @submit="submit"
  />
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      values: {}
    };
  },
  computed: {
    formName() {
      // The form schema is used as the form's name, please don't change schema name.
      return this.$route.meta.schema;
    }
  },
  methods: {
    submit(data) {
      this[this.formName](data);
    },
    authLogin() {
      alert('You are logged in!');
    },
    resetPasswordRequestLink() {
      this.$router.push({ name: 'ResetPasswordLinkSent' });
    },
    resetPasswordChange() {
      this.$router.push({ name: 'ResetPasswordSuccess' });
    }
  }
};
</script>
