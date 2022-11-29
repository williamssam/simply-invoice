import { AllInvoice } from "../models/types";

interface RecentInvoicesProps {
  data: AllInvoice;
}

export const RecentInvoices = ({ data }: RecentInvoicesProps) => {
  return (
    <div className="mt-10">
      <header className="grid grid-cols-5 py-1 px-6">
        <h4 className="font-bold text-gray-500">Invoice No</h4>
        <h4 className="font-bold text-gray-500">Date created</h4>
        <h4 className="font-bold text-gray-500">Client</h4>
        <h4 className="font-bold text-gray-500">Amount</h4>
        <h4 className="font-bold text-gray-500">Status</h4>
      </header>

      <ul className="mt-3 flex flex-col gap-3">
        {data?.data?.map((invoice) => (
          <li
            className="grid grid-cols-5 items-center rounded bg-neutral py-2 px-6"
            key={invoice._id}
          >
            <p>{invoice?.invoiceNo}</p>
            <p>3 Jul, 2022</p>
            <p>CodeandWilliams</p>
            <p>N150,000</p>
            <p className="w-max rounded bg-purple-200 px-2 py-1 text-sm font-bold text-purple-700">
              Sent
            </p>
          </li>
        ))}
        <li className="grid grid-cols-5 items-center rounded bg-neutral py-2 px-6">
          <p>Inv-2005</p>
          <p>3 Jul, 2022</p>
          <p>CodeandWilliams</p>
          <p>N150,000</p>
          <p className="w-max rounded bg-yellow-200 px-2 py-1 text-sm font-bold text-yellow-700">
            Pending
          </p>
        </li>
        <li className="grid grid-cols-5 items-center rounded bg-neutral py-2 px-6">
          <p>Inv-2005</p>
          <p>3 Jul, 2022</p>
          <p>CodeandWilliams</p>
          <p>N150,000</p>
          <p className="w-max rounded bg-green-200 px-2 py-1 text-sm font-bold text-green-700">
            Paid
          </p>
        </li>
        <li className="grid grid-cols-5 items-center rounded bg-neutral py-2 px-6">
          <p>Inv-2005</p>
          <p>3 Jul, 2022</p>
          <p>CodeandWilliams</p>
          <p>N150,000</p>
          <p className="w-max rounded bg-red-200 px-2 py-1 text-sm font-bold text-red-700">
            Overdue
          </p>
        </li>
        <li className="grid grid-cols-5 items-center rounded bg-neutral py-2 px-6">
          <p>Inv-2005</p>
          <p>3 Jul, 2022</p>
          <p>CodeandWilliams</p>
          <p>N150,000</p>
          <p className="w-max rounded bg-green-200 px-2 py-1 text-sm font-bold text-green-700">
            Paid
          </p>
        </li>
      </ul>
    </div>
  );
};
