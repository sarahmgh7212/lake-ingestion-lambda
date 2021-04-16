<template>
  <div class="details">
    <div class="container">
      <div id="list-soruce-types">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 mt-10 w-6/12 h-10"
                v-model="sourceType.name"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="sourceType.configSchema"
                placeholder="Config Schema"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="sourceType.container"
                placeholder="container"
              />
            </div>
            <div>
              <input
                type="text"
                class="border-2 border-gray-300 rounded-lg px-6 mb-5 w-6/12 h-10"
                v-model="sourceType.taskARN"
                placeholder="Task ARN"
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
import * as sourceTypes from "../../store/sourceTypes";

import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "editSourceTypes",

  data() {
    return {
      title: "edit-sourceTypes",
      sourceType: {},
    };
  },
  computed: {
    ...mapState(sourceTypes.NAMESPACE, ["sourceTypes"]),
  },
  methods: {
    onSubmitClicked() {
      const { id, name, configSchema, container, taskARN } = this.sourceType;

      const newSourceType = {
        name,
        configSchema,
        container,
        taskARN,
      };

      this.$store.dispatch(sourceTypes.NamespacedActionTypes.UPDATE, {
        id,
        sourceType: newSourceType,
      });

      this.$router.push({ name: "pages.sourceTypes" });
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
