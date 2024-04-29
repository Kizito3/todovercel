import React from "react";
import style from "./header.module.css";

export default function Header() {
  return (
    <>
     <div className={style.cardWrapper}>
     <div className={style.card}>
        <div>
            <h2>TODO List</h2>
        </div>
      </div>
     </div>
    </>
  );
}
