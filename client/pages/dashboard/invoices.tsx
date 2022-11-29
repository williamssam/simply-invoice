import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";
import { RecentInvoices } from "../../components/RecentInvoices";
import { fetchAllInvoice } from "../../utils/fetchInvoice";
import { NextPageWithLayout } from "../_app";

const Invoices: NextPageWithLayout = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["allInvoice"],
    fetchAllInvoice
  );

  return (
    <>
      <Head>
        <title>Invoice | Simply Invoice</title>
      </Head>
      <section>
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              dashboard /{" "}
              <span className="font-bold text-gray-500">invoices</span>
            </p>
            <h2 className="pt-1 font-sora text-4xl">Invoices</h2>
          </div>

          <Link href="/dashboard/invoices/new-invoice">
            <a className="rounded bg-black-btn py-2 px-6 text-xs	text-neutral transition-colors hover:bg-black active:scale-95">
              Create New Invoice
            </a>
          </Link>
        </header>

        {isLoading ? <p>Loading....</p> : null}
        {isError && (
          <p className="mt-5 bg-gray-200 p-2 text-center text-other-black">
            {error instanceof AxiosError && error.message}
          </p>
        )}
        {data ? <RecentInvoices data={data} /> : null}
      </section>
    </>
  );
};

Invoices.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Invoices;
