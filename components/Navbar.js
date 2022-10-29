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
                <div className="w-3 /12 text-right hidden cursor-pointer md:block">
                    <Button pill variant="outline-yellow">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Kontak
                        </a>
                    </Button>
                </div>
                <picture className="w-9/12 md:hidden text-right">
                    <img src="/menu.svg" alt="icon-menu" className="inline-block" onClick={() => setOffCanvas(true)} />
                </picture>
            </div>

            <div className={classNames("fixed bg-white z-10 transition-all top-0 h-full w-full p-10 md:hidden", offCanvas ? "right-0" : "-right-full")}>
                <picture>
                    <img src="/x.svg" alt="" className="absolute top-8 right-8 w-8" onClick={() => setOffCanvas(false)} />
                </picture>
                <Nav scheme="dark" dir="vertikal" />
            </div>
        </>
    )
}
