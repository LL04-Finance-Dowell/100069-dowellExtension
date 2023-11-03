import { useParams } from "react-router";
import { useNavigate } from "react-router";
import HeaderComponent from "../../components/HeaderComponent";
import { useLocation } from "react-router";

export default function AnnouncementDetail() {
  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.data;
  return (
    <div>
      <div>
        <HeaderComponent
          title="Notification"
          type="announcements"
          navigation={() => navigate(-1)}
        />
      </div>
      <div style={{ marginLeft: 15 }}>
        <div style={headerLabelStyle}>
          <div style={headerTextWrapperStyle}>{title}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 15,
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          <div style={descriptionTextWrapperStyle}>{data.description}</div>
          {data.link && (
            <div style={descriptionTextWrapperStyle}>
              For more information:
              <a
                href={data.link}
                style={{ marginLeft: 10 }}
                rel="noreferrer"
                target="_blank"
              >
                {data.link}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const descriptionTextWrapperStyle = {
  color: "#005734",
  backgroundColor: "#ffffff",
  fontSize: "11px",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  padding: "10px 10px 10px 10px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const headerLabelStyle = {
  height: "40px",
  width: "170px",
  marginTop: 50,
  marginBottom: 10,
};

const headerTextWrapperStyle = {
  color: "#005734",
  fontFamily: '"Poppins-Regular", Helvetica',
  fontSize: "20px",
  fontWeight: "400",
  height: "50px",
  letterSpacing: "0",
  lineHeight: "normal",
};
