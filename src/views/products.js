import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";

const Products = () => {
    const [info, setInfo] = useState(""); // Initialize with default value

    // Fetch data when the component mounts
    useEffect(() => {
        // Send the category data to the API
        axiosClient.get("/productShow")
            .then(({ data }) => {
                setInfo(data);
            })
            .catch(error => {
                // Handle error (optional)
                console.error("There was an error fetching the data:", error);
            });
    }, [info]); // Empty dependency array to ensure it runs only once on mount

    return (
        <div>
            <h1>here products will show</h1>
            
            
            {info.length > 0 ? (
  <div className="container">
    <div className="row prodict row-content">
      {info.map((item) => (
        <div className="card col-lg-4" key={item.id}>
          {    console.log(item.image)       }
          {console.log(item)}
          <img
            src={`http://192.168.100.38:8000/product/${item.image}`}
            
            className="card-img-top product-image"
            alt={item.title}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.price} SR</p>
            <Link to={`/product_details/${item.id}`} className="btn details-btn">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <p>Loading...</p>
)}


            



        </div>
    );
}
 
export default Products;