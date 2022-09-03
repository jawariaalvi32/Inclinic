export type CreateOnModalProps = {
    data?: number, 
    isOpen?: true | false,
    openModal?: React.Dispatch<React.SetStateAction<boolean>>
    defaultFormValue?: { [key: string] : any }
}

export interface Column {
    Header: string,
    accessor: string,
    Cell?: (cell?: any) => void,
}

export interface Rows {
    [ key: string ]: any
}[]