import'./style.css'

export const ContainerInput = ({ id, label, type, name, placeholder }) => {
    return (
        <div className="container-input">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}