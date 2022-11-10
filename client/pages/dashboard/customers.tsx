import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, useReducer } from "react";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import Delete from "../../assets/icons/Delete";
import Edit from "../../assets/icons/Edit";
import { UserAdd } from "../../assets/icons/UserAdd";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Drawer } from "../../components/Drawer";
import { Modal } from "../../components/Modal";
import { Action, initialStateType } from "../../models/types";
import { fetchCustomers } from "../../utils/fetchCustomerData";
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

  // add error message
  const {
    data: customers,
    error,
    isError,
    isLoading,
  } = useQuery(["clients"], fetchCustomers);

  // TODO: check if user has internet connection and show a toast
  // TODO: check if error exists and show a toast

  return (
    <>
      <Head>
        <title>Customers | Simply Invoice</title>
      </Head>

      <header>
        <p className="text-sm text-gray-400">
          dashboard / <span className="font-bold text-gray-500">customers</span>
        </p>
        <h2 className="pt-1 font-sora text-4xl">Customers</h2>
      </header>

      <section className="mt-8">
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
            {isLoading && <li>Loading....</li>}
            {customers?.data.map((customer) => (
              <>
                <li
                  className="relative grid grid-cols-5 gap-2 rounded bg-neutral py-2 px-6 text-other-black"
                  key={customer?._id}
                >
                  <h4>{customer?.name}</h4>
                  <p>{customer?.organization}</p>
                  <p>{customer?.email}</p>
                  <p className="justify-self-end">{customer?.phoneNumber}</p>
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
                    <Link href="/dashboard/invoices">
                      <a className="flex rounded bg-main-black py-1 px-4 text-xs text-neutral active:scale-95">
                        New Invoice
                      </a>
                    </Link>
                    <Link href="/dashboard/customers/customer">
                      <a className="ml-3 block rounded py-1 px-2 text-main-black transition-colors hover:bg-main-black hover:text-neutral">
                        <ArrowRight />
                        <span className="sr-only">More details</span>
                      </a>
                    </Link>
                  </div>
                </li>
                {/* weird might find beta way to resolve this */}
                <Modal
                  openModal={openModal}
                  dispatch={dispatch}
                  id={customer?._id}
                />
              </>
            ))}
          </ul>
        </div>
      </section>

      <Drawer openDrawer={openDrawer} dispatch={dispatch} />
    </>
  );
};

Customers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Customers;
