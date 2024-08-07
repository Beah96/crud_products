import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(1, { message: 'Please enter your name'}),
    taxNumber: z.string().min(11).max(14),
    mail: z.string().email({ message: 'Please enter a valid email'}),
    phone: z.string(),
    password: z.string().min(1, { message: 'Please enter your password'}),
    
})

export type TRegisterData = z.infer<typeof registerSchema>