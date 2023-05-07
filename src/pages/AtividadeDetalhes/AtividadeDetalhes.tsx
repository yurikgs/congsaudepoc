import { useNavigate, useParams } from "react-router-dom"
import FocusLayout from "../../layouts/FocusLayout/FocusLayout"
import { useEffect, useState } from "react"
import './AtividadeDetalhes.css'
import Button from "../../components/Button/Button"
import { AtividadeType } from "../../common/types/atividade-type"
import { deleteAtividade, showAtividade, updateAtividade } from "../../db/firestore/Repository/atividadeRepository"

function AtividadeDetalhes () {
    // Configurar Validção numperica se não Notfound Page

    const navigate = useNavigate()
    const atividadeId = useParams().id

    const [atividade, setAtividade] = useState<AtividadeType | Partial<AtividadeType>>({id: atividadeId})


    async function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target
        const updt: Partial<AtividadeType> = {}
        updt[name as keyof typeof updt] = value

        if(atividade) {
            await setAtividade({...atividade, ...updt})
        } else {
            await setAtividade(updt)
        }


        console.log(atividade)
    }
    async function handleSubmit(event?: React.FormEvent) {
        
        event?.preventDefault()

        if(atividade && atividade.territorio) {
            await updateAtividade(atividade)
        }

        navigate(-1)

    }

    function handleExclude() {
        const confirmation = window.confirm('Tem certeza que deseja excluir?')
        if(confirmation) {
            deleteAtividade(atividade)
            navigate(-1)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await showAtividade(atividadeId??'')
            atividadeId?setAtividade(data):setAtividade({id: atividadeId})
        }
        fetchData()
    }, [atividadeId])

    return (
<FocusLayout title="Detalhes">
    {/* Nota: não vejo porque editar atividades passadas */}
    <div className="page-container">

        <form action="#" className="atividade-detalhes-form">
                <label htmlFor="inicio">Inicio</label>
                <input type="date" value={atividade?.inicio} name="inicio" id="inicio" onChange={handleInputChange}/>

                <label htmlFor="fim">Fim
                </label>
                <input type="date" value={atividade?.fim} name="fim" id="fim" onChange={handleInputChange}/>
                <span className='input-warning-danger'> (Adicione <strong>apenas se desejar encerrar</strong> a atividade!)</span>

                <label htmlFor="obss">Obss.</label>
                <textarea name="obss" id="obss" cols={30} rows={4} placeholder="Digite aqui as observações ..." onChange={handleInputChange} value={atividade?.obss}>{atividade?.obss}</textarea>     

                <div className="buttons-container">
                    <Button text="Excluir Atividade" classes="danger-dark" handleClick={handleExclude}/>

                    <Button text="Confirmar" type="SUBMIT" classes="primary" handleClick={handleSubmit} />
                </div>


        </form>

    </div>

</FocusLayout>
    )

} export default AtividadeDetalhes