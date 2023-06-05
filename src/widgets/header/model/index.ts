export type List = {
    name: string,
    href: string,
}

export type ListWithTitle = {
    title: string,
    list: List[];
}