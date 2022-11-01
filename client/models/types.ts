export interface initialStateType {
  openDrawer: boolean;
  openModal: boolean;
}

export interface Action {
  type: "toggle-drawer" | "toggle-modal";
}
