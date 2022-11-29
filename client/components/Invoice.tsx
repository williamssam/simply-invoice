import { useState } from "react";
import { useForm } from "react-hook-form";

export const Invoice = () => {
  const [taxDiscount, setTaxDiscount] = useState({
    discount: false,
    tax: false,
  });

  const {
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return (
    <div className="col-span-4 h-full rounded-md bg-neutral px-6 py-4 text-black-btn shadow-md">
      <header className="border-b border-b-gray-400 pt-4 pb-6">
        <h3 className="font-sora text-xl">
          Invoice No: inv-
          <input
            type="text"
            defaultValue="SM005"
            className="w-32 rounded bg-gray-200 py-1 px-2 font-figtree font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-main-black"
            {...register("invoice-no", { required: true })}
          />
        </h3>
        <div className="mt-2 flex items-center gap-10">
          <div className="mt-2 flex items-center gap-2 text-xs">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-main-black"
              {...register("date", { required: true })}
            />
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <label htmlFor="due-date">Due Date</label>
            <input
              type="date"
              id="due-date"
              className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-main-black"
              {...register("due-date", { required: true })}
            />
          </div>
        </div>
      </header>

      <main>
        <div className="mt-5 flex items-center justify-between gap-20">
          <div className="flex-1">
            <h3 className="text-sm font-bold uppercase text-gray-400">From:</h3>

            {/* if editing */}
            <div className="mt-2 flex flex-col gap-[5px] text-sm">
              <input
                type="text"
                className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Name"
                {...register("sender-name", { required: true })}
              />
              <input
                type="email"
                className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Email Address"
                {...register("sender-email", { required: true })}
              />
              <input
                type="text"
                className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Organization Name"
                {...register("sender-organization-name", { required: true })}
              />
              <input
                type="text"
                className="rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Organization Address"
                {...register("sender-organization-address", { required: true })}
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-right text-sm font-bold uppercase text-gray-400">
              Billed To:
            </h3>

            <div className="mt-2 flex flex-col gap-[5px] text-sm">
              <input
                type="text"
                disabled
                className="rounded bg-gray-200 py-2 px-4 text-right font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Name"
                {...register("receiver-name", { required: true })}
              />
              <input
                type="email"
                disabled
                className="rounded bg-gray-200 py-2 px-4 text-right font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Email Address"
                {...register("receiver-email", { required: true })}
              />
              <input
                type="text"
                disabled
                className="rounded bg-gray-200 py-2 px-4 text-right font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Organization Name"
                {...register("receiver-organization-name", { required: true })}
              />
              <input
                type="text"
                disabled
                className="rounded bg-gray-200 py-2 px-4 text-right font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black"
                placeholder="Organization Address"
                {...register("receiver-organization-address", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>

        <div>
          <header className="mt-8 flex items-center gap-4 border-y-2 border-y-gray-300 py-2 text-sm font-bold text-gray-600">
            <h4 className="flex-1">Description</h4>
            <h4 className="w-28 px-3 text-center">Rate</h4>
            <h4 className="w-20 px-3 text-center">Qty</h4>
            <h4 className="w-20 px-3 text-center">Total</h4>
            {/* <h4 className="w-20 px-3 text-center">Actions</h4> */}
          </header>

          <ul className="mt-3 flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <input
                type="text"
                autoComplete="off"
                // disabled
                className="flex-1 rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black disabled:bg-transparent disabled:py-0 disabled:px-0"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              <input
                type="number"
                autoComplete="off"
                className="w-28 rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black disabled:bg-transparent disabled:py-0 disabled:px-0"
                placeholder="Rate"
                {...register("rate", { required: true })}
              />
              <input
                type="number"
                autoComplete="off"
                className="w-20 rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black disabled:bg-transparent disabled:py-0 disabled:px-0"
                placeholder="Qty"
                {...register("qty", { required: true })}
              />
              <p className="font-bold">600,000</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="mt-10 flex items-start justify-between text-sm">
        <button
          type="button"
          className="py-1 px-2 text-xs font-bold text-blue-700 transition-all hover:bg-blue-200 active:scale-95"
        >
          Add Item
        </button>

        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-32">
            <p className="font-bold text-gray-400">Subtotal</p>
            <p className="ml-auto">N0.00</p>
          </li>
          <li>
            {!taxDiscount.discount && (
              <button
                type="button"
                onClick={() =>
                  setTaxDiscount({
                    ...taxDiscount,
                    discount: !taxDiscount.discount,
                  })
                }
                className="px-2 py-1 text-xs font-bold text-blue-700 transition-all hover:bg-blue-200 active:scale-95"
              >
                Add discount
              </button>
            )}
            {taxDiscount.discount && (
              <div className="flex items-center gap-32">
                <p className="font-bold text-gray-400">Discount</p>
                <input
                  type="number"
                  className="ml-auto w-20 rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black disabled:bg-transparent disabled:py-0 disabled:px-0"
                  {...register("discount", { required: true })}
                />
              </div>
            )}
          </li>
          {/* <li>
            {!taxDiscount.tax && (
              <button
                type="button"
                onClick={() =>
                  setTaxDiscount({ ...taxDiscount, tax: !taxDiscount.tax })
                }
                className="text-xs font-bold text-blue-700"
              >
                Add tax
              </button>
            )}
            {taxDiscount.tax && (
              <div className="flex items-center gap-32">
                <p className="font-bold text-gray-400">Tax</p>
                <input
                  type="number"
                  name="tax"
                  className="ml-auto w-20 rounded bg-gray-200 py-2 px-4 font-figtree font-bold text-gray-700 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-main-black disabled:bg-transparent disabled:py-0 disabled:px-0"
                  // placeholder="Tax"
                />
              </div>
            )}
          </li> */}
          <li className="flex items-center gap-32">
            <p className="text-lg font-bold text-gray-600">Total</p>
            <p className="ml-auto text-lg font-bold text-gray-600">N0.00</p>
          </li>
        </ul>
      </footer>

      <button
        onClick={() => reset()}
        className="py-1 px-2 text-xs font-bold text-red-600 transition-all hover:bg-red-200 active:scale-95"
      >
        Clear form
      </button>
    </div>
  );
};
