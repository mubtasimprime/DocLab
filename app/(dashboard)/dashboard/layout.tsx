import { ReactNode } from "react";
import Sidenav from "../../../components/dashboard/layout/sidenav/sidenav";

export default function DashLayout({children}:{children:ReactNode}){
    return(
        <>
        <div className="flex flex-row max-w-360 mx-auto h-screen w-full">
            <aside className="w-69">
                <Sidenav/>
            </aside>

            <div>
            <main className="flex-1">
                {children}
            </main>
            </div>
        </div>
        </>
    )
}