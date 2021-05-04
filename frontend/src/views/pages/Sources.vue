<template>
  <!-- https://www.digitalocean.com/community/tutorials/template-driven-form-validation-in-vuejs -->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-sources">
    <div class="flex flex-col ml-14 mr-10">
      <div class="ml-12 mt-8 -mb-4">
        <button
          class="bg-red-100 clear -top-6 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
          @click="showModal"
        >
          + Add Source
        </button>
      </div>

      <div class="flex flex-col ml-28 mr-12">
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
                      Config
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Source Type
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="source in sources" :key="source.id">
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ source.id }}</div>
                      +++
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ source.name }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">
                        {{ source.config }}
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left"
                    >
                      {{ source.sourceType?.name }}
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap text-left">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {{ source.team?.name }}
                      </span>
                    </td>
                    <td>
                      <button
                        class="px-2"
                        @click="editSourceClicked(source.id)"
                      >
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
                        @click="deleteSourceClicked(source.id)"
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
    <div>
      <AddModal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>Add a new source </template>
        <template v-slot:body>
          <div>
            <form>
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key='error.id'>{{ error }}</li>
              </ul>
            </p>
              <div id="source-name" class="flex flex-col mb-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg w-8/12 pl-6 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.sourceName }"
                  v-model="sourceName"
                  placeholder="Name"
                />
                <div class="text-red-500 mt-2">{{ errors.sourceName }}</div>
         
              </div>

              <div id="cnfig" class="flex flex-col mb-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg w-8/12 pl-6 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.config }"
                  v-model="config"
                  placeholder="Config"
                />
                <div class="text-red-500 mt-2">{{ errors.config }}</div>
              
              </div>

              <div class="flex flex-col mb-5 items-center">
                <select
                  id="source-type-select"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                   :class="{ 'border-red-400 bg-red-100': errors.sourceTypeId }"
                  v-model="sourceTypeId"
                >
                  <option value="" selected disabled>
                    -- Select the Source Type --
                  </option>
                  <option
                    v-for="sourceType in this.$store.state.sourceTypes
                      .sourceTypes"
                    :key="sourceType.id"
                    :value="sourceType.id"
                  >
                    {{ sourceType.name }}
                  </option>
                </select>
                 <div class="text-red-500 mt-2">{{ errors.sourceTypeId }}</div>
              </div>

              <div class="flex flex-col mb-5 items-center">
                <select
                  id="team-select"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                   :class="{ 'border-red-400 bg-red-100': errors.teamId }"
                  v-model="teamId"
                >
                  <option value="" selected disabled>
                    -- Select your team --
                  </option>
                  <option
                    v-for="team in this.$store.state.teams.teams"
                    :key="team.id"
                    :value="team.id"
                  >
                    {{ team.name }}
                  </option>
                </select>
                <div class="text-red-500 mt-2">{{ errors.teamId }}</div>
              </div>
            </form>
          </div>
        </template>

        <template v-slot:footer>
          <div>
             <button
              class="w-3/6 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
              @click="addSourceClicked"
              type="button"
            >
              Submit
            </button>
            <button
              type="button"
              class="w-3/6 bg-light-purple text-white text-center px-1 py-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
              @click="close"
            >
              Cancel
            </button>
          </div></template
        >
      </AddModal>
    </div>
  </div>
</template>

<script lang="ts">
import * as sources from "../../store/sources";
import * as sourceTypes from "../../store/sourceTypes";
import * as teams from "../../store/teams";
import { GenericObject } from '../../types';

import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";
import validator from "validator";

export default defineComponent({
  name: "Sources",

  computed: {
    ...mapState(sources.NAMESPACE, ["sources"]),
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
    ...mapState(teams.NAMESPACE, ["teams"]),
  },

  components: {
    MdiIcon,
    AddModal,
  },

  data() {
    return {
      sourceName: "",
      config: "",
      sourceTypeId: "",
      teamId: "",
      // errors: { sourceName: "", config: "" },
      errors: {} as GenericObject,
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
    };
  },

  // watch: {
  //   // whenever question changes, this function will run
  //   sourceName: function (value) {
  //     // this.answer = "Waiting for you to stop typing...";
  //     // this.getSourceName();
  //     //console.log(validator.isAlphanumeric(value));
  //     if (!validator.isAlphanumeric(value)) {
  //       this.errors.sourceName = "For god's sake enter it correclty !";
  //     } else {
  //       this.errors.sourceName = "Nice job!";
  //     }
  //     //  this.sourceName = value;
  //     // return this.sourceName;
  //   },
  //   config: function (value) {
  //     if (!validator.isJSON(value)) {
  //       this.errors.config = "Config must be JSON !";
  //     } else {
  //       this.errors.config = "Nice job!";
  //     }
  //     //  this.config = value;
  //     // return this.config;
  //   },
  // },

  methods: {
    addSourceClicked() {
      this.errors = {};

      if (!this.sourceName) {
        this.errors.sourceName = 'Source Name is required.';
      } else if (!validator.isAlphanumeric(this.sourceName)) {
        this.errors.sourceName = 'Valid Source Name required.';
      } else if (this.sourceName.length < 3) {
        this.errors.sourceName = "Source Name should have at least 4 characters";
      }

      if (!this.config) {
        this.errors.config = 'Config is required.';
      } else if (!validator.isJSON(this.config)) {
        this.errors.config = 'Valid Config required.';
      }

       if (!this.sourceTypeId) {
        this.errors.sourceTypeId = 'Source Type is required.';
      } 

      if (!this.teamId) {
        this.errors.teamId = 'Team is required.';
      } 


      if (!Object.keys(this.errors).length) {
        const source = {
          name: this.sourceName,
          config: this.config,
          sourceType: this.sourceTypes[this.sourceTypeId],
          team: this.teams[this.teamId],
        };

        this.$store.dispatch(sources.NamespacedActionTypes.CREATE, { source });
        this.isModalVisible = false;
      }
    },

    deleteSourceClicked(id: string) {
      this.$store.dispatch(sources.NamespacedActionTypes.DELETE, { id });
    },

    editSourceClicked(sourceId: string) {
      this.$router.push({
        name: "pages.editSources",
        params: { id: sourceId },
      });
    },

    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    close() {
      //close text button on Modal
     
      this.sourceName= "",
      this.config = "",
      this.sourceTypeId = "",
      this.teamId = ""
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(sources.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(teams.NamespacedActionTypes.INIT_LIST);

    //console.log(this.$store.state.teams);
    //console.log(validator.isAlphanumeric(this.sourceName));
    this.$store.dispatch(sources.NamespacedActionTypes.SUBSCRIBE);
  },
});
</script>

<style></style>
