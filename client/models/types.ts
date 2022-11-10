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
  email: string;
  phoneNumber: string;
}

export interface Customer extends CustomerType {
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface Customers {
  data: Customer[];
}

export interface ApiError {
  errors: {
    location: string;
    msg: string;
    // if you change this to "string" it will throw error. I would love to know how typescript know what value to except and if I can dynamically tell it to pick those values from useForm or other stuff
    param:
      | "name"
      | "organization"
      | "organizationAddress"
      | "email"
      | "phoneNumber";
    value: string;
  }[];
}
