import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Group } from "../assets/icons/Group";
import { Mail } from "../assets/icons/Mail";
import Map from "../assets/icons/Map";
import { Phone } from "../assets/icons/Phone";
import { User } from "../assets/icons/User";
import { Action, CustomerType } from "../models/types";

interface DrawerProps {
  openDrawer: boolean;
  dispatch: Dispatch<Action>;
}

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, { message: "Name must be at least 2 characters long" })
    .trim(),
  organization: z
    .string({ required_error: "Organization name is requied" })
    .min(2, { message: "Organization must be at least 2 characters long" })
    .trim(),
  organizationAddress: z
    .string({ required_error: "Organization Address is required" })
    .min(2, {
      message: "Organization address must be at least 2 characters long",
    })
    .trim(),
  emailAddress: z
    .string({ required_error: "Email Address is required" })
    .min(2, { message: "Email address must be at least 2 characters long" })
    .trim(),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(2, { message: "Phone number must be at least 2 characters long" })
    .trim(),
});

export const Drawer = ({ openDrawer, dispatch }: DrawerProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CustomerType>({
    defaultValues: {
      name: "",
      organization: "",
      organizationAddress: "",
      emailAddress: "",
      phoneNumber: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: CustomerType) => {
    console.log(data);
  };

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="scale-75 text-gray-400">
                  <User />
                </span>
                <span>Name</span>
              </label>
              <input
                type="text"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.name && "ring-2 ring-red-600"
                }`}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="mt-1 text-[10px] font-bold text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="scale-75 text-gray-400">
                  <Group />
                </span>
                <span>Organization</span>
              </label>
              <input
                type="text"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.name && "ring-2 ring-red-600"
                }`}
                {...register("organization", { required: true })}
              />
              {errors.organization && (
                <p className="mt-1 text-[10px] font-bold text-red-600">
                  {errors.organization.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-600">
                <span className="scale-75 text-gray-400">
                  <Map />
                </span>
                <span>Organization Address</span>
              </label>
              <input
                type="text"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.name && "ring-2 ring-red-600"
                }`}
                {...register("organizationAddress", { required: true })}
              />
              {errors.organizationAddress && (
                <p className="mt-1 text-[10px] font-bold text-red-600">
                  {errors.organizationAddress.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-700">
                <span className="scale-75 text-gray-400">
                  <Mail />
                </span>
                <span>Email Address</span>
              </label>
              <input
                type="email"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.name && "ring-2 ring-red-600"
                }`}
                {...register("emailAddress", { required: true })}
              />
              {errors.emailAddress && (
                <p className="mt-1 text-[10px] font-bold text-red-700">
                  {errors.emailAddress.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex items-center text-sm text-gray-700">
                <span className="scale-75 text-gray-400">
                  <Phone />
                </span>
                <span>Phone Number</span>
              </label>
              <input
                type="email"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.name && "ring-2 ring-red-600"
                }`}
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-[10px] font-bold text-red-600">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

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
