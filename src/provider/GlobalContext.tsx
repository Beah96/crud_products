import { createContext } from "react";
import { IGlobalContextProps, IGlobalProviderProps, IProduct } from "./@types";
import { api } from "../services/api";
import { TLoginData } from "../components/userForms/login/loginSchema";
import { toast } from "react-toastify";
import { TRegisterData } from "../components/userForms/register/registerSchema";

export const GlobalContext = createContext({} as IGlobalContextProps)

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {

    const login = async (formData: TLoginData) => {
        try {
            const {data} = await api.post('/api/auth/login', formData)
            console.log(data)
            toast.success('Login efetuado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('CPF/CNPJ ou senha inválidos!')
        }
    }
    const registerUser = async (formData: TRegisterData) => {
        console.log(formData)

        try {
            const {data} = await api.post('/api/auth/register', formData)
            console.log(data)
            toast.success('Usuário criado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('CPF/CNPJ inválido!')
        }
    }
    const createProduct = async (formData: IProduct) => {
        try {
            const {data} = await api.post('/api/products/create-product', formData)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    const getProducts = async () => {
        try {
            const {data} = await api.get('/api/products/get-all-products')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getProductbyID = async (id: number) => {
        try {
            const {data} = await api.get(`/api/products/get-one-product/${id}`)
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    const updateProduct = async (id: number, formData: IProduct) => {
        try {
            const {data} = await api.put(`/api/products/update-product/${id}`, formData)
            
        } catch (error) {
            console.log(error)
        }
    }
    const deleteProduct = async (id: number) => {
        try {
            const {data} = await api.delete(`/api/products/delete-product/${id}`)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <GlobalContext.Provider value={{
            login,
            registerUser,
            createProduct,
            getProducts,
            getProductbyID,
            updateProduct,
            deleteProduct
        }}>
            {children}
        </GlobalContext.Provider>
    )
}