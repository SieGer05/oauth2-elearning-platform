import axios from "axios";
import keycloak from "../security/keycloak";

const api = axios.create({
   baseURL: "http://192.168.8.101:8081/api", 
   headers: {
      "Content-Type": "application/json",
   },
});

api.interceptors.request.use(async (config) => {
   if (!keycloak.authenticated) {
      return config;
   }

   try {
      await keycloak.updateToken(10);
      config.headers.Authorization = `Bearer ${keycloak.token}`;
   } catch (error) {
      console.error("Erreur de rafraîchissement du token", error);
      keycloak.login(); 
   }
   
   return config;
});

export default api;