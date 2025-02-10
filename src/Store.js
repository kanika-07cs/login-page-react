import { create } from 'zustand';

const useUserStore = create((set) => ({
  name: '',
  email: '',
  setUser: (name, email) => set({ name, email }),
}));

export default useUserStore;