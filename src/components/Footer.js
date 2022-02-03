import logo from '../assets/abbas.jpeg';

import 'bootstrap/dist/css/bootstrap.css';



const Footer = (props) => {
 return (

<>
<div className="container   ">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col  mx-auto ">
    <div className="card h-100">
      <img src={logo}  className="card-img-top" alt="..." width ="400" height = "400"/>
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <p className="card-text">{props.title
        }</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

</div>
</div>

</>

    );
}


export default  Footer ;