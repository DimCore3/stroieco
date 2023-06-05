type List = {
    name: string,
    href: string,
}

export type Props = {
    title: string,
    list: List[];
    action?: React.MouseEventHandler<HTMLAnchorElement>,
}