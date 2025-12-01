
import { ContainerInput } from "../../components/inputs"
import { ImgBeyReinasscense } from "../../components/layouts/backgroundBeyReinass"
import {ContainerVeiculo} from '../../components/containerVeiculo'
import './style.css'

export const Liberacao = () =>{
    return(
        <ImgBeyReinasscense>
         <ContainerVeiculo titulo="Informe seu véiculo" text="Entrar">
            <ContainerInput  label="Placa"
                    type="text"
                    id="placa"
                    name="placa"
                    placeholder="Informe o número da sua placa"/>
           


        </ContainerVeiculo>
        
        </ImgBeyReinasscense>
    )
}