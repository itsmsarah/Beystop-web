import './style.css'

export const Button = ({type = "button",onClick,children,disabled = false,className = ""}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}
