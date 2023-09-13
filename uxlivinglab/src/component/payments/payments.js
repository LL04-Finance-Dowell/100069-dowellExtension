import styles from "./payments.module.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import CreditListItem from "./CreditListItem";
import { useEffect, useState } from "react";
import LoadingSpinner from "../spinner/spinner";
import FetchService from "../../API/FetchService";

function Payments() {
  const { show, handleShow, userInfo } = useStateContext();
  const [data, setData] = useState(null);
  const [lowCredits, setLowCredits] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      const res = await FetchService(userInfo?.client_admin_id);
      // const res = await FetchService("63e0a92c64b8aaece8496a9c");
      setData(res.data);
    };
    fetchService();
  }, [userInfo?.client_admin_id]);

  useEffect(() => {
    async function checkLowCredits(data) {
      console.log(data)
      if (data?.success === true) {
        const credits = data["data"]["total_credits"];
        if (credits < 200) {
          setLowCredits(true)
        } else {
          setLowCredits(false)
        }
      } else {
        console.log("no data")
      }

    }
    checkLowCredits(data);
  }, [userInfo?.client_admin_id])


  // console.log("data", data?.data);

  if (data == null)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <LoadingSpinner />
      </div>
    );

  return (
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
          CREDITS SYSTEM
        </i>
      </button>
      <div
        style={{
          padding: 30,
          alignSelf: "flex-start",
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
          flex: 1,
          width: "80%",
          marginBottom: "auto",
        }}
      >
        {data?.success === true ? (
          <>
            {lowCredits ? <p
              style={{ fontSize: 10 }}>80% of your credits have been exhausted,
              <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://ll05-ai-dowell.github.io/100105-DowellApiKeySystem/#",
                    "_blank"
                  )
                }
              > Please buy </a></p> : null}
            <CreditListItem
              name={"Service Key"}
              value={"********-****-****-****-*****"}
            // value={data?.data?.api_key}
            />
            <CreditListItem name={"Credit"} value={data?.data?.total_credits} />
            <CreditListItem
              name={"Status"}
              value={data?.data?.is_active ? "Active" : "Inactive"}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "gray",
              fontSize: 17,
              fontWeight: "bold",
              height: "50%",
            }}
          >
            <span style={{ alignSelf: "center" }}>
              You have not created service key
            </span>
          </div>
        )}
        {/* <span
          style={{
            color: "gray",
            fontSize: 17,
            fontWeight: "500",
            marginBottom: 5,
            marginTop: 7,
          }}
        >
          Activated Service:
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <CreditListItem name={"Service Key"} value={"xxx-yyy-zzz"} />
          <CreditListItem name={"Credit"} value={"1000"} />
        </div> */}

        <button
          type="submit"
          className={styles.EditProfileBtn}
          onClick={() =>
            window.open(
              "https://ll05-ai-dowell.github.io/100105-DowellApiKeySystem/#",
              "_blank"
            )
          }
        >
          {data?.success === true ? "Buy Credits" : "Create Service Key"}
        </button>
      </div>
      <RxCross2
        size={24}
        color="white"
        style={{
          cursor: "pointer",
          backgroundColor: "red",
          borderRadius: 20,
          marginTop: 4,
          marginBottom: 8,
          marginLeft: 10,
          fontWeight: 1000,
          alignSelf: "flex-start",
        }}
        onClick={() => handleShow(!show)}
      />
    </div>
  );
}
export default Payments;
