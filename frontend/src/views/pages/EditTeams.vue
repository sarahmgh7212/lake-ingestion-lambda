<template>
  <div class="details">
    <div class="container">
      <div id="list-soruce-types">
        <div>
          <div>
            <div class="flex flex-col items-center">
              <label for="teamName">Team Name :</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mt-10 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.teamName }"
                v-model="team.name"
                placeholder="Name"
              />
              <div class="text-red-500">{{ errors.teamName }}</div>
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
import * as teams from "../../store/teams";
import { GenericObject } from "../../types";
import validator from "validator";

import { mapState } from "vuex";
import { defineComponent } from "vue";
import { Team } from "../../models";

export default defineComponent({
  name: "editTeams",

  data() {
    return {
      title: "edit-teams",
      team: {} as Team,
      errors: {} as GenericObject,
    };
  },
  computed: {
    ...mapState(teams.NAMESPACE, ["teams"]),
  },
  methods: {
    //   onSubmitClicked() {
    //     const { id, name } = this.team;

    //     const newTeam = {
    //       name,
    //     };

    //     this.$store.dispatch(teams.NamespacedActionTypes.UPDATE, {
    //       id,
    //       team: newTeam,
    //     });

    //     this.$router.push({ name: "pages.teams" });
    //   },
    // },
    onSubmitClicked() {
      this.errors = {};
      const { id, name } = this.team;

      if (!this.team.name) {
        this.errors.teamName = "Team Name is required";
      } else if (!validator.isAlphanumeric(this.team.name)) {
        this.errors.teamName = "Valid Team Name is required";
      } else if (this.team.name.length < 3) {
        this.errors.teamName = "Team Name should have at least 4 characters";
      }

      if (!Object.keys(this.errors).length) {
        const newTeam = {
          name,
        };

        this.$store.dispatch(teams.NamespacedActionTypes.UPDATE, {
          id,
          team: newTeam,
        });
        this.$router.push({ name: "pages.teams" });
      }
    },
  },
  async created() {
    await this.$store.dispatch(teams.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(teams.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.team = {
      ...this.$store.getters["teams/getById"](this.$route.params.id),
    };
  },
});
</script>
