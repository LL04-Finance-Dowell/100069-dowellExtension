import "./favourites.css";
import Products from "../products/favproducts";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

function Favourites() {
  const { show, handleShow } = useStateContext();
  const [showProducts, setShowProducts] = useState(false);

  const[products,setProducts] = useState(
    [
      
      {id:1, 'name':"Workflow AI"},
      {id:2, 'name':"Will QR Code"},
      {id:3, 'name':"Customer Support Centre"},
      {id:4, 'name':"UX Live"},
      {id:5, 'name':"Permutation Calculator"},
      {id:6, 'name':"Sales Agent"},
      {id:7, 'name':"Live Dashboard"},
      {id:8, 'name':"Team Management"},
      {id:9, 'name':"Living Lab Monitoring"},
      {id:10, 'name':"Socialmedia Automation"},
      {id:11, 'name':"Scales"},
      {id:12, 'name':"Logo Scan"},
      {id:13, 'name':"Living Lab Chat"},
      {id:14, 'name':"Living Lab Admin"},
      {id:15, 'name':"Legal Zard"},
      {id:16, 'name':"Living Lab Maps"},
      {id:17, 'name':"Digital Queue"},
      {id:18, 'name':"Customer Experience"},
      {id:19, 'name':"Secure Repositories"},
      {id:20, 'name':"Secure Data"}
    ]
  );
  const handleChange = event => {
    console.log(event.target.id);
  };

  return (
    <div>
      <div className="item">
        <div className="{ props.text }">
          <button className="logout" style={{ width: 270, marginLeft: 14 }}>
            <i className="button-text" style={{ fontSize: 20 }}>
              Favourites
            </i>
          </button>
        </div>
      </div>
      <div className="columns">
        <span
          class="elementor-button"
          onClick={() => setShowProducts(!showProducts)}
        >
          <i aria-hidden="true" className="fas fa-bars new"></i>
        </span>
      </div>

      {showProducts && (
        <div className="all">
          <div class="elementor-form-fields-wrapper elementor-labels-above">
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">
                Select Product
              </label>
              <div class="elementor-field elementor-select-wrapper ">
                <select
                  onChange={handleChange}
                  style={{ width: 350, marginTop: 2 }}
                  name="products"
                  id="products-select"
                  class="elementor-field-textual elementor-size-sm"
                >

                  {/* <option value="Product 01">Product 01</option> */}
                  
                  {products.map((product) => {
                    console.log(product.name);
                    <option value={product.id}>{product.name}</option>
                  })}


                </select>
              </div>
            </div>
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">
                Select Portfolio
              </label>
              <div class="elementor-field elementor-select-wrapper ">
                <select
                  style={{ width: 270, marginTop: 2 }}
                  name="form_fields[level3name]"
                  id="form-field-level3name"
                  class="elementor-field-textual elementor-size-sm"
                >
                  <option value="Product 01">Product 01</option>
                  <option value="Product 02">Product 02</option>
                  <option value="Product 03">Product 03</option>
                </select>
              </div>
            </div>
            <div class="image">
              <label
                for="form-field-field_a91fc81"
                class="elementor-field-label"
              >
                Upload Image{" "}
              </label>
              <input
                type="file"
                style={{ marginTop: 7 }}
                name="form_fields[field_a91fc81]"
                id="form-field-field_a91fc81"
                class="elementor-field elementor-size-sm  elementor-upload-field"
              />
            </div>

            <div class="button-div">
              <button
                type="submit"
                style={{
                  width: 270,
                  cursor: "pointer",
                  fontSize: 15,
                  height: "13px",
                  borderWidth: "1px",
                  backgroundColor: "#7a7a7a",
                  marginBottom: 80,
                  color: "#ffffff",
                }}
                class="elementor-field-textual bt"
              >
                Save / Remove Favourites
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <Products />
      </div>

      <div style={{ display: "flex" }}>
        <RxCross2
          size={22}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginTop: 30,
            marginBottom: 3,
            marginLeft: 5,
            left: 0,
          }}
          onClick={() => handleShow(!show)}
        />
      </div>
    </div>
  );
}

export default Favourites;
