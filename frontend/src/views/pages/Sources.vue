<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-sources">
    <div>
      <button
        class="bg-red-100 clear -top-6 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
        @click="showModal"
      >
        + Add Source
      </button>
    </div>

    <div>
      <AddModal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>Add a new source </template>
        <template v-slot:body>
          <div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="sourceName"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="config"
                placeholder="Config"
              />
            </div>
            <div>
              <!-- <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="sourceType"
                placeholder="Source Type"
              /> -->
              <select
                id="source-tyoe-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10 mb-5"
                v-model="sourceType"
              >
                <option value="" default>-- Select the Source Type --</option>
                <option
                  v-for="sourceType in this.$store.state.sourceTypes
                    .sourceTypes"
                  :key="sourceType.id"
                >
                  {{ sourceType.name }}
                </option>
              </select>
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-2 w-8/12 h-10"
                v-model="team"
                placeholder="Team"
              />
            </div>
          </div>
        </template>

        <template v-slot:footer>
          <div>
            <button
              class="w-3/6 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
              @click="addSourceClicked"
            >
              Submit
            </button>
            <button
              type="button"
              class="w-3/6 bg-light-purple text-white text-center px-1 py-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
              @click="close"
            >
              Close
            </button>
          </div></template
        >
      </AddModal>
    </div>

    <div class="flex flex-col ml-28 mr-12 mt-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    {{ source.sourceType }}
                  </td>
                  <td class="px-2 py-4 whitespace-nowrap text-left">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      VSC Team
                    </span>
                  </td>
                  <td>
                    <button class="px-2" @click="editSourceClicked(source.id)">
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
</template>

<script lang="ts">
import * as sources from "../../store/sources";
import * as sourceTypes from "../../store/sourceTypes";

import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";

export default defineComponent({
  name: "Sources",

  computed: {
    ...mapState(sources.NAMESPACE, ["sources"]),
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
  },
  components: {
    MdiIcon,
    AddModal,
  },
  data() {
    return {
      sourceName: "",
      config: "",
      sourceType: "",
      team: "",
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
    };
  },

  methods: {
    addSourceClicked() {
      const source = {
        name: this.sourceName,
        config: this.config,
        sourceType: this.sourceType,
        team: this.team,
      };

      this.$store.dispatch(sources.NamespacedActionTypes.CREATE, { source });
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
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(sources.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.INIT_LIST);

    this.$store.dispatch(sources.NamespacedActionTypes.SUBSCRIBE);
  },
});
</script>
<style></style>
