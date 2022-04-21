import '../App.js';
import './css/styles.css';
import './js/scripts.js';
import  { useEffect, useState } from "react";
import { useNavigate,useParams  } from "react-router-dom";
import queryString from 'query-string'; 
const config = require('../config.js');

function Dashbord() {
    const navigate = useNavigate();
    const [template_title, setTitle] = useState("");
    const [template_message, setMessage] = useState("");
    const [color_code, setCode] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [quiz_rule, setRule] = useState("");
    const [quiz_type, setType] = useState("");

    const params = useParams();
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
           navigate('/edittemplate/'+params.id)
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

    function templete()
    {
        navigate('/addtempleate')
    }
    function designtemp()
    {
    navigate('/tempdesign')
    }
    
function viewtemplates()
{
    navigate('/viewtemplate')
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
    navigate('/viewtemplate')
}
function levelcompletion()
{
   navigate('/completion')
}
function logout()
{
    alert("Are you sure you want to log out?")
    navigate('/')
    localStorage.removeItem('Secure');
    localStorage.clear();
}


useEffect(() => {
    fetch(config.APP_BASE_URL + "/template/"+params.id)
  
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
  }, [])   



    function savetemplate(e)
    {
        e.preventDefault();
                     fetch(config.APP_BASE_URL + "/template/"+params.id, {

                       method: "PUT",
                       headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({
                        template_title: template_title,
                        template_message: template_message,
                        color_code: color_code,
                        quiz_rule: quiz_rule,
                        quiz_type: quiz_type
                       })
                     })
                     .then((response) => response.json())
                     .then((responseData) => {                        
                         alert("Template saved")
                         navigate('/viewtemplate');
                     })
    }
    
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
                        <a class="nav-link collapsed" onClick={ setquiz } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                          Quiz blocks
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                      {/*   <a class="nav-link collapsed" onClick={ questions } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Gems Forms
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> */}
                        <a class="nav-link collapsed" onClick={ viewquestion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                             Questions
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> 

                       {/*  <div class="sb-sidenav-menu-heading">Interface</div>
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
                        <h4 class="mt-4"> Add Template</h4>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="/viewtemplate">Back</a></li>
                        </ol>                            
                         <br></br>
                            <form>
                            {items.map(item => (
                                            <><div class="row mb-3">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <input class="form-control" id="template_title" autocomplete="template_title" defaultValue ={item.template_title}  onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your Question" />
                                            <label for="inputFirstName">Enter Template Title</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input class="form-control" id="template_message" autocomplete="template_message" defaultValue ={item.template_message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Enter your Answer" />
                                            <label for="inputLastName">Enter Template Message</label>
                                        </div>
                                    </div>
                                </div><div class="row mb-3">

                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <input class="form-control" id="color_code" autocomplete="color_code" defaultValue ={item.color_code}   onChange={(e) => setCode(e.target.value)} type="color" placeholder="Enter your Quiz Level" />
                                                <label for="inputPasswordConfirm">Quiz Card color</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="quiz_rule" autocomplete="quiz_rule" defaultValue ={item.quiz_rule_id} onChange={(e) => setRule(e.target.value)}>
                                                    <>
                                                    <option value="" > Select Quiz Rule </option>
                                                        <option value="3" > 3 </option>
                                                        <option value="4" > 4 </option>
                                                        <option value="5" > 5 </option>
                                                        <option value="6" > 6 </option>
                                                        <option value="7" > 7 </option>
                                                        <option value="8" > 8 </option>
                                                        <option value="9" > 9 </option>
                                                        <option value="10" > 10 </option>
                                                        <option value="11" > 11 </option>
                                                        <option value="12" > 12 </option>
                                                        <option value="13" > 13 </option>
                                                    </>
                                                </select>
                                                <label for="inputPasswordConfirm">Select Question Rule</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <select class="form-control" id="quiz_type" autocomplete="quiz_type" defaultValue ={item.quiz_type} onChange={(e) => setType(e.target.value)}>
                                                <>
                                                    <option value="" > Select Quiz Type </option>
                                                    <option value="grammar" > Grammer </option>
                                                    <option value="math" > Math </option>
                                                    {/* <option value="shapes" > Shapes </option> */}
                                                    <option value="phonics" > Phonics </option>
                                                    <option value="clock" > Clock's </option>
                                                </>
                                            </select>
                                            <label for="quiz_type">Select Question Type</label>
                                        </div>
                                    </div>
                                </div>
                                    
                                    <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                    <div class="mt-4 mb-0">
                                                <div class="d-grid"><a class="btn btn-primary btn-block"  onClick={savetemplate} href="">Save </a> </div>
                                            
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
                                    
                                    
                                    </>
                                         ))}</form>
                        
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
