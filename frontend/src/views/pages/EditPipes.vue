<template>
  <div class="details">
    <div class="container">
      <div id="list-pipes">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 mt-10 w-6/12 h-10"
                v-model="pipe.name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="pipe.catalog"
                placeholder="Catalog"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="pipe.schedule"
                placeholder="Schedule"
              />
            </div>
            <div>
              <select
                id="pipe-status-select"
                class="border-2 border-gray-300 rounded-lg px-6 w-6/12 h-10 mb-5 capitalize"
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

            <div>
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
            </div>
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
<script>
import * as pipes from "../../store/pipes";
import * as jobs from "../../store/jobs";

import { mapState } from "vuex";
import { defineComponent } from "vue";
import { PipeStatus } from "../../models";

export default defineComponent({
  name: "editPipes",

  data() {
    return {
      title: "edit-pipes",
      pipe: {},
      jobId: "",
      PipeStatus,
    };
  },
  computed: {
    ...mapState(pipes.NAMESPACE, ["pipes"]),
    ...mapState(jobs.NAMESPACE, ["jobs"]),
  },
  methods: {
    onSubmitClicked() {
      const { id, name, catalog, schedule, status, jobId } = this.pipe;

      const newPipe = {
        name,
        catalog,
        schedule,
        status,
        jobId,
      };

      this.$store.dispatch(pipes.NamespacedActionTypes.UPDATE, {
        id,
        pipe: newPipe,
      });

      this.$router.push({ name: "pages.pipes" });
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
