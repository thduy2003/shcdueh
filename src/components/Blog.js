import React, { useEffect, useRef } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  // ở đây gán {} bởi vì bên kìa return object
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-container" ref={contentRef}>
      <p className="mb-5">
        Cách hiểu này khiến cho cách phân đoạn thiếu tính khách quan. Với cách
        hiểu này, diện mạo đoạn văn không được xác định đoạn văn bắt đầu từ đâu,
        như thế nào, các câu văn trong đoạn có mối liên kết với nhau như thế
        nào,… cho nên việc xây dựng đoạn văn trở nên khó khăn, phức tạp, khó rèn
        luyện các thao tác để trở thành kĩ năng kĩ "xảo.
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}  `}
          ref={nodeRef}
        >
          google.com
        </a>
      </p>
      <p className="mb-5">
        Cách hiểu này khiến cho cách phân đoạn thiếu tính khách quan. Với cách
        hiểu này, diện mạo đoạn văn không được xác định đoạn văn bắt đầu từ đâu,
        như thế nào, các câu văn trong đoạn có mối liên kết với nhau như thế
        nào,… cho nên việc xây dựng đoạn văn trở nên khó khăn, phức tạp, khó rèn
        luyện các thao tác để trở thành kĩ năng kĩ xảo.
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Cách hiểu này khiến cho cách phân đoạn thiếu tính khách quan. Với cách
        hiểu này, diện mạo đoạn văn không được xác định đoạn văn bắt đầu từ đâu,
        như thế nào, các câu văn trong đoạn có mối liên kết với nhau như thế
        nào,… cho nên việc xây dựng đoạn văn trở nên khó khăn, phức tạp, khó rèn
        luyện các thao tác để trở thành kĩ năng kĩ xảo.
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;
