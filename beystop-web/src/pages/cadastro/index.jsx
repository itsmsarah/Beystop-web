import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormContainer } from "../../components/formContainer"
import { ContainerInput } from "../../components/inputs"
import { ImgBeyAbertura } from "../../components/layouts/backgroundBeyAbertura"
import { register } from "../../../api"

export const Cadastro = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleCadastro = async (e) => {
  e.preventDefault()

  if (!nome.trim() || !email.trim() || !senha.trim()) {
    setError("Todos os campos são obrigatórios")
    return
  }

  try {
    setLoading(true)
    setError("")

    await register(nome, email, senha)

    alert("Cadastro realizado com sucesso!")
    navigate("/login")

  } catch (err) {
    if (err.response?.status === 409) {
      setError("Este e-mail já está cadastrado")
    } else {
      setError("Erro ao realizar cadastro")
    }
  } finally {
    setLoading(false)
  }
}
  return (
    <ImgBeyAbertura>
      <FormContainer
        titulo="Cadastro"
        text="Cadastrar"
        onSubmit={handleCadastro}
        loading={loading}
      >
        <ContainerInput
          label="Nome Completo"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Informe seu nome completo"
        />

        <ContainerInput
          label="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Informe seu e-mail"
        />

        <ContainerInput
          label="Senha"
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Informe sua senha"
        />

        {error && (
          <p style={{ color: "var(--secondary-color)", fontSize: "var(--text-caption)" }}>{error}</p>
        )}
      </FormContainer>
    </ImgBeyAbertura>
  )
}
