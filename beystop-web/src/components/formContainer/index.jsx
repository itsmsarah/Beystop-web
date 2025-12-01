import { Button } from "../buttons";
import './style.css'

export const FormContainer = ({titulo = '',height = '',style = {},children,text = ''}) => {
    return (
        <div
            className="form-container"
            style={{ height, ...style }}
        >
            <form className="form-content">
                <fieldset>
                    <legend>{titulo}</legend>
                    <div className="container-inputs">
                        {children}
                    </div>
                </fieldset>
                <Button type="text">{text}</Button>
            </form>
        </div>
    );
};
