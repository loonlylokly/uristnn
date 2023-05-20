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

type PopUp = {
  popup: boolean;
  togglePopUp: () => void;
};

type ActionMenu = {
  actionMenu: boolean;
  toggleActionMenu: () => void;
};

export const useHamburgerMenu = create<HamburgerMenu>()((set) => ({
  hamburgerMenu: false,
  toggleMenu: () => set((state) => ({ hamburgerMenu: !state.hamburgerMenu })),
}));

export const useListServices = create<ListServices>()((set) => ({
  category: 'yuriduslugi',
  setCategory: (category) => set((state) => ({category: category}))
}));

export const usePopUp = create<PopUp>()((set) => ({
  popup: false,
  togglePopUp: () => set((state) => ({ popup: !state.popup })),
}));

export const useActionMenu = create<ActionMenu>()((set) => ({
  actionMenu: false,
  toggleActionMenu: () => set((state) => ({ actionMenu: !state.actionMenu })),
}));
