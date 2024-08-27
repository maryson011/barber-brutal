import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <span className="text-8xl">Agendamento</span>
            <Link href="/" className="button">Voltar</Link>
        </div>
    )
}