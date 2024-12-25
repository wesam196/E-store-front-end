import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";

const ProductDetails = () => {

    const {id} = useParams();
    const [info, setInfo] = useState(""); // Initialize with





    useEffect(() => {
        // Send the category data to the API
        axiosClient.get("/productShow/"+ id)
            .then(({ data }) => {
                setInfo(data);
            })
            .catch(error => {
                // Handle error (optional)
                console.error("There was an error fetching the data:", error);
            });
    
           
    
          }, [info]);





    return (  
        <div className="container">
            <h1>this is product {id} details</h1>


        <div className="row">
            <div className="col-md-6">
                <h2>this is image gallery on left side</h2>
                


                {info &&
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img 
                         src={`http://192.168.100.38:8000/product/${info.image}`}
                         className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img 
                         src={`http://192.168.100.38:8000/product/${info.image}`}
                         className="d-block w-100" alt="..."/>
                        </div>
                      
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

}
            </div>
               


            <div className="col-md-6">
                <h2>{info.title}</h2>
                <h2>review</h2>
            {  
            
            info.discount != 0 && 
            
            <h2 > before discount <s>{info.price}</s>
             <br />
              
              Now <t></t>
              {(info.price) - (info.discount)}
              
              </h2>
            
            
            } 
            
            { info.discount == 0 && 
                <h2>{info.price}</h2>
            }
                

                <h2>parameters</h2>
                <div className="row">
                    <Link to={"#"} className="btn btn-light col-md-9"> 
                        
                        Add to Cart 
                    <i className="fas fa-shopping-cart">
                        
                    </i>
                    
                     </Link>
                    
                    <Link to={"#"} className="btn btn-outline-danger col-md-3">
                        <i className="fa fa-heart"></i> 
                    </Link>
                
                </div>
            </div>
            </div>


            <br /><br /><br /><br /><br />
            <div className="col-md-8">
                <h2>details & review with filters</h2>
            </div>

            <div className="col-md-4">
                <h2>review stars show</h2>
            </div>


        </div>
    );
}
 
export default ProductDetails;

