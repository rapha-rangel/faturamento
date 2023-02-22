import { Table, Th, Td, Span} from "./style";
import Pagination from "./Pagination";

const Grid = ({dadosFin, onDelete, page, setPage, totalPage})=>{
    return(
    <>
        <Pagination 
            page={page} 
            setPage={setPage}
            totalPage={totalPage}
            />
        <Table>
            <thead>
                <tr>
                    <Th width={40}>Descrição</Th>
                    <Th width={40}>Valor</Th>
                    <Th width={10} alignCenter>Tipo</Th>
                    <Th width={10}></Th>
                </tr>
            </thead>
            <tbody>
                {dadosFin?.map((dadosFin, index)=>(
                <tr key={index}>
                <Td>{dadosFin.descricao}</Td>
                <Td>R${Math.abs(dadosFin.valor).toFixed(2)}</Td>
                <Td alignCenter color>
                    {dadosFin.tipo === 0?(
                        <Span color="green">+</Span>
                    ): (
                        <Span color="red">-</Span>
                    )
                }
                </Td>
                <Td alignCenter onClick={()=>onDelete(index)}>X</Td>
                </tr>
                ))}
            </tbody>
        </Table>
    </>
    )
}

export default Grid;