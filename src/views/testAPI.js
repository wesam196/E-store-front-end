import { useState } from "react";
import axiosClient from "../axiosClient";

const TestAPI = () => {
    const [category, setCategory] = useState(); // Initialize with default value

    // Handle form submission
    const handleSubmit = (ev) => {
        ev.preventDefault(); // Prevent default form submission

        // Send the category data to the API
        axiosClient.post("/addcategory", { category })
            .then(response => {
                // Handle success (optional)
                console.log("Category added successfully:", response.data);
            })
            .catch(error => {
                // Handle error (optional)
                console.error("There was an error adding the category:", error);
            });
    };
//<input type="text" required  value={title} onChange={(e)=> setTitle(e.target.value)} />
    return (
        <div>
            <h1>this is test page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" required  name="category" value={category} id="category" onChange={(e)=> setCategory(e.target.value)}/>
            <button type="submit">Add Category</button>
        </form>


        <p>{category}</p>
        </div>
    );
};

export default TestAPI;
