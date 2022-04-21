import '../App.js';
import './css/styles.css';
import './js/scripts.js';

import { useNavigate,useParams  } from "react-router-dom";
import queryString from 'query-string'; 
import  { useEffect, useState } from "react";
const config = require('../config.js');

function Dashbord() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsdata, setItemsdata] = useState([]);
    const [levels, setLevel] = useState([]);
    const [Templates, setTemplate] = useState([]);
    const params = useParams();
    useEffect(() => {
       
        fetch(config.APP_BASE_URL + "/questions/"+params.id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
             
            },
        
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
          fetch(config.APP_BASE_URL + "/dropdown/grade")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItemsdata(result.result);
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
              setTemplate(result2);
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )

      }, [])   



      const [std_id, setStd_id] = useState("");
      const [stage_id, setStage_id] = useState("");
      const [templeate_id, setTempleate_id] = useState("");
      const [question, setQuestion_a] = useState("");
      const [question_b, setQuestion_b] = useState("");
      const [simpale, setOperator] = useState("");
      const [answer, setAns] = useState("");
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
          navigate('/editmathques/'+params.id)
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
    function setquiz()
{
    navigate('/setquiz')
}

function back()
{
    navigate('/questions')
}

function logout()
{
    alert("Are you sure you want to log out?")
    navigate('/')
    localStorage.removeItem('Secure');
    localStorage.clear();
}
function viewtemplates()
{
    navigate('/viewtemplate')
}
    /////function text box populate////

    function levelcompletion()
{
   navigate('/completion')
}
    function save(e)
    {
        e.preventDefault();
        
                
                        fetch(config.APP_BASE_URL + "/questions/update/"+params.id, {
                       method: "PUT",
                       headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({
                       
                        std_id: std_id,
                        stage_id: stage_id,
                        templeate_id: templeate_id,
                        question: question,
                        question_b: question_b,
                        simpale: simpale,
                        answer:answer 
                       })
                     })
                     .then((response) => response.json())
                     .then((responseData) => {
                       console.log("data",responseData);
                    
                       if(responseData  === '200')
                       {
                        
                         alert("data Updated")
                         window.location.reload()
                         
                       } 
                       else
                       {
                        alert("not Updated data");
                       }
                    
                     }) 
                 
                // }  
                

    
}



    ///////code end////
  return (
      
    <body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
        <a class="navbar-brand ps-3" href="/dashboard">Gems Quiz</a>
       
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
      
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
              
                <button class="btn btn-dark" id="btnNavbarSearch" type="button">{Email}<i class="fas fa-search"></i></button>
            </div>
        </form>
      
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" onClick={logout} aria-expanded="false">Logout<i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">Settings</a></li>
                    <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" >Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading"></div>
                        <a class="nav-link"  onClick={ temp } href="">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <a class="nav-link collapsed " onClick={ setquiz } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                          Quiz blocks
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                       {/*  <a class="nav-link collapsed "  onClick={ questions } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Gems Forms
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> */}
                        <a class="nav-link collapsed active " onClick={ viewquestion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                             Questions
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> 
                        {/* <div class="sb-sidenav-menu-heading">Interface</div>
                        <a class="nav-link collapsed" onClick={templete}   href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Add Questions
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> */}
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div> 
                        
                  
                        
                        <a class="nav-link collapsed" onClick={ viewtemplates } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                             Templates
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <a class="nav-link collapsed" onClick={ levelcompletion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Quiz Block Completion 
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> 
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                   Gems Quiz
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h4 class="mt-4"> Gems Quiz Questions</h4>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                            <li class="breadcrumb-item active"></li>
                        </ol>
                       
                        
                            
                         <br></br>
                            <form>
                            {items.map(item => (
                                       <><div class="row mb-3">
                                    <div class="col-md-3">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <input class="form-control" id="question" defaultValue ={item.question} onChange={(e) => setQuestion_a(e.target.value)} autocomplete="question_a" type="text" placeholder="Enter your Question" />
                                            <label for="inputFirstName">Enter your Question A</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-floating">
                                            <input class="form-control" id="simpale"  defaultValue ={item.simpale} onChange={(e) => setOperator(e.target.value)} autocomplete="question_operator" type="text" placeholder="Enter your Answer" />
                                            <label for="inputLastName">Enter your operator -,+,*</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-floating">
                                            <input class="form-control" id="question_b" defaultValue ={item.question_b} onChange={(e) => setQuestion_b(e.target.value)} autocomplete="question_b" type="text" placeholder="Enter your Answer" />
                                            <label for="inputLastName">Enter your Question B</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-floating">
                                            <input class="form-control" id="answer" autocomplete="answer" defaultValue ={item.answer} onChange={(e) => setAns(e.target.value)}  type="text" placeholder="Enter your Answer" />
                                            <label for="inputLastName"> your Answer is B</label>
                                        </div>
                                    </div>
                                </div></>
                                 ))}
                                <div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="std_id" autocomplete="std_id" onChange={(e) => setStd_id(e.target.value)}>
                                                {items.map(item => (   
                                            <option value={item.std_id} selected="1">{item.Std} </option>
                                            ))}
                                             {itemsdata.map(itemdata => (
                                                            <>
                                            
                                                            <option value={itemdata.id} >{itemdata.Std}</option></>
                                                            ))} 

                                                </select>
                                                <label for="inputPassword">Grade</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="operation" autocomplete="operation" >
                                                {items.map(item => (   
                                            <option value={item.operation} selected="1">{item.operation} </option>
                                            ))}
                                                  
                
                                                </select>
                                                <label for="inputPasswordConfirm">Quiz Type</label>
                                            </div>
                                        </div>
                                    </div><div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="stage_id" autocomplete="stage_id" onChange={(e) => setStage_id(e.target.value)}>
                                                {items.map(item => (   
                                            <option value={item.stage_id} selected="1">{item.stage} </option>
                                            ))}
                                                    {levels.map(level => (
                                                            <>
                                                            <option value={level.id}>{level.stage}</option></>
                                                            ))}
                                                </select>
                                                <label for="inputPassword">Quiz Level</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                            <select class="form-control" id="template_id">
                                            {items.map(item => (   
                                            <option value={item.template_id} selected="1">{item.template_title} </option>
                                            ))}

                                                            {Templates.map(Template => (
                                                            <>
                                                            <option value={Template.id}>{Template.template_title}</option></>
                                                            ))}

                                                </select>
                                                <label for="inputPassword">Quiz Template</label>
                                            </div>
                                        </div>
                                    </div>{/* <div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="template_id">
                                                    <option>Select Template</option>

                                                    <option value="1" selected="1">Math Dril</option>

                                                </select>
                                                <label for="inputPassword">Select Template</label>
                                            </div>
                                        </div>

                                    </div> */}<div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                    <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-primary btn-block"  onClick={save} href="">Save </a> </div>
                                            
                                            </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                    <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-danger btn-block"  onClick={back} href="">Back </a> </div>
                                            
                                            </div>
                                                    </div>
                                                </div>
                                            </div>      
                                       </form>
                        
<br></br>



                      
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Gems Quiz 2022</div>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
    </body>
  );
}

export default Dashbord;
