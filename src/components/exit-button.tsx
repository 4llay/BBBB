"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButton({ page }: { page: string }) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link href={"/login"} className="text-center pt-[30px] text-[2rem] font-semibold">
          Entrar
        </Link>
      ) : (
        <button onClick={() => signOut({ callbackUrl: "/login" })} className="text-center pt-[30px] text-[2rem] font-semibold">
          Sair
        </button>
      )}
    </>
  );
}