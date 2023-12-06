'use client'

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai"
import { SafeUser } from "../../../../types";

interface LoginFormProps{
    currentUser: SafeUser | null
}

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {

    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>(
        {defaultValues:{
            email:'',
            password:'',
        }
    })

    const router = useRouter()

    useEffect(() => {
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    }, [])

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false)

            if (callback?.ok) {
                router.push('/cart')
                router.refresh()
                toast.success('Logged In')
            }

            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    if(currentUser){
        return <p className="text-center text-[30px] font-semibold">Redirecionando para sua conta...</p>
    }

    return ( 
        <>
        <Heading title="Faça Login" />
        <hr className="bg-slate-300 w-full h-px" />
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Senha" disabled={isLoading} register={register} errors={errors} required type="password" />
        <p className="text-lg flex gap-1">Não tem uma conta ainda? <Link href='/register' className="underline text-brickwall">Registre-se</Link>ou<Link href='/' className="underline text-brickwall">Continue navegando</Link></p>
        <Button label={isLoading ? "Carregando" : "Entrar"} onClick={handleSubmit(onSubmit)} />
        </>
    );
}
 
export default LoginForm;