<template>
  <f7-app :params='f7params'>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button round>Round</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block>
  <f7-row>
    <f7-col>
      <f7-button outline>Button</f7-button>
    </f7-col>
    <f7-col>
      <f7-button outline>Button</f7-button>
    </f7-col>
    <f7-col>
      <f7-button outline round>Round</f7-button>
    </f7-col>
  </f7-row>
</f7-block>
  </f7-app>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      f7params: {
        name: 'my app',
        id: 'test',
        routes: []
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
