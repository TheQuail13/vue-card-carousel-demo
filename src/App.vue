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
        <strong class="float-left text-white">{{
          slotProps.headerProp.date
        }}</strong>
        <b-icon-check-all
          style="height: 1.5em; width: 1.5em;"
          class="float-right text-white check-btn"
          @click="checkAll(slotProps.headerProp)"
        ></b-icon-check-all>
      </template>
      <template v-slot:default="slotProps">
        <div>
          <h4><u>To Do List</u></h4>
          <b-form-checkbox
            v-for="todo in slotProps.bodyProp.todos"
            :key="todo.id"
            class="mb-2"
            v-model="todo.completed"
            size="lg"
          >
            {{ todo.name }}
          </b-form-checkbox>
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
      listOfTodos: [
        {
          date: "02/23/2020",
          todos: [
            { id: 0, name: "Make coffee", completed: false },
            { id: 1, name: "Pet the cat", completed: false },
            { id: 2, name: "Wash the car", completed: false },
            { id: 3, name: "Laundry", completed: false }
          ]
        },
        {
          date: "02/24/2020",
          todos: [
            { id: 0, name: "Unplug PC", completed: false },
            {
              id: 1,
              name: "Clean out cat hair from keyboard",
              completed: false
            },
            { id: 2, name: "Reinstall OS", completed: false },
            { id: 3, name: "Update PC drivers", completed: false },
            { id: 4, name: "Pet the cat", completed: false }
          ]
        },
        {
          date: "02/25/2020",
          todos: [
            { id: 0, name: "Buy groceries", completed: false },
            { id: 1, name: "Clean litter box", completed: false },
            { id: 2, name: "Workout", completed: false },
            { id: 3, name: "Pet the cat", completed: false }
          ]
        },
        {
          date: "02/26/2020",
          todos: [
            { id: 0, name: "Return library books", completed: false },
            { id: 1, name: "Re-watch X-Files s2", completed: false },
            { id: 2, name: "Pet the cat", completed: false },
            { id: 3, name: "Flip table", completed: false }
          ]
        },
        {
          date: "02/27/2020",
          todos: [
            { name: "Go running", completed: false },
            { name: "Finish watching Tiger King", completed: false },
            { name: "Commit & push latest changes", completed: false },
            { name: "Pet the cat", completed: false }
          ]
        }
      ],
      hideBackdrop: true,
      sideCardOpacity: 0.25,
      headerOpt: { isVisible: true, backgroundColor: "#563d7c" },
      bodyOpt: { backgroundColor: "" },
      footerOpt: { isVisible: false, backgroundColor: "green" }
    };
  },
  methods: {
    checkAll(item) {
      item.todos.forEach(itm => {
        itm.completed = !itm.completed;
      });
    }
  }
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

.check-btn {
  cursor: pointer;
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
