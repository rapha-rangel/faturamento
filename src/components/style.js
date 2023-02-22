import styled from "styled-components";

// Faturamento Style
export const Container = styled.div`
    margin: 2% auto;
    width: 90vw;
    height: 90vh;
    border-radius: 20px;
    background-color: #374151;

`

// Resumo Style
export const ResumoFinanceiro = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 90%; 
    height: 25%;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px;
    border-bottom: 2px solid white;
    background-color: #374151;
`

// Itens Style
export const Itens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5em;
    color: #fff;
    padding:15px;
    width: 18%;
    height: 15vh;
    background-color: #374151;
    transition: all 0.3s ease-in;
        & div{
            display: flex;
            flex-direction: row;
            border:none;
        }
        & h2{
            background-color: #374151;
        }
        & span{
            font-size: 16px;
            font-weight:600;
            background-color: #374151;
            padding: 5px;
                &:last-child{
                color: ${props =>props.color};
                }
        }
        &:hover{
            transform: scale(1.2);
        }
    `

// InputForm Style
export const InputFormContainer = styled.div`
    margin: 15px auto;
    padding: 10px;
    width: 90%;
    border-radius: 5px;
    border: 2px solid none;
    form{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        div{
            display: flex;
            flex-direction: column;
            gap:0.5em;
        }
    }
`
export const Input= styled.input`
    border: 1px solid #f2f3f4;
    border-radius: 5px;
    margin-right: 20px;
    align-items: center;
    padding: 10px;
    color: #171717;
    transition: all 0.5s ease;
    &:focus{
        border: 2px solid #fff;
        padding: 12px;
    }
    &::placeholder {
        font-weight: 600;
        opacity: 0.5;
        color: #171717;
    }
`
export const Button= styled.button`
    font-size: 18px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    font-weight: 600px;
    align-items: center;
    background: ${props=> props.entrada?"#34d399" : "#ef4444" };
    color: #fff;
    padding: 8px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background: ${props=> props.entrada?"#15803d" : "#b91c1c" };
    }
`
// Grid Style
export const Table = styled.table`
    width: 90%;
    color: #fff;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    max-width: 1120px;
    margin: auto;
`
export const Th = styled.th`
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
    text-align: ${props=> props.alignCenter ? "center": "start"};
    width:${props => props.width? props.width + "%": "auto"};
`
export const Td = styled.td`
    padding-top: 5px;    
    text-align: ${props=> props.alignCenter ? "center": "start"};
    word-break: break-all;
    &:last-child{
        cursor: pointer;
    }
`
export const Span = styled.span`
font-size: 26px;
font-weight: 600;
color: ${props=> props.color};
`
// Pagination Style
export const PaginationContainer = styled.div`
    width: 90%;
    display: flex;
    margin: auto;
    padding: 8px;
    justify-content: flex-end;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
        & button{
            padding-top: 5px;
            border: none;
            transition: all 0.3s ease;
            &:hover{
                cursor: pointer;
                scale: 1.3;
            }
        }
        & span{
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            margin: 3px; 
        }
`