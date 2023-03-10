import { useStateContext } from "../../contexts/ContextProvider";
import styles from "./styles.module.css";
import LoadingSpinner from "../spinner/spinner";

const Favorites = ({ showProducts }) => {
  const { favProducts, sessionId, userInfo, resStatus } = useStateContext();

  const handleRedirect = (product) => {
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
      { resStatus === 200 && favProducts.length === 0
        ? !showProducts && (
            <div style={{ width: "100%" }}>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/diagonal+diagonalarrowupleft+left+arrow+top+arrow+up+arrow-1320185732677654783.png"
                style={{ height: 50, width: 50, marginLeft: 70 }}
                alt="arrow"
              />
              <h2 style={{ marginLeft: 20 }}>ADD YOUR FAVOURITES</h2>
            </div>
          )
        : 
          favProducts?.map((product, index) => (
            <div
              style={{
                backgroundImage: product.image
                  ? `url(https://100092.pythonanywhere.com${product.image})`
                  : `url(${product.image_url})`,
              }}
              className={styles.item}
              data-order="1"
              key={index}
              onClick={() => handleRedirect(product)}
            ></div>
          ))}
    </div>
  );
};

export default Favorites;
