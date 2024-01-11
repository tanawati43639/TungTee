import { useState } from 'react';
import './App.css';
import ReserveList from './components/Reserve_List';
import ReserveStepOne from './components/ReserveStepOne';
import ReserveStepTwo from './components/ReserveStepTwo';
import ReserveStepThree from './components/ReserveStepThree';
import ReserveStepFour from './components/ReserveStepFour'
import ReserveStepSummary from './components/ReserveStepSummary'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
      
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/login" element={ <Login /> }/>
            <Route path="/registration" element={ <Registration /> }/>
            <Route path="/list" element={ <ReserveList /> }/>
            <Route path="*" element={ <Home /> }/>
            <Route path="/restaurants">
                <Route path=":storeName/step1" element={ <ReserveStepOne /> }/>
                <Route path=":storeName/step2" element={ <ReserveStepTwo /> }/>
                <Route path=":storeName/step3" element={ <ReserveStepThree /> }/>
                <Route path=":storeName/step4" element={ <ReserveStepFour /> }/>
                <Route path=":storeName/summary" element={ <ReserveStepSummary /> }/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;