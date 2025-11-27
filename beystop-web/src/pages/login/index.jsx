import { Button } from "../../components/buttons";
import ElectricBorder from "../../components/EletricBorder/ElectricBorder"
import { ContainerInput } from "../../components/inputs";
import './style.css';

export const Login = () => {
    return (
        <div className="login-page">
            <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
            >
                <div className="login-form-container">
                    <form className="form-login">
                        <fieldset>
                            <legend>Login</legend>
                            <div className="container-inputs">
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
                            </div>
                        </fieldset>
                    </form>
                    <Button type="text">Login</Button>
                </div>
            </ElectricBorder>
        </div>
    );
};
