import "./favourites.css";
import Products from "../products/favproducts";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

function Favourites() {
  const [org, setOrg] = useState("skjdh");
  const [product, setProduct] = useState("skjdh");
  const [portfolio, setPortfolio] = useState("skjdh");
  const { data, show, handleShow } = useStateContext();
  const [showProducts, setShowProducts] = useState(false);

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
          <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
            <label for="form-field-level3name" class="elementor-field-label">
              Select Organization
            </label>
            <div class="elementor-field elementor-select-wrapper ">
              <select
                name="form_fields[level3name]"
                id="form-field-level3name"
                class="elementor-field-textual elementor-size-sm"
                style={{ width: 270, marginTop: 2 }}
                onChange={(e) => setOrg(e.target.value)}
              >
                {/* <option>select organization</option> */}

                {Array.from(
                  new Set(
                    data
                      ?.filter((datum) => !datum?.portfolio)
                      .map((datum) => datum.org_name)
                  )
                ).map((org_name, index) => (
                  <option value={`${org_name}`} key={index}>
                    {org_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div class="elementor-form-fields-wrapper elementor-labels-above">
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">
                Select Product
              </label>
              <div class="elementor-field elementor-select-wrapper ">
                <select
                  onChange={(e) => setProduct(e.target.value)}
                  style={{ width: 350, marginTop: 2 }}
                  name="products"
                  id="products-select"
                  class="elementor-field-textual elementor-size-sm"
                >
                  {/* <option value="Product 01">{products[0].name}</option> */}

                  {Array.from(
                    new Set(
                      data
                        ?.filter((datum) => !datum?.portfolio)
                        .map((datum) => datum.product)
                    )
                  ).map((product, index) => (
                    <option value={`${product}`} key={index}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">
                Select Portfolio
              </label>
              <div class="elementor-field elementor-select-wrapper ">
                <select
                  onChange={(e) => setPortfolio(e.target.value)}
                  style={{ width: 270, marginTop: 2 }}
                  name="form_fields[level3name]"
                  id="form-field-level3name"
                  class="elementor-field-textual elementor-size-sm"
                >
                  {Array.from(
                    new Set(
                      data
                        ?.filter((datum) => (datum?.org_name === org))
                        .map((datum) => datum.portfolio_name)
                    )
                  ).map((portfolio_name, index) => (
                    <option value={`${portfolio_name}`} key={index}>
                      {portfolio_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="image">
              <label
                for="form-field-field_a91fc81"
                class="elementor-field-label"
              >
                Upload Image
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
            marginBottom: 10,
            marginLeft: 5,
            left: 0,
            top:80,
            position:'relative'
          }}
          onClick={() => handleShow(!show)}
        />
      </div>
    </div>
  );
}

export default Favourites;
