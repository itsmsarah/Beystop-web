import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormContainer } from "../../components/formContainer"
import { ContainerInput } from "../../components/inputs"
import { ImgBeyAbertura } from "../../components/layouts/backgroundBeyAbertura"
import { login } from "../../../api"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

 const handleLogin = async (e) => {
  e.preventDefault()

  if (!email.trim() || !senha.trim()) {
    setError("Email e senha são obrigatórios")
    return
  }

  try {
    setError("")
    setLoading(true)

    await login(email, senha)

 
    navigate("/liberacao")

  } catch (err) {
    console.error(err)

    if (err.response?.status === 401) {
      setError("Email ou senha inválidos")
    } else {
      setError("Erro ao realizar login")
    }

  } finally {
    setLoading(false)
  }
}


  return (
    <ImgBeyAbertura>
      <FormContainer
        titulo="Login"
        text="Entrar"
        onSubmit={handleLogin}
        loading={loading}
      >
        <ContainerInput
          label="E-mail"
          type="email"
          id="email"
          name="email"
          placeholder="Informe seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />

        <ContainerInput
          label="Senha"
          type="password"
          id="senha"
          name="senha"
          placeholder="Informe sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={loading}
          required
        />

        {error && (
          <p style={{ color: "red", fontSize: 12 }}>{error}</p>
        )}
      </FormContainer>
    </ImgBeyAbertura>
  )
}
