export default function CreditListItem({ name, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid #ccc",
        width: "100%",
        paddingBottom: 10,
        marginTop: 20,
      }}
    >
      <span
        style={{
          color: "gray",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {name}:
      </span>
      {/* <span style={{marginLeft: 10}}></span> */}
      <span style={{ marginLeft: 10 }}>{value}</span>
    </div>
  );
}
