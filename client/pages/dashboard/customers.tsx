import Head from "next/head";
import { ReactElement, useReducer } from "react";
import Delete from "../../assets/icons/Delete";
import Edit from "../../assets/icons/Edit";
import { UserAdd } from "../../assets/icons/UserAdd";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Drawer } from "../../components/Drawer";
import { Modal } from "../../components/Modal";
import { Action, initialStateType } from "../../models/types";
import { NextPageWithLayout } from "../_app";

const initialState: initialStateType = {
  openDrawer: false,
  openModal: false,
};

const reducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case "toggle-drawer":
      return {
        openDrawer: !state.openDrawer,
        openModal: false,
      };
    case "toggle-modal":
      return {
        openModal: !state.openModal,
        openDrawer: false,
      };
  }
};

const Customers: NextPageWithLayout = () => {
  const [{ openDrawer, openModal }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <Head>
        <title>Customers | Simply Invoice</title>
      </Head>

      <section>
        <header>
          {/* breadcrumb */}
          <p className="text-sm text-gray-400">
            dashboard /{" "}
            <span className="font-bold text-gray-500">customers</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">Customers</h2>
        </header>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">My Customers</h3>
              <p className="text-xs text-dark-clr">
                Click each customer to create a new invoice for that customer
              </p>
            </div>

            <button
              onClick={() => dispatch({ type: "toggle-drawer" })}
              className="flex items-center gap-2 rounded bg-black-btn py-2 px-6 text-xs	text-neutral transition-colors hover:bg-black active:scale-95"
            >
              <UserAdd />
              <span>New Customer</span>
            </button>
          </div>

          <div className="mt-6">
            <header className="grid grid-cols-5 gap-2 py-1 px-6 text-gray-500">
              <h4>Name</h4>
              <h4>Company</h4>
              <h4>Email</h4>
              <h4 className="justify-self-end">Phone Number</h4>
              <h4 className="justify-self-end">Actions</h4>
            </header>

            <ul className="mt-2 flex flex-col gap-3">
              <li className="relative grid grid-cols-5 gap-2 rounded bg-neutral py-2 px-6 text-other-black">
                <h4>Williams Samuel</h4>
                <p>CodeandWilliams</p>
                <p>ghostdeveloper@yopmail.com</p>
                <p className="justify-self-end">234 81505786987</p>
                <div className="flex items-center gap-2 justify-self-end">
                  <button
                    onClick={() => dispatch({ type: "toggle-drawer" })}
                    className="text-blue-600 transition-colors hover:text-blue-800 active:scale-95"
                    title="Edit Customer"
                  >
                    <Edit />
                    <span className="sr-only">Edit Customer Details</span>
                  </button>
                  <button
                    className="text-red-600 transition-colors hover:text-red-800 active:scale-95"
                    title="Delete Customer"
                    onClick={() => dispatch({ type: "toggle-modal" })}
                  >
                    <Delete />
                    <span className="sr-only">Delete Customer</span>
                  </button>
                  <button className="rounded bg-main-black py-1 px-4 text-xs text-neutral active:scale-95">
                    New Invoice
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Drawer openDrawer={openDrawer} dispatch={dispatch} />
      <Modal openModal={openModal} dispatch={dispatch} />
    </>
  );
};

Customers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Customers;
