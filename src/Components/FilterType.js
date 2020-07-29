import React, { useState, useContext } from "react";
import {Col} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"

function FilterType(){

    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    //desestructurando para ficilitar a lectura del codigo
    
    const State=useContext(ContextFilter);
        const {totalState}=State;
        const {filters}=totalState

        const {filterFunctions}=State;
            const {filterType}=filterFunctions;

    return(<>
        <Col xs="3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Tipo Habitacion
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>filterType("Oficina")}>Oficina</DropdownItem>
                    <DropdownItem onClick={()=>filterType("Condominio horizontal")}>Condominio horizontal</DropdownItem>
                    <DropdownItem onClick={()=>filterType("Terreno")}>Terreno</DropdownItem>
                    <DropdownItem onClick={()=>filterType("Departamento")}>Departamento</DropdownItem>
                    <DropdownItem onClick={()=>filterType("Casa")}>Casa</DropdownItem>
                </DropdownMenu>
            </Dropdown> 
                <p type="button" className="btn btn-primary mt-2 p-2">Filtro: <span className="badge badge-light p-2">{filters.type}</span></p>
        </Col>
    </>)    
}

export default FilterType;