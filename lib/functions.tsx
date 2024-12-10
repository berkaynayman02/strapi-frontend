import React from "react";

export const formatMarkdownDescription = (description: string) => {
  return description.split("\n").map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    );
  });
};
