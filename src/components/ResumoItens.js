import {Itens} from "./style";

const ResumoItens = ({valor, titulo, color})=>{
    return(
        <Itens color={color}>
            <h2>{titulo}</h2>
            <div>
                <span>R$</span><span>{valor}</span>
            </div>
        </Itens>
    )

}

export default ResumoItens;