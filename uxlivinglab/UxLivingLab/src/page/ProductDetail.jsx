import { useParams } from "react-router";
import { useQuery } from "react-query";
import HeaderComponent from "../components/HeaderComponent";
import { useStateContext } from "../contexts/Context";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useStateContext();

  const product = products?.find((item) => item.id === id);

  console.log(product);

  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Product Detail" />
    </div>
  );
}
