import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSidebarStore = create(
  persist(
    (set) => ({
      isSidebarClosed: false,
      toggleSidebar: () => set((state) => ({ isSidebarClosed: !state.isSidebarClosed })),
      openSidebar: () => set({ isSidebarClosed: true }),
      closeSidebar: () => set({ isSidebarClosed: false }),
    }),
    { name: 'sidebar-storage' } // key in localStorage
  )
);

export default useSidebarStore;
