import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";

const TestAPI = () => {
    const [info, setInfo] = useState(""); // Initialize with default value

    // Fetch data when the component mounts
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
    }, [info]); // Empty dependency array to ensure it runs only once on mount

    return (
        <div>
            <h1>This is test page</h1>
            

            <ul>
                {info.length > 0 ? (
                    info.map((item) => (
                        <li key={item.id}>
                            <p>name: {item.category}</p>
                        </li>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </ul>



        </div>
    );
};

export default TestAPI;
