import React, {useContext } from "react";
import { Col } from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"
import ContextArrayFiltered from "../Context/ContextArrayFilteres";

function Results(){

    const {totalState:{arrayInmuebles}}=useContext(ContextFilter);
    //const {arrayFiltered}=useContext(ContextArrayFiltered)

    return(<>
        {arrayInmuebles   //arrayFiltered
        ? 
        (<Col xs="12">
            <div className="alert alert-primary" role="alert">
                {arrayInmuebles.length}
            </div>
        </Col>)

        : 
        (<Col xs="12">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </Col>)
        }
            
    </>)    
}

export default Results;