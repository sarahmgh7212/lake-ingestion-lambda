<template>
  <div class="details">
    <div class="container">
      <div id="list-sources">
        <div>
          <form @submit.prevent="handleSubmit"></form>
          <!-- <input
            type="text"
            v-bind:value="source.name"
            id="source_name"
            ref="source_name"
            placeholder="Name"
          />
          <input
            type="text"
            v-bind:value="source.url"
            ref="url"
            id="url"
            placeholder="URL"
          /> -->

          <input
            type="text"
            id="source_name"
            v-model="source.name"
            placeholder="Name"
          />
          <input
            type="text"
            v-model="source.url"
            ref="url"
            id="url"
            placeholder="URL"
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
    // onSubmitClicked(source) {
    //   //  e.preventDefault()
    //   const { id, sourceName, url } = { ...source };
    //   // const editedSource = { name, url };
    //   this.source.name = this.$ref["source_name"].value;
    //   this.source.url = this.$ref["url"].value;
    //   // this.source.name = document.getElementById("source_name").value;
    //   // this.source.url = document.getElementById("url").value;
    //   const editedSource = {
    //     sourceName: this.source.sourceName,
    //     url: this.source.url,
    //   };
    //   this.$store.dispatch(sources.NamespacedActionTypes.UPDATE, {
    //     id,
    //     source: editedSource,
    //   });
    //   console.log(document.getElementById("source_name").value);
    //   this.$router.push({ name: "pages.sources" });
    // },

    onSubmitClicked() {
      const { id, name, url } = this.source;

      const newSource = {
        name,
        url,
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
