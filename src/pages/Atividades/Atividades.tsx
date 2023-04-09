import './Atividades.css'
import { useParams } from 'react-router-dom'
import { territorios } from '../../common/consts/territorios'
import { AtividadeType } from '../../common/types/atividade-type'
import { atividades } from '../../common/consts/atividades'
import FocusLayout from '../../layouts/FocusLayout/FocusLayout'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
function Atividades () {
    const {id} = useParams()
    const idNumber = Number(id)
    // Configurar Validção numperica se não Notfound Page
    const territorio = territorios.find( territ => territ?.id === idNumber) ?? null

    let atividadesList: AtividadeType[] = [];

    territorio?.atividades?.forEach( id => {
        const atividade: AtividadeType = atividades.find(ativid => ativid?.id===id) ?? null
        
        atividadesList.push(atividade)
    })




    return (
<FocusLayout title={territorio?.name as string}>
    <div className="page-container">

        <h2>
            Atividades
        </h2>

        <img src={territorio?.photo_link} alt={territorio?.name} className='atividades-img'/>

        <div className="atividades-list">
            {atividadesList.map(atividade => (
                
                <div className='atividade-card' key={atividade?.id}>
                  <Link to={`/detalhes/atividade/${atividade?.id}`}>
                    <p>Inicio: {atividade?.inicio}</p>
                    <p>
                    <p>Fim:           {atividade?.fim}        
                    </p>
                        Obss.: {atividade?.obss}
                    </p>
                  </Link>
                </div>
            ))}
        </div>

        <Link to={'/atividades/nova'}>
            <Button classes='primary' text='Nova Atividade'/>
        </Link>

    </div>
</FocusLayout>
    )

} export default Atividades