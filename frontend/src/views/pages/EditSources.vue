<template>
  <div class="details">
    <div class="container">
      <div id="list-sources">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <div>
            <div class="flex flex-col items-center">
              <label class="mt-10" for="sourceName">Name</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.sourceName }"
                v-model="source.name"
                placeholder="Name"
              />
              <div class="text-red-500">{{ errors.sourceName }}</div>
            </div>
            <div class="flex flex-col mt-3 items-center">
              <label for="config">Config</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.config }"
                v-model="source.config"
                placeholder="Config"
              />
              <div class="text-red-500">{{ errors.config }}</div>
            </div>
            <div class="flex flex-col mt-5 items-center">
              <label for="sourceType">Source Type</label>
              <select
                id="source-type-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10 mb-5"
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
              <!-- <div class="text-red-500">{{ errors.sourceType }}</div> -->
            </div>
            <div class="flex flex-col items-center">
              <label for="TeamName">Team Name</label>
              <select
                id="source-tyoe-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10 mb-5"
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
              <!-- <div class="text-red-500">{{ errors.teamId }}</div> -->
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
import * as sources from "../../store/sources";
import * as sourceTypes from "../../store/sourceTypes";
import * as teams from "../../store/teams";
import { GenericObject } from "../../types";

import { mapState } from "vuex";
import { defineComponent } from "vue";
import validator from "validator";
import { Source } from "../../models";

export default defineComponent({
  name: "editSources",

  data() {
    return {
      title: "edit-sources",
      source: {} as Source,
      sourceTypeId: "" as string,
      teamId: "" as string,
      errors: {} as GenericObject,
    };
  },
  computed: {
    ...mapState(sources.NAMESPACE, ["sources"]),
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
    ...mapState(teams.NAMESPACE, ["teams"]),
  },
  methods: {
    //   onSubmitClicked() {
    //     const { id, name, config, sourceType, team } = this.source;

    //     const newSource = {
    //       name,
    //       config,
    //       sourceType: this.sourceTypes[this.sourceTypeId],
    //       team: this.teams[this.teamId],
    //     };

    //     this.$store.dispatch(sources.NamespacedActionTypes.UPDATE, {
    //       id,
    //       source: newSource,
    //     });

    //     this.$router.push({ name: "pages.sources" });
    //   },
    // },
    onSubmitClicked() {
      this.errors = {};

      const { id, name, config, sourceType, team } = this.source;

      if (!this.source.name) {
        this.errors.sourceName = "Source Name is required.";
      } else if (!validator.isAlphanumeric(this.source.name)) {
        this.errors.sourceName = "Valid Source Name required.";
      } else if (this.source.name.length < 3) {
        this.errors.sourceName =
          "Source Name should have at least 4 characters";
      }

      if (!this.source.config) {
        this.errors.config = "Config is required.";
      } else if (!validator.isJSON(this.source.config)) {
        this.errors.config = "Valid Config required.";
      }

      if (!Object.keys(this.errors).length) {
        const newSource = {
          name,
          config,
          sourceType: this.sourceTypes[this.sourceTypeId],
          team: this.teams[this.teamId],
        };

        this.$store.dispatch(sources.NamespacedActionTypes.UPDATE, {
          id,
          source: newSource,
        });

        this.$router.push({ name: "pages.sources" });
      }
    },
  },
  async created() {
    await this.$store.dispatch(sources.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(teams.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sources.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.source = {
      ...this.$store.getters["sources/getById"](this.$route.params.id),
    };
    this.sourceTypeId = this.source.sourceType.id;
    this.teamId = this.source.team.id;
  },
});
</script>
