
import FloatingLines from '../../components/FloatingLines/FloatingLines'
import './style.css'
export const VeiculosAtivos = () => {
    return (
        <div style={{ width: '100%', height: '90vh', position: 'relative' }}>
            <FloatingLines
                enabledWaves={['top', 'middle', 'bottom']}
                // Array - specify line count per wave; Number - same count for all waves
                lineCount={[10, 15, 20]}
                // Array - specify line distance per wave; Number - same distance for all waves
                lineDistance={[8, 6, 4]}
                bendRadius={5.0}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
            />

            <div className="veiculos-ativos-container">
                <h1>Veículos Ativos</h1>
                <div className="veiculos-ativos-content">
                    <h2>JGF-3348</h2>

                    <div className="informacoes-carro">
                        <div className="informacoes-data">
                            <h3>Data/Entrada</h3>
                            <p className='data-entrada'>10/11/2024</p>
                        </div>

                        <div className="informacoes-horario">
                            <h3>Horário/Entrada</h3>
                            <p className='horario-entrada'>10:29:55</p>
                        </div>
                    </div>
                    <div className="veiculos-ativos-content">
                    <h2>JGF-3348</h2>

                    <div className="informacoes-carro">
                        <div className="informacoes-data">
                            <h3>Data/Entrada</h3>
                            <p className='data-entrada'>10/11/2024</p>
                        </div>

                        <div className="informacoes-horario">
                            <h3>Horário/Entrada</h3>
                            <p className='horario-entrada'>10:29:55</p>
                        </div>
                    </div>

                    
                </div>

                    
                </div>
            </div>
        </div>

    )
}