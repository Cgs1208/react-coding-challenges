import React from "react";

const JobPosting = ({ url, title, by, time }) => {
  const formatedTime = new Date(time * 100).toLocaleString();
  return (
    <div className="post" role="listItem">
      <h2 className="post__title">
        <a
          href={url}
          className={url ? "" : "inactiveLink"}
          target="_blank"
          rel="noopener"
        >
          {title}
        </a>
      </h2>
      <span className="post__metadata">
        By {by} ~ {formatedTime}
      </span>
    </div>
  );
};

export default JobPosting;
