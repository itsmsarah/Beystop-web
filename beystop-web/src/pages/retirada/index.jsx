import { ContainerVeiculo } from "../../components/containerVeiculo"
import { ContainerInput } from "../../components/inputs"
import { ImgBeyReinasscense } from "../../components/layouts/backgroundBeyReinass"
import './style.css'
export const Retirada = () =>{
    return(
        <ImgBeyReinasscense>
        <ContainerVeiculo titulo="Retire seu veículo" text="Retirar">
            <ContainerInput  label="Placa"
                    type="text"
                    id="placa"
                    name="senha"
                    placeholder="Informe o número da sua placa"/>
           


        </ContainerVeiculo>
        
        </ImgBeyReinasscense>
    )
}