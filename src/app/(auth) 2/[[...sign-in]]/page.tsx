import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md px-4">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300',
              card: 'bg-zinc-900',
              headerTitle: 'text-zinc-200',
              headerSubtitle: 'text-zinc-400',
              formFieldLabel: 'text-zinc-300',
              formFieldInput: 'bg-zinc-800 border-zinc-700 text-zinc-200',
              footerActionLink: 'text-zinc-200 hover:text-zinc-400'
            }
          }}
        />
      </div>
    </div>
  );
}