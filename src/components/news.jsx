import React from "react";
import Style from "../css/news.css";

export default function News(props) {
  return (
    <div className="newsContainer">
      <h3>{props.title}</h3>
      <div className="autor">
        <h4>
          {"\n"}Autor: {props.autor}
        </h4>
      </div>
      <p>{props.text}</p>
      <div>
        <audio controls className="AudiosIngles">
          <source src={props.audio} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
}
