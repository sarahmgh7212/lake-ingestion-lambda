<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-teams">
    <div class="flex flex-col ml-14 mr-10">
      <div class="ml-12 mt-10 -mb-14">
        <button
          class="bg-red-100 clear -top-6 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
          @click="showModal"
        >
          + Add Team
        </button>
      </div>

      <div class="flex flex-col ml-28 mr-12 mt-8">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 min-w-full">
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
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="team in teams" :key="team.id">
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ team.id }}</div>
                      +++
                    </td>
                    <!-- <td class="px-2 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ pipe.jobId }}
                          </div>
                        </div>
                      </div>
                    </td> -->
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ team.name }}</div>
                    </td>
                    <td>
                      <button class="px-2" @click="editTeamClicked(team.id)">
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
                        @click="deleteTeamClicked(team.id)"
                      >
                        <MdiIcon
                          :icon="mdiDelete"
                          size="1.5rem"
                          color="#6366f1"
                        />
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
          <template v-slot:header>Add a new team </template>
          <template v-slot:body>
            <div>
              <div class="flex flex-col items-center">
                <input
                  type="text"
                  class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                  :class="{ 'border-red-400 bg-red-100': errors.teamName }"
                  v-model="teamName"
                  placeholder="Name"
                />
              </div>
              <div class="text-red-500">{{ errors.teamName }}</div>
            </div>
          </template>

          <template v-slot:footer>
            <div>
              <button
                class="w-8/12 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
                @click="addTeamClicked"
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
    </div>
  </div>
</template>

<script lang="ts">
import * as teams from "../../store/teams";
import MdiIcon from "../../components/MdiIcon.vue";
import { GenericObject } from "../../types";
import validator from "validator";

import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";

export default defineComponent({
  name: "Teams",

  computed: {
    ...mapState(teams.NAMESPACE, ["teams"]),
  },

  components: {
    MdiIcon,
    AddModal,
  },

  data() {
    return {
      teamName: "",
      errors: {} as GenericObject,
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
    };
  },

  methods: {
    // addTeamClicked() {
    //   const team = {
    //     name: this.teamName,
    //   };

    //   this.$store.dispatch(teams.NamespacedActionTypes.CREATE, { team });
    // },
    addTeamClicked() {
      this.errors = {};

      if (!this.teamName) {
        this.errors.teamName = "Team Name is required";
      } else if (!validator.isAlphanumeric(this.teamName)) {
        this.errors.teamName = "Valid Team Name required";
      } else if (this.teamName.length < 3) {
        this.errors.teamName = "Team Name should have at least 4 characters";
      }

      if (!Object.keys(this.errors).length) {
        const team = {
          name: this.teamName,
        };

        this.$store.dispatch(teams.NamespacedActionTypes.CREATE, { team });
        this.isModalVisible = false;
      }
    },
    deleteTeamClicked(id: string) {
      this.$store.dispatch(teams.NamespacedActionTypes.DELETE, { id });
    },
    editTeamClicked(teamId: string) {
      this.$router.push({
        name: "pages.editTeams",
        params: { id: teamId },
      });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    close() {
      this.teamName = "";
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(teams.NamespacedActionTypes.INIT_LIST);

    this.$store.dispatch(teams.NamespacedActionTypes.SUBSCRIBE);
    // console.log(PipeStatus);
  },
});
</script>
<style></style>
