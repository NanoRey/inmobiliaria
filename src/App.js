import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import InmueblesGrid from './Components/InmueblesGrid';
import FilterBathroom from './Components/FilterBathroom';
import FilterType from "./Components/FilterType";
import ContextFilter from "./Context/ContextFilter"
import FilterRoom from './Components/FilterRoom';
import FilterParking from './Components/FilterParking';
import Results from "./Components/Results"
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import ErrorWeb from "./Components/ErrorWeb"

function App() {
  
  const changeStateBathrooms=(numBathroom)=>{
    console.log(numBathroom)
    setTotalState({
      ...totalState,
      filters:{...totalState.filters,bath: numBathroom}
    })
  }

  const changeStateType=(item)=>{
    console.log(item)
    setTotalState({
      ...totalState,
      filters:{...totalState.filters,type: item}
    })
  }
  const changeStateRoom=(item)=>{
    console.log(item)
    setTotalState({
      ...totalState,
      filters:{...totalState.filters,room: item}
    })
  }
  const changeStateParking=(item)=>{
    console.log(item)
    setTotalState({
      ...totalState,
      filters:{...totalState.filters,parking: item}
    })
  }

  const actualizedArrayInmuebles=(result)=>{
    setTotalState({
      ...totalState,
      arrayInmuebles:result
    })
  }

  const filterFunctions={
    filterBathroom:changeStateBathrooms,
    filterType: changeStateType,
    filterRoom: changeStateRoom,
    filterParking: changeStateParking,
    actualizedArrayInmuebles: actualizedArrayInmuebles,
  }

  const [totalState, setTotalState]=useState({
    arrayInmuebles:undefined,
    filters:{
      type:"",
      room:"",
      parking:"",
      bath:""
    },
  })

  //const[arrayFiltered,setArrayFiltered]=useState([])

  return (<>

  <header>
  <Col xs="12">
        <div class="card bg-dark text-white">
            <img src="https://lh3.googleusercontent.com/proxy/iyLE4PL6KSrNx3W0xgwtyTpJLKWZNydNOLIB_tFLOhw3bziEAl8xhy8QwHEbEiq970L5SbtqHMxBeknJw4AeUiJ-RFhOM-U5Pn6DwGL9wg6eTdZsi74qQLDlYkcB" height="500" width="500" class="card-img" alt="marvel logo"/>
            <div class="card-img-overlay">
                <h5 className="card-title text-warning">Bienvenido a esta Maravilla de web que me he marcado</h5>
            </div>
            
        </div>
        
    </Col>
  <Router>
      <Switch >
          
          <Route exact path ="/">
            <ContextFilter.Provider value={{totalState,setTotalState,filterFunctions}}>
              <Container>
                  <Row className="mt-5 mb-5 justify-content-between">
                    <Col>
                      <Row>
                        <FilterType/>
                        <FilterBathroom/>
                        <FilterRoom/>
                        <FilterParking/>
                        <Results/>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                      <InmueblesGrid/>
                  </Row>
              </Container>
            </ContextFilter.Provider>
          </Route>

          <Route path ="*">
            <ErrorWeb />
          </Route>
      </Switch>

        
    </Router>
  </header>
    
  </>);
}

export default App;
