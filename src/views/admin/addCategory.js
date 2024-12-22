import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { Link } from "react-router-dom";
import Navigation from "../../Components/navigation";


const AddCategory = () => {
   
    const [info, setInfo] = useState([]);
    const [info2, setInfo2] = useState(null);


    const [category, setCategory] = useState("");
    const [newCategory , setnewCategory] = useState([]);
   
    const submit = (ev) => {
        ev.preventDefault();

        const formData = new FormData();
        formData.append("category", category);
       


        axiosClient.post("/addcategory", formData)
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


    useEffect(() => {
        // Send the category data to the API
        axiosClient.get("/categoryShow")
            .then(({ data }) => {
                setInfo(data);
            })
            .catch(error => {
                // Handle error (optional)
                console.error("There was an error fetching the data:", error);
            });
    
           
    
          }, [info]);


          const del = (id) => {
            axiosClient.post('/deleteCategory/'+ id)
            .then(({ data2 }) => {
              setCategory(data2);
            })
            .catch(error => {
                // Handle error (optional)
                console.error("There was an error fetching the data:", error);
            });
      
          }





          



    return (  

      
        <div>
          <Navigation/>
          add category page


        {info.length > 0 ? (
          <div className="container">
            <div className="row">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Category</th>
                    <th>Update</th>
                    <th>Delete</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {info.map((item) => (
                    <tr key={item.id}>
                      
                      <td>{item.id}</td>
                      <td>
                        
                        <h6>{item.category}</h6>
                      </td>
                        

                      <td> 
                      <Link to={`/categoryUpdate/${item.id}`} className="btn btn-primary">
                         Update
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
                        
                        <label htmlFor="category">category</label>
                        <input type="category"  name="catcategoryeegory"  value={category} id="category" onChange={(e)=> setCategory(e.target.value)}/>
                        <br />
                        
                        <input type="submit"  />

                    </form>
    </div>        



    );
}
 
export default AddCategory;