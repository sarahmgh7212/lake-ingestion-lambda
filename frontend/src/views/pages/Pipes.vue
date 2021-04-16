<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-pipes">
    <div>
      <button
        class="bg-red-100 clear -top-6 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
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
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="pipeName"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="catalog"
                placeholder="Catalog"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="schedule"
                placeholder="Schedule"
              />
            </div>
            <div>
              <!-- <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-8/12 h-10"
                v-model="team"
                placeholder="Status"
              /> -->
              <select
                id="pipe-status-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10 mb-5 capitalize"
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
            </div>
            <!-- <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                v-model="team"
                placeholder="Job ID"
              />
            </div> -->
            <div>
              <!-- <p><label for="job-id-select">Choose a job:</label></p> -->

              <!-- <select
                id="job-id-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                v-model="jobId"
              >
                <option value="">-- Select the Job ID --</option>
                <option v-for="(job, id) in jobs" :key="id" :value="id">
                  {{ job.id }}
                </option>
              </select> -->
            </div>
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
              Close
            </button>
          </div></template
        >
      </AddModal>
    </div>

    <div class="flex flex-col ml-28 mr-12 mt-8">
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
                          <!-- {{ pipe.jobId }} -->
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-left">
                    <div class="text-sm text-gray-900">{{ pipe.catalog }}</div>
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
</template>

<script lang="ts">
import * as pipes from "../../store/pipes";
import * as jobs from "../../store/jobs";
import { PipeStatus } from "../../models";

import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";

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
      // jobId: "",
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
      PipeStatus,
    };
  },

  methods: {
    addPipeClicked() {
      const pipe = {
        name: this.pipeName,
        catalog: this.catalog,
        schedule: this.schedule,
        status: this.status,
        //  jobId: this.jobId,
      };

      // interface Pipe {
      //   name: string;
      //   status: "ACTIVE" | "DISABLED";
      // }

      this.$store.dispatch(pipes.NamespacedActionTypes.CREATE, { pipe });
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
