import React from "react";
import { YoutubeData } from "../../YoutubeData";
import YoutubeItem from "./YoutubeItem";
function YoutubeList() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        const newName = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image || item.avatar}
            author={item.author}
            avatar={item.avatar}
            title={item.title}
            className={newName}
          />
        );
      })}
    </div>
  );
}
export default YoutubeList;
