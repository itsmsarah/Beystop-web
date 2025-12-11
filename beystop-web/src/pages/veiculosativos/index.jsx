import { useNavigate } from 'react-router-dom'
import FloatingLines from '../../components/FloatingLines/FloatingLines'
import { Button } from '../../components/buttons'
import { VeiculosAtivosContainer } from '../../components/containerVeiculosAtivos'
import './style.css'
import { useEffect, useState } from 'react'
import { getCars } from '../../../api'

export const VeiculosAtivos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const veiculosAtivos = async () => {
      try {
        const res = await getCars();
        console.log("Resposta da API:", res); // Corrigido: sem .data
        setData(res); // Corrigido: sem .data
      } catch (err) {
        console.log("Erro ao buscar veículos:", err);
      }
    };

    veiculosAtivos();
  }, []);



  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }} className="veiculos-ativos-page">
      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[10, 15, 20]}
        lineDistance={[8, 6, 4]}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />

      <div className="veiculos-ativos-container">
        <h1>Veículos Ativos</h1>

        {data.map((item, index) => (
          <VeiculosAtivosContainer
            key={index}
            placa={item.placa}
            data="Data/Entrada"
            horario="Horário/Entrada"
            dataEntrada={item.dataEntrada}
            horarioEntrada={item.horarioEntrada?.substring(0, 5)}
          />
        ))}

        <div className="button-container-veiculos">
          <Button onClick={() => navigate('/retirada')}>
            Deseja retirar algum veículo?
          </Button>
        </div>
      </div>
    </div>
  );
};
