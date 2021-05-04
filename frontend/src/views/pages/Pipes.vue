<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-pipes">
    <div class="flex flex-col ml-14 mr-10">
      <div class="ml-12 -mb-6 mt-4">
        <button
          class="bg-red-100 clear relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
          @click="showModal"
        >
          + Add Pipe
        </button>
      </div>
      <div>
        <AddModal v-show="isModalVisible" @close="closeModal">
          <template v-slot:header>Add a new pipe </template>
          <template v-slot:body>
            <div>
              <form>
                <div class="flex flex-col mb-5 items-center">
                  <input
                    type="text"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    :class="{ 'border-red-400 bg-red-100': errors.pipeName }"
                    v-model="pipeName"
                    placeholder="Name"
                  />
                  <div class="text-red-500">{{ errors.pipeName }}</div>
                </div>

                <div class="flex flex-col mb-5 items-center">
                  <input
                    type="text"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    :class="{ 'border-red-400 bg-red-100': errors.catalog }"
                    v-model="catalog"
                    placeholder="Catalog"
                  />
                  <div class="text-red-500">{{ errors.catalog }}</div>
                </div>

                <div class="flex flex-col mb-5 items-center">
                  <input
                    type="text"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    :class="{ 'border-red-400 bg-red-100': errors.schedule }"
                    v-model="schedule"
                    placeholder="Schedule"
                  />
                  <div class="text-red-500">{{ errors.schedule }}</div>
                </div>

                <div class="flex flex-col items-center">
                  <select
                    id="pipe-status-select"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10 capitalize"
                    :class="{ 'border-red-400 bg-red-100': errors.status }"
                    v-model="status"
                  >
                    <option :value="null" disabled>
                      -- Select the Pipe Status --
                    </option>
                    <option
                      v-for="(value, key) in PipeStatus"
                      :key="key"
                      :value="key"
                      class="capitalize"
                    >
                      {{ value.toLowerCase() }}
                    </option>
                  </select>
                  <div class="text-red-500">{{ errors.status }}</div>
                </div>
              </form>
            </div>
          </template>

          <template v-slot:footer>
            <div>
              <button
                class="w-8/12 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
                @click="addPipeClicked"
              >
                Submit
              </button>
              <button
                type="button"
                class="w-8/12 bg-light-purple text-white text-center px-1 py-1 rounded-xl ring-transparent"
                @click="close"
              >
                Cancel
              </button>
            </div></template
          >
        </AddModal>
      </div>

      <div class="flex flex-col ml-28 mr-12 mt-8">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Catalog
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Schedule
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="pipe in pipes" :key="pipe.id">
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ pipe.id }}</div>
                      +++
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ pipe.pipeName }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">
                        {{ pipe.catalog }}
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left"
                    >
                      {{ pipe.schedule }}
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap text-left">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                        >{{ pipe.status }}
                      </span>
                    </td>
                    <td>
                      <button class="px-2" @click="editPipeClicked(pipe.id)">
                        <MdiIcon
                          :icon="mdiLeadPencil"
                          size="1.5rem"
                          color="#6366f1"
                        />
                      </button>
                    </td>

                    <td>
                      <button
                        class="text-red-400 font-semibold text-xs px-2"
                        @click="deletePipeClicked(pipe.id)"
                      >
                        <div class="inline-block">
                          <MdiIcon
                            :icon="mdiDelete"
                            size="1.5rem"
                            color="#6366f1"
                          />
                        </div>
                      </button>
                    </td>
                  </tr>

                  <!-- More items... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as pipes from "../../store/pipes";
import * as jobs from "../../store/jobs";
import { PipeStatus } from "../../models";
import { GenericObject } from "../../types";

import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";
import validator from "validator";

export default defineComponent({
  name: "Pipes",

  computed: {
    ...mapState(pipes.NAMESPACE, ["pipes"]),
    ...mapState(jobs.NAMESPACE, ["jobs"]),
  },

  components: {
    MdiIcon,
    AddModal,
  },

  data() {
    return {
      pipeName: "",
      catalog: "",
      schedule: "",
      status: null,
      errors: {} as GenericObject,
      // jobId: "",
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
      PipeStatus,
    };
  },
  // watch: {
  //   // whenever question changes, this function will run
  //   pipeName(value) {
  //     // this.answer = "Waiting for you to stop typing...";
  //     // this.getSourceName();
  //     //console.log(validator.isAlphanumeric(value));
  //     if (!validator.isAlphanumeric(value)) {
  //       this.errors.pipeName = "For god's sake enter it correclty !";
  //     } else {
  //       this.errors.pipeName = "Nice job!";
  //     }
  //     return;
  //     //  this.sourceName = value;
  //     // return this.pipeName;
  //   },
  //   catalog(value) {
  //     if (!validator.isJSON(value)) {
  //       this.errors.catalog = "Config must be JSON !";
  //     } else {
  //       this.errors.catalog = "Nice job!";
  //     }
  //     //  this.catalog = value;
  //     // return this.catalog;
  //     return;
  //   },
  // },

  methods: {
    addPipeClicked() {
      this.errors = {};

      if (!this.pipeName) {
        this.errors.pipeName = "Pipe Name is required";
      } else if (!validator.isAlphanumeric(this.pipeName)) {
        this.errors.pipeName = "Valid Pipe Name required";
      } else if (this.pipeName.length < 3) {
        this.errors.pipeName = "Pipe Name should have at least 4 characters";
      }

      if (!this.catalog) {
        this.errors.catalog = "Config is required.";
      } else if (!validator.isJSON(this.catalog)) {
        this.errors.catalog = "Valid Catalog required";
      }
      //Check the schedule exact format
      if (!this.schedule) {
        this.errors.schedule = "Schedule is required";
      } else if (!validator.isAlphanumeric(this.schedule)) {
        this.errors.schedule = "Valid Schedule required";
      }

      if (!this.status) {
        this.errors.status = "Pipe Status is required.";
      }

      if (!Object.keys(this.errors).length) {
        const pipe = {
          name: this.pipeName,
          catalog: this.catalog,
          schedule: this.schedule,
          status: this.status,
        };

        this.$store.dispatch(pipes.NamespacedActionTypes.CREATE, { pipe });
        this.isModalVisible = false;
      }
    },

    deletePipeClicked(id: string) {
      this.$store.dispatch(pipes.NamespacedActionTypes.DELETE, { id });
    },
    editPipeClicked(pipeId: string) {
      this.$router.push({
        name: "pages.editPipes",
        params: { id: pipeId },
      });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    close() {
      this.pipeName = "";
      this.catalog = "";
      this.schedule = "";
      this.status = null;
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(pipes.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(jobs.NamespacedActionTypes.INIT_LIST);

    this.$store.dispatch(pipes.NamespacedActionTypes.SUBSCRIBE);
    // console.log(PipeStatus);
  },
});
</script>
<style></style>
