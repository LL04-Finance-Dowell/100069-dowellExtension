import { useParams } from "react-router";
import { useQuery } from "react-query";
import HeaderComponent from "../components/HeaderComponent";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Product Detail" />
    </div>
  );
}
