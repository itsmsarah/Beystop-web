import { useState } from "react"
import { useNavigate } from "react-router-dom"


import { ContainerInput } from "../../components/inputs"
import { ImgBeyReinasscense } from "../../components/layouts/backgroundBeyReinass"
import { ContainerVeiculo } from "../../components/containerVeiculo"
import "./style.css"
import api from "../../../api"

export const Liberacao = () => {
  const [placa, setPlaca] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLiberacao = async (e) => {
    e.preventDefault()

    if (!placa.trim()) {
      setError("Informe a placa do veículo")
      return
    }

    try {
      setError("")
      setLoading(true)

      await api.post("/api/veiculos/entrada", {
        placa
      })

      alert("Veículo liberado com sucesso ✅")
      navigate("/veiculosativos") // ajuste se sua rota for outra
    } catch (err) {
      console.error(err)
      setError("Erro ao liberar veículo. Verifique a placa.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ImgBeyReinasscense>
      <ContainerVeiculo
        titulo="Informe seu veículo"
        text={loading ? "Liberando..." : "Entrar"}
        onSubmit={handleLiberacao}
      >
        <ContainerInput
          label="Placa"
          type="text"
          id="placa"
          name="placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value.toUpperCase())}
          placeholder="Informe o número da sua placa"
        />

        {error && <p className="error-text">{error}</p>}
      </ContainerVeiculo>
    </ImgBeyReinasscense>
  )
}
