import Head from "next/head";
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/DashboardLayout";
import { NextPageWithLayout } from "../../_app";

const CreateInvoice: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Invoice | Simply Invoice</title>
      </Head>

      <section>
        <header>
          <p className="text-sm text-gray-400">
            dashboard / <span>customers</span> /{" "}
            <span className="font-bold text-gray-500">invoices</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">create invoice</h2>
        </header>
      </section>
    </>
  );
};

CreateInvoice.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateInvoice;
