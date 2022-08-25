<template>
  <div id="app" v-if="fronteggLoaded">
    <div v-if="this.authState.user">
      <span>Logged in as: {{this.authState.user.name}}</span>
            <button v-if="this.authState.user" v-on:click="logout">Log out</button>
    </div>
    <div>
      <button v-if="this.authState.user" v-on:click="showAccessToken">What is my access token?</button>
      <button v-if="!this.authState.user" v-on:click="loginWithRedirect">Not logged in. Click to Login</button>
    </div>
  </div>
</template>

<script>
import { mapLoginActions } from "@frontegg/vue";
import { ContextHolder } from '@frontegg/rest-api';

export default {
  name: "App",
  methods: {
    loginWithRedirect: mapLoginActions('loginWithRedirect'),
    showAccessToken() {
      alert(this.authState.user.accessToken);
    },
    logout() {
      const baseUrl = ContextHolder.getContext().baseUrl;
      window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    }
  },
  data() {
    return {
      ...this.mapAuthState(),
    }
  }
};
</script>
