import React from "react";
import { withRouter } from "react-router-dom";
import URL from "../../hostname/hostname";

import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchResult(props) {
  return (
    <div className="search-result-div flex-row">
      {
        //no results
        (props.noResults && <p>❌ No results</p>) ||
          // genre route
          (props.genre && (
            <a href={`/${props.target}`} className="flex-row">
              <LazyLoadImage
                className="search-result-img"
                src={`/svg/folder.svg`}
                alt={props.name + " cover image"}
                effect="blur"
              />
              <p>{props.target}</p>
            </a>
          )) || (
            // show route
            <a href={`/view/${props.target}`} className="flex-row">
              <LazyLoadImage
                className="search-result-img"
                src={`${URL}/show_covers/${props.target}.jpg`}
                alt={props.name + " cover image"}
                effect="blur"
              />
              <p>{props.textContent}</p>
            </a>
          )
      }
    </div>
  );
}

export default withRouter(SearchResult);
