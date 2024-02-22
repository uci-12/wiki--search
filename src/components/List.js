import React from "react";

const List = ({ results }) => {
  const renderedList = results.map((result) => {
    return (
      <div key={result.pageid} className="ui segment">
        <h3>
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="header">{result.title}</a>
        </h3>

        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
      </div>
    );
  });

  return renderedList;
};

export default List;
