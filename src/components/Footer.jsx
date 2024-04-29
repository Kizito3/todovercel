import React from "react";
import  style from "./footer.module.css";
export default function Footer({ items }) {
  return (
    <>
      <div className={style.footer}>
        {items.length !== 0 ? (
          <p>you have {items.length} item(s) in your todo today</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
