import './Atividades.css'
import { useParams, Link } from 'react-router-dom'
import { AtividadeType } from '../../common/types/atividade-type'
import FocusLayout from '../../layouts/FocusLayout/FocusLayout'
import Button from '../../components/Button/Button'
import { useEffect, useState } from 'react'
import { TerritorioType } from '../../common/types/territorio-type'
import { showTerritorio } from '../../db/firestore/Repository/territorioRepository'
import { showAtividadeByTerritorio } from '../../db/firestore/Repository/atividadeRepository'
import ClickToEdit from '../../components/ClickToEdit/ClickToEdit'

function Atividades () {


    const idParam = useParams().id
    const id = String(idParam)
    // Configurar Validção -- se não Notfound Page

    const  [territorio, setTerritorio] = useState<TerritorioType>(null)
    const [atividadesList, setAtividadesList] = useState<AtividadeType[]>([])


    useEffect(()=> {
        const fetchData = async () => {
            const territorioDoc = await showTerritorio(id)
            setTerritorio(territorioDoc)

            const atividadesList = await showAtividadeByTerritorio(id) as AtividadeType[]

            setAtividadesList(atividadesList.reverse())
        }
        fetchData()
    }, [id])

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
                  <div className="card-info">
                    <p>
                        Inicio: {atividade?.inicio}</p>
                    <p>
                        Fim:           {atividade?.fim}        
                    </p>
                    <p>
                        Obss.: {atividade?.obss}
                    </p>
                  </div>
                  <div className='click-to-edit'>
                    <ClickToEdit link={`/detalhes/atividade/${atividade?.id}`}/>
                  </div>

                </div>
            ))}
        </div>

        <Link to={`/atividades/territorio/${territorio?.id}/nova`}>
            <Button classes='primary' text='Nova Atividade'/>
        </Link>

    </div>
</FocusLayout>
    )

} export default Atividades