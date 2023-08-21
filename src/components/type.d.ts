
export interface GreetProp {
    name: string,
    messageCount: number,
    isLoggedin: boolean
}
export interface PersonProps  {

        firstName: string,
        lastName: string
        
}

export interface PersonListProps {
    names:PersonPropse[]
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
export interface PersonPropse {
    firstName: string
    lastName: string
    id: string
}

export interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export interface InputProps {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// styles
export interface ContainerProps {
    styles: React.CSSProperties
}