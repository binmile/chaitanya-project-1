export interface GreetProp {
    name: string,
    messageCount: number,
    isLoggedin: boolean
}
export interface PersonProps {
    name:{
        first: string,
        last: string
    }
}

export interface PersonListProps {
    names:{
        first: string,
        last: string
    }[]
}

export interface StatusProps {
    status: 'loading' | 'success' | 'error'
}

export interface HeadingProps {
    children:string
}

export interface  OscarProps {
    children: React.ReactNode
}
