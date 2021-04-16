<template>
  <div class="details">
    <div class="container">
      <div id="list-jobs">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 mt-10 w-6/12 h-10"
                v-model="job.startedAt"
                placeholder="Started At"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="job.initAt"
                placeholder="Init At"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="job.completedAt"
                placeholder="Completed At"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="job.failedAt"
                placeholder="Failed At"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="job.logsARN"
                placeholder="Logs ARN"
              />
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
<script>
import * as jobs from "../../store/jobs";

import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "editJobs",

  data() {
    return {
      title: "edit-jobs",
      job: {},
    };
  },
  computed: {
    ...mapState(jobs.NAMESPACE, ["jobs"]),
  },
  methods: {
    onSubmitClicked() {
      const {
        id,
        startedAt,
        initAt,
        completedAt,
        failedAt,
        logsARN,
      } = this.job;

      const newJob = {
        startedAt,
        initAt,
        completedAt,
        failedAt,
        logsARN,
      };

      this.$store.dispatch(jobs.NamespacedActionTypes.UPDATE, {
        id,
        job: newJob,
      });

      this.$router.push({ name: "pages.jobs" });
    },
  },
  async created() {
    await this.$store.dispatch(jobs.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(jobs.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.job = {
      ...this.$store.getters["jobs/getById"](this.$route.params.id),
    };
  },
});
</script>
