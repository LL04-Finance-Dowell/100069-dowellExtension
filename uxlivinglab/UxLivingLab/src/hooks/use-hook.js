import { create } from "zustand";

const useStore = create((set) => ({
  org: null,
  setOrg: (org) => set({ org }),
  products: null,
  setProducts: (products) => set({ products }),
  orgs: null,
  setOrgs: (orgs) => set({ orgs }),
  portfolio: [],
  handlePortfolio: (portfolio) => set({ portfolio }),
}));

export default useStore;
