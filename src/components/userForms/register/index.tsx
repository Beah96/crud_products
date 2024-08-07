import { useContext } from "react"
import { GlobalContext } from "../../../provider/GlobalContext"
import { TRegisterData, registerSchema } from "./registerSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const RegistereForm = () => {
    const { registerUser } = useContext(GlobalContext)

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data: TRegisterData) => {
        registerUser(data)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder="Nome" />
                {errors.name && <p>{errors.name.message}</p>}
                <input type="text" {...register('taxNumber')} placeholder="CPF ou CNPJ" pattern="\d*" />
                {errors.taxNumber && <p>{errors.taxNumber.message}</p>}
                <input type="text" {...register('mail')} placeholder="E-mail" />
                {errors.mail && <p>{errors.mail.message}</p>}
                <input type="text" {...register('phone')} placeholder="Telefone" />
                {errors.phone && <p>{errors.phone.message}</p>}
                <input type="password" {...register('password')} placeholder="Senha" />
                {errors.password && <p>{errors.password.message}</p>}
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}