import ProductDisplay from "./ProductDisplay";
import { useState } from "react";

const ProductList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "모자", color: "white", stock: 3 },
    { id: 2, name: "양말", color: "red", stock: 5 },
    { id: 3, name: "신발", color: "black", stock: 3 },
  ]);
  const [wish, setWish] = useState(0);
  return (
    <div>
      <p>장바구니 : {wish} </p>
      {items.map((item) => (
        <div key={item.id}>
          <ProductDisplay item={item} />
          <button
            onClick={() => {
              // setItems 이용하여 선택한 item의 stock 값을 1감소하려고함
              // 이때 setItems는 넣어준 값을 items에 할당
              // 선택되지 않은 id값을 가진 item은 다시 배열에 넣고,
              // 선택된 id값은 가진 item은 스프레드 연산자를 사용해서 안의 내용을 넣고
              // stock 값을 1 감소해서 넣는다.
              setItems(items.map((i) => (i.id === item.id ? { ...i, stock: i.stock - 1 } : i)));
              setWish(wish + 1);
              // 위의 내용은 stock의 값이 0일때도 계속 추가되고 감소한다.
              // 0일때 추가감소가 되지않게 하려면 어떤 코드를 추가하면 되나요?
            }}
          >
            추가
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
