export interface NavItem {
    name: string,
    href: string
}

export interface SontuNavProps{
    navs: NavItem[],
    heading: string
}
