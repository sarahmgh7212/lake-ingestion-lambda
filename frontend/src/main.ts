import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from "aws-amplify";

import "./assets/tailwind.css";
//@ts-expect-error Fuck you
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

createApp(App).use(store).use(router).mount("#app");
//https://docs.amplify.aws/lib/datastore/sync/q/platform/js#setup-cloud-sync
//https://docs.amplify.aws/cli/usage/mock#api-mocking-setup
//https://m-square.com.au/new-local-mocking-and-testing-with-the-amplify-cli/

// //@ts-ignore This is very bad don't do it
// window.store = store;
