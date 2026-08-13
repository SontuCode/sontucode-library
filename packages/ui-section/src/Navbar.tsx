import { SontuNavProps, NavItem } from "./types";
import { Container } from "./common";


function NavbarLinks({ navs }: { navs: NavItem[] }) {
    return (
        <>
            {navs.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="
            font-semibold
            transition-colors
            duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            "
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </>
    );
}

function NavbarLogo() {
    return (
                <div className="bg-logo-bg flex items-center justify-center rounded-md p-px">
                    <img
                        src="/Assets/Hero.png"
                        alt="Subhadip Maity"
                        width={35}
                        height={35}
                        className="rounded-md object-cover"
                    />
                </div>
    );
}
export function SontuNav({ navs, heading }: SontuNavProps) {
    return (
        <header>
            <Container>
                <nav
                    aria-label="Main navigation"
                    className="flex items-center justify-between"
                >
                    <NavbarLogo />

                    <ul className="flex items-center gap-4 pl-6 text-xs sm:pl-0 md:gap-6">
                        <NavbarLinks navs={navs} />
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
