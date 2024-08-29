import { Fragment } from "react"
import Customhook from "./components/Hooks/CustomHook/Customhook"
import Test from "./Test"
import Forms from "./components/Forms/Forms"
import Add from "./components/Add/Add"
import Greetings from "./components/Greetings/Greetings"
import userInfo from './userInfo.json'
import User from "./components/User/User"
import Movie from "./components/Movie/Movie"
import Resturant from "./components/Resturant/Resturant"

function App() {

  return (
    <Fragment>
      <Customhook />
      <br />

       <Forms/>
      <hr />
      <Add />
      <Greetings />
      <User info={userInfo}/>    
       
       <Movie />
       <hr />
       <Resturant />
    </Fragment>  
  )
}

export default App