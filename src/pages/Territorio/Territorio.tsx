import './Territorio.css'
import { useParams } from 'react-router-dom'
import { territorios } from '../../common/consts/territorios'
import { TerritorioType } from '../../common/types/territorio-type'
import FocusLayout from '../../layouts/FocusLayout/FocusLayout'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

function Territorio () {
const {id} = useParams()
const idNumber = Number(id)
// Configurar Validção numperica se não Notfound Page

const territorio: TerritorioType = territorios.find(territ => territ?.id === idNumber) ?? null


return (
<FocusLayout title={territorio?.name??''}>
<div className='page-container'>
    <h1>{territorio?.name}</h1>
    <img src={territorio?.photo_link} alt={territorio?.name}/>

    <div className='territorio-wrapper'>
        <div className="territorio-info">
            <p className={`${territorio?.status==='Disponível'?'status':'ultimoTrabalhador'}`}>
                {territorio?.status === 'Disponível'?`${territorio?.status}`:`Está com: ${territorio?.ultimoTrabalhador}`}
            </p>
            <p className="data-ultimo-trabalho">
            Última atividade: <span> {territorio?.dataUltimaAtividade}</span>
            </p>
        </div>
        <div className="detalhes">
                <h3>Detalhes do Território</h3>
                <hr />
                <p>{territorio?.detalhes}</p>
        </div>
        <div className="observacoes-atividade">
                <h3>Observações da Atividade</h3>
                <hr />
                <div className='obss-wrapper'>
                    <p>
                    {territorio?.obss}
                    </p>
                    <Link to={`/detalhes/atividade/${territorio?.idDaUltimaAtividade}`}>
                        <Button classes='edit' childrenType='edit'/>
                    </Link>
                </div>

        </div>
    </div>



</div>
</FocusLayout>
)

} export default Territorio