import { useStateContext } from "../../contexts/ContextProvider";
import styles from "./styles.module.css";
import LoadingSpinner from "../spinner/spinner";

const Favorites = () => {
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
      {favProducts?.map((product, index) => (
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
