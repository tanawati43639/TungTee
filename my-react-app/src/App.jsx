import { useState } from 'react';
import './App.css';
import ReserveStepOne from './components/ReserveStepOne';
import ReserveStepTwo from './components/ReserveStepTwo';
import ReserveStepThree from './components/ReserveStepThree';
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
            <Route path="*" element={ <Home /> }/>
            <Route path="/restaurants">
                <Route path=":storeName/step1" element={ <ReserveStepOne /> }/>
                <Route path=":storeName/step2" element={ <ReserveStepTwo /> }/>
                <Route path=":storeName/step3" element={ <ReserveStepThree /> }/>
                <Route path=":storeName/summary" element={ <ReserveStepSummary /> }/>
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App;