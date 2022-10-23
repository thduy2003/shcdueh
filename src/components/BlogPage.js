import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "evondev" });
  }, []);
  return <div>Blog Page</div>;
};

export default BlogPage;
