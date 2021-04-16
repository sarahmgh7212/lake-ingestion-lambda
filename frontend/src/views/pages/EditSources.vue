<template>
  <div class="details">
    <div class="container">
      <div id="list-sources">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <input
            type="text"
            id="source_name"
            v-model="source.name"
            placeholder="Name"
          />
          <input
            type="text"
            v-model="source.config"
            id="config"
            placeholder="Config"
          />
          <button class="bg-red-100" @click="onSubmitClicked()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as sources from "../../store/sources";

import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "editSources",

  data() {
    return {
      title: "edit-sources",
      source: {},
    };
  },
  computed: {
    ...mapState(sources.NAMESPACE, ["sources"]),
  },
  methods: {
    onSubmitClicked() {
      const { id, name, config, sourceType, team } = this.source;

      const newSource = {
        name,
        config,
        sourceType,
        team,
      };

      this.$store.dispatch(sources.NamespacedActionTypes.UPDATE, {
        id,
        source: newSource,
      });

      this.$router.push({ name: "pages.sources" });
    },
  },
  async created() {
    await this.$store.dispatch(sources.NamespacedActionTypes.INIT_LIST);
    this.$store.dispatch(sources.NamespacedActionTypes.SUBSCRIBE);
    //console.log(this.$store.getters);
    this.source = {
      ...this.$store.getters["sources/getById"](this.$route.params.id),
    };
  },
});
</script>
