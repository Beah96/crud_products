import { TRegisterData } from "../components/userForms/register/registerSchema"

export interface TLogin {
    taxNumber: string
    password: string
}
export interface IProduct {
    name: string
    description: string
    price: number
    stock: number
}
export interface IGlobalContextProps {
    login: (formData: TLogin) => Promise<void>,
    registerUser: (formData: TRegisterData) => Promise<void>,
    createProduct: (formData: IProduct) => Promise<void>,
    getProducts: () => Promise<void>,
    getProductbyID: (id: number) => Promise<void>,
    updateProduct: (id: number, formData: IProduct) => Promise<void>,
    deleteProduct: (id: number) => Promise<void>,
}

export interface IGlobalProviderProps {
    children: React.ReactNode
}