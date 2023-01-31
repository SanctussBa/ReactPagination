import { Data } from "../types";

type ItemProps = {
  item: Data;
};

const Item = ({ item }: ItemProps) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <h4>{item.brand}</h4>
      <p>{item.price} EUR</p>
    </div>
  );
};

export default Item;
