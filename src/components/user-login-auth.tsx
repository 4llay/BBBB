"use client"

import { cn } from "../../libs/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation"
const bcrypt = require('bcrypt');

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IUser {
    email: string;
    password: string;
}

export function UserLoginForm({
    className,
    ...props
}: UserAuthFormProps){
    
    const [data, setData] = useState<IUser>({
        email:"",
        password:""
    })

    const { toast } = useToast();

    const router = useRouter();

    const[isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent){
        event.preventDefault();
        setIsLoading(true);

        const res = await signIn<"credentials">("credentials", {
            ...data,
            redirect: false,
        });

        if(res?.error){
            toast({
                title: "Ooops...",
                description: res.error,
                variant: "destructive",
                action: (
                    <ToastAction altText="Tente Novamente"></ToastAction>
                ),
            })
        }else{
            router.push("/")
        }
        
        setData({
            email:"",
            password:"",
        })
        setIsLoading(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    return (
    <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={onSubmit}>
            <div className="grid gap-2">
                <div className="grid gap-1">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input 
                    id="email"
                    placeholder="Digite seu email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="email">
                        Senha
                    </Label>
                    <Input 
                    id="password"
                    placeholder="Digite sua senha"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    />
                </div>
                <Button disabled={isLoading}>
                Entrar
                </Button>
            </div>
        </form>
    </div>
    )
}