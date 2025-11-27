import './style.css'

export const Button =({type,onClick})=>{
    return(
        <button type={type} onClick={onClick}>Login</button>
    )
}