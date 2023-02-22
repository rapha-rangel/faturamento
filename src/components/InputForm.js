import { useState } from "react";
import {InputFormContainer, Input, Button} from "./style";

const InputForm= ({handleSave})=>{
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState(0);


    const Salvar =(event)=>{
        if(!descricao){
            return(
            alert("Campo Descrição Vazio")
            )
        }else if(!valor){
            return(
            alert("Campo Valor Vazio")
            )}else{
        event.preventDefault();
        const dadosFin={
            descricao: descricao,
            valor: valor,
            tipo: tipo
        }
        handleSave(dadosFin);
        event.target.reset();
        setDescricao(!descricao);
        setValor(!valor);
        }
    }

    return(
    <InputFormContainer>
        <form onSubmit={Salvar}>
            <div>
                <label>Informe a Descrição:</label>
                <Input placeholder="Ex: Conta de Luz" type="text"  onChange={e=> setDescricao(e.target.value)}/>
            </div>
            <div>
                <label>Informe o Valor:</label>
                <Input placeholder="0" type="text" onChange={e=> setValor(e.target.value)}/>
            </div>
            <div>
                <Button
                    type="submit"
                    entrada
                    onClick={()=> setTipo(0)}
                    >Entrada
                </Button>
                <Button
                    type="submit"
                    saida
                    onClick={()=> setTipo(1)}
                    >Saida
                </Button>
            </div>
        </form>
        
    </InputFormContainer>
    )
}

export default InputForm;