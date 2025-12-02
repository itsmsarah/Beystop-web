import'./style.css'

export const ContainerInput = ({ id, label, type, name, placeholder ,widthWeb,height}) => {
    return (
        <div className="container-input">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                style={{
                    width: widthWeb || "376px",
                    height: height || "54px"   
                }}
            />
        </div>
    )
}