import React from "react";
import styles from "./styles.module.css";
import { BiArrowBack } from "react-icons/bi";

function AnnouncementDetail({ selectedProduct }) {
  return (
    <div
      style={{
        backgroundColor: " #f5f5f5",
        border: "1px solid #61ce70",
        borderRadius: "5px",
        paddingLeft: "20px",
        marginBottom: "15ox",
        cursor: selectedProduct["announcement"].link ? "pointer" : "default",
      }}
    >
      <a
        href={
          selectedProduct["announcement"].link
            ? selectedProduct["announcement"].link
            : undefined
        }
        target={selectedProduct["announcement"].link ? "_blank" : undefined}
        rel={
          selectedProduct["announcement"].link
            ? "noopener noreferrer"
            : undefined
        }
        style={{
          textDecoration: "none",
          display: "inline-block",
          cursor: selectedProduct["announcement"].link ? "pointer" : "default",
        }}
      >
        <p className={styles.detail}>
          {selectedProduct?.announcement?.description}
        </p>
      </a>
    </div>
  );
}

function AnnouncementList({ onClick, data, setSelectedProduct }) {
  return data?.map((item) => (
    <div
      className={styles.announcementDetail}
      onClick={() => {
        setSelectedProduct(item);
        onClick();
      }}
      key={item._id}
    >
      <p className={styles.title}>{item?.announcement?.title}</p>
    </div>
  ));
}

export default function Announcement({ onClick, showProducts }) {
  const [detail, setDetail] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  return (
    <div>
      <BiArrowBack
        size={30}
        onClick={() => (detail ? setDetail(false) : onClick())}
        style={{ cursor: "pointer" }}
      />
      <div className={styles.announcement} />
      <h3>{showProducts.title}</h3>
      {detail ? (
        <AnnouncementDetail selectedProduct={selectedProduct} />
      ) : (
        <AnnouncementList
          onClick={() => setDetail(true)}
          setSelectedProduct={setSelectedProduct}
          onBackPress={onClick}
          data={showProducts.data}
        />
      )}
    </div>
  );
}
