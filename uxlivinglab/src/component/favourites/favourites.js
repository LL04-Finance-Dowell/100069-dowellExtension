import "./favourites.css";
// import Products from "../products/favproducts";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import SendFavourites from "../../API/SendFavourites";
import RemoveFavorites from "../../API/RemoveFavorites";
import FetchFavourites from "../../API/FetchFavourites";

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";

function Favourites() {
  const { data, show, handleShow, userInfo, setFavProducts, favProducts, setResStatus } =
    useStateContext();
  const [showProducts, setShowProducts] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(true);
  const [inputData, setInputData] = useState({
    orgName: "",
    productName: "",
    portfolio: "",
    username: "",
    action: "add",
    image: "",
  });

  const [showModal, setShowModal] = useState(true)

  // useEffect(() => {
  //   async function getFavorites() {
  //     try {
  //       const response = await FetchFavourites()
  //       setFavProducts(
  //         response.data.filter(
  //           (res) =>
  //             (res.username === userInfo?.username) & (res.action === true)
  //         )
  //       );
  //       setResStatus(response.status)
        
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   userInfo?.username && getFavorites();
  // }, [userInfo?.username, setFavProducts, setResStatus]);

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

  const handleImageChange = (e) => {
    let newData = { ...inputData };
    newData["image"] = e.target.files[0];
    setInputData(newData);
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
      <Modal open={showModal} style={{overflow: "scroll", marginTop: 10}}>
        
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // overflow: "scroll",
  display: "block",
  p: 4,}}>
      <Typography style={{marginTop: 20}}>Choose Images</Typography>
          <ImageList className="images" sx={{ width: 300, height: 400, marginRight: 100 }} cols={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{cursor: "pointer"}}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={(e) => {e.preventDefault(); setShowModal(false)}}
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Box>
      </Modal>
      {/* <Modal open={true}> */}
      {/* <Box> */}
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
      {/* </Box> */}
      {/* </Modal> */}
    </div>
    // <div>
    //   <div className="item">
    //     <div className="{ props.text }">
    //       <button className="logout" style={{ width: 270, marginLeft: 14 }}>
    //         <i className="button-text" style={{ fontSize: 20 }}>
    //           Favourites
    //         </i>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="columns">
    //     <span
    //       className="elementor-button"
    //       onClick={() => setShowProducts(!showProducts)}
    //     >
    //       <i aria-hidden="true" className="fas fa-bars new"></i>
    //     </span>
    //   </div>

    //   {showProducts && (
    //     <div className="all">
    //       <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
    //         <label
    //           htmlFor="form-field-level3name"
    //           className="elementor-field-label"
    //         >
    //           Select Organization
    //         </label>
    //         <div className="elementor-field elementor-select-wrapper ">
    //           <select
    //             name="form_fields[level3name]"
    //             id="form-field-level3name"
    //             className="elementor-field-textual elementor-size-sm"
    //             style={{ width: 270, marginTop: 2 }}
    //             onChange={(e) =>
    //               setInputData({
    //                 ...inputData,
    //                 orgName: e.target.value,
    //                 productName: "",
    //                 portfolio: "",
    //               })
    //             }
    //           >
    //             <option>Select...</option>

    //             {Array.from(
    //               new Set(
    //                 data
    //                   ?.filter((datum) => !datum?.portfolio)
    //                   .map((datum) => datum.org_name)
    //               )
    //             ).map((org_name, index) => (
    //               <option value={`${org_name}`} key={index}>
    //                 {org_name}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>

    //       <div className="elementor-form-fields-wrapper elementor-labels-above">
    //         <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
    //           <label
    //             htmlFor="form-field-level3name"
    //             className="elementor-field-label"
    //           >
    //             Select Product
    //           </label>
    //           <div className="elementor-field elementor-select-wrapper ">
    //             <ProductOption />
    //           </div>
    //         </div>
    //         <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
    //           <label
    //             htmlFor="form-field-level3name"
    //             className="elementor-field-label"
    //           >
    //             Select Portfolio
    //           </label>
    //           <div className="elementor-field elementor-select-wrapper ">
    //             <PortfolioOption />
    //           </div>
    //         </div>
    //         <div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
    //           <label
    //             htmlFor="form-field-level3name"
    //             className="elementor-field-label"
    //           >
    //             Choose Action
    //           </label>
    //           <div className="elementor-field elementor-select-wrapper ">
    //             <select
    //               onChange={(e) => {
    //                 setInputData({ ...inputData, action: e.target.value });
    //                 e.target.value === "add"
    //                   ? setShowImageUpload(true)
    //                   : setShowImageUpload(false);
    //               }}
    //               style={{ width: 270, marginTop: 2 }}
    //               name="form_fields[level3name]"
    //               id="form-field-level3name"
    //               className="elementor-field-textual elementor-size-sm"
    //             >
    //               <option>Select...</option>
    //               <option value={"add"}>Add</option>
    //               <option value={"remove"}>Remove</option>
    //             </select>
    //           </div>
    //         </div>
    //         {showImageUpload && (
    //           <div className="image">
    //             <label
    //               htmlFor="form-field-field_a91fc81"
    //               className="elementor-field-label"
    //             >
    //               Upload Image
    //             </label>
    //             <button onClick={showImages} type="button" style={{marginTop: 10, width: 100, height: 20}}> click me</button>
    //             {/* <input,
    //               type="file"
    //               style={{ marginTop: 7 }}
    //               name="form_fields[field_a91fc81]"
    //               id="form-field-field_a91fc81"
    //               className="elementor-field elementor-size-sm  elementor-upload-field"
    //               onChange={(e) => handleImageChange(e)}
    //             /> */}
    //           </div>
    //         )}

    //         <div className="button-div">
    //           <button
    //             type="submit"
    //             style={{
    //               width: 270,
    //               cursor: "pointer",
    //               fontSize: 15,
    //               height: "13px",
    //               borderWidth: "1px",
    //               marginBottom: 80,
    //               color: "#ffffff",
    //             }}
    //             className="elementor-field-textual bt"
    //             onClick={(e) => handleSubmit(e)}
    //             disabled={
    //               inputData.orgName &&
    //               inputData.productName &&
    //               inputData.portfolio &&
    //               inputData.action
    //                 ? false
    //                 : true
    //             }
    //           >
    //             {inputData.action === "add"
    //               ? "Save Favourites"
    //               : "Remove Favourites"}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   <Favorites showProducts={showProducts} />
    //   <div style={{ width: "100%", marginTop: 180 }}>
    //     <RxCross2
    //       size={22}
    //       color="white"
    //       style={{
    //         backgroundColor: "red",
    //         borderRadius: 20,
    //         marginLeft: 5,
    //         cursor: "pointer",
    //       }}
    //       onClick={() => handleShow(!show)}
    //     />
    //   </div>
    // </div>
  );
}

export default Favourites;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
