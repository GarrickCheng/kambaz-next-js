import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }:
    Readonly<{ children: ReactNode }>) {
    return (
        <div className="container-fluid">
            <h1>Labs</h1>
            <div className="mb-3">
                <TOC />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
