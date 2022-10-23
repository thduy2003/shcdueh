import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();
  return (
    <div>
      Blog Page Detail
      <button
        className="p-3 text-white bg-blue-400 rounded-sm"
        onClick={() => navigate("/blog")}
      >
        Navigation to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
