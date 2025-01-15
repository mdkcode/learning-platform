import { MobileHeader } from "../ui/dashboard/MobileHeader";
import SideNav from "../ui/dashboard/SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:h-screen md:flex-row">
      <MobileHeader />
      <SideNav />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;
