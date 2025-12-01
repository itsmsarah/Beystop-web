import { Button } from "../buttons";
import ElectricBorder from "../EletricBorder/ElectricBorder";
import './style.css'

export const FormContainer = ({titulo = '',height = '',style = {},children,text = ''}) => {
    return (

        <ElectricBorder
         color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}>

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
        </ElectricBorder>
    );
};
