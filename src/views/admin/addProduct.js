import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { useStateContext } from "../..//contexts/contextprovider";
import { Link } from "react-router-dom";





const AddProduct = () => {


    const [info, setInfo] = useState(""); // Initialize with default value
    const [info2, setInfo2] = useState([]); // Initialize with default value


    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [discount,setDiscount] = useState("");
    const [image,setImage] = useState(null);


    const submit = (ev) => {
        ev.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("image", image)

        //const payload =  {title, description, category, price, discount, image};
        
        axiosClient.post("/addProduct", formData)
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
    
           
    
          }, [info]);


    useEffect(()=>{
      axiosClient.get("/categoryShow")
      .then(({ data  }) => {
        setInfo2(data );
      })
      .catch(error => {
          // Handle error (optional)
          console.error("There was an error fetching the data:", error);
      });
    },[])


    const del = (id) => {
      axiosClient.post('/deleteProduct/'+ id)
      .then(({ data2 }) => {
        setCategory(data2);
      })
      .catch(error => {
          // Handle error (optional)
          console.error("There was an error fetching the data:", error);
      });

    }
    


    return (  
        <div>add product page


{info.length > 0 ? (
  <div className="container">
    <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Descrption</th>
            <th>Price</th>
            <th>Category</th>
            <th>Discount</th>
            <th>Update</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr key={item.id}>
              <td>
                
              <img
            src={`http://192.168.100.38:8000/product/${item.image}`}
            
            className="card-img-top product-image"
            alt={item.title}
          />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price} SR</td>
              <td>{item.category}</td>
              <td>{item.discount}</td>
              <td> 
                <Link to={`/productupdate/${item.id}`} className="btn btn-primary">
                  update
                </Link>
              </td>
              <td>
              <button className="btn btn-danger" onClick={()=>{
                del(item.id)
              }}>
                  Delete
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
) : (
  <p>Loading...</p>
)}




            <form onSubmit={submit} encType="multipart/form-data">
                
                <label htmlFor="title">Title</label>
                <input type="text"  name="title"  value={title} id="title" onChange={(e)=> setTitle(e.target.value)}/>
                <br />
                <label htmlFor="description">Description</label>
                <input type="text"  name="description"   value={description} id="description" onChange={(e)=> setDescription(e.target.value)}/>
                <br />
                
                
                <label htmlFor="category">Category</label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} >
                {info2.map((item) => (
                  
                    <option value={item.category} >{item.category}</option>
                ))}
                </select>
                
                
                <br />
                <label htmlFor="price">Price</label> 
                <input type="number"   name="price" value={price} id="price" onChange={(e)=> setPrice(e.target.value)}/>
                <br />
                <label htmlFor="discount">Discount</label>
                <input type="number"    name="discount" value={discount} id="discount" onChange={(e)=> setDiscount(e.target.value)}/>
                <br />
                <label htmlFor="image">Image</label>
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
 
export default AddProduct;