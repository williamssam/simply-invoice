import Head from "next/head";
import { ReactElement } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";

const Reports = () => {
  return (
    <>
      <Head>
        <title>Reports | Simply Invoice</title>
      </Head>
      <div>
        <header>
          <p className="text-sm text-gray-400">
            dashboard / <span className="font-bold text-gray-500">report</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">Reports</h2>
        </header>
      </div>
    </>
  );
};

Reports.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Reports;
