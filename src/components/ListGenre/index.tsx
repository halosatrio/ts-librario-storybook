import { useState } from "react";

import { BooksGenre } from "../../types/Books";

type ListGenreProps = {
  items: Array<BooksGenre>;
  onItemSelect: (genre: { _id: string; name: string }) => void;
  selectedItem: BooksGenre | undefined;
};

const ListGenre = ({ items, onItemSelect, selectedItem }: ListGenreProps) => {
  return (
    <div className="card bordered">
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              item?.name === selectedItem?.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGenre;
