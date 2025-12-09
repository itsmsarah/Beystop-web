import { Button } from "../buttons"
import ElectricBorder from "../EletricBorder/ElectricBorder"
import './style.css'

export const FormContainer = ({
  titulo = '',
  children,
  text = '',
  onSubmit,
  loading = false
}) => {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <div className="form-container">
        <form className="form-content" onSubmit={onSubmit}>
          <fieldset>
            <legend>{titulo}</legend>

            <div className="container-inputs">
              {children}
            </div>
          </fieldset>

          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : text}
          </Button>
        </form>
      </div>
    </ElectricBorder>
  )
}
