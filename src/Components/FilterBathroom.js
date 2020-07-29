import React, { useState, useContext } from "react";
import { Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ContextFilter from "../Context/ContextFilter";

function FilterBathroom(){

    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const State=useContext(ContextFilter);
        const {totalState}=State;
        const {filters}=totalState

        const {filterFunctions}=State;
            const {filterBathroom}=filterFunctions;

    return(<>
            <Col xs="3">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                            Nº Baños
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={()=>filterBathroom(1)}>1</DropdownItem>
                        <DropdownItem onClick={()=>filterBathroom(2)}>2</DropdownItem>
                        <DropdownItem onClick={()=>filterBathroom(3)}>3</DropdownItem>
                        <DropdownItem onClick={()=>filterBathroom(4)}>4</DropdownItem>
                    </DropdownMenu>
                </Dropdown> 
                <p type="button" className="btn btn-primary mt-2 p-2">Dato metido:    <span className="badge badge-light p-2">{filters.bath}</span></p>
            </Col> 
    </>)    
}

export default FilterBathroom;