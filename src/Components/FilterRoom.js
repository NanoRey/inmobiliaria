import React, { useState, useContext } from "react";
import {  Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"
import BorrarFiltros from "./BorrarFiltros"

function FilterRoom(){

    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    //desestructurando para ficilitar a lectura del codigo
    
    const State=useContext(ContextFilter);
        const {totalState}=State;
        const {filters}=totalState

        const {filterFunctions}=State;
            const {filterRoom}=filterFunctions;

    return(<>
        <Col xs="3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Tipo Habitacion
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>filterRoom("0")}>0</DropdownItem>
                    <DropdownItem onClick={()=>filterRoom("1")}>1</DropdownItem>
                    <DropdownItem onClick={()=>filterRoom("2 horizontal")}>2</DropdownItem>
                    <DropdownItem onClick={()=>filterRoom("3")}>3</DropdownItem>
                    <DropdownItem onClick={()=>filterRoom("4")}>4</DropdownItem>
                    <DropdownItem onClick={()=>filterRoom("5")}>5</DropdownItem>
                </DropdownMenu>
            </Dropdown> 
            <p type="button" className="btn btn-primary mt-2 p-2">Filtro:    <span className="badge badge-light p-2">{filters.room}</span></p>
            <BorrarFiltros value="room"/>
        </Col>

    </>)    
}

export default FilterRoom;