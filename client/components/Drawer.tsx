import { Dispatch } from "react";
import { Group } from "../assets/icons/Group";
import { Mail } from "../assets/icons/Mail";
import Map from "../assets/icons/Map";
import { Phone } from "../assets/icons/Phone";
import { User } from "../assets/icons/User";
import { Action } from "../models/types";
import { TextInput } from "./TextInput";

interface DrawerProps {
  openDrawer: boolean;
  dispatch: Dispatch<Action>;
}

export const Drawer = ({ openDrawer, dispatch }: DrawerProps) => {
  return (
    <>
      <div className="flex items-center">
        <div
          className={`fixed left-0 top-0 z-50 h-screen w-full overflow-y-auto bg-main-black/70 shadow-2xl transition-transform ${
            openDrawer ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
        <div
          className={`fixed right-0 top-0 z-50 h-screen w-80 overflow-y-auto bg-neutral px-6 py-8 shadow-2xl transition-transform ${
            openDrawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h3 className="text-xl font-bold">Add New Customer</h3>

          <form
            className="mt-6 flex flex-col gap-5"
            autoComplete="off"
            autoCorrect="off"
          >
            <TextInput label="Name" type="text" icon={<User />} />
            <TextInput label="Organization" type="text" icon={<Group />} />
            <TextInput
              label="Organization Address"
              type="text"
              icon={<Map />}
            />
            <TextInput label="Email Address" type="email" icon={<Mail />} />
            <TextInput label="Phone Number" type="text" icon={<Phone />} />

            <div className="mt-3">
              <button
                type="submit"
                className="w-full rounded-md bg-black-btn py-3 px-10 text-neutral transition-colors hover:bg-black"
              >
                Submit
              </button>
              <button
                onClick={() => dispatch({ type: "toggle-drawer" })}
                type="button"
                className="mt-3 w-full rounded-md border border-black-btn py-[6px] px-10 text-center transition-transform active:scale-95"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
