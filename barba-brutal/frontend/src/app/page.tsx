import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import Rodape from "@/components/shared/Rodape";
import SecaoBackground from "@/components/shared/SecaoBackground";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="container py-10">
        <h1 className="text-6xl">Landing page</h1>
      </div>
      <SecaoBackground imagem='/banners/servicos.webp'>
        <NossosServicos />
      </SecaoBackground>
      <SecaoBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </SecaoBackground>
      <Rodape />
    </div>
  )
}
