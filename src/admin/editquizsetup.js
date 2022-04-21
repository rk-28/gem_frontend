import '../App.js';
import './css/styles.css';
import './js/scripts.js';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from 'react-select';

const config = require('../config.js');

function Dashbord() {
    const navigate = useNavigate();

    const [std_id, setStd_id] = useState("");
    const [template_id, setTempleate_id] = useState("");
    const [stage_id, setStage_id] = useState("");
    const [duration, setDuration] = useState("");

    const [default_template_id, setDefaultTempleate_id] = useState("");

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [LevelItems, setItemslevel] = useState([]);
    const [items, setItems] = useState([]);
    const [levels, setLevel] = useState([]);
    const [Templates, setTemplate] = useState([]);

    function addSelectedProducts(event) {


        const selectedOptions = event.map(o => o.value)

        console.log(selectedOptions)
        setTempleate_id(selectedOptions)
    }

    const params = useParams();

    let Email = localStorage.getItem('email');
    let data = localStorage.getItem('Secure');
    useEffect(() => {
        if (data == null) {
            console.log("data", data)
            // alert('unauthenticated')
            navigate('/')
        }
        else {
            //alert('Login suess')
            navigate('/editquizsetup/' + params.id)
        }

    }, [])




    useEffect(() => {
        fetch(config.APP_BASE_URL + "/quizset/" + params.id)

            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItemslevel(result);

                    setTempleate_id(result[0].template_ids)

                    if (result[0].template_ids) {

                        setDefaultTempleate_id(result[0].template_ids.split(','))
                    }




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


    function temp() {
        navigate('/dashboard');
    }

    function questions() {
        //navigate('/questions')
        navigate('/selectquiz')
    }

    /* function templete()
    {
        navigate('/addtempleate')
    } */
    function designtemp() {
        navigate('/tempdesign')
    }

    function viewquestion() {
        navigate('/questions')
    }

    function viewtemplates() {
        navigate('/viewtemplate')
    }

    function setquiz() {
        navigate('/setquiz')
    }
    function levelcompletion() {
        navigate('/completion')
    }
    function logout() {
        alert("Are you sure you want to log out?")
        navigate('/')
        localStorage.removeItem('Secure');
        localStorage.clear();
    }


    function back() {
        navigate('/setquiz')
    }

    /////function text box populate////
    function save(e) {
        e.preventDefault();
        fetch(config.APP_BASE_URL + "/quizset/update/" + params.id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                std_id: std_id,
                stage_id: stage_id,
                template_id: template_id,
                duration: duration
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("data", responseData);
                if (responseData === '200') {
                    alert("data saved");
                    navigate('/setquiz')
                }
                else {
                    alert("not saved data");
                }
            })

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
                                <a class="nav-link" onClick={temp} href="">
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                                <a class="nav-link collapsed active" onClick={setquiz} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Quiz blocks
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>

                                {/*  <a class="nav-link collapsed "  onClick={ questions } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Gems Forms
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a> */}
                                <a class="nav-link collapsed" onClick={viewquestion} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Questions
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>


                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" onClick={viewtemplates} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Templates
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>


                                <a class="nav-link collapsed" onClick={levelcompletion} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
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
                            <h4 class="mt-4"> Gems Quiz Block Setup</h4>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                            <br></br>
                            <form>
                                <>
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="std_id" autocomplete="std_id" onChange={(e) => setStd_id(e.target.value)}>
                                                    {LevelItems.map(levelitem => (
                                                        <option value={levelitem.std_id} selected="1">{levelitem.Std} </option>
                                                    ))}
                                                    {items.map(item => (
                                                        <>

                                                            <option value={item.id} >{item.Std}</option></>
                                                    ))}
                                                </select>
                                                <label for="inputPassword">Grade</label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="duration" onChange={(e) => setDuration(e.target.value)}>
                                                    {LevelItems.map(levelitem => (
                                                        <option value={levelitem.time_duration_in_min} selected="1">{levelitem.time_duration_in_min} min </option>
                                                    ))}
                                                    <option value="1" >1 min</option>
                                                    <option value="3">3 min </option>
                                                    <option value="5">5 min</option>
                                                    <option value="10">10 min</option>
                                                    <option value="15">15 min</option>
                                                    <option value="20">20 min</option>


                                                </select>
                                                <label for="inputPassword">Select Time Duration</label>
                                            </div>
                                        </div>
                                  

                                    </div>
                                    
                                    <div class="row mb-3">



                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <Select name="form-field-name"
                                                    // value={default_template_id}
                                                    isMulti
                                                    options={Templates}
                                                    onChange={(event) => addSelectedProducts(event)} />


                                            </div>
                                        </div>




                                        {/* <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <select class="form-control" id="template_id" autocomplete="template_id" onChange={(e) => setTempleate_id(e.target.value)}>
                                                {LevelItems.map(levelitem => (   
                                            <option value={levelitem.template_id} selected="1">{levelitem.template_title} </option>
                                            ))}
                                                   {Templates.map(Template => (
                                                            <>
                                                            <option value={Template.id}>{Template.template_title}</option></>
                                                            ))}

                                                </select>
                                                <label for="inputPassword">Select Template</label>
                                            </div>
                                        </div> */}


                                    
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <div class="mt-4 mb-0">
                                                    <div class="d-grid"><a class="btn btn-primary btn-block" onClick={save} href="">Save </a> </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating mb-3 mb-md-0">
                                                <div class="mt-4 mb-0">
                                                    <div class="d-grid"><a class="btn btn-danger btn-block" onClick={back} href="">Back </a> </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div></>
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
