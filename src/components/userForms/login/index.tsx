import { useContext } from "react"
import { GlobalContext } from "../../../provider/GlobalContext"
import { useForm } from "react-hook-form"
import { TLoginData, loginSchema } from "./loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const Login = () => {
    const { login } = useContext(GlobalContext)

    const { register, handleSubmit, formState: { errors }} = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: TLoginData) => {
        login(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('taxNumber')} placeholder="CPF ou CNPJ" pattern="\d*" />
                {errors.taxNumber && <p>{errors.taxNumber.message}</p>}
                <input type="password" {...register('password')} placeholder="Senha" />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}