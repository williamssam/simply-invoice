import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simply Invoice - Home</title>
      </Head>
      <header className="absolute top-0 z-50 font-figtree text-neutral">
        <nav className="flex w-screen items-center justify-between px-16 pt-6">
          <h1 className="font-sora text-xl">SimpInv</h1>

          <ul className="flex items-center gap-8 text-sm">
            <li>Features</li>
            <li>Log in</li>
            <li className="rounded-md border border-black-btn py-2 px-6">
              Sign up
            </li>
            {/* <li>Github</li> */}
            {/* <li>
							<button className='p-2 bg-other-black rounded-full hover:bg-gray-500'>
								<Sun />
							</button>
						</li> */}
          </ul>
        </nav>
      </header>
      <main className="relative flex h-screen flex-col items-center justify-center bg-main-black font-figtree">
        <a
          href="https://williamssam.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-200 transition-colors hover:text-yellow-300"
        >
          Built by Williams Samuel
        </a>
        <h1 className="pt-2 font-sora text-5xl text-neutral">
          SimpInv, Simply Invoice
        </h1>
        <p className="w-[500px] pt-4 text-center text-sm leading-relaxed text-dark-clr">
          Invoicing app for freelancers and small business. Send Invoice to
          clients and receive payment automatically.{" "}
          <strong>Is that not cool? 🤗🤩</strong>
        </p>

        <div className="flex items-center text-sm">
          <Link href="/dashboard/home">
            <a className="mt-10 rounded-md bg-black-btn py-3 px-14 text-neutral shadow-lg transition-transform active:scale-95">
              Get Started
            </a>
          </Link>
          <button className="mt-10 py-3 px-14 text-neutral">
            Download App
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
