import '../App.js';
import './css/styles.css';
import './js/scripts.js';

import { useNavigate  } from "react-router-dom";
//import  * as Speech  from 'expo-speech';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//import { Text, View } from 'react-native';
import  { useEffect, useState } from "react";
//import { TextInput,StyleSheet } from 'react-native';

import Select from 'react-select';

const config = require('../config.js');


function Dashbord() {
    const navigate = useNavigate();

 

  
    const [std_id, setStd_id] = useState("");
    const [template_id, setTempleate_id] = useState("");
    const [stage_id, setStage_id] = useState("");
    const [duration,setDuration] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [levels, setLevel] = useState([]);
    const [Templates, setTemplate] = useState([]);

    let Email =  localStorage.getItem('email');
    let data =  localStorage.getItem('Secure');
    useEffect(() => {
     if(data == null )
     {
        console.log("data",data)
       // alert('unauthenticated')
        navigate('/')   
     }
     else {
        //alert('Login suess')
        navigate('/addquizsetup')
     }
        
      }, [])   
    
    

    function temp()
    {
        navigate('/dashboard');
    }

    function questions()
    {
        //navigate('/questions')
    navigate('/selectquiz')
    }

    /* function templete()
    {
        navigate('/addtempleate')
    } */
    function designtemp()
    {
    navigate('/tempdesign')
    }

    function viewquestion()
    {
    navigate('/questions')
    } 

    function viewtemplates()
{
    navigate('/viewtemplate')
}

function setquiz()
{
    navigate('/setquiz')
}
function back()
{
    navigate('/setquiz')
}
function levelcompletion()
{
   navigate('/completion')
}
function levelcompletion()
{
   navigate('/completion')
}
useEffect(() => {
    fetch(config.APP_BASE_URL + "/dropdown/grade")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      fetch(config.APP_BASE_URL + "/dropdown/")
      .then(res => res.json())
      .then(
        (result1) => {
          setIsLoaded(true);
          setLevel(result1);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      fetch(config.APP_BASE_URL + "/dropdown/template")
      .then(res => res.json())
      .then(
        (result2) => {
          setIsLoaded(true);

          result2 = result2.map((item, index) => {
              item.value = item.id;
              item.label = item.template_title;

              delete item.id;
              delete item.template_title;
              return item;
           });

          setTemplate(result2);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [])   



function logout()
{
    alert("Are you sure you want to log out?")
    navigate('/')
    localStorage.removeItem('Secure');
    localStorage.clear();
}

function addSelectedProducts(event) {
 
   
    const selectedOptions = event.map(o => o.value)
  
    console.log(selectedOptions)
    setTempleate_id(selectedOptions)
  }
    /////function text box populate////
    function save(e)
    {
        e.preventDefault();

        console.log(template_id)
        if (std_id==null || std_id==""){  
            alert("Grade can't be blank");  
            return false;  
          }   else if(template_id == null|| template_id==""){  
                    // alert("Template can't be blank");   
                    // return false; 
                }else if(duration == null|| duration==""){  
                    alert("Time Duration can't be blank");   
                    return false; 
                 }
            
                //template_id: template_id,
                if (std_id  && duration ) { 
                     fetch(config.APP_BASE_URL + "/quizset", {
                       method: "POST",
                       headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({
                            template_id: template_id.toString(),
                            std_id: std_id,
                            duration:duration
                           })
                     })
                     .then((response) => response.json())
                     .then((responseData) => {
                      
                       if(responseData.status  == '200')
                       {
                        
                         alert("data saved");
                         navigate('/setquiz')
                       } 
                       else if(responseData.status=='401')
                       {
                        alert("Grade and Level all ready Exits");
                        window.location.reload()
                       }
                       else
                       {
                           alert("Question Not saved!")
                       }
                    
                     }) 
                 }  
                

    
}



    ///////code end////
  return (
      
    <body className="sb-nav-fixed">
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
        <a className="navbar-brand ps-3" href="/dashboard">Gems Quiz</a>
       
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
      
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              
                <button className="btn btn-dark" id="btnNavbarSearch" type="button">{Email}<i className="fas fa-search"></i></button>
            </div>
        </form>
      
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" onClick={logout} aria-expanded="false">Logout<i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" >Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading"></div>
                        <a className="nav-link"  onClick={ temp } href="">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <a className="nav-link collapsed active" onClick={ setquiz } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                          Quiz blocks
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>

                   
                        <a className="nav-link collapsed" onClick={ viewquestion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                             Questions
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a> 

                       
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div> 
                        <a className="nav-link collapsed" onClick={ viewtemplates } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                             Templates
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>

                      
                        <a className="nav-link collapsed" onClick={ levelcompletion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                            Quiz Block Completion 
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a> 
                       
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                   Gems Quiz
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h4 className="mt-4"> Setup Quiz Block</h4>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/setquiz">Quiz blocks</a></li>
                            <li className="breadcrumb-item active"></li>
                        </ol>
                       
                        
                            
                         <br></br>
                            <form>
                                            
                                            
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                              
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    
                                                        <select className="form-control"   id="std_id" autoComplete="std_id" onChange={(e) => setStd_id(e.target.value)}>
                                                        <option > Select Grade </option> 
                                                        {items.map(item => (
                                                            <>
                                            
                                                            <option value={item.id} >{item.Std}</option></>
                                                            ))}
                                                        </select><label htmlFor="inputPassword">Grade</label>
                                                      
                                                    </div>
                                                     
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <select className="form-control" id="duration" onChange={(e)=>setDuration(e.target.value)}>
                                                    <option > Select Time Duration</option> 
                                                            <option value="1">1 min</option>
                                                            <option value="3">3 min </option>
                                                            <option value="5">5 min</option>
                                                            <option value="10">10 min</option>   
                                                            <option value="15">15 min</option>  
                                                            <option value="20">20 min</option>  
                                                          
                                                          
                                                            </select>
                                                        <label htmlFor="inputPassword">Select Time Duration</label>
                                                    </div>
                                                </div>
                                         
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <Select name="form-field-name"
                                                            isMulti
                                                            options={Templates} 
                                                            onChange={(event) => addSelectedProducts(event)}/>
                                                    
                                                       
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-primary btn-block"  onClick={save} href="">Save </a> </div>
                                            
                                            </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-danger btn-block"  onClick={back} href="">Back </a> </div>
                                            
                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </form>
                        
<br></br>



                      
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; Gems Quiz 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossOrigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
    </body>
  );
}

export default Dashbord;
