<template>
  <div class="details">
    <div class="container">
      <div id="list-soruce-types">
        <div>
          <div>
            <div class="flex flex-col mb-5 items-center">
              <label for="name">Name</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 mt-10 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.name }"
                v-model="sourceType.name"
                placeholder="Name"
              />
              <div class="text-red-500">{{ errors.sourceTypeName }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="configSchema">Config Schema</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.configSchema }"
                v-model="sourceType.configSchema"
                placeholder="Config Schema"
              />
              <div class="text-red-500">{{ errors.configSchema }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="container">Container</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.container }"
                v-model="sourceType.container"
                placeholder="container"
              />
              <div class="text-red-500">{{ errors.container }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="taskARN">Task ARN</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.taskARN }"
                v-model="sourceType.taskARN"
                placeholder="Task ARN"
              />
              <div class="text-red-500">{{ errors.taskARN }}</div>
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
import * as sourceTypes from "../../store/sourceTypes";

import { mapState } from "vuex";
import { defineComponent } from "vue";

import validator from "validator";
import { GenericObject } from "../../types";
import { SourceType } from "../../models";

export default defineComponent({
  name: "editSourceTypes",

  data() {
    return {
      title: "edit-sourceTypes",
      sourceType: {} as SourceType,
      errors: {} as GenericObject,
    };
  },
  computed: {
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
  },
  methods: {
    onSubmitClicked() {
      this.errors = {};

      const { id, name, configSchema, container, taskARN } = this.sourceType;

      if (!this.sourceType.name) {
        this.errors.sourceTypeName = "Source Tyoe Name is required";
      } else if (!validator.isAlphanumeric(this.sourceType.name)) {
        this.errors.sourceTypeName = "Pipe Name should be a string";
      } else if (this.sourceType.name.length < 3) {
        this.errors.sourceTypeName =
          "Pipe Name should have at least 4 characters";
      }

      if (!this.sourceType.configSchema) {
        this.errors.configSchema = "Config Schema is required.";
      } else if (!validator.isJSON(this.sourceType.configSchema)) {
        this.errors.configSchema = "Config Schema should be in JSON format";
      }
      //Check the schedule exact format
      if (!this.sourceType.container) {
        this.errors.container = "Container is required";
      } else if (!validator.isAlphanumeric(this.sourceType.container)) {
        this.errors.container = "Container should be a string";
      }

      if (!this.sourceType.taskARN) {
        this.errors.taskARN = "Container is required";
      } else if (!validator.isAlphanumeric(this.sourceType.taskARN)) {
        this.errors.taskARN = "Container should be a string";
      }

      if (!Object.keys(this.errors).length) {
        const newSourceType = {
          name,
          configSchema,
          container,
          taskARN,
        };

        this.$store.dispatch(sourceTypes.NamespacedActionTypes.UPDATE, {
          id,
          pipe: newSourceType,
        });

        this.$router.push({ name: "pages.pipes" });
      }
    },
  },
  async created() {
    await this.$store.dispatch(sourceTypes.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sourceTypes.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.sourceType = {
      ...this.$store.getters["sourceTypes/getById"](this.$route.params.id),
    };
  },
});
</script>
