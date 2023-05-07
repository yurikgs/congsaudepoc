import './Territorio.css'
import { useParams } from 'react-router-dom'
import { territorios } from '../../common/consts/territorios'
import { TerritorioType } from '../../common/types/territorio-type'
import FocusLayout from '../../layouts/FocusLayout/FocusLayout'
import { useEffect, useState } from 'react'
import { showTerritorio } from '../../db/firestore/Repository/territorioRepository'
import ClickToEdit from '../../components/ClickToEdit/ClickToEdit'

function Territorio () {
const {id} = useParams()
// Configurar Validção numperica se não Notfound Page


// VER COM O VALMIR
const territorioInit: TerritorioType = territorios.find(territ => territ?.id === id) ?? null

const [territorio, setTerritorio] = useState(territorioInit)

useEffect( () => {

    const fetchData = async () => {
            const data = await showTerritorio(id??"")
            setTerritorio(data)
        }
    fetchData()
    } 
    
    , [territorio, id])


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
                <h3>Última Atividade</h3>
                <hr />
                <div className='obss-wrapper'>
                    <p>
                    {territorio?.obss}
                    </p>
                    <ClickToEdit   
                    link={`/detalhes/atividade/${territorio?.idDaUltimaAtividade}`}/>
                </div>

        </div>
    </div>



</div>
</FocusLayout>
)

} export default Territorio