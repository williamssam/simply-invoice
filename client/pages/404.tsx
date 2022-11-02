import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-main-black">
      <p className="font-sora text-sm uppercase tracking-widest text-yellow-200 transition-colors">
        Simply Invoice
      </p>
      <h2 className="pt-3 font-sora text-5xl text-neutral">
        404 - Looks like you are lost
      </h2>
      <p className="w-[550px] pt-4 text-center text-[#9a9999]">
        Maybe this page use to exist or you just spelled something wrong.
        Chances are you spelled something wrong, so can you double check the
        URL?
      </p>

      <Link href="/">
        <a className="mt-8 rounded-md bg-black-btn py-3 px-8 text-neutral shadow-lg transition-transform active:scale-95">
          Return to Homepage
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
