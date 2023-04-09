import { useState } from "react";
import { Link } from "react-router-dom";
import { territorios } from "../../common/consts/territorios";
import { TerritorioType } from "../../common/types/territorio-type";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import './TerritoriosList2.css'
import Button from "../../components/Button/Button";

function TerritoriosList2() {

    const [isActive, setIsActive] = useState(false);
    const [selectedTerritorio, setSelectedTerritorio] = useState<TerritorioType>(null)

    function handleToggle(territorio: TerritorioType) {
        if(isActive===false) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
        setSelectedTerritorio(territorio)
    }

    // function verTerritorio (id: number) {
    //     navigate(`/territorio/${id}`)
    // }

    return (
<AppLayout title='Territórios'>
<div className="page-container">

    <div id="territorios-list-container">
        {territorios.map((territorio) => (<div className='territorio' key={territorio?.id} onClick={() => handleToggle(territorio)}>
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
                            <Button text='Ver Atividade' classes="warning"/>
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

export default TerritoriosList2