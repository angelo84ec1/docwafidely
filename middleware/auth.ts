import jwtDecode from "jwt-decode";
import { useAuthStore } from "~/store/auth";


export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    return;
  }

  const authStore = useAuthStore();
  const router = useRouter();

  if (!authStore.isAuthenticated) {
    router.push({ path: "/home" })
    return;
  }

  if (to.path === "/") {
    
    const token = authStore.getToken;

    if (token) {
      try {
        // Validate token here
        const exp = jwtDecode<{ exp: number; lat: number; id: string }>(token).exp;
        const now = new Date().getTime() / 1000;
        if (exp < now) {
          authStore.logout();
          router.push({ path: "/login" })
          return;
        }
        if (authStore.user?.role.type.includes('admin'  || 'establecimiento' )) {
          router.push({ path: "/socios" })
          return;
        }
        router.push({ path: "/resumen" })
        return;
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
    
    // Redirect to login if token is not found or invalid
    router.push({ path: "/login" })
    return;
  }
});
