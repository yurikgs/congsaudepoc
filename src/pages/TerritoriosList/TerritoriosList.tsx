import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TerritorioType } from "../../common/types/territorio-type";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import './TerritoriosList.css'
import Button from "../../components/Button/Button";
import * as territorioRep from '../../db/firestore/Repository/territorioRepository'

function TerritoriosList() {

    // const db = getFirestore(firebaseApp)

    const[territorios, setTerritorios] = useState<any[]>([null]) // TODO: tipar aqui
    const [isActive, setIsActive] = useState(false);
    const [selectedTerritorio, setSelectedTerritorio] = useState<TerritorioType>(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await territorioRep.listTerritorio()
            setTerritorios(data)
        }
        fetchData()
    }, [])

    function handleToggle(territorio: TerritorioType) {
        if(isActive===false) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
        setSelectedTerritorio(territorio)
    }


    return (
<AppLayout title='Territórios'>
<div className="page-container">

    <div id="territorios-list-container">
        {territorios.map((territorio:any) => (<div key={territorio?.id} className='territorio' onClick={() => handleToggle(territorio)}>
            <div className='territorio-name'>
                <h2>{territorio?.name}</h2>
            </div>

            {isActive===true&&selectedTerritorio?.id===territorio?.id ? 
                <div className='territorio-info'>
                    <div className='territorio-options'>
                        <Link to ={`/territorio/${territorio?.id}`} className = 'territorio-option'>
                            <Button text="Ver Território" classes='warning'/>
                        </Link>
                        <Link to={`/atividades/territorio/${territorio?.id}`} className = 'atividade-option'>
                            <Button text='Ver Atividades' classes="warning"/>
                        </Link>
                    </div>
                </div>
            : null
            }

        </div>))}
    </div>
</div>
</AppLayout>
    )
}

export default TerritoriosList