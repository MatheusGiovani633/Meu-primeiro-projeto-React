import Colaborador from "../Colaborador";
import "./time.css";
const Time = (props) => {
  const fundo = { backgroundColor: props.corSecundaria };
  const corPrincipal = { borderColor: props.corPrimaria };
  return (
    props.colaboradores.length > 0 && ( // Condicional de renderização. Condicional = true && faça. pode ser usado o ternário "?" se nao atender vc define o que irá vir ":condicional"
      <section className="time" style={fundo}>
        <h3 style={corPrincipal}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
