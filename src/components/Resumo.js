import {ResumoFinanceiro} from "./style";
import ResumoItens from "./ResumoItens";

const Resumo = ({receita, saldo, despesa})=>{
    return(
    <ResumoFinanceiro>
            <ResumoItens valor={receita} titulo="RECEITA" color="#15803d"/>
            <ResumoItens valor={saldo} titulo="SALDO"/>
            <ResumoItens  valor={despesa} titulo="DESPESA"  color="#b91c1c"/>
    </ResumoFinanceiro>
    )
}

export default Resumo;