import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Dispatch, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { Group } from "../assets/icons/Group";
import { Mail } from "../assets/icons/Mail";
import Map from "../assets/icons/Map";
import { Phone } from "../assets/icons/Phone";
import { User } from "../assets/icons/User";
import type { ApiError, Customer, CustomerType } from "../models/types";
import { addNewCustomer } from "../utils/fetchCustomerData";
import { Loader } from "./Loader";

interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<React.SetStateAction<boolean>>;
  customer: Customer | null;
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
  email: z
    .string({ required_error: "Email Address is required" })
    .min(2, { message: "Email address must be at least 2 characters long" })
    .trim(),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(11, { message: "Phone number must be at least 11 characters long" })
    .max(11, { message: "Phone number cannot be more than 11 characters long" })
    .trim(),
});

export const Drawer = ({
  openDrawer,
  customer,
  setOpenDrawer,
}: DrawerProps) => {
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
    reset,
  } = useForm<CustomerType>({
    defaultValues: {
      name: "",
      organization: "",
      organizationAddress: "",
      email: "",
      phoneNumber: "",
    },
    resolver: zodResolver(schema),
  });

  // add customer
  const { mutate, isLoading } = useMutation({
    mutationFn: addNewCustomer,
    onSuccess: () => {
      setOpenDrawer(!openDrawer);
      toast.success("Customer added successfully 🎉!");
      return queryClient.invalidateQueries(["clients"]);
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error("Error adding new customer 😭", {
        position: "top-right",
      });
      let errors = error.response?.data;
      if (!errors) return;
      errors.errors?.map((err) => {
        console.log("err", err);
        setError(
          err.param,
          { type: "custom", message: err.msg },
          { shouldFocus: true }
        );
      });
    },
  });
  const onAddCustomer = (data: CustomerType) => mutate({ ...data });

  useEffect(() => {
    reset();
  }, [reset]);

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
          <h3 className="text-xl font-bold">
            Add New Customer
            {/* {customer ? "Edit Customer" : ""} */}
          </h3>

          <form
            className="mt-6 flex flex-col gap-5"
            autoComplete="off"
            autoCorrect="off"
            autoSave="off"
            onSubmit={handleSubmit(onAddCustomer)}
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
                  errors.organization && "ring-2 ring-red-600"
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
                  errors.organizationAddress && "ring-2 ring-red-600"
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
                  errors.email && "ring-2 ring-red-600"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="mt-1 text-[10px] font-bold text-red-700">
                  {errors.email.message}
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
                type="number"
                className={`mt-2 w-full rounded bg-gray-200 py-3 px-4 font-figtree font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-black ${
                  errors.phoneNumber && "ring-2 ring-red-600"
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
                disabled={isLoading}
                className="w-full rounded-md bg-black-btn py-3 px-10 text-neutral transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {isLoading ? <Loader /> : "Add Customer"}
              </button>
              <button
                onClick={() => setOpenDrawer(!openDrawer)}
                type="button"
                className="mt-3 w-full rounded-md border border-black-btn py-[7px] px-10 text-center transition-transform active:scale-95"
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
