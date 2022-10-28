import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import classNames from "classnames";

export default function Navbar() {
    const [offCanvas, setOffCanvas] = useState(false);

    return (
        <>
            <div className="flex items-center py-10">
                <div className="w-3/12 ">
                    <Logo />
                </div>
                <div className="w-6/12 hidden md:block">
                    <Nav dir="horizontal" scheme="light" />
                </div>
                <div className="w-3 /12 text-right hidden md:block">
                    <Button pill variant="outline-yellow">Kontak</Button>
                </div>
                <div className="w-9/12 md:hidden text-right">
                    <img src="/menu.svg" alt="icon-menu" className="inline-block" onClick={() => setOffCanvas(true)} />
                </div>
            </div>

            <div className={classNames("fixed bg-white z-10 transition-all top-0 h-full w-full p-10 md:hidden", offCanvas ? "right-0" : "-right-full")}>
                <img src="/x.svg" alt="" className="absolute top-8 right-8 w-8" onClick={() => setOffCanvas(false)} />
                <Nav scheme="dark" dir="vertikal" />
            </div>
        </>
    )
}
