import { createContext } from "react";
import { IGlobalContextProps, IGlobalProviderProps, IProduct, TLogin, TRegister } from "./@types";
import { api } from "../services/api";

export const GlobalContext = createContext({} as IGlobalContextProps)

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {

    const login = async (formData: TLogin) => {
        try {
            const {data} = await api.post('/api/auth/login', formData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const registerUser = async (formData: TRegister) => {
        try {
            const {data} = await api.post('/api/auth/register', formData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const createProduct = async (formData: IProduct) => {
        try {
            const {data} = await api.post('/api/products/create-product', formData)
            console.log(data)
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