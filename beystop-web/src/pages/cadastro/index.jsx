import { Button } from "../../components/buttons"
import { FormContainer } from "../../components/formContainer"
import { ContainerInput } from "../../components/inputs"
import { ImgBeyAbertura } from "../../components/layouts/backgroundBeyAbertura"

export const Cadastro = () => {
    return (
        <ImgBeyAbertura>
            <FormContainer titulo="Cadastro" height="618px" text="Cadastrar">
                <ContainerInput
                    label="Nome Completo"
                    type="text"
                    id="name"
                    name="nome-completo"
                    placeholder="Informe seu nome completo"
                />
                <ContainerInput
                    label="E-mail"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Informe seu e-mail"
                />
                <ContainerInput
                    label="Senha"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Informe sua senha"
                />

            </FormContainer>


        </ImgBeyAbertura>
    )
}