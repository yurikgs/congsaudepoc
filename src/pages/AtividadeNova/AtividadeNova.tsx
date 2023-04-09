import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import FocusLayout from "../../layouts/FocusLayout/FocusLayout"

function AtividadeNova () {


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
                <input type="date" name="inicio" id="inicio"/>

                <label htmlFor="fim">Fim</label>
                <input type="date" name="fim" id="fim"/>

                <label htmlFor="obss">Obss.</label>
                <textarea name="obss" id="obss" cols={30} rows={4} placeholder="Digite aqui as observações ..."></textarea>     

                <Button text="Confirmar" type="SUBMIT" classes="primary" handleClick={handleConfirmar} />    
        </form>

    </div>

</FocusLayout>
    )

} export default AtividadeNova