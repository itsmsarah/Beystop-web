import { useState } from "react";
import { ContainerVeiculo } from "../../components/containerVeiculo";
import { ContainerInput } from "../../components/inputs";
import { ImgBeyReinasscense } from "../../components/layouts/backgroundBeyReinass";
import { Modal } from "../../components/modal";
import Filmbey from '../../assets/images/filmbey.png'

import api from "../../../api";
import "./style.css";

export const Retirada = () => {
  const [placa, setPlaca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [dadosRetirada, setDadosRetirada] = useState(null);

  const handleRetirar = async () => {
    if (!placa) {
      alert("Informe a placa do veículo.");
      return;
    }

    try {
      console.log("Chamando API com placa:", placa);

      const res = await api.put("/api/veiculos/saida", { placa });

      console.log("Resposta da API:", res.data);

      setDadosRetirada(res.data);
      setModalOpen(true);
    } catch (err) {
      console.log("Erro ao retirar veículo:", err);
      alert("Erro ao retirar veículo. Verifique a placa e tente novamente.");
    }
  };

  return (
    <ImgBeyReinasscense>
      <ContainerVeiculo
        titulo="Retire seu veículo"
        text="Retirar"
        onSubmit={undefined}        
        onClick={handleRetirar}    
         useSubmit={false}
      >
        <ContainerInput
          label="Placa"
          type="text"
          id="placa"
          name="placa"
          placeholder="Informe a placa do veículo"
          
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
      </ContainerVeiculo>

      {/* Modal fora do form → não desaparece */}
      {modalOpen && dadosRetirada && (
        <Modal
          imgModal={Filmbey}
          title="Informações da Retirada"
          
  dataEntrada={dadosRetirada.veiculo.dataEntrada}
  horarioEntrada={dadosRetirada.veiculo.horarioEntrada?.substring(0, 5)}

  dataSaida={dadosRetirada.veiculo.dataSaida}
  horarioSaida={dadosRetirada.veiculo.horarioSaida?.substring(0, 5)}

  valorTotal={dadosRetirada.veiculo.valorPago}
  onClose={() => setModalOpen(false)}   
        />
      )}
    </ImgBeyReinasscense>
  );
};
