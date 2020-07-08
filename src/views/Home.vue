<template>
  <v-container fluid>
    <v-row>
      <v-col lg="6" sm="12">
        <card-preview />
      </v-col>
      <v-col lg="6" sm="12">
        <user-details-form></user-details-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardPreview from "../components/CardPreview";
import UserDetailsForm from "../components/UserDetailsForm";

export default {
  components: {
    CardPreview,
    UserDetailsForm
  }
};
</script>

<style>
</style>