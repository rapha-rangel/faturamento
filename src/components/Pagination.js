import { PaginationContainer } from "./style"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Pagination =({page, setPage, totalPage})=>{
    const setaLeft =<IconContext.Provider value={{ color: "#fff", size: "1.5em"}}>
  <div>
    <BsFillCaretLeftFill />
  </div>
</IconContext.Provider>;
    const setaRight= <IconContext.Provider value={{ color: "#fff",size: "1.5em"}}>
  <div>
    <BsFillCaretRightFill />
  </div>
</IconContext.Provider>;
    
    const handleButtonPaginationBack = ()=>{
        if(page > 0){
        setPage(page-1)
        }
    }

    const handleButtonPaginationForward = ()=>{
        if(page < totalPage){
            setPage(page+1)
        }
    }
    
    return (
        <PaginationContainer>
            <button onClick={handleButtonPaginationBack}>{setaLeft}</button>
            <span> {page+1} </span> <span>de</span> <span> {totalPage+1}</span>
            <button plus onClick={handleButtonPaginationForward}>{setaRight}</button>
        </PaginationContainer>
    )
}

export default Pagination;