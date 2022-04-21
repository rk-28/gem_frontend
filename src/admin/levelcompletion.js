import '../App.js';
import './css/styles.css';
import './js/scripts.js';
import { useNavigate } from "react-router-dom";
import { Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { TextInput, StyleSheet } from 'react-native';
import { MDBDataTable } from "mdbreact";

import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { MenuItem } from '@material-ui/core';
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const config = require('../config.js');

function Dashbord(props) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [resetData, reSetItems] = useState([]);
    const [firstname,setFirstname] = useState()
    const [dataid, setDataid] = useState([]);
    let Email =  localStorage.getItem('email');
    let data =  localStorage.getItem('Secure');
    let [itemdata, setData] = useState([]);
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };


      const handleFilterInput = async (e) => {
        let data = e.target;
        if (data.value) {
          const filtered = resetData.filter(d => d.std_id == data.value);
          setItems(filtered);
        } else {       
            setItems([...items]);
        }
        setSelectedValue(data.value);
    };
  
    const [selectedValue , setSelectedValue ] = useState('');

  

useEffect(() => {
 if(data == null )
 {
    console.log("data",data)
   // alert('unauthenticated')
    navigate('/')   
 }
 else {
    //alert('Login suess')
    navigate('/completion')
 }
    
  }, [])   

  




/* const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
 */

    const [asd, setId] = useState("");
    useEffect(() => {
        fetch(config.APP_BASE_URL + "/levelcompletion")
      
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                    reSetItems(result.data); 
                    
                    
                },
             
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    useEffect( () => {            
        fetch(config.APP_BASE_URL + "/questions/fetch/grades")
        .then(res => res.json())
        .then(
          (result) => {            
            setDropdownOptions(result);              
          },                
          (error) => {
            setError(error);
          }
        )
      }, [])


    const dataman = {
        columns: [
          {
            label: "Full Name",
            field: "fullname",
            sort: "asc",
            width: 150  
          },
          {
            label: "Grade",
            field: "Std",
            sort: "asc",
            width: 270
          },
          {
            label: "Level",
            field: "stage_id",
            sort: "asc",
            width: 200
          },
          {
            label: "Level Status",
            field: "level_com_status",
            sort: "asc",
            width: 100
          }
          
        ],
        rows:items
    };
    

    function temp() {
        navigate('/dashboard');
    }
    function questions() {
        navigate('/selectquiz')
    }
    function temp1() {
        navigate('/questions')
    }
    function designtemp() {
        navigate('/tempdesign')
    }

    function viewquestion() {
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
function temedesign()
{
    navigate('/tempdesign')
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
                                <a class="nav-link collapsed" onClick={ setquiz } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                          Quiz blocks
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                               {/*  <a class="nav-link collapsed " onClick={questions} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                    Gems Forms
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a> */}

                                <a class="nav-link collapsed " onClick={temp1} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
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
                                <a class="nav-link collapsed " onClick={ viewtemplates } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                             Templates
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                 
                                <a class="nav-link collapsed active" onClick={ levelcompletion } href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
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
                                    <i class="fas fa-table me-1 ">Quiz Block Completion</i>
                                </div>


                                <div class="card-body">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                            
{/*   <MDBDataTable striped bordered hover data={dataman} />
 */} 

<MaterialTable border="2px"
    icons={tableIcons}
      title="Quiz Block Completion"
      columns={[

         { title: 'Full Name', field: 'fullname'}, 
        { title: 'Grade', field: 'Std', filterComponent: props => {
            return (
              <FormControlLabel
                control={
                  <Select name ='Std'
                 onChange={handleFilterInput} value={selectedValue} >
  
                  {dropdownOptions && dropdownOptions.map(menu_option => <MenuItem
                    key={menu_option.id}
                    value={menu_option.id}>{menu_option.Std}</MenuItem>)}
  
                    </Select>
                }
              />
            );
          } },
        { title: 'Quiz Block', field: 'quiz_block_id' },
        { title: 'Quiz Mode', field: 'quiz_mode' },
        { title: 'Template', field: 'template_title' },
        { title: 'Total questions', field: 'total_questions' },
        { title: 'Wrong answered questions', field: 'total_wrong_questions' },
        { title: 'Score', field: 'percentage' },
        { title: 'Status', field: 'level_com_status' },
       
        
      ]}
      data={items}        
      options={{
        filtering: true
      }}
    />

                                            </div>

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
