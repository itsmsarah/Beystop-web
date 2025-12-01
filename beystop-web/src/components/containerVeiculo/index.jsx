import './style.css'
import { Button } from "../buttons"

export const ContainerVeiculo = ({titulo, children,text}) =>{
    return(
            <div className="veiculo-container">
                    <div className="veiculo-content">
                        <h1>{titulo}</h1>
                        {children}
                       
                    </div>
                     <Button>{text}</Button>
                </div>
    )
}