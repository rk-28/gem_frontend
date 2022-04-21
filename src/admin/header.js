import '../App.js';
import './css/styles.css';
import './js/scripts.js';
import './header.js'
import { useNavigate  } from "react-router-dom";
import  { useEffect } from "react";

function Dashbord(props) {
const navigate = useNavigate();

let data =  localStorage.getItem('Secure');
let Email =  localStorage.getItem('email');
useEffect(() => {
 if(data == null )
 {
    console.log("data",data)
   // alert('unauthenticated')
    navigate('/')   
 }
 else {
    //alert('Login suess')
    navigate('/dashboard')
 }
    
  }, [])   


   
  return (
      
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Gems-Quiz</title>
    <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
    <link href="css/styles.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
</head>
  );
}

export default Dashbord;
