export interface initialStateType {
  openDrawer: boolean;
  openModal: boolean;
}

export interface Action {
  type: "toggle-drawer" | "toggle-modal";
}

export interface CustomerType {
  name: string;
  organization: string;
  organizationAddress: string;
  emailAddress: string;
  phoneNumber: string;
}
