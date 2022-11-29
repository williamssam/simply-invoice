import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { ArrowRight } from "../../assets/icons/ArrowRight";
import Delete from "../../assets/icons/Delete";
import Edit from "../../assets/icons/Edit";
import { UserAdd } from "../../assets/icons/UserAdd";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Drawer } from "../../components/Drawer";
import { ConfirmModal } from "../../components/modals/ConfirmModal";
import { Modal } from "../../components/modals/Modal";
import { Customer } from "../../models/types";
// import { Modal } from "../../components/Modal";
import { deleteCustomer, fetchCustomers } from "../../utils/fetchCustomerData";
import { NextPageWithLayout } from "../_app";

const Customers: NextPageWithLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);

  // control modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // add error message
  const {
    data: customers,
    error,
    isError,
    isLoading,
  } = useQuery(["clients"], fetchCustomers);

  // delete Customer mutation
  const queryClient = useQueryClient();
  const { mutate, isLoading: loading } = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      closeModal();
      toast.success("Customer deleted succesfully!");
      return queryClient.invalidateQueries(["clients"]);
    },
    onError: () => {
      toast.error("Error deleting customer 🙃");
    },
  });

  const displayTable = () => {
    if (!isLoading && !isError) {
      return customers!?.data.length > 0 ? (
        customers?.data.map((customer) => (
          <li key={customer?._id}>
            <div className="relative grid grid-cols-5 gap-2 rounded bg-neutral py-2 px-6 text-other-black">
              <h4>{customer?.name}</h4>
              <p>{customer?.organization}</p>
              <p>{customer?.email}</p>
              <p className="justify-self-end">{customer?.phoneNumber}</p>
              <div className="flex items-center gap-2 justify-self-end">
                <button
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                    setCustomer(customer);
                  }}
                  className="text-blue-600 transition-colors hover:text-blue-800 active:scale-95"
                  title="Edit Customer"
                >
                  <Edit />
                  <span className="sr-only">Edit Customer Details</span>
                </button>
                <button
                  className="text-red-600 transition-colors hover:text-red-800 active:scale-95"
                  title="Delete Customer"
                  onClick={() => openModal()}
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
            </div>
            {/* weird might find beta way to resolve this */}
            <Modal isOpen={isOpen} closeModal={closeModal}>
              <ConfirmModal
                onClose={closeModal}
                isLoading={loading}
                onAccept={() => mutate({ id: customer?._id })}
              />
            </Modal>
          </li>
        ))
      ) : (
        <li className="mt-5 bg-gray-200 p-2 text-center text-other-black">
          No Customers found, pls add one.
        </li>
      );
    }
  };

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
            onClick={() => setOpenDrawer(!openDrawer)}
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
            {isError && (
              <li className="mt-5 bg-gray-200 p-2 text-center text-other-black">
                {error instanceof AxiosError && error.message}
              </li>
            )}
            {displayTable()}
          </ul>
        </div>
      </section>

      <Drawer
        openDrawer={openDrawer}
        customer={customer}
        setOpenDrawer={setOpenDrawer}
      />
    </>
  );
};

Customers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Customers;
