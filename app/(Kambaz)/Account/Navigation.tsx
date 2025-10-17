"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
    const pathname = usePathname();
    
    const links = [
        { label: "Signin", path: "/Account/Signin" },
        { label: "Signup", path: "/Account/Signup" },
        { label: "Profile", path: "/Account/Profile" }
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .list-group .account-nav-link:hover {
                        text-decoration: underline !important;
                        border-bottom: 1px solid currentColor;
                    }
                `
            }} />
            <div id="wd-account-navigation" className="list-group fs-5 rounded-0" style={{ minWidth: "200px" }}>
                {links.map((link) => {
                    const isActive = pathname.includes(link.label);
                    return (
                        <Link 
                            key={link.label}
                            href={link.path}
                            className={`list-group-item border-0 account-nav-link text-decoration-none ${
                                isActive ? "text-dark" : "text-danger"
                            }`}
                            style={{ 
                                backgroundColor: "transparent"
                            }}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}