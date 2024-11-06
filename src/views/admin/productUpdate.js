import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {

    const { id } = useParams();

    const [info, setInfo] = useState(""); // Initialize with default value
    const [info2, setInfo2] = useState([]); // Initialize with default value

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
          console.log("this is image first: "+ image )
          setCategory(data.category);
          
          
        })
        .catch(error => {
            // Handle error (optional)
            console.error("There was an error fetching the data:", error);
        });
      },[])
  

      useEffect(()=>{
        axiosClient.get("/categoryShow")
        .then(({ data  }) => {
          setInfo2(data );
        })
        .catch(error => {
            // Handle error (optional)
            console.error("There was an error fetching the data:", error);
        });
      },[]);


      const submit = (ev) => {
        ev.preventDefault();
       
        
        
        
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("discount", discount);
            if(typeof image === 'object'){
            formData.append("image", image);
            }
            
    
        

        axiosClient.post("/updateProduct/"+id, formData)
            .then(({ data }) => {
                setInfo(data);
            })
            .catch(err => {
                const response = err.response;
                if (response) {
                    if (response.status === 422) {
                        console.log(response.data.errors);
                    } else {
                        console.error('Error status:', response.status);
                        console.error('Error data:', response.data);
                    }
                } else {
                    console.error('Error message:', err.message);
                }
            });
    };





    return (  

        <div>
            <h1>here we can update our products</h1>
            

            <form onSubmit={submit} encType="multipart/form-data">
                
                <label htmlFor="title">Title</label>
                <input type="text"  name="title"  value={title} id="title" onChange={(e)=> setTitle(e.target.value)}/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text"  name="description"   value={description} id="description" onChange={(e)=> setDescription(e.target.value)}/>
                <br />
                
                
                <label htmlFor="category">Category</label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} >
                {info2 && info2.length > 0 ? (
        info2.map((item, index) => (
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
            src={`http://172.20.10.7:8000/product/${image}`}
            
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