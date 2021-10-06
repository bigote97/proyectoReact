import {useParams} from "react-router-dom";

const ProductDetail = ({producto})=> {
    const {ID} = useParams();
    console.log(ID)
    return(
        <div>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
            <h2>productDetail</h2>
        </div>
    );
}

export default ProductDetail;