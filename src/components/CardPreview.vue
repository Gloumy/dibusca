<template>
  <v-sheet height="245" width="445" color="#303841">
    <v-container fluid class="py-0">
      <v-row class="h-245">
        <v-col cols="5" align-self="center">
          <v-img src="../assets/logo.png"></v-img>
        </v-col>
        <v-col cols="7" align-self="center" class="white--text">
          <v-row>Simon Cornet</v-row>
          <v-row>Full Stack Developer</v-row>
          <v-row>simon@warrigal.lu</v-row>
          <v-row align-content="end">
            <v-icon>mdi-github</v-icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.h-245 {
  height: 245px;
}
</style>