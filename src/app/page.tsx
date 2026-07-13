import { ConnectDialog } from "@/components/sign-in-dialog/connect-dialog";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-4 min-h-dvh w-full items-center justify-center bg-gray-background">
      <ConnectDialog />
    </main>
  );
}
