<template>
  <div class="details">
    <div class="container">
      <div id="list-users">
        <div>
          <div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 mt-10 w-6/12 h-10"
                v-model="user.name"
                placeholder="Name"
              />
            </div>
            <div>
              <select
                id="user-status-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10 mb-5 capitalize"
                v-model="user.role"
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
            </div>
          </div>
          <button
            class="bg-red-100 mt-5 bg-light-purple rounded-md py-2 px-4 text-white text-sm font-semibold"
            @click="onSubmitClicked()"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import * as users from "../../store/users";
import { UserRole } from "../../models";
import { mapState } from "vuex";
import { defineComponent } from "vue";

import validator from "validator";
import { GenericObject } from "../../types";
import { User } from "../../models";

export default defineComponent({
  name: "editUsers",

  data() {
    return {
      title: "edit-users",
      user: {} as User,
      UserRole,
      errors: {} as GenericObject,
    };
  },
  computed: {
    ...mapState(users.NAMESPACE, ["users"]),
  },
  methods: {
    // onSubmitClicked() {
    //   const { id, name, role } = this.user;

    //   const newUser = {
    //     name,
    //     role,
    //   };

    //   this.$store.dispatch(users.NamespacedActionTypes.UPDATE, {
    //     id,
    //     user: newUser,
    //   });

    //   this.$router.push({ name: "pages.users" });
    // },

    onSubmitClicked() {
      this.errors = {};

      const { id, name, role } = this.user;

      if (!this.user.name) {
        this.errors.userName = "Source Name is required.";
      } else if (!validator.isAlphanumeric(this.user.name)) {
        this.errors.userName = "Valid Source Name required.";
      } else if (this.user.name.length < 3) {
        this.errors.userName = "Source Name should have at least 4 characters";
      }

      if (!Object.keys(this.errors).length) {
        const newUser = {
          name,
          role,
        };

        this.$store.dispatch(users.NamespacedActionTypes.UPDATE, {
          id,
          user: newUser,
        });

        this.$router.push({ name: "pages.users" });
      }
    },
  },
  async created() {
    await this.$store.dispatch(users.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(users.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.user = {
      ...this.$store.getters["users/getById"](this.$route.params.id),
    };
  },
});
</script>
