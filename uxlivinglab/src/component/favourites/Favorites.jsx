import { useStateContext } from "../../contexts/ContextProvider";
import styles from "./styles.module.css";
import LoadingSpinner from "../spinner/spinner";
import { useEffect, useState } from "react";
import RemoveFavorites from "../../API/RemoveFavorites";
import { useEventCallback } from "@mui/material";

const Favorites = () => {
  const { favProducts, sessionId, userInfo, resStatus, setFavProducts, inputData } = useStateContext();

  const handleRemove = async (data) => {
    // e.stopPropagation; 
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
    
    const [contextMenu, setContextMenu]  = useState(false);
    const handleContextMenu =(event)=>{
      event.preventDefault();
      console.log("Right clicked");
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
      onClick={(e) => handleRedirect(data)}
      onMouseLeave={() => setContextMenu(false)}
    >

    {contextMenu?
        <div>
        
          <div onClick={() => handleRemove(data)} className={styles.subText}>
            <h2 style={{fontWeight:23}}>REMOVE</h2>
          </div>
        </div>
      :null}

    </div>
    );

  }

  const handleRedirect = (product,e) => {
    e.stopPropagation();
    window.open(
      `https://100093.pythonanywhere.com/exportfolio?session_id=${sessionId}&org=${product.orgName}&product=${product.productName}&portfolio=${product.portfolio}&username=${userInfo?.username}`
    );
  };

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
