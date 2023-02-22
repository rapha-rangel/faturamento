import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import InputForm from "./InputForm";
import Resumo from "./Resumo";
import { Container} from "./style";

const Faturamento = ()=>{
    const [dadosFin, setDadosFin] =useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []);
    const [receita, setReceita] =useState(0);
    const [saldo, setSaldo] =useState(0);
    const [despesa, setDespesa] =useState(0);
    const [showPageTab, setShowPageTab] =useState([]);
    const [page, setPage] =useState(0);
    const [totalPage, setTotalPage] =useState(1);
    const [gridUpdate, setGridUpdate] =useState(false);
    
    useEffect(()=>{
        calculation(dadosFin);
        changePage(dadosFin);
    },[gridUpdate, page]);

    const changePage = (dadosFin) =>{
        const countPage = dadosFin.filter((itens)=>itens.valor).map((dadosFin) =>dadosFin)
        if(countPage.length <=4){
            setTotalPage(0)
            } else{
                setTotalPage(Math.trunc(countPage.length/4))
        }
        setShowPageTab(dadosFin.slice(4*page,(4+(4*page))));
    }

    const calculation = (dadosFin) =>{
        const totalEntrada = dadosFin.filter((itens)=>itens.tipo === 0).map((entrada) =>Number(entrada.valor));
        const totalSaida = dadosFin.filter((itens)=>itens.tipo === 1).map((saida) =>Number(saida.valor));
        const entrada = totalEntrada.reduce((acc, valor)=>acc+valor, 0).toFixed(2);
        const saida = totalSaida.reduce((acc, valor)=>acc+valor,0).toFixed(2);
        const totalSaldo = (entrada-saida).toFixed(2);
        setReceita(entrada);
        setDespesa(saida);
        setSaldo(totalSaldo);
    }

    const handleSave =(dados)=>{
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setGridUpdate(!gridUpdate)
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    const onDelete=(index)=>{
        const data =dadosFin;
        data.splice(index,1);
        setDadosFin(data);
        setGridUpdate(!gridUpdate);
        localStorage.setItem('Financeiro',JSON.stringify(data));
    }

    return(
        <Container>
            <Resumo receita={receita} saldo={saldo} despesa={despesa}/>
            <InputForm handleSave={handleSave}/>
            <Grid 
                dadosFin={showPageTab} 
                onDelete={onDelete} 
                page={page} 
                setPage={setPage}
                totalPage={totalPage}/>
        </Container>
    )
}

export default Faturamento;