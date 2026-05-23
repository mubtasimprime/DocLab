import { ReactNode } from "react";
import Sidenav from "../../../components/dashboard/layout/sidenav/sidenav";
import Topnav from "@/components/dashboard/layout/topnav/topnav";

export default function DashLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-row max-w-360 mx-auto h-screen w-full">
        <aside className="w-69">
          <Sidenav />
        </aside>

        <div className="flex-1 border-r border-neutral/10">
            <Topnav/>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
