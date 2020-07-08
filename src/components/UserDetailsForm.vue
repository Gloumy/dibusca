<template>
  <div>
    <h2>Your details</h2>
    <v-form>
      <v-row>
        <v-col lg="6" sm="12">
          <v-text-field name="firstname" label="First Name" id="firstname"></v-text-field>
        </v-col>
        <v-col lg="6" sm="12">
          <v-text-field name="lastname" label="Last Name" id="lastname"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field name="jobTitle" label="Job Title" id="jobTitle"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field name="email" label="Email" id="email"></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary" dark>Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>