import { useStateContext } from "../../contexts/ContextProvider";
import styles from "./styles.module.css";
import LoadingSpinner from "../spinner/spinner";
import { useEffect, useState } from "react";
import RemoveFavorites from "../../API/RemoveFavorites";
import { useEventCallback } from "@mui/material";

const Favorites = () => {
  const { favProducts, sessionId, userInfo, resStatus, setFavProducts, inputData } = useStateContext();

  const handleRemove = async (data,event) => {
    event.stopPropagation(); 
    try {
        const fav = favProducts.filter(
          (pro) =>
            pro.username === userInfo.username &&
            pro.orgName === data.orgName &&
            pro.productName === data.productName &&
            pro.portfolio === data.portfolio &&
            pro.image === data.image
        )[0];
        const response = await RemoveFavorites(fav);
        if (response.status === 204)
          setFavProducts(
            favProducts.filter((favprod) => !(favprod.id === fav.id))
          );
      } catch (e) {
        console.log(e);
      }
    
  };


  const Images = ({data}) => {

    const handleRedirect = (product) => {
      const orgName = product.orgName;
      const productName = product.productName;
      const portfolio = product.portfolio;
      window.open(
        `https://100093.pythonanywhere.com/exportfolio?session_id=${sessionId}&org=${orgName}&product=${productName}&portfolio=${portfolio}&username=${userInfo?.username}`
      );
    };
  
    const [isOnImage, setIsOnImage] = useState(false);
    const [contextMenu, setContextMenu]  = useState(false);

    const setToFalse = () => {
      setContextMenu(false);
      setIsOnImage(false);
    }
    const handleContextMenu =(event)=>{
      // event.stopPropagation();

      event.preventDefault();
      console.log("Right clicked");
      setIsOnImage(false);
      setContextMenu(!contextMenu);
  
    }
  
    return (
      <div
      style={{
        backgroundImage: data.image
          ? `url(https://100092.pythonanywhere.com${data.image})`
          : `url(${data.image_url})`,
      }}
      className={styles.item}
      data-order="1"

      //Context menu handles the right clicks
      onContextMenu={handleContextMenu}
      onClick={() => handleRedirect(data)}
      onMouseLeave={() => setToFalse()}
      onMouseOver={() => setIsOnImage(true)}
    >

    {contextMenu?
        <div>
        
          <div onClick={(event) => handleRemove(data,event)}  className={styles.subText} onMouseOver={() => setIsOnImage(false)}>

            <h2  style={{fontWeight:23}}>REMOVE</h2>
          </div>
        </div>
      :null}

    {isOnImage?
      <div>
        <div className={styles.popup}>
          <p>USERNAME: {data.username}</p>
          <p>WORKSPACE: {data.orgName}</p>
          <p>PRODUCT: {data.productName}</p>
          <p>PORTFOLIO: {data.portfolio}</p>
        </div>
      </div>
    
    :null}

    

    </div>
    );

  }


  return (
    <div className={styles.container}>
      {favProducts.length === 0 && resStatus !== 200 && (
        <div style={{ marginLeft: 150, marginTop: 100 }}>
          <LoadingSpinner />
        </div>
      )}
      {favProducts?.map((product, index) => (
        <Images data={product} key={index}/>
      ))}
    </div>
);
};

export default Favorites;
