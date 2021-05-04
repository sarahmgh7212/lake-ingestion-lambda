<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div id="list-users">
    <div class="flex flex-col ml-14 mr-10">
      <div class="ml-12 mt-5 -mb-2">
        <button
          class="bg-red-100 clear -top-3 relative left-16 float-left ml-1 mb-4 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
          @click="showModal"
        >
          + Add User
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
                      Role
                    </th>

                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="user in users" :key="user.id">
                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ user.id }}</div>
                      +++
                    </td>
                    <!-- <td class="px-2 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        
                        </div>
                      </div>
                    </div>
                  </td> -->

                    <td class="px-6 py-4 whitespace-nowrap text-left">
                      <div class="text-sm text-gray-900">{{ user.name }}</div>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left"
                    >
                      {{ user.role }}
                    </td>

                    <td>
                      <button class="px-2" @click="editUserClicked(user.id)">
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
                        @click="deleteUserClicked(user.id)"
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
          <template v-slot:header>Add a new user </template>
          <template v-slot:body>
            <div>
              <form>
                <div class="flex flex-col mb-5 items-center">
                  <input
                    type="text"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    :class="{ 'border-red-400 bg-red-100': errors.userName }"
                    v-model="userName"
                    placeholder="Name"
                  />
                  <div class="text-red-500">{{ errors.userName }}</div>
                </div>

                <div class="flex flex-col mb-5 items-center">
                  <select
                    id="user-status-select"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10 capitalize"
                    :class="{ 'border-red-400 bg-red-100': errors.role }"
                    v-model="role"
                  >
                    <option :value="null" disabled>
                      -- Select the User Role --
                    </option>
                    <option
                      v-for="(value, key) in UserRole"
                      :key="key"
                      :value="key"
                      class="capitalize"
                    >
                      {{ value.toLowerCase() }}
                    </option>
                  </select>
                  <div class="text-red-500">{{ errors.role }}</div>
                </div>

                <!-- <div>
                  <input
                    type="text"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    v-model="team"
                    placeholder="Job ID"
                  />
                </div> -->
                <!-- <div> 
                  <select
                    id="job-id-select"
                    class="border-2 border-gray-300 rounded-lg px-6 w-8/12 h-10"
                    v-model="jobId"
                  >
                    <option value="">-- Select the Job ID --</option>
                    <option v-for="(job, id) in jobs" :key="id" :value="id">
                      {{ job.id }}
                    </option>
                  </select>
                </div> -->
              </form>
            </div>
          </template>

          <template v-slot:footer>
            <div>
              <button
                class="w-8/12 bg-light-purple text-white text-center px-1 py-1 mb-3 mr-1 rounded-xl ring-transparent hover:bg-hover-light-purple"
                @click="addUserClicked"
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
import * as users from "../../store/users";
import { GenericObject } from "../../types";
import { UserRole } from "../../models";

import MdiIcon from "../../components/MdiIcon.vue";
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { mdiLeadPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import AddModal from "../../components/AddModal.vue";
import validator from "validator";
export default defineComponent({
  name: "Users",

  computed: {
    ...mapState(users.NAMESPACE, ["users"]),
  },

  components: {
    MdiIcon,
    AddModal,
  },

  data() {
    return {
      userName: "",
      role: null,
      errors: {} as GenericObject,
      mdiDelete,
      mdiLeadPencil,
      isModalVisible: false,
      UserRole,
    };
  },
  // watch: {
  //   // whenever question changes, this function will run
  //   userName: function (value: any) {
  //     if (!validator.isAlphanumeric(value)) {
  //       this.errors.userName = "For god's sake enter it correclty !";
  //     } else {
  //       this.errors.userName = "Nice job!";
  //     }
  //     this.userName = value;
  //     return;
  //   },
  // },
  methods: {
    addUserClicked() {
      this.errors = {};

      if (!this.userName) {
        this.errors.userName = "Username is required.";
      } else if (!validator.isAlphanumeric(this.userName)) {
        this.errors.userName = "Valid Username required.";
      }

      if (!this.role) {
        this.errors.role = "Role is required.";
      }

      if (!Object.keys(this.errors).length) {
        const user = {
          name: this.userName,
          role: this.role,
        };

        this.$store.dispatch(users.NamespacedActionTypes.CREATE, { user });
        this.isModalVisible = false;
      }
    },

    deleteUserClicked(id: string) {
      this.$store.dispatch(users.NamespacedActionTypes.DELETE, { id });
    },
    editUserClicked(userId: string) {
      this.$router.push({
        name: "pages.editUsers",
        params: { id: userId },
      });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    close() {
      this.userName = "";
      this.role = null;
      this.closeModal();
    },
  },

  created() {
    this.$store.dispatch(users.NamespacedActionTypes.INIT_LIST);

    this.$store.dispatch(users.NamespacedActionTypes.SUBSCRIBE);
    console.log(validator.isAlphanumeric(this.userName));
    // console.log(UserStatus);
  },
});
</script>
<style></style>
