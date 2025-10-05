import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSidebarStore = create(
  persist(
    (set) => ({
      isOpen: false,
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      openSidebar: () => set({ isOpen: true }),
      closeSidebar: () => set({ isOpen: false }),
    }),
    { name: 'sidebar-storage' } // key in localStorage
  )
);

export default useSidebarStore;
