import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950">
      <div className="max-w-[350px] w-full mx-auto p-4">
        <div className="mb-8 flex justify-center">
          <img
            src="/nokk-logo.svg"
            alt="Nokk"
            className="h-12 w-auto"
          />
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
              card: "bg-zinc-900 border border-zinc-800",
              headerTitle: "text-zinc-200",
              headerSubtitle: "text-zinc-400",
              formFieldLabel: "text-zinc-300",
              formFieldInput: "bg-zinc-800 border-zinc-700 text-zinc-200",
              footerActionLink: "text-zinc-200 hover:text-zinc-400",
              dividerLine: "bg-zinc-800",
              dividerText: "text-zinc-500"
            }
          }}
        />
      </div>
    </div>
  );
}