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

export default function AddFavourite() {
  const [image, setImage] = useState(null);
  const { sessionId } = useStateContext();
  const [orgs, setOrgs] = useState([]);
  const [org, setOrg] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [portfolio, setPortfolio] = useState("");

  useQuery("addFavourites", async () => {
    const userInfo = await FetchUserInfo(sessionId);
    const other_org = userInfo.data.other_org || [];
    const own_org = userInfo.data.own_organisations || [];
    const updatedData = [...other_org, ...own_org];
    const orgs = getOrganisation(updatedData);
    setOrgs(orgs);
    // if (!org) {
    //   setOrg(orgs[0]?.org_name);
    //   setProducts(getProducts(orgs[0]?.org_name, updatedData));
    // }
    return orgs;
  });

  return (
    <div
      style={{
        marginLeft: 15,
      }}
    >
      <HeaderComponent title={"Add Favourite"} />
      <div style={{ marginTop: 30, marginBottom: "auto" }}>
        <div>
          <span className={styles.spanStyle}>Select WorkSpace:</span>
          <DropdownComponent options={orgs.map((item) => item.org_name)} />
        </div>
        <div style={{ marginTop: 20 }}>
          <span className={styles.spanStyle}>Select Product:</span>
          <DropdownComponent options={["1", "2", "3"]} />
        </div>
        <div style={{ marginTop: 20 }}>
          <span className={styles.spanStyle}>Select Portfolio:</span>
          <DropdownComponent options={["1", "2", "3"]} />
        </div>
        <div
          style={{ marginTop: 20, display: "flex", flexDirection: "column" }}
        >
          <span className={styles.spanStyle}>
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
          </div>
          <div style={{ marginTop: 20 }}>
            <span className={styles.spanStyle}>Select Images:</span>
            <div className={styles.select}>
              <label className={styles.label}>Choose</label>
              <FiLink2 size={12} className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 15 }}>
        <TabButton description={"Submit"} />
      </div>
    </div>
  );
}
