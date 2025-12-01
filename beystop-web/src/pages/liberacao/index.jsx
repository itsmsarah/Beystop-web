import { Button } from "../../components/buttons"
import { ContainerInput } from "../../components/inputs"
import { ImgBeyReinasscense } from "../../components/layouts/backgroundBeyReinass"
import './style.css'

export const Liberacao = () =>{
    return(
        <ImgBeyReinasscense>
        <div className="veiculo-container">
            <div className="veiculo-content">
                <h1>Cadastre seu veículo</h1>
                <ContainerInput
                 label="Placa"
                    type="text"
                    id="placa"
                    name="senha"
                    placeholder="Informe o número da sua placa"/>

                   
               
            </div>
             <Button type="text">Liberar</Button>
        </div>
        
        </ImgBeyReinasscense>
    )
}