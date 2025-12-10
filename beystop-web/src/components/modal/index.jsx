import './style.css'

export function Modal({ imgModal, title, dataEntrada, dataSaida, horarioEntrada, horarioSaida, valorTotal, onClose }) {

    return (
        <div className="modal" onClick={onClose}> 
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}  
            >
                <img src={imgModal} alt={title}/>
                <h2>{title}</h2>

                <p><strong>Data de entrada:</strong> {dataEntrada}</p>
                {dataSaida && <p><strong>Data de saída:</strong> {dataSaida}</p>}

                <p><strong>Horário de Entrada:</strong> {horarioEntrada}</p>
                {horarioSaida && <p><strong>Horário de Saída:</strong> {horarioSaida}</p>}

                {valorTotal && (
                    <p id="valortotal">
                        <strong>Valor Total:</strong> {valorTotal}
                    </p>
                )}
            </div>
        </div>
    );
}
