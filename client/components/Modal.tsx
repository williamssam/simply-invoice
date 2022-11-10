import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch } from "react";
import { toast } from "react-toastify";
import { Close } from "../assets/icons/Close";
import { Action } from "../models/types";
import { deleteCustomer } from "../utils/fetchCustomerData";
import { Loader } from "./Loader";

interface ModalProps {
  openModal: boolean;
  dispatch: Dispatch<Action>;
  id: string;
}

export const Modal = ({ openModal, dispatch, id: _id }: ModalProps) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      dispatch({ type: "toggle-modal" });
      toast.success("Customer deleted succesfully!");
      return queryClient.invalidateQueries(["clients"]);
    },
    onError: () => {
      toast.error("Error deleting customer 🙃");
    },
  });
  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-main-black/70 md:inset-0 md:h-full ${
        openModal ? "block" : "hidden"
      }`}
      aria-hidden="true"
    >
      <div className="relative top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white shadow">
        <button
          type="button"
          className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          onClick={() => dispatch({ type: "toggle-modal" })}
        >
          <Close />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-10 text-center">
          <svg
            aria-hidden="true"
            className="00 mx-auto mb-4 h-14 w-14 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500">
            Are you sure you want to delete this product?
          </h3>

          <div className="flex items-center justify-center gap-6">
            <button
              disabled={isLoading}
              onClick={() => mutate({ id: _id })}
              type="button"
              className="rounded bg-red-700 py-[10px] px-8 text-neutral transition-colors hover:bg-red-800 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {isLoading ? <Loader /> : "Yes, I'm sure"}
            </button>
            <button
              onClick={() => dispatch({ type: "toggle-modal" })}
              type="button"
              className="rounded border border-main-black py-2 px-8 text-main-black transition-colors hover:bg-black/10 active:scale-95"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
