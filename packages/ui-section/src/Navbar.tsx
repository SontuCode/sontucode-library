import {ReactNode} from "react";
import { navlinks, navpeer } from "./types";


function Container({children}: {children: ReactNode}) {
    return (
        <div className={"mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8"}>
            {children}
        </div>
    );
}

function NavbarLinks( {navigation}:{navigation :navpeer[]}) {
    return (
        <>
            {navigation.map((item) => {
                return (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="focus-visible:outline-none 
                                focus-visible:ring-ring 
                                font-semibold 
                                transition-colors 
                                duration-300 
                                focus-visible:ring-2 
                                focus-visible:ring-offset-2"
                        >
                            {item.name}
                        </a>
                    </li>
                );
            })}
        </>
    );
}

function NavbarLogo() {
    return (
            <Link href="/" aria-label="Home" className="hidden sm:block">
                <div className="bg-logo-bg flex items-center justify-center rounded-md p-px">
                    <img
                        src="/Assets/Hero.png"
                        alt="Subhadip Maity"
                        width={35}
                        height={35}
                        className="rounded-md object-cover"
                    />
                </div>
            </Link>
    );
}

export function SontuNav(navs : navlinks){
    return (
        <header className="bg-background/20 sticky top-0 z-50 backdrop-blur-md">
            <Container>
                <nav
                    aria-label="Primary Navigation"
                    className="flex h-16 items-center justify-between"
                >
                    {/* Left */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <NavbarLogo />

                        <ul className="flex items-center pl-6 sm:pl-0 gap-4 md:gap-6 text-xs">
                            {/* Navigation Links */}
                            <NavbarLinks navs={navs.navs} />
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
}