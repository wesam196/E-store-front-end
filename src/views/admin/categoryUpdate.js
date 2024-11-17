import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";




const CategoryUpdate = () => {

    const { id } = useParams();
    const [category,setCategory] = useState("");
    const [info, setInfo] = useState("");

    useEffect(()=>{
        axiosClient.get("/categoryShow/" + id)
        .then(({ data  }) => {
         
          
          setCategory(data.category);
          
          
        })
        .catch(error => {
            // Handle error (optional)
            console.error("There was an error fetching the data:", error);
        });
      },[])

      const submit = (ev) => {
        ev.preventDefault();

        //updateCategory/{id}
        const formData = new FormData();
        formData.append("category", category);
        
        

    

    axiosClient.post("/updateCategory/"+id, formData)
        .then(({ data }) => {
           // setInfo(data);
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
      }

    return ( <div>
        <h1>category update</h1>

        <form onSubmit={submit} encType="multipart/form-data">
       
            <label htmlFor="category">Category</label>
            <input 
                type="text"
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
            />
                <br /><br />
            <input type="submit" />
        </form>

    </div> );
}
 
export default CategoryUpdate;