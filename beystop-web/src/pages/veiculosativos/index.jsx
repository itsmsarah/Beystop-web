import FloatingLines from '../../components/FloatingLines/FloatingLines'
import { Button } from '../../components/buttons'
import { VeiculosAtivosContainer } from '../../components/containerVeiculosAtivos'
import './style.css'

export const VeiculosAtivos = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
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

                <VeiculosAtivosContainer
                    placa="JGF-3348"
                    data="Data/Entrada"
                    horario="Horário/Entrada"
                    dataEntrada="10/11/2024"
                    horarioEntrada="10:29:55"
                />

                <VeiculosAtivosContainer
                    placa="ABC-1108"
                    data="Data/Entrada"
                    horario="Horário/Entrada"
                    dataEntrada="11/10/2025"
                    horarioEntrada="00:30:20"
                />
           <div className="button-container-veiculos">
            <Button>Deseja retirar algum véiculo?</Button>
           </div>

            </div>
        </div>
    )
}
