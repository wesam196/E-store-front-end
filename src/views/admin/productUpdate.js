import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {

    const { id } = useParams();

    const [info, setInfo] = useState(""); // Initialize with default value
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState([]);
    const [price,setPrice] = useState("");
    const [discount,setDiscount] = useState("");
    const [image,setImage] = useState(null);

    useEffect(()=>{
        axiosClient.get("/productShow/"+ id)
        .then(({ data  }) => {
          setTitle(data.title);
          setDescription(data.description);
          setPrice(data.price);
          setDiscount(data.discount);
          setImage(data.image);
          setCategory(data );
        })
        .catch(error => {
            // Handle error (optional)
            console.error("There was an error fetching the data:", error);
        });
      },[])
  

      useEffect(()=>{
        axiosClient.get("/categoryShow")
        .then(({ data  }) => {
          setCategory(data );
        })
        .catch(error => {
            // Handle error (optional)
            console.error("There was an error fetching the data:", error);
        });
      },[])

    return (  

        <div>
            <h1>here we can update our products</h1>
            

            <form  encType="multipart/form-data">
                
                <label htmlFor="title">Title</label>
                <input type="text"  name="title"  value={title} id="title" onChange={(e)=> setTitle(e.target.value)}/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text"  name="description"   value={description} id="description" onChange={(e)=> setDescription(e.target.value)}/>
                <br />
                
                
                <label htmlFor="category">Category</label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} >
                {info && info.length > 0 ? (
        info.map((item, index) => (
            <option key={index} value={item.category}>
                {item.category}
            </option>
        ))
    ) : (
        <option value="" disabled>
            No categories available
        </option>
    )}
                </select>
                
                
                <br />
                <label htmlFor="price">Price</label> 
                <input type="number"   name="price" value={price} id="price" onChange={(e)=> setPrice(e.target.value)}/>
                <br />
                <label htmlFor="discount">Discount</label>
                <input type="number"    name="discount" value={discount} id="discount" onChange={(e)=> setDiscount(e.target.value)}/>
                <br />
                <label htmlFor="image">Image</label>
                <img
            src={`http://192.168.0.184:8000/product/${image}`}
            
            className="card-img-top product-image"
            alt={"image"}
          />
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                         <br />   
                    <input type="submit"/>
                    
                </form>



        </div>
    );
}
 
export default ProductUpdate;