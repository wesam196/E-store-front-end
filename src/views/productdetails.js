import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const {id} = useParams();

    return (  
        <div>
            <h1>this is product {id} details</h1>



            <div className="col-md-6">
                <h2>this is image gallery on left side</h2>
                
            
            </div>



            <div className="col-md-6">
                <h2>title</h2>
                <h2>review</h2>
                <h2>price</h2>
                <h2>parameters</h2>
                <h2 className="col-md-9">add to cart</h2>
                <h2 className="col-md-3">favourite</h2>
            </div>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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

