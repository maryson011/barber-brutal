import profissionais from "@/data/constants/proficionais";
import ItemProfissional from "./ItemProficional";
import TituloSecao from "../shared/TituloSecao";

export default function NossosProfissionais() {
    return (
        <div className="flex flex-col gap-y-16">
            <TituloSecao 
                tag="Time" 
                principal="Nossos Brutos" 
                secundario="Só os mais brabos estão aqui. Temos o orgulho de ter os melhores profissionais do Brasil"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {profissionais.map((profissional) => (
                    <ItemProfissional key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    )
}