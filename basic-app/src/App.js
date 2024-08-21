import { Fragment } from "react"
import Reducer from "./components/Hooks/Reducer"
import RefComponent from "./components/Hooks/Useref"
import HooksPage from "./components/Hooks/HooksPage"
// import Forms from "./components/Forms/Forms"
// import EffectComponent from "./components/EffectComponent/EffectComponent"
// import ContextComponent from "./components/ContextComponent/ContextComponent"
// import Add from "./components/Add/Add"
// import Greetings from "./components/Greetings/Greetings"
// import userInfo from './userInfo.json'
// import User from "./components/User/User"
// import HookPage from "./components/Hooks/HookPage"
// import Movie from "./components/Movie/Movie"
// import Resturant from "./components/Resturant/Resturant"

function App() {
  return (
    <Fragment>
      <HooksPage />
      {/* <Forms/>
      <hr />
      {/* <Add />
      <Greetings />
      <User info={userInfo}/> */}      
       {/* 
       <Movie />
       <hr />
       <Resturant /> */}
    </Fragment>  
  )
}

export default App