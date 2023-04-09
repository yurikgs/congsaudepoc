import { useNavigate, useParams } from "react-router-dom"
import FocusLayout from "../../layouts/FocusLayout/FocusLayout"
import { atividades } from "../../common/consts/atividades"
import './AtividadeDetalhes.css'
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

function AtividadeDetalhes () {
    const {id} = useParams()
    const idNumber = Number(id)
    // Configurar Validção numperica se não Notfound Page

    const atividade = atividades.find( ativid => ativid?.id === idNumber)

    const navigate = useNavigate()
    const handleConfirmar = (event?: React.FormEvent) => {
        event?.preventDefault()
        navigate(-1)
    }

    return (
<FocusLayout title="Detalhes">
    {/* Nota: não vejo porque editar atividades passadas */}
    <div className="page-container">

        <form action="#" className="atividade-detalhes-form">
                <label htmlFor="inicio">Inicio</label>
                <input type="date" value={atividade?.inicio} name="inicio" id="inicio"/>

                <label htmlFor="fim">Fim</label>
                <input type="date" value={atividade?.fim} name="fim" id="fim"/>

                <label htmlFor="obss">Obss.</label>
                <textarea name="obss" id="obss" cols={30} rows={4} placeholder="Digite aqui as observações ...">{atividade?.obss}</textarea>     

                    <Button text="Confirmar" type="SUBMIT" classes="primary" handleClick={handleConfirmar} /> 

        </form>

    </div>

</FocusLayout>
    )

} export default AtividadeDetalhes