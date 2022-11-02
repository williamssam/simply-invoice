import Head from "next/head";
import { ReactElement } from "react";
import { Disk } from "../../assets/icons/Disk";
import { Download } from "../../assets/icons/Download";
import { Eye } from "../../assets/icons/Eye";
import { PaperPlane } from "../../assets/icons/PaperPlane";
import { Print } from "../../assets/icons/Print";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Invoice } from "../../components/Invoice";
import { NextPageWithLayout } from "../_app";

const Invoices: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Invoice | Simply Invoice</title>
      </Head>
      <section>
        <header>
          <p className="text-sm text-gray-400">
            dashboard /{" "}
            <span className="font-bold text-gray-500">invoices</span>
          </p>
          <h2 className="pt-1 font-sora text-4xl">Invoices</h2>
        </header>

        <div className="mt-6 grid grid-cols-5 gap-10">
          <Invoice />

          <div className="col-span-1">
            <h2>invoice 001</h2>
          </div>
        </div>

        {/* footer btns */}
        <div className="absolute left-0 bottom-0 z-50 flex w-full items-center justify-end gap-4 bg-gray-200 py-2 px-8 text-sm text-gray-600">
          <button className="flex items-center gap-2 rounded border border-gray-400 py-1 px-6 transition-all hover:bg-black-btn hover:text-neutral active:scale-95">
            <Eye />
            <span>Preview</span>
          </button>
          <button className="flex items-center gap-2 rounded border border-gray-400 py-1 px-6 transition-all hover:bg-black-btn hover:text-neutral active:scale-95">
            <Print />
            <span>Print</span>
          </button>
          <button className="flex items-center gap-2 rounded border border-gray-400 py-1 px-6 transition-all hover:bg-black-btn hover:text-neutral active:scale-95">
            <Download />
            <span>Download as pdf</span>
          </button>
          <button className="flex items-center gap-2 rounded border border-gray-400 py-1 px-6 transition-all hover:bg-black-btn hover:text-neutral active:scale-95">
            <Disk />
            <span>Save</span>
          </button>
          <button className="flex items-center gap-2 rounded bg-black-btn py-2 px-6 text-neutral transition-all hover:bg-black active:scale-95">
            <PaperPlane />
            <span>Send via email</span>
          </button>
        </div>
      </section>
    </>
  );
};

Invoices.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Invoices;
