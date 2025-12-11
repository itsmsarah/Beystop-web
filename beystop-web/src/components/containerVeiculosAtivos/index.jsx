import './style.css'

export const VeiculosAtivosContainer = ({ placa, dataEntrada, horarioEntrada, data, horario }) => {
    return (
        <div className="veiculos-ativos-content">
            <h2>{placa}</h2>

            <div className="informacoes-carro-container">
                <div className="informacoes-data-content">
                    <h3>{data}</h3>
                    <p className='data-entrada'>{dataEntrada}</p>
                </div>

                <div className="informacoes-horario-content">
                    <h3>{horario}</h3>
                    <p className='horario-entrada'>{horarioEntrada}</p>
                </div>
            </div>
        </div>



    )
}