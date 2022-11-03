import Link from "next/link";
import { useRouter } from "next/router";
import { Customer } from "../assets/icons/Customer";
import { Dashboard } from "../assets/icons/Dashboard";
import { Invoice } from "../assets/icons/Invoice";
import { Logout } from "../assets/icons/Logout";
import { Report } from "../assets/icons/Report";
import { Settings } from "../assets/icons/Settings";

export const DashboardHeader = () => {
  const navs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <Dashboard />,
      url: "/dashboard/home",
    },
    {
      id: 2,
      name: "Customers",
      icon: <Customer />,
      url: "/dashboard/customers",
    },
    {
      id: 3,
      name: "Invoices",
      icon: <Invoice />,
      url: "/dashboard/invoices",
    },
    {
      id: 4,
      name: "Reports",
      icon: <Report />,
      url: "/dashboard/reports",
    },
    {
      id: 5,
      name: "Settings",
      icon: <Settings />,
      url: "/dashboard/settings",
    },
  ];
  const router = useRouter();

  return (
    <header className="z-50 col-span-1 py-6 px-4 font-figtree">
      <nav className="flex h-full flex-col justify-between rounded-xl bg-neutral p-10 shadow-xl ">
        <div>
          <h1 className="font-sora text-3xl">SimInv</h1>

          <ul className="mt-8 flex flex-col gap-3 text-gray-500">
            {navs?.map(({ name, icon, id, url }) => (
              <li key={id}>
                <Link href={url}>
                  <a
                    className={`flex items-center gap-2 py-2 px-4 ${
                      router.pathname === url
                        ? "rounded-md bg-other-black text-neutral drop-shadow"
                        : "text-gray-500 transition-colors hover:text-gray-800"
                    }`}
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="#">
            <a className="flex items-center gap-2 py-2 px-4 text-gray-500 transition-colors hover:text-gray-800">
              <Logout />
              <span>Logout</span>
            </a>
          </Link>

          <p className="mt-10 flex flex-col rounded-md bg-main-black py-3 px-5 text-sm text-neutral">
            <span className="text-xs">Created By</span>
            <span className="font-bold">Williams Samuel</span>
          </p>
        </div>
      </nav>
    </header>
  );
};
