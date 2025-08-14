import axios from "axios";
import { defineStore } from "pinia";
import type { Dictionary } from "~/common/types/generic.types";
import type { User } from "~~/common/interfaces/user.interface";
export const useAuthStore = defineStore({
  id: "Auth",
  state: () => ({
    user: {} as User | null,
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token),
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    async login(payload: {
      identifier: string;
      password: string;
      documentType: string;
    }) {
      const {
        public: { baseURL },
      } = useRuntimeConfig();
      try {
        // ${baseURL}/auth/local
        const response = await fetch(`${baseURL}/auth/local`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        this.user = data.user;
        this.token = data.jwt;
        return { response, data };
      } catch (error) {
        throw new Error(error);
      }
    },
    async logout() {
      const {
        public: { baseURL },
      } = useRuntimeConfig();
      this.user = null;
      this.token = null;
      localStorage.clear();
      const response = await fetch(`${baseURL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    },
    async forgotPassword(payload: { email: string }) {
      const {
        public: { baseURL },
      } = useRuntimeConfig();
      const response = await fetch(`${baseURL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return response;
    },
    async resetPassword(payload: {
      password: string;
      passwordConfirmation: string;
      code: string;
    }) {
      const {
        public: { baseURL },
      } = useRuntimeConfig();
      const response = await fetch(`${baseURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return response;
    },
    async register(payload: {
      documentType: string;
      identifier: string;
      password: string;
      establecimientos: string;
      email: string;
      role: string;
    }) {
      const {
        public: { baseURL },
      } = useRuntimeConfig();
      const response = await fetch(`${baseURL}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return { response, data };
    },
    async generateToken() {
      const options = {
        method: 'POST',
        url: 'https://cors-proxy1.p.rapidapi.com/v1',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9615367325msh55558a59c70acf7p1f0ebbjsn75ce3e7ac10f',
          'X-RapidAPI-Host': 'cors-proxy1.p.rapidapi.com'
        },
        data: {
          url: 'https://api.coris.ec:8021/api/login/authenticate',
          method: 'POST',
          params: {},
          data: {},
          json_data: {
            Username: 'Coris',
            Password: 'C0@34d%umlK619SaQ2tgs(187$2#!'
          },
          headers: {},
          cookies: {}
        }
      };
      
      try {
        const response = await axios.request(options);
        this.token = response.data.payload.token;
        return { response, data: response.data};
      } catch (error) {
        console.error(error);
      }
    },
    async sendInfo(info: Dictionary<string>) {
      const options = {
        method: 'POST',
        url: 'https://cors-proxy1.p.rapidapi.com/v1',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '9615367325msh55558a59c70acf7p1f0ebbjsn75ce3e7ac10f',
          'X-RapidAPI-Host': 'cors-proxy1.p.rapidapi.com'
        },
        data: {
          url: 'https://api.coris.ec:8021/api/Tecnica/AsistenciaVehicular',
          method: 'POST',
          params: {},
          data: {},
          json_data: info,
          headers: {
            "Authorization": `Bearer ${this.token}`
          },
          cookies: {}
        }
      };
      
      try {
        const response = await axios.request(options);
        return response
      } catch (error) {
        console.error(error);
      }
  },
}
});
