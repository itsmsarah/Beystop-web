import './style.css'
import { Button } from "../buttons"

export const ContainerVeiculo = ({
  titulo,
  children,
  text,
  loading,
  onSubmit,
  onClick,
  useSubmit = true // 👉 padrão: botão tipo submit
}) => {
  return (
    <form className="veiculo-container" onSubmit={onSubmit}>
      <div className="veiculo-content">
        <h1>{titulo}</h1>
        {children}
      </div>

      <Button
        onClick={onClick}
        type={useSubmit ? "submit" : "button"}   // 👈 AQUI ESTÁ A MAGIA
        disabled={loading}
      >
        {loading ? "Carregando..." : text}
      </Button>
    </form>
  )
}

