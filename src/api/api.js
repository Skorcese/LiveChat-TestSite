import axios from "axios";

const access_token = "";

const api = axios.create({
  baseURL:
    "https://api.livechatinc.com/v3.1/configuration/action/get_bot_agents",
  headers: {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "",
  },
});

export default api;
