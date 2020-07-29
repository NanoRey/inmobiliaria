import React, {  useEffect, useContext } from "react"
import { Col } from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"
import ContextArrayFiltered from "../Context/ContextArrayFilteres";

function InmueblesGrid(){
    
    const state=useContext(ContextFilter);
        const {totalState}=state;
            const {arrayInmuebles,filters}=totalState;
    
    const {filterFunctions}=state;

    async function catchApiInmuebles(){
        const fetchInmuebles=await fetch("https://hub-inmobiliaria.netlify.app/inmuebles.json");
        const result=await fetchInmuebles.json();
        filterFunctions.actualizedArrayInmuebles(result);
    }

    useEffect(()=>{
        catchApiInmuebles();
    },[filters])

    //const {setArrayFiltered}=useContext(ContextArrayFiltered);

    const applyFilter = (arrayInmuebles, filters) => {
        const checkRooms =
          filters.room === "" || parseInt(filters.room) === arrayInmuebles.room_amount;
        const checkBath =
          filters.bath === "" ||
          parseInt(filters.bath) === arrayInmuebles.bathroom_amount;
        const checkPark =
          filters.parking === "" ||
          parseInt(filters.parking) === arrayInmuebles.parking_lot_amount;
        const checkType =
          filters.type === "" || filters.type === arrayInmuebles.type.name;
          //setArrayFiltered(checkRooms && checkBath && checkPark && checkType)
        return checkRooms && checkBath && checkPark && checkType;
      };

      return (<>
        {arrayInmuebles 
            ? (arrayInmuebles
              .filter((arrayInmuebles) => applyFilter(arrayInmuebles, filters))
              .map((value,index) => (
                <Col xs="4" className="p-2" key={index}>
                        <div className="card-colums">
                            <div className="card">
                                <img className="card-img-top" src={value.photos} alt="CardImage"/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.publication_title}</h5>
                                    <p className="card-text">{value.description.toLowerCase()}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Tipo:   {value.type.name}</small><br></br>
                                    <small className="text-muted">Nº Baños:  {value.bathroom_amount}</small><br></br>
                                    <small className="text-muted">Nº Hab:  {value.room_amount}</small><br></br>
                                    <small className="text-muted">Nº Parking:  {value.parking_lot_amount}</small><br></br>
                                </div>
                            </div>
                        </div>
                    </Col>
              )))

            : 
            (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)
        }
        </>);
}

export default InmueblesGrid;