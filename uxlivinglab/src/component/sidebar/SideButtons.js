import { useState, useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import FetchService from "../../API/FetchService";



const SideButtons = ({ setHover, initialState, keys, value }) => {
  const { sessionId, notifications, announcements, userInfo, handleShow, selectedOrgId, setChosenProduct, chosenProduct, portfolioInfo, userAnnouncementsData, memberAnnouncementsData, publicAnnouncementsData } =
    useStateContext();

  const [showText, setShowText] = useState(false);
  const allAnnouncements = Array.from(new Set(announcements));
  const allNotifications = Array.from(new Set(notifications));
  const [lowCredits, setLowCredits] = useState(false);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchService = async () => {
      const res = await FetchService(userInfo?.client_admin_id);
      setData(res.data);
      // console.log(res.data)
    };
    fetchService();
  }, [userInfo?.client_admin_id]);

  useEffect(() => {
    async function checkLowCredits(data) {
      // console.log(data)
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
  const user = userInfo?.username;
  // const notification = [];



  const MemberNotifications = memberAnnouncementsData?.filter((data) => data['announcement']).length;
  const UserNotifications = userAnnouncementsData?.filter((data) => data['announcement']).length;
  const PublicNotifications = publicAnnouncementsData?.filter((data) => data['announcement']).length;
  // console.log("public anns")
  // console.log(memberAnnouncementsData)

  const workflowAiNotifications = allNotifications.filter(
    (datum) =>
      datum['notification'].seen === false &&
      datum['notification'].username === user &&
      datum['notification'].productName === "Workflow AI"
  ).length;

  const totalNotifications = MemberNotifications + UserNotifications + PublicNotifications + workflowAiNotifications;

  const notificationNumber = allNotifications.filter(
    (datum) => datum['notification'].seen === false && datum['notification'].username === user
  ).length;

  // setChosenProduct(Array.from(new Set(portfolioInfo.map((datum) => datum.org_id))))
  // console.log(chosenProduct);

  return (
    <>
      {sessionId && keys !== "login" ? (
        <div
          className="power"
          onClick={() => {
            // keys !== "login"
            //   ? setHover({ ...initialState, [keys]: true, login: false })
            //   : setHover({ ...initialState, [keys]: true })
            setHover({ ...initialState, [keys]: true, login: false });
            handleShow(true);
          }}
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          {showText && (
            <p
              style={{
                color: "black",
                position: "absolute",
                // marginBottom: 70,
                // marginLeft: 20,
              }}
            >
              {keys}
            </p>
          )}
          <i aria-hidden="true" className={value}></i>
          {keys === "notifications" &&
            (totalNotifications > 0) && (
              <p
                style={{
                  position: "absolute",
                  border: "3px solid white",
                  fontSize: 13,
                  padding: "1px 5px 8px 5px",
                  height: 10,
                  marginBottom: 49,
                  marginLeft: 50,
                  borderRadius: 100,
                  color: "white",
                  backgroundColor: "#ff0000",
                }}
              >
                {totalNotifications}
              </p>
            )}
          {
            keys === "payments" &&
            (lowCredits) && (
              <p
                style={{
                  position: "absolute",
                  border: "3px solid white",
                  fontSize: 13,
                  padding: "1px 5px 8px 5px",
                  height: 10,
                  marginBottom: 49,
                  marginLeft: 50,
                  borderRadius: 100,
                  color: "white",
                  backgroundColor: "#ff0000",
                }}
              >
                1
              </p>

            )
          }
          {/* {console.log(announcements.length)} */}
        </div>
      ) : (
        !sessionId &&
        keys !== "logout" && (
          <div
            className="power"
            style={
              (keys === "profiles") |
                (keys === "products") |
                (keys === "favourites")
                ? { cursor: "not-allowed" }
                : {}
            }
            onClick={() =>
              keys !== "login"
                ? sessionId
                  ? setHover({
                    ...initialState,
                    [keys]: true,
                    login: false,
                  })
                  : keys !== "profiles" &&
                    keys !== "products" &&
                    keys !== "favourites"
                    ? setHover({
                      ...initialState,
                      [keys]: true,
                      login: false,
                    })
                    : {}
                : sessionId
                  ? setHover({ ...initialState, [keys]: true })
                  : keys !== "profiles" &&
                    keys !== "notifications" &&
                    keys !== "products" &&
                    keys !== "favourites"
                    ? setHover({ ...initialState, [keys]: true })
                    : {}
            }
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            {/* <div
          class="elementor-divider"
          style={
            (keys === "profiles") |
            (keys === "notifications") |
            (keys === "products")
              ?
            {position:"absolute",width: "58px", borderTop: "2px solid green",marginTop: "5px",marginLeft: 0,transform: "rotate(140deg)"}:
            {color: ""}
              }
            ></div> */}

            {showText && (
              <p
                style={{
                  color: "black",
                  position: "absolute",
                  // marginBottom: 70,
                }}
              >
                {keys}
              </p>
            )}
            <i aria-hidden="true" className={value}></i>
            {keys === "notifications" &&
              (allAnnouncements.length > 0 || notificationNumber > 0) && (
                <p
                  style={{
                    position: "absolute",
                    border: "3px solid white",
                    fontSize: 13,
                    padding: "1px 5px 8px 5px",
                    height: 10,
                    marginBottom: 49,
                    marginLeft: 50,
                    borderRadius: 100,
                    color: "white",
                    backgroundColor: "#ff0000",
                  }}
                >
                  {allAnnouncements.length + notificationNumber}
                </p>
              )}
          </div>
        )
      )}
    </>
  );
};

export default SideButtons;
