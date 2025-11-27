import './style.css'
import Galaxy from '../../components/Galaxy/Galaxy'
export const Home = () =>{
    return(
        <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor:'#000000' }}>
      {/* Fundo animado */}
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0}
        hueShift={240}
      />

      {/* Conteúdo sobreposto */}
      <div  className="container-home" >
        <h1>Seja bem-vindo</h1>
        <div className="content-home">
           <p>Essa página foi criada com  a finalizade de gerenciar um estacionado inspirado na maior cantora existente.Esse site foi criado a partir de uma aplicativo mas houve algumas mudanças na estrurtura</p> 
        </div>
      </div>
    </div>
    )
}