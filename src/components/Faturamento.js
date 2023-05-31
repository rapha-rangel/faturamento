import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import Entradas from "./Entradas";
import Resumo from "./Resumo";
import { Container} from "./style";

const Faturamento = ()=>{
    const [dadosFin, setDadosFin] =useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []);
    const [receita, setReceita] =useState(0);
    const [saldo, setSaldo] =useState(0);
    const [despesa, setDespesa] =useState(0);
    const [gridUpdate, setGridUpdate] =useState(false);
    const [closeCard, setCloseCard] =useState(false);
    const [darkChange, setDarkChange] = useState(false);
    
    useEffect(()=>{
        calculation(dadosFin);
				setCloseCard(true);
    },[gridUpdate]);

    const calculation = (dadosFin) =>{
			const totalEntrada = dadosFin.filter((itens)=>itens.tipo === 0).map((entrada) =>Number(entrada.valor));
			
			const totalSaida = dadosFin.filter((itens)=>itens.tipo === 1).map((saida) =>Number(saida.valor));
			const entrada = totalEntrada.reduce((acc, valor) => acc+valor,0).toFixed(2);
			const saida = totalSaida.reduce((acc, valor)=>acc+valor,0).toFixed(2);
			const totalSaldo = (entrada-saida).toFixed(2);
		
			setReceita(entrada);
			setDespesa(saida);
			setSaldo(totalSaldo);
    }

    const handleSave =(dados)=>{
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setCloseCard(true);
        setGridUpdate(!gridUpdate)
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    const onDelete=(index)=>{
				const data = dadosFin;
				data.splice(index, 1)
				
				setDadosFin(data);
        
				setGridUpdate(!gridUpdate);
        localStorage.setItem('Financeiro',JSON.stringify(data));
    }

    return(
        <Container>
            <Resumo 
              receita={receita} 
							saldo={saldo} 
							despesa={despesa} 
							darkChange={darkChange} 
							setDarkChange={setDarkChange}/>
            <Entradas 
							handleSave={handleSave}
							darkChange={darkChange}/>
            <Grid 
                setCloseCard={setCloseCard}
                closeCard={closeCard}
                dadosFin={dadosFin} 
                onDelete={onDelete} 
								darkChange={darkChange}/>
        </Container>
    )
}

export default Faturamento;