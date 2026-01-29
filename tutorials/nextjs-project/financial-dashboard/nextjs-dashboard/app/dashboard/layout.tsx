import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children } : {children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
};

// Here we are sharing this side navigation component with all of the other pages. That's what layouts are. They share UI across multiple pages.