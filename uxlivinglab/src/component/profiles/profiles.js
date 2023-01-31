import styles from "./styles.module.css";
import { RxCross2 } from "react-icons/rx";
import UserProfile from "./UserProfile";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

export default function Profile() {
  const { show, handleShow } = useStateContext();

  const dummData = [
    {
      id: crypto.randomUUID(),
      name: "01. My Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "02. Set Password",
    },
    {
      id: crypto.randomUUID(),
      name: "03. Device IDs",
    },
    {
      id: crypto.randomUUID(),
      name: "04. Personal IDs",
    },
    {
      id: crypto.randomUUID(),
      name: "05. References",
    },
    {
      id: crypto.randomUUID(),
      name: "06. ID Verification",
    },
    {
      id: crypto.randomUUID(),
      name: "07. My Organisation",
    },
    {
      id: crypto.randomUUID(),
      name: "08. Geographic Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "09. Demographic Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "10. Psychographic Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "11. Behavioural Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "12. Usage Profile",
    },
    {
      id: crypto.randomUUID(),
      name: "13. Section Permissions",
    },
  ];

  return (
    <>
      <div className={styles.items}>
        <button className={styles.logout}>
          <i
            style={{
              fontSize: 20,
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            My Profile
          </i>
        </button>
        <div className={styles.all}>
          <div className={styles.allBorder}>
            {/* <div className={styles.items}> */}
            {dummData.map((data) => (
              <UserProfile data={data} key={data.id} />
            ))}
            {/* </div> */}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="submit" className={styles.EditProfileBtn}>
              Edit My Profile
            </button>
            <RxCross2
              size={24}
              color="white"
              style={{
                backgroundColor: "red",
                borderRadius: 20,
                marginTop: 4,
                marginBottom: 8,
                fontWeight: 1000,
                alignSelf: "flex-start",
              }}
              onClick={() => handleShow(!show)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
