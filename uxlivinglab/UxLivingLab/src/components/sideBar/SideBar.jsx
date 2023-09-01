export default function SideBar() {
  const icons = {
    login: "fas fa-sign-in-alt",
    logout: "fas fa-power-off",
    payments: "fas fa-credit-card",
    profiles: "fas fa-user",
    customer: "fas fa-headset",
    notifications: "fas fa-bell",
    products: "far fa-gem",
    favourites: "fas fa-hand-holding-heart",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        rowGap: 7,
        borderRadius: 10,
      }}
    >
      {Object.entries(icons).map(([key, value]) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            borderRadius: 10,
            width: "100%",
          }}
          key={key}
        >
          <i className={value} style={{ fontSize: 30 }} />
          <span style={{ lineHeight: "1.5em", fontSize: 16 }}>{key}</span>
        </div>
      ))}
    </div>
  );
}
