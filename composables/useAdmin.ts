import { useAuthStore } from "~/store/auth/index.ts";

export default function useAdmin() {
  const authStore = useAuthStore();    
  const isAdmin = computed(() => authStore?.user?.role?.name?.includes('admin'));
  return { isAdmin };
}
