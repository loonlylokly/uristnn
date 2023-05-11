import { create } from "zustand";
import { ServicesCategory } from "../types/ServicesCategory";

type HamburgerMenu = {
  hamburgerMenu: boolean;
  toggleMenu: () => void;
};

type ListServices = {
  category: ServicesCategory;
  setCategory: (category: ServicesCategory) => void;
};

export const useHamburgerMenu = create<HamburgerMenu>()((set) => ({
  hamburgerMenu: false,
  toggleMenu: () => set((state) => ({ hamburgerMenu: !state.hamburgerMenu })),
}));

export const useListServices = create<ListServices>()((set) => ({
  category: 'yuriduslugi',
  setCategory: (category) => set((state) => ({category: category}))
}));
