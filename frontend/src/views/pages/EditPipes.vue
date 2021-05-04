<template>
  <div class="details">
    <div class="container">
      <div id="list-pipes">
        <div>
          <div>
            <div class="flex flex-col mb-5 items-center">
              <label class="mt-10 font-medium" for="pipeName">Name</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.pipeName }"
                v-model="pipe.name"
                placeholder="Name"
              />
              <div class="text-red-500">{{ errors.pipeName }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="catalog">Catalog</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.catalog }"
                v-model="pipe.catalog"
                placeholder="Catalog"
              />
              <div class="text-red-500">{{ errors.catalog }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="schedule">Schedule</label>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                :class="{ 'border-red-400 bg-red-100': errors.schedule }"
                v-model="pipe.schedule"
                placeholder="Schedule"
              />
              <div class="text-red-500">{{ errors.schedule }}</div>
            </div>
            <div class="flex flex-col mb-5 items-center">
              <label for="status">Status</label>
              <select
                id="pipe-status-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10 capitalize"
                v-model="pipe.status"
              >
                <option :value="null" disabled>
                  -- Select the Pipe Status --
                </option>
                <option
                  v-for="(value, key) in PipeStatus"
                  :key="key"
                  :value="value"
                  class="capitalize"
                >
                  {{ value.toLowerCase() }}
                </option>
              </select>
            </div>

            <!-- <div>
              <select
                id="job-id-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10"
                v-model="jobId"
              >
                <option value="">-- Select the Job ID --</option>
                <option v-for="(job, id) in jobs" :key="id" :value="id">
                  {{ job.id }}
                </option>
              </select>
            </div> -->
          </div>
          <button
            class="bg-red-100 mt-5 bg-light-purple rounded-md py-2 px-4 text-white text-sm w-6/12 font-semibold"
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
import * as pipes from "../../store/pipes";
import * as jobs from "../../store/jobs";

import { mapState } from "vuex";
import { defineComponent } from "vue";
import { PipeStatus } from "../../models";
import validator from "validator";
import { GenericObject } from "../../types";
import { Pipe } from "../../models";

export default defineComponent({
  name: "editPipes",

  data() {
    return {
      title: "edit-pipes",
      pipe: {} as Pipe,
      jobId: "" as string,
      PipeStatus,
      errors: {} as GenericObject,
    };
  },
  computed: {
    ...mapState(pipes.NAMESPACE, ["pipes"]),
    ...mapState(jobs.NAMESPACE, ["jobs"]),
  },
  methods: {
    // onSubmitClicked() {
    //   const { id, name, catalog, schedule, status, jobId } = this.pipe;

    //   const newPipe = {
    //     name,
    //     catalog,
    //     schedule,
    //     status,
    //     job: this.jobs[this.jobId],
    //   };

    //   this.$store.dispatch(pipes.NamespacedActionTypes.UPDATE, {
    //     id,
    //     pipe: newPipe,
    //   });

    //   this.$router.push({ name: "pages.pipes" });
    // },

    onSubmitClicked() {
      this.errors = {};

      const { id, name, catalog, schedule, status } = this.pipe;

      if (!this.pipe.name) {
        this.errors.pipeName = "Pipe Name is required";
      } else if (!validator.isAlphanumeric(this.pipe.name)) {
        this.errors.pipeName = "Valid Pipe Name required";
      } else if (this.pipe.name.length < 3) {
        this.errors.pipeName = "Pipe Name should have at least 4 characters";
      }

      if (!this.pipe.catalog) {
        this.errors.catalog = "Config is required.";
      } else if (!validator.isJSON(this.pipe.catalog)) {
        this.errors.catalog = "Valid Catalog required";
      }
      //Check the schedule exact format
      if (!this.pipe.schedule) {
        this.errors.schedule = "Schedule is required";
      } else if (!validator.isAlphanumeric(this.pipe.schedule)) {
        this.errors.schedule = "Valid Schedule required";
      }

      // if (!this.status) {
      //   this.errors.status = "Pipe Status is required.";
      // }

      if (!Object.keys(this.errors).length) {
        const newPipe = {
          name,
          catalog,
          schedule,
          status,
          job: this.jobs[this.jobId],
        };

        this.$store.dispatch(pipes.NamespacedActionTypes.UPDATE, {
          id,
          pipe: newPipe,
        });

        this.$router.push({ name: "pages.pipes" });
      }
    },
  },
  async created() {
    await this.$store.dispatch(pipes.NamespacedActionTypes.INIT_LIST);
    await this.$store.dispatch(jobs.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(pipes.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.pipe = {
      ...this.$store.getters["pipes/getById"](this.$route.params.id),
    };
  },
});
</script>
