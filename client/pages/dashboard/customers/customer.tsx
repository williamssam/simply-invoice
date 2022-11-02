import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { ArrowLeft } from "../../../assets/icons/ArrowLeft";
import { DashboardLayout } from "../../../components/DashboardLayout";
import { RecentInvoices } from "../../../components/RecentInvoices";
import { NextPageWithLayout } from "../../_app";

const Customer: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Invoice | Simply Invoice</title>
      </Head>

      <section>
        <button
          onClick={() => router.back()}
          className="rounded py-1 px-2 text-main-black transition-all hover:bg-main-black hover:text-neutral active:scale-95"
        >
          <ArrowLeft />
          <span className="sr-only">Go back</span>
        </button>

        <header className="mt-4">
          <p className="text-sm text-gray-400">
            dashboard / <span>customers</span> /{" "}
            <span className="font-bold text-gray-500">customer</span>
          </p>
          <h2 className="font-sora text-4xl">Overview for Williams Samuel</h2>
        </header>

        <ul className="mt-10 flex items-center justify-between rounded-xl bg-main-black py-9 px-16 text-neutral">
          <li>
            <p className="font-figtree text-3xl font-bold">N158,000</p>
            <h3 className="text-sm font-bold text-gray-400">Total Amount</h3>
          </li>
          <li>
            <p className="font-figtree text-3xl font-bold">200,589</p>
            <h3 className="text-sm font-bold text-gray-400">Invoices</h3>
          </li>
          <li>
            <p className="font-figtree text-3xl font-bold">100,423</p>
            <h3 className="text-sm font-bold text-gray-400">Paid</h3>
          </li>
          <li>
            <p className="font-figtree text-3xl font-bold">N100,000</p>
            <h3 className="text-sm font-bold text-gray-400">Pending</h3>
          </li>
          <li>
            <p className="font-figtree text-3xl font-bold">N100,000</p>
            <h3 className="text-sm font-bold text-gray-400">Overdue</h3>
          </li>
        </ul>

        <RecentInvoices />
      </section>
    </>
  );
};

Customer.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Customer;
