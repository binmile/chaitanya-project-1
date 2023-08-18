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