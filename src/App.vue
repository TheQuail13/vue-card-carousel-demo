<template>
  <div id="app">
    <span class="page-header">Vue Card Carousel</span>
    <a href="https://github.com/TheQuail13/vue-card-carousel">
      <img
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149"
        class="attachment-full size-full fork-me"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
    <VueCardCarousel
      class="vcc mb-4"
      :items="listOfTodos"
      :start-index="1"
      :hide-backdrop="hideBackdrop"
      :side-card-opacity="sideCardOpacity"
      :header-options="headerOpt"
      :body-options="bodyOpt"
      :footer-options="footerOpt"
    >
      <template v-slot:header="slotProps">
        <strong>Id: {{ slotProps.headerProp.cMainId }}</strong>
      </template>
      <template v-slot:default="slotProps">
        <div v-for="n in 5" :key="n">
          {{ slotProps.bodyProp.cMainId }}. Hello from the Parent
        </div>
      </template>
      <template v-slot:footer="slotProps">
        <strong>Id: {{ slotProps.footerProp.cMainId }}</strong>
      </template>
    </VueCardCarousel>

    <b-card no-body>
      <b-card-header>
        <span class="float-left">Component Props</span>
        <span class="float-right">
          <b-icon-code style="height: 1.3em; width: 1.3em;"></b-icon-code>
        </span>
      </b-card-header>
      <b-card-body>
        <b-row class="mt-2">
          <b-col md="4" class="mb-3">
            <div class="mb-2"><strong>Component Options</strong></div>
            <div class="switch-header"><u>Hide Backdrop</u></div>
            <div class="mb-3">
              <label class="switch">
                <input type="checkbox" v-model="hideBackdrop" />
                <span class="slider round"></span>
              </label>
            </div>

            <label class="control-label"><u>Side Card Opacity</u></label>
            <b-row class="justify-content-md-center">
              <b-col md="4">
                <b-form-input
                  v-model="sideCardOpacity"
                  number
                  min="0.25"
                  max="1"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="mb-3">
            <div class="mb-2"><strong>Header Options</strong></div>
            <div class="switch-header"><u>Show / Hide</u></div>
            <div class="mb-3">
              <label class="switch">
                <input type="checkbox" v-model="headerOpt.isVisible" />
                <span class="slider round"></span>
              </label>
            </div>

            <label class="control-label"><u>Background color</u></label>
            <color-selector v-model="headerOpt.backgroundColor" />
          </b-col>
          <b-col md="4" class="mb-3">
            <div class="mb-2"><strong>Footer Options</strong></div>
            <div class="switch-header"><u>Show / Hide</u></div>
            <div class="mb-3">
              <label class="switch">
                <input type="checkbox" v-model="footerOpt.isVisible" />
                <span class="slider round"></span>
              </label>
            </div>
            <label class="control-label"><u>Background color</u></label>
            <color-selector v-model="footerOpt.backgroundColor" />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ColorSelector from "./components/colorSelector";

export default {
  name: "App",
  components: { ColorSelector },
  data() {
    return {
      listOfTodos: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      hideBackdrop: true,
      sideCardOpacity: 0.25,
      headerOpt: { isVisible: true, backgroundColor: "green" },
      bodyOpt: { backgroundColor: "" },
      footerOpt: { isVisible: true, backgroundColor: "green" },
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em;
}

.page-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;
  margin-bottom: 1.5rem;
}

.fork-me {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 149;
  height: 149;
}

.vcc {
  height: 50vh !important;
  width: 60vw !important;
  box-shadow: 1px 1px 5px 1px;
  border-radius: 0.35em;
}

.float-right {
  float: right !important;
}

.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-header {
  padding-bottom: 0.5em;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 2.2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
