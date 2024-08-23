import servicos from "@/data/constants/servicos";
import ItemServico from "./ItemServico";
import TituloSecao from "../shared/TituloSecao";

export default function NossosServicos() {
    return (
        <div className="flex flex-col gap-y-16">
            <TituloSecao 
                tag="Serviçoes" 
                principal="Do Classico ao Rock" 
                secundario="Cabelo afiado, barba de lenhador e maõs de motoqueiro"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {servicos.map(servico => (
                    <ItemServico key={servico.id} servico={servico} />
                ))}
            </div>
        </div>
    )
}