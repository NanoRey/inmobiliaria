import React, { useState, useContext } from "react";
import {Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ContextFilter from "../Context/ContextFilter"

function FilterParking(){

    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    //desestructurando para ficilitar a lectura del codigo
    
    const State=useContext(ContextFilter);
        const {totalState}=State;
        const {filters}=totalState

        const {filterFunctions}=State;
            const {filterParking}=filterFunctions;


    return(<>
        <Col xs="3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Nº Parking
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>filterParking("1")}>1</DropdownItem>
                    <DropdownItem onClick={()=>filterParking("2")}>2</DropdownItem>
                    <DropdownItem onClick={()=>filterParking("3")}>3</DropdownItem>
                    <DropdownItem onClick={()=>filterParking("4")}>4</DropdownItem>
                    <DropdownItem onClick={()=>filterParking("5")}>5</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <p type="button" className="btn btn-primary mt-2 p-2">Dato metido:    <span className="badge badge-light p-2">{filters.parking}</span></p>
        </Col>
    </>)    
}

export default FilterParking;