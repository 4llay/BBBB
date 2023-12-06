"use client"

import { cn } from "../../libs/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IUser {
    name: string;
    email: string;
    password: string;
}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps){
    
    const { toast } = useToast();

    const router = useRouter();

    const [data, setData] = useState<IUser>({
        name:"",
        email:"",
        password:""
    })

    const[isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent){
        event.preventDefault();
        setIsLoading(true);

        const request = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-type": "applicaition/json"
            },
            body: JSON.stringify(data)
        })

        const response = await request.json()

        console.log("USER REGISTER FORM", response);

        if(!request.ok){
            toast({
                title: "Ooooops...",
                description: response.error,
                variant: "destructive",
                action: (
                    <ToastAction altText="Tente Novamente">Tente Novamente</ToastAction>
                )
            })
        } else {
            router.push("/login");
        }

        setData({
            name:"",
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
                        Nome
                    </Label>
                    <Input 
                    id="name"
                    placeholder="Digite seu nome"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    name="name"
                    value={data.name}
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
                Registrar-se
                </Button>
            </div>
        </form>
    </div>
    )
}