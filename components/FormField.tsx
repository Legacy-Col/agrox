'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { useAuthForm } from "@/context/Appprovider"
import toast from "react-hot-toast"
import { Input } from "@/components/ui/input"


export default function Formfield({ mode }: { mode: 'login' | 'signup' }) {

    /** destructeured constants for the form **/
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useAuthForm()

    /** Form Submission**/
    const onSubmit = async (data: any) => {
        try {
            const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup'
            const payload =
                mode === 'login' ? {
                    email: data.email,
                    password: data.password
                } : {
                    data
                }
            const res = await axios.post(endpoint, payload)
            toast.success(res.data.message || `${mode} Successfully`)
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Something went wrong.")
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {mode === 'signup' && (
                    <div>
                        <Input placeholder="First Name" {...register('firstName')} />
                        {errors.firstName && (
                            <p className="text-red-800 text-sm">{errors.firstName.message}</p>
                        )}
                    </div>
                )

                }
            </form>
        </section>
    )
}