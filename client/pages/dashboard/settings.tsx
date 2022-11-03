import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DashboardLayout } from "../../components/DashboardLayout";
import { CustomerType } from "../../models/types";

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
    .email({ message: "Email address is invalid" })
    .min(2, { message: "Email address must be at least 2 characters long" })
    .trim(),
  phoneNumber: z
    .number({
      required_error: "Phone Number is required",
      invalid_type_error: "Phone number must be a number",
    })
    .min(2, { message: "Phone Number must be at least 2 characters long" }),
  logo: z.string({ required_error: "Please upload your logo" }).trim(),
});

interface UserType extends CustomerType {
  logo: string;
}

const Settings = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UserType) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Settings | Simply Invoice</title>
      </Head>
      <div>
        <header>
          <p className="text-sm text-gray-400">
            dashboard /{" "}
            <span className="font-bold text-gray-500">settings</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">Settings</h2>
        </header>

        <section>
          <form
            className="mt-10"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="grid grid-cols-2 gap-x-10 gap-y-5">
              <div>
                <label className="text-gray-700">
                  <span>Name:</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                      errors.name && "ring-2 ring-red-600"
                    }`}
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                </label>
                {errors.name && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700">
                  <span>Email Address:</span>
                  <input
                    type="email"
                    autoComplete="off"
                    className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                      errors.emailAddress && "ring-2 ring-red-600"
                    }`}
                    placeholder="Email Address"
                    {...register("emailAddress", { required: true })}
                  />
                </label>
                {errors.emailAddress && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-gray-700">
                  <span>Organization Name:</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                      errors.organization && "ring-2 ring-red-600"
                    }`}
                    placeholder="Organization name"
                    {...register("organization", { required: true })}
                  />
                </label>
                {errors.organization && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.organization.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-700">
                  <span>Organization Address:</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                      errors.organizationAddress && "ring-2 ring-red-600"
                    }`}
                    placeholder="Organization Address"
                    {...register("organizationAddress", { required: true })}
                  />
                </label>
                {errors.organizationAddress && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.organizationAddress.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-gray-700">
                  <span>Phone Number:</span>
                  <input
                    type="tel"
                    autoComplete="off"
                    className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                      errors.phoneNumber && "ring-2 ring-red-600"
                    }`}
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: true })}
                  />
                </label>
                {errors.phoneNumber && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <label className="text-gray-700">
                <span>Logo:</span>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  autoComplete="off"
                  className={`mt-1 w-full rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-900 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black ${
                    errors.logo && "ring-2 ring-red-600"
                  }`}
                  placeholder="file"
                />
                {errors.logo && (
                  <p className="mt-1 text-[10px] font-bold text-red-600">
                    {errors.logo.message}
                  </p>
                )}
              </label>
            </section>

            <button
              type="submit"
              className="mt-5 rounded bg-main-black py-2 px-14 text-neutral transition-colors hover:bg-black active:scale-95"
            >
              Save
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Settings;
