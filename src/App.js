import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//------------------------------------------------IMPORTS VIEWS-----------------------------------------------
import Home from "./admin/Admintest";
import Dashbord from "./admin/Dashbord";
import Addtemplete from "./admin/Addtemplete";
import Addquestion from "./admin/Addquestion";
import Addtempledesign from "./admin/addtemplatedesign"
import Selectquiztype from "./admin/Selectquiztype"
import MathQuiz from "./admin/Mathquiz"
import Editques from "./admin/editquiz"
import ViewTemplate from "./admin/template"
import Setquiz from "./admin/setquiz"
import MathEdit from "./admin/editmathques"
import EditTemplate from "./admin/editTemplate"
import AddQuizsetup from "./admin/addquizsetup"
import EditQuizsetup from "./admin/editquizsetup"
import Completelevel from "./admin/levelcompletion"
import Header from "./admin/header"
import Password from "./admin/Password"

//------------------------------------------------CLASS APP-----------------------------------------------
class App extends React.Component {
  
  /* constructor(props) {
    
    super(props);
  }  */
 
 
  

  render() {

    return (
      
      <Router>
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashbord/>} />
          <Route exact path="/addtempleate" element={<Addtemplete/>} />
          <Route exact path="/questions" element={<Addquestion/>} />
          <Route exact path="/tempdesign" element={<Addtempledesign/>} />
          <Route exact path="/selectquiz" element={<Selectquiztype/>} />
          <Route exact path="/mathques" element={<MathQuiz/>} />
          <Route exact path="/editmathques/:id" element={<MathEdit/>} />
          <Route exact path="/editques/:id" element={<Editques/>} />
          <Route exact path="/viewtemplate" element={<ViewTemplate/>} />
          <Route exact path="/setquiz" element={<Setquiz/>} />
          <Route exact path="/edittemplate/:id" element={<EditTemplate/>} />
          <Route exact path="/addquizsetup" element={<AddQuizsetup/>} />
          <Route exact path="/editquizsetup/:id" element={<EditQuizsetup/>} />
          <Route exact path="/completion" element={<Completelevel/>} />
          <Route exact path="/completion" element={<Completelevel/>} />
          <Route exact path="/header" element={<Header/>} />
          <Route exact path="/password" element={<Password/>} />
        
        </Routes>
      </Router>
      
    );
  }
}


export default App;