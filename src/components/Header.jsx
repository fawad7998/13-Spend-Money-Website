import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div className={"header"}>
      {total > 0 && money - total !== 0 && (
        <span>
          To Spend{" "}
          <span className={"money"}>${moneyFormat(money - total)}</span>{" "}
          You Have a Lot of money
        </span>
      )}
      {total === 0 && (
        <span>
          To Spend <span className={"money"}>${moneyFormat(money)}</span>{" "}
          You have money
        </span>
      )}
      {money - total === 0 && (
        <span>
          {" "}
          <span className={"money"}>${moneyFormat(total)}</span>'ı nasıl
          bitirdin ???{" "}
        </span>
      )}
    </div>
  );
};

export default Header;
