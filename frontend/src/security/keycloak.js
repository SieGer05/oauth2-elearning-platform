import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
   url: "http://192.168.8.102:8080",
   realm: "elearning-realm",
   clientId: "react-client",
});

export default keycloak;