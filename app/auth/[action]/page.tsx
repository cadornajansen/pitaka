// app/auth/[action]/page.tsx

"use client";

import { useParams } from "next/navigation";
import { RegisterForm } from "@/components/register-form";

export default function AuthPage() {
  const params = useParams();
  const action = params.action;

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen">
      {action === "login" && <div></div>}

      {action === "register" && (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <RegisterForm />
          </div>
        </div>
      )}

      {action !== "login" && action !== "register" && (
        <div>
          <h1 className="text-xl font-bold">404 - Page Not Found</h1>
        </div>
      )}
    </div>
  );
}
