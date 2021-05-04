<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-sourceTypes">
    <div class="flex flex-col ml-14 mr-10">
      <div class="ml-12 mt-10 -mb-14">
        <button
          class="bg-red-100 clear -top-6 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
          @click="showModal"
        >
          + Add Source Type
        </button>
      </div>

      <div class="flex flex-col ml-28 mr-12 mt-10">
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
                      Config Schema
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Container
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task ARN
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="sourceType in sourceTypes" :key="sourceType.id">
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">
                        {{ sourceType.id }}
                      </div>
                      +++
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ sourceType.name }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">
                        {{ sourceType.configSchema }}
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left"
                    >
                      {{ sourceType.container }}
                    </td>
                    <td class="px-2 py-4 whitespace-nowrap text-left">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {{ sourceType.taskARN }}
                      </span>
                    </td>
                    <td>
                      <button
                        class="px-2"
                        @click="editSourceTypeClicked(sourceType.id)"
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
                        @click="deleteSourceTypeClicked(sourceType.id)"
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

      <div>
        <AddModal v-show="isModalVisible" @close="closeModal">
          <template v-slot:header>Add a new Source Type </template>
          <template v-slot:body>
            <div>
              <div cclass="flex flex-col mb-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                  :class="{
                    'border-red-400 bg-red-100': errors.sourceTypeName,
                  }"
                  v-model="sourceTypeName"
                  placeholder="Name"
                />
                <div class="text-red-500">{{ errors.sourceTypeName }}</div>
              </div>
              <div class="flex flex-col mb-5 mt-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.configSchema }"
                  v-model="configSchema"
                  placeholder="Config Schema"
                />
                <div class="text-red-500">{{ errors.configSchema }}</div>
              </div>
              <div class="flex flex-col mb-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.container }"
                  v-model="container"
                  placeholder="Container"
                />
                <div class="text-red-500">{{ errors.container }}</div>
              </div>
              <div class="flex flex-col mb-5 items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg px-6 mb-2 w-8/12 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.taskARN }"
                  v-model="taskARN"
                  placeholder="Task ARN"
                />
                <div class="text-red-500">{{ errors.taskARN }}</div>
              </div>
            </div>
          </template>

          <template v-slot:footer>
            <div>
              <button
                class="w-3/6 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
                @click="addSourceTypeClicked"
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
  </div>
</template>

<script lang="ts">
import * as sourceTypes from "../../store/sourceTypes";
import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";

import validator from "validator";
import { GenericObject } from "../../types";

export default defineComponent({
  name: "SourceTypes",

  computed: {
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
  },
  components: {
    MdiIcon,
    AddModal,
  },
  data() {
    return {
      sourceTypeName: "",
      configSchema: "",
      container: "",
      taskARN: "",
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
      errors: {} as GenericObject,
    };
  },

  methods: {
    // addSourceTypeClicked() {
    //   const sourceType = {
    //     name: this.sourceTypeName,
    //     configSchema: this.configSchema,
    //     container: this.container,
    //     taskARN: this.taskARN,
    //   };

    //   this.$store.dispatch(sourceTypes.NamespacedActionTypes.CREATE, {
    //     sourceType,
    //   });
    // },

    addSourceTypeClicked() {
      this.errors = {};

      if (!this.sourceTypeName) {
        this.errors.sourceTypeName = "Source Type Name is required";
      } else if (!validator.isAlphanumeric(this.sourceTypeName)) {
        this.errors.sourceTypeName = "Source Type Name should be a String";
      } else if (this.sourceTypeName.length < 3) {
        this.errors.sourceTypeName =
          "Source Type Name should have at least 4 characters";
      }

      if (!this.configSchema) {
        this.errors.configSchema = "Config is required.";
      } else if (!validator.isJSON(this.configSchema)) {
        this.errors.configSchema = "Catalog should be in JSON format";
      }
      //Check the schedule exact format
      if (!this.container) {
        this.errors.container = "Container is required";
      } else if (!validator.isAlphanumeric(this.container)) {
        this.errors.container = "Container should be a String ";
      }

      if (!this.taskARN) {
        this.errors.taskARN = "Task ARN is required";
      } else if (!validator.isAlphanumeric(this.taskARN)) {
        this.errors.taskARN = "Task ARN should be a String";
      }

      if (!Object.keys(this.errors).length) {
        const sourceType = {
          name: this.sourceTypeName,
          configSchema: this.configSchema,
          container: this.container,
          taskARN: this.taskARN,
        };

        this.$store.dispatch(sourceTypes.NamespacedActionTypes.CREATE, {
          sourceType,
        });
        this.isModalVisible = false;
      }
    },
    deleteSourceTypeClicked(id: string) {
      this.$store.dispatch(sourceTypes.NamespacedActionTypes.DELETE, { id });
    },
    editSourceTypeClicked(sourceTypeId: string) {
      this.$router.push({
        name: "pages.editSourceTypes",
        params: { id: sourceTypeId },
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
      this.sourceTypeName = "";
      this.configSchema = "";
      this.container = "";
      this.taskARN = "";
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.SUBSCRIBE);
  },
});
</script>
<style></style>
