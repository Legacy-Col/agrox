'use client'

import { userData, userSchema } from "@/types/types";
import { useContext, createContext, ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




/** Creating the form context **/
const AuthFormContext = createContext<UseFormReturn<userData> | null>(null);

/** Setting the context**/
export const useAuthForm = () => {
    const context = useContext(AuthFormContext);
    if (!context) {
        throw new Error("useAuthForm must be used within an AuthFormProvider");
    }
    return context;
}

/** setting the validator and resolver **/
export const AuthFormProvider = ({ children }: { children: ReactNode }) => {
    const method = useForm<userData>({
        resolver: zodResolver(userSchema)
    })

    /** wrapping our return in the context we created**/
    return (
        <AuthFormContext.Provider value={method}>
            {children}
        </AuthFormContext.Provider>
    )
}

