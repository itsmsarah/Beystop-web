import { FormContainer } from "../../components/formContainer";
import { ContainerInput } from "../../components/inputs";
import { ImgBeyAbertura } from "../../components/layouts/backgroundBeyAbertura";


export const Login = () => {
    return (

        <ImgBeyAbertura>
            <FormContainer titulo="Login" text="Entrar">

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

    );
};
