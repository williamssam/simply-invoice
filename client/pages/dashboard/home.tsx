import Head from "next/head";
import { ReactElement } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { RecentInvoices } from "../../components/RecentInvoices";
import { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SimplyInvoice - Dashboard</title>
      </Head>
      <section>
        <header>
          {/* breadcrumb */}
          <p className="text-sm text-gray-400">
            dashboard / <span className="font-bold text-gray-500">home</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">Dashboard</h2>
        </header>

        {/* overview */}
        <ul className="mt-10 flex items-center justify-between rounded-xl bg-main-black py-9 px-16 text-neutral shadow-md">
          <li>
            <h3 className="text-sm font-bold text-gray-400">Total Amount</h3>
            <p className="pt-1 font-figtree text-3xl font-bold">N158,000</p>
          </li>
          <li className="h-16 w-[0.1px] bg-gray-600"></li>
          <li>
            <h3 className="text-sm font-bold text-gray-400">Invoices</h3>
            <p className="pt-1 font-figtree text-3xl font-bold">200,589</p>
          </li>
          <li className="h-16 w-[0.1px] bg-gray-600"></li>
          <li>
            <h3 className="text-sm font-bold text-gray-400">Customers</h3>
            <p className="pt-1 font-figtree text-3xl font-bold">100,423</p>
          </li>
          <li className="h-16 w-[0.1px] bg-gray-600"></li>
          <li>
            <h3 className="text-sm font-bold text-gray-400">Paid</h3>
            <p className="pt-1 font-figtree text-3xl font-bold">N100,000</p>
          </li>
        </ul>

        {/* recent invoices */}
        <RecentInvoices />
      </section>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
