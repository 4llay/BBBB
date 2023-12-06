'use client'

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai"
import axios from "axios"
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { SafeUser } from "../../../../types";

interface RegisterFormProps{
    currentUser: SafeUser | null
}

const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {

    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>(
        {
            defaultValues: {
                name: '',
                email: '',
                password: '',
            }
        })

    const router = useRouter();

    useEffect(() => {
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data).then(() => {
            toast.success('Conta criada com sucesso!')

            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if (callback?.ok) {
                    router.push('/cart')
                    router.refresh()
                    toast.success('Logged In')
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        }).catch(() => toast.error("Algo deu errado :(")).finally(() => {
            setIsLoading(false)
        })
    }

    if(currentUser){
        return <p className="text-center text-[30px] font-semibold">Redirecionando para sua conta...</p>
    }

    return (
        <>
            <Heading title="Faça seu Cadastro" />
            <hr className="bg-slate-300 w-full h-px" />
            <Input id="name" label="Nome" disabled={isLoading} register={register} errors={errors} required />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" label="Senha" disabled={isLoading} register={register} errors={errors} required type="password" />
            <p className="text-lg flex gap-1">Ja possui conta? <Link href='/login' className="underline text-brickwall">Faça Login</Link>ou<Link href='/' className="underline text-brickwall">Continue navegando</Link></p>            <Button label={isLoading ? "Carregando" : "Registrar"} onClick={handleSubmit(onSubmit)} />
        </>
    );
}

export default RegisterForm;