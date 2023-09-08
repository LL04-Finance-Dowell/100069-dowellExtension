import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import DropdownComponent from "./Dropdown";
import styles from "./style.module.css";
import { FiLink2 } from "react-icons/fi";
import TabButton from "../../components/TabButton";
import { useQuery } from "react-query";
import { useStateContext } from "../../contexts/Context";
import FetchUserInfo from "../../lib/api/fetchUserInfo";
import { getOrganisation } from "../../utils/getOrgs";
import ProductDropdown from "./ProductDropdown";
import useStore from "../../hooks/use-hook";
import PortfolioDropdown from "./PortfolioDropdown";
import { useNavigate } from "react-router";
import ImageModal from "../../components/ImageModal";

export default function AddFavourite() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const { sessionId } = useStateContext();
  const [orgs, setOrgs] = useState([]);
  const [org, setOrg] = useState(null);
  const [product, setProduct] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [open, setOpen] = useState(false);

  const products = useStore((state) => state.products);

  useQuery("addFavourites", async () => {
    const userInfo = await FetchUserInfo(sessionId);
    const other_org = userInfo.data.other_org || [];
    const own_org = userInfo.data.own_organisations || [];
    const updatedData = [...other_org, ...own_org];
    const orgs = getOrganisation(updatedData);
    setOrgs(orgs);
    return updatedData;
  });

  return (
    <div
      style={{
        marginLeft: 15,
      }}
    >
      <HeaderComponent
        title={"Add Favourite"}
        navigation={() => navigate(-1)}
      />
      <div style={{ marginTop: 30, marginBottom: "auto" }}>
        <div>
          <span className={styles.spanStyle}>Select WorkSpace:</span>
          <DropdownComponent
            options={orgs.map((item) => item.org_name)}
            setOrg={setOrg}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <span className={styles.spanStyle}>Select Product:</span>
          <ProductDropdown
            options={products?.map((item) => item.product)}
            setProduct={setProduct}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <span className={styles.spanStyle}>Select Portfolio:</span>
          <PortfolioDropdown product={product} setPortfolio={setPortfolio} />
        </div>
        {/* <div
          style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        > */}
        {/* <span className={styles.spanStyle}>
            Upload Image:
            {image && (
              <span className={styles.placeholderClassName}>{image.name}</span>
            )}
          </span>
          <input
            type="file"
            id="file"
            className={styles.inputStyle}
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className={styles.labelStyle}>
            <label htmlFor="file" className={styles.label}>
              Choose
            </label>
            <FiLink2 size={12} className={styles.icon} />
          </div> */}
        <div style={{ marginTop: 20 }} onClick={() => setOpen(true)}>
          <span className={styles.spanStyle}>Select Images:</span>
          <div className={styles.select}>
            <label className={styles.label}>Choose</label>
            <FiLink2 size={12} className={styles.icon} />
          </div>
          {/* </div> */}
        </div>
        {<ImageModal open={open} handleClose={() => setOpen(false)} setImage={setImage} />}
      </div>
      <div style={{ marginTop: 15 }}>
        <TabButton description={"Submit"} />
      </div>
    </div>
  );
}
