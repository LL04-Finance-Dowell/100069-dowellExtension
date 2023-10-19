/* eslint-disable no-extra-boolean-cast */
import { useNavigate } from "react-router";
import HeaderComponent from "../components/HeaderComponent";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { useQuery } from "react-query";
import FetchFavourites from "../lib/api/fetchFavourites";
import { useStateContext } from "../contexts/Context";
import FetchUserInfo from "../lib/api/fetchUserInfo";
import Logo from "../assets/mdi_null-off.png";

export default function Favourites() {
  const navigate = useNavigate();
  const { sessionId } = useStateContext();

  const {
    data: firstApiData,
    isLoading: isFirstApiLoading,
    isError: isFirstApiError,
  } = useQuery("favouriteUserInfo", () => FetchUserInfo(sessionId));

  const {
    data: secondApiData,
    isLoading: isSecondApiLoading,
    isError: isSecondApiError,
  } = useQuery(
    "favourites",
    () => FetchFavourites(firstApiData?.data?.userinfo?.userID),
    {
      enabled: !!firstApiData, // Enable the query only when firstApiData is available
    }
  );

  if (isFirstApiLoading || isSecondApiLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: 500,
          // height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  if (isFirstApiError || isSecondApiError) {
    return (
      <div
        style={{
          width: "100%",
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Error fetching data.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "scroll",
        overflowX: "hidden",
        height: 500,
      }}
    >
      <div style={{ width: "100%", paddingLeft: 3 }}>
        <HeaderComponent title="Favourites" />
      </div>
      <div style={boxStyle}>
        <div className="rectangle" style={rectangleStyle}>
          <div style={textWrapperStyle}>Add Your Favourites</div>
          <AiOutlineEye size={15} color="lightgrey" />
          <AiOutlinePlus
            size={15}
            color="#005734"
            style={{ marginLeft: "10px", marginRight: "20px" }}
            onClick={() => navigate("/addFavourite")}
          />
        </div>
      </div>
      {!!secondApiData?.data?.data?.length ? (
        secondApiData?.data?.data?.map((item) => (
          <div style={rectangle} key={item._id}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "auto",
                marginLeft: 15,
                marginTop: 30,
                // overflow: "scroll",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#005734",
                  letterSpacing: 0,
                  lineHeight: "normal",
                }}
              >
                Details
              </div>
              <span style={label}>Username: {item?.favorite?.username}</span>
              <span style={label}>Workspace: {item?.favorite?.org_name}</span>
              <span style={label}>Product: {item?.favorite?.product_name}</span>
              <span style={label}>Portfolio: {item?.favorite?.portfolio}</span>
            </div>
            <img
              src={item?.favorite?.image_url}
              style={imageStyle}
              sizes="contain"
            />
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >
          <img src={Logo} style={{ width: 100 }} />
          <p style={{ color: "#D5D4D4" }}>You have not created favourite!</p>
        </div>
      )}
    </div>
  );
}

const boxStyle = {
  height: "37px",
  width: "310px",
  marginTop: "40px",
  marginRight: "10px",
  marginLeft: "10px",
  marginBottom: "40px",
};

const rectangleStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  height: "37px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const textWrapperStyle = {
  color: "#005734",
  fontSize: "12px",
  fontWeight: 500,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
  marginRight: "auto",
  marginLeft: "20px",
};

const rectangle = {
  width: "290px",
  height: "184px",
  marginBottom: "30px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "row",
  // overflow: "hidden",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
};

const imageStyle = {
  width: 102,
  height: 158,
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  borderRadius: "10px",
  marginRight: "15px",
  marginTop: "10px",
  objectFit: "cover",
};

const label = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "150px",
  color: "#005734",
  fontSize: "12px",
  fontWeight: "500",
  marginTop: "5px",
};
