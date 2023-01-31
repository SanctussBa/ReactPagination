import { Data } from "../types";
import Item from "./Item";

type ListProps = {
  list: Data[];
};
const List = ({ list }: ListProps) => {
  return (
    <div className="list">
      {list.map((item) => (
        <div>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default List;
