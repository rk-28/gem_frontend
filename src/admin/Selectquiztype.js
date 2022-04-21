import '../App.js';
import './css/styles.css';
import './js/scripts.js';
import { useNavigate  } from "react-router-dom";
import { Text, View } from 'react-native';
import  { useEffect, useState } from "react";
import { TextInput,StyleSheet } from 'react-native';
function Dashbord() {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const [form, setForms] = useState("");
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
    navigate('/selectquiz')
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
    /* function temp1()
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

//// forms page

function math()
{
    
    if (form ==null || form==""){  
        alert("selection can't be blank");  
        return false;  
      }
      else if(form =='Grammatical terms' || form=='Grammatical terms')
      {
          navigate('/addtempleate')
      }
      else if(form =='Numbers' || form=='Numbers')
      {
          navigate('/addtempleate')
      }
      else if(form =='Math' || form =='Math')
      {
          navigate('/mathques')
      }
}



///
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
                        <a class="nav-link collapsed active" onClick={ questions } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Gems Forms
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <a class="nav-link collapsed" onClick={ viewquestion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                             Questions
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> 
                       {/*  <div class="sb-sidenav-menu-heading">Interface</div>
                        <a class="nav-link collapsed" onClick={ temp1 }  href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
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
                    <br></br>
                <div class="container-fluid px-4">
                <div class="card mb-4">
                        <div class="card-header bg-primary ">
                            <i class="fas fa-table me-1 ">Select Quiz Grade </i>
                        </div>
                        
                        
                        <div class="card-body">
                        <div class="card">
  <div class="card-body">
  <center>Gems Quiz Form Selections </center><br></br>
  <center><div class="row mb-4">
                                                <div class="col-md-4">
                                                    <div class="form-floating mb-4 mb-md-0">
                                                        <select class="form-control" id="form" onChange={(e)=>setForms(e.target.value)} autocomplete = "std_id" >
                                                        <option >Select Quiz Type sub</option>
                                                            <option value="Math">Math</option>
                                                            <option value="Grammatical terms">Grammatical terms</option>
                                                            <option value="Numbers">Numbers</option>    
                                                          
                                                            </select>
                                                        <label for="inputPassword">Sub</label>
                                                    </div>
                                            
                                                </div>
                                                {/* <div class="col-md-4">
                                                    <div class="form-floating mb-4 mb-md-0">
                                                    <select class="form-control" id="std_id"  autocomplete = "std_id" >
                                                            <option>Select Grade</option>
                                                            <option value="1">Prek or lower </option>
                                                            <option value="2" >K</option>
                                                            <option value="3">1st</option>   
                                                            <option value="4">2nd</option>   
                                                            <option value="5">3rd</option>    
                                                            <option value="6">4th</option>   
                                                            <option value="7">5th</option>   
                                                            <option value="8">6th</option>   
                                                            <option value="9">7th or higher </option>   
                                                          
                                                            </select>
                                                        <label for="inputPassword">Grade</label>
                                                    </div>
                                            
                                                </div> */}
                                                <div class="col-md-4">
                                                    <div class="form-floating mb-4 mb-md-0">
                                                    
                                                <a class="btn btn-primary btn-block"  onClick={math} href="">GO </a>
                                           
                                                    </div>
                                            
                                                </div>
                                                </div></center>
  </div>
</div>
<br></br>


                        </div>
                    </div>
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
