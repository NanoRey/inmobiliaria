import React, {useContext } from "react";
import { Col } from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"

function BorrarFiltros(props){

    //const {totalState:{arrayInmuebles,filters}}=useContext(ContextFilter);
        //Esto es lo mismo que: const totalState=useContext(ContextFilter); const {arrayInmuebles}=totalState
    const {setTotalState}=useContext(ContextFilter);
    const {totalState}=useContext(ContextFilter);

    return(<>
            <Col xs="12" className="mb-3 ">
                <button onClick={()=>setTotalState({...totalState, filters:{...totalState.filters, [props.value]:""} })} type="button" className="btn btn-danger mt-1 p-2 text-center">Delete X </button>
            </Col>
        </>)
}

export default BorrarFiltros;