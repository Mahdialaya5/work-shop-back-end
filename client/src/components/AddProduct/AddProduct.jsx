import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/ActionProduct";

function AddProduct() {
  const disptach = useDispatch();
  const name = useRef("");
  const description = useRef("");
  const price = useRef();
  const category=useRef('')
  const [img, setimg] = useState();
  const handlesubmit = (e) => {
  e.preventDefault()
    const data= new FormData()
    
    console.log(name);
    data.append("name",name.current.value)
    data.append("description",description.current.value)
    data.append('price',price.current.value)
    data.append('file',img)
    data.append('category',category.current.value)
   disptach(addProduct(data));
  };

  return (
    <form onSubmit={handlesubmit}>
      <label>name</label>
      <input ref={name} />
      <label>description</label>
      <input ref={description} />
      <label>price</label>
      <input type="number" ref={price} />
      <label>photo</label>
      <input type="file" onChange={(e) => setimg(e.target.files[0])} />
      <select ref={category} >
        <option value='pc'  >pc</option>
        <option value='mobile'  >m</option>
        <option  value='tablette'  >tablette</option>
      </select>
      <button type="submit"   >save</button>
    </form>
  );
}
/*name:{type:String},
description:{type:String},
price:{type:Number},
img:{type:String},

category:{type:String,enum:["pc","mobile","tablette"]},*/
export default AddProduct;
