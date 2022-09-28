import React from 'react'
import UseState from './Components/UseState'
import UseEffect from './Components/UseEffect'
import Effect from './Components/Effect';
import UseReducer from './Components/UseReducer';
import UseReducers from './Components/UseReducers'
import UseMemo from './Components/UseMemo';
import './App.css'
const App = () => {
  return (
    <>

    <div>
    <h1>React Interview Day-3</h1>
    </div>
    <UseState />
    <UseEffect />
    {/* <Effect /> */}
    <UseReducer />
    {/* <UseReducers /> */}
    <UseMemo />
    <h2>Question-5</h2>
    <h3>Difference between Axios and fetch ?</h3>
    <h5>Axios</h5>
    <p>Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. 
    <br/>It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
    <br/> It also has the ability to cancel requests.</p>
    <h5>Fetch</h5>
    <p>The Fetch API provides a fetch() method defined on the window object. 
    <br/>It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. 
    <br/>This method returns a Promise that can be used to retrieve the response of the request. </p>
    </>
  )
}

export default App;