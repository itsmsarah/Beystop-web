import './style.css'
import { Button } from "../buttons"

export const ContainerVeiculo = ({titulo, children,text,loading,onSubmit}) =>{
    return(
             <form className="veiculo-container" onSubmit={onSubmit}>
      <div className="veiculo-content">
        <h1>{titulo}</h1>
        {children}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Carregando..." : text}
      </Button>
    </form>
    )
}