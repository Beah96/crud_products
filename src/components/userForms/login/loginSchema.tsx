import { z } from "zod";

export const loginSchema = z.object({
    taxNumber: z.string().min(11).max(14),
    password: z.string().min(1, { message: 'Please enter your password'}),
})

export type TLoginData =  z.infer<typeof loginSchema>