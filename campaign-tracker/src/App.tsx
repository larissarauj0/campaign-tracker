
import { Outlet } from "react-router-dom";
import DarkMode from "./components/DarkMode"
import Sidebar from "./components/SideBar.tsx"
import LogoLight from "./assets/campaign_tracker_logolight.png"
import LogoDark from "./assets/campaign_tracker_logodark.png"

const App = () => {
  return (

      <div className="min-h-screen bg-[#F0EEB] dark:bg-[#13181B] text-[#13181B] dark:text-[#CCD5DA] flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <header className="border-b border-[#CCD5DA] dark:border-zinc-800 flex items-center justify-between p-3 sm:p-4">
            <div className="flex justify-center">
              
            </div>
            <DarkMode />
          </header>

          <main className="grow">
        <Outlet />
      </main>

          <footer className="border-t border-z[#CCD5DA] dark:border-zinc-800 flex justify-end p-3 sm:p-4">
            <img src={LogoLight} className="h-8 sm:h-10 block dark:hidden" />
            <img src={LogoDark} className="h-8 sm:h-10 hidden dark:block" />
          </footer>
        </div>
      </div>

  )
}

export default App