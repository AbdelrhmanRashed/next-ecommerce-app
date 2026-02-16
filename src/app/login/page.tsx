import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
  description: "Sign in to your account",
};

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Sign in</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Sign in with Google or Facebook to continue
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
