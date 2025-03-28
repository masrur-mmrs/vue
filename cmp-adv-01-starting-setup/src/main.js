import { createApp } from "vue";

import App from "./App.vue";

import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

import BadgeList from "./components/UI/BadgeList.vue";
import UserInfo from "./components/UI/UserInfo.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.component("badge-list", BadgeList);
app.component("user-info", UserInfo);

app.mount("#app");