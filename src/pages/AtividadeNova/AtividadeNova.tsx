import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button/Button"
import FocusLayout from "../../layouts/FocusLayout/FocusLayout"
import { useState } from "react"
import { AtividadeType } from "../../common/types/atividade-type"
import { createAtividade } from "../../db/firestore/Repository/atividadeRepository"
import { doc } from "firebase/firestore"
import { connection } from "../../db/firestore/connection"

function AtividadeNova () {


    const navigate = useNavigate()
    const territorioId = useParams().id

    const [atividade, setAtividade] = useState<AtividadeType | Partial<AtividadeType>>({territorio: doc(connection, `territorios/${territorioId}`)})

    async function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        const updt: Partial<AtividadeType> = {};
        updt[name as keyof typeof updt] = value;


        await atividade?setAtividade({...atividade, ...updt}):setAtividade(updt)
    }
    
    async function handleSubmit(event?: React.FormEvent<Element>) {
        event?.preventDefault()

        // TODO: fazer todas as validações de campo
        

        if(atividade && atividade.territorio) {
            createAtividade(atividade)
 
            navigate(-1)
        }
    }

    return (
    <FocusLayout title="Nova Atividade">
    {/* Nota: não vejo porque editar atividades passadas */}
    <div className="page-container">

        <form action="#" className="atividade-detalhes-form" >
                <label htmlFor="inicio">Inicio</label>
                <input type="date" name="inicio" id="inicio" onChange={handleInputChange}/>

                <label htmlFor="fim">Fim</label>
                <input type="date" name="fim" id="fim" onChange={handleInputChange}/> <span className='input-warning-danger'> (Adicione <strong>apenas se desejar encerrar</strong> a atividade!)</span>

                <label htmlFor="obss">Obss.</label>
                <textarea name="obss" id="obss" cols={30} rows={4} placeholder="Digite aqui as observações ..." onChange={handleInputChange}></textarea>     

                <Button text="Confirmar" type="SUBMIT" classes="primary" handleClick={handleSubmit} />    
        </form>

    </div>

</FocusLayout>
    )

} export default AtividadeNova