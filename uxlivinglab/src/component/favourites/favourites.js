import "./favourites.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import SendFavourites from "../../API/SendFavourites";
import RemoveFavorites from "../../API/RemoveFavorites";
import FetchFavourites from "../../API/FetchFavourites";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import ImageModal from "./ImageModal";

function Favourites() {
  const {
    data,
    show,
    handleShow,
    userInfo,
    setFavProducts,
    favProducts,
    setResStatus,
  } = useStateContext();
  const [showProducts, setShowProducts] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [inputData, setInputData] = useState({
    orgName: "",
    productName: "",
    portfolio: "",
    username: "",
    action: "add",
    image: "",
  });

  useEffect(() => {
    async function getFavorites() {
      try {
        const response = await FetchFavourites();
        setFavProducts(
          response.data.filter(
            (res) =>
              (res.username === userInfo?.username) & (res.action === true)
          )
        );
        setResStatus(response.status);
      } catch (e) {
        console.log(e);
      }
    }

    userInfo?.username && getFavorites();
  }, [userInfo?.username, setFavProducts, setResStatus]);

  const ProductOption = () => {
    const productes = [
      ...new Map(data?.map((item) => [item["portfolio_name"], item])).values(),
    ].filter((datum) => datum?.org_name === inputData.orgName);
    const productTitle = productes.map((o) => o.product);
    const filteredProduct = productes.filter(
      ({ product }, index) => !productTitle.includes(product, index + 1)
    );
    return (
      <select
        onChange={(e) =>
          setInputData({
            ...inputData,
            productName: e.target.value,
            portfolio: "",
          })
        }
        style={{ width: 270, marginTop: 2 }}
        name="form_fields[level3name]"
        id="form-field-level3name"
        className="elementor-field-textual elementor-size-sm"
        value={inputData.productName}
      >
        <option value="">Select...</option>
        {filteredProduct.map((pro, index) => (
          <option key={index} value={pro.product}>
            {pro.product}
          </option>
        ))}
      </select>
    );
  };

  const PortfolioOption = () => {
    const productes = [
      ...new Map(data?.map((item) => [item["portfolio_name"], item])).values(),
    ]?.filter(
      (datum) =>
        (datum?.org_name === inputData.orgName) &
        (datum?.product === inputData.productName)
    );
    return (
      <select
        onChange={(e) =>
          setInputData({ ...inputData, portfolio: e.target.value })
        }
        style={{ width: 270, marginTop: 2 }}
        name="form_fields[level3name]"
        id="form-field-level3name"
        className="elementor-field-textual elementor-size-sm"
        value={inputData.portfolio}
      >
        <option value="">Select...</option>
        {productes.map((dat, index) => (
          <option
            style={{ height: 40 }}
            key={index}
            value={dat?.portfolio_name}
            id="portfolio"
          >
            {dat?.portfolio_name}
          </option>
        ))}
      </select>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.action === "add") {
      try {
        const response = await SendFavourites(inputData, userInfo?.username);
        setFavProducts([...favProducts, response.data]);
      } catch (e) {
        console.log("e", e.message);
      }
    } else {
      try {
        const fav = favProducts.filter(
          (pro) =>
            pro.username === userInfo.username &&
            pro.orgName === inputData.orgName &&
            pro.productName === inputData.productName &&
            pro.portfolio === inputData.portfolio
        )[0];
        const response = await RemoveFavorites(fav);
        if (response.status === 204)
          setFavProducts(
            favProducts.filter((favprod) => !(favprod.id === fav.id))
          );
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      {
        <ImageModal
          open={open}
          handleClose={() => setOpen(false)}
          setInputData={setInputData}
          inputData={inputData}
          username={userInfo?.username}
        />
      }
      <div className="item">
        <div className="{ props.text }">
          <button className="logout" style={{ width: 270, marginLeft: 14 }}>
            <i className="button-text" style={{ fontSize: 20 }}>
              Favourites
            </i>
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 25,
          alignItems: "center",
        }}
      >
        {!showProducts ? (
          <FiPlusSquare
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowProducts(!showProducts)}
          />
        ) : (
          <FiMinusSquare
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowProducts(!showProducts)}
            color={"green"}
          />
        )}
        <h4 style={{ marginLeft: 10 }}>Add Your Favourites</h4>
      </div>

      {showProducts && (
        <div className="all">
          <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
            <label
              htmlFor="form-field-level3name"
              className="elementor-field-label"
            >
              Select Workspace
            </label>
            <div className="elementor-field elementor-select-wrapper ">
              <select
                name="form_fields[level3name]"
                id="form-field-level3name"
                className="elementor-field-textual elementor-size-sm"
                style={{ width: 270, marginTop: 2 }}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    orgName: e.target.value,
                    productName: "",
                    portfolio: "",
                  })
                }
              >
                <option>Select...</option>

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

          <div className="elementor-form-fields-wrapper elementor-labels-above">
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label
                htmlFor="form-field-level3name"
                className="elementor-field-label"
              >
                Select Product
              </label>
              <div className="elementor-field elementor-select-wrapper ">
                <ProductOption />
              </div>
            </div>
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label
                htmlFor="form-field-level3name"
                className="elementor-field-label"
              >
                Select Portfolio
              </label>
              <div className="elementor-field elementor-select-wrapper ">
                <PortfolioOption />
              </div>
            </div>
            <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label
                htmlFor="form-field-level3name"
                className="elementor-field-label"
              >
                Choose Action
              </label>
              <div className="elementor-field elementor-select-wrapper ">
                <select
                  onChange={(e) => {
                    setInputData({ ...inputData, action: e.target.value });
                    e.target.value === "add"
                      ? setShowImageUpload(true)
                      : setShowImageUpload(false);
                  }}
                  style={{ width: 270, marginTop: 2 }}
                  name="form_fields[level3name]"
                  id="form-field-level3name"
                  className="elementor-field-textual elementor-size-sm"
                >
                  <option>Select...</option>
                  <option value={"add"}>Add</option>
                  <option value={"remove"}>Remove</option>
                </select>
              </div>
            </div>
            {showImageUpload && (
              <div className="image">
                <label
                  htmlFor="form-field-field_a91fc81"
                  className="elementor-field-label"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  style={{ marginTop: 7 }}
                  name="form_fields[field_a91fc81]"
                  id="form-field-field_a91fc81"
                  className="elementor-field elementor-size-sm  elementor-upload-field"
                  onChange={(e) =>
                    setInputData({ ...inputData, image: e.target.files[0] })
                  }
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <button
                    style={{ width: 120, marginRight: 10 }}
                    onClick={handleOpen}
                  >
                    Choose Image
                  </button>
                  {typeof inputData.image === String && (
                    <span>Image Chosen</span>
                  )}
                </div>
              </div>
            )}

            <div className="button-div">
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
                className="elementor-field-textual bt"
                onClick={(e) => handleSubmit(e)}
                disabled={
                  inputData.orgName &&
                  inputData.productName &&
                  inputData.portfolio &&
                  inputData.action
                    ? false
                    : true
                }
              >
                {inputData.action === "add"
                  ? "Save Favourites"
                  : "Remove Favourites"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Favorites />
      <div
        style={{ width: "100%", marginTop: favProducts.length > 0 ? 320 : 330 }}
      >
        <RxCross2
          size={22}
          color="white"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginLeft: 5,
            cursor: "pointer",
          }}
          onClick={() => handleShow(!show)}
        />
      </div>
    </div>
  );
}

export default Favourites;
