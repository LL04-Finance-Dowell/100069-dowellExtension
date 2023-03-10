import { useStateContext } from "../../contexts/ContextProvider";
import styles from "./styles.module.css";

const Favorites = () => {
  const { favProducts, sessionId, userInfo } = useStateContext();

  const handleRedirect = (product) => {
    window.open(
      `https://100093.pythonanywhere.com/exportfolio?session_id=${sessionId}&org=${product.orgName}&product=${product.productName}&portfolio=${product.portfolio}&username=${userInfo?.username}`
    );
  };

  return (
    <div className={styles.container}>
      {favProducts.length === 0 ? (
        <h2 style={{ marginLeft: 100 }}>add your favorites</h2>
      ) : (
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
        ))
      )}
    </div>
  );
};

export default Favorites;
