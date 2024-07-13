import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

async function fetchResultsData(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  return { __html: data };
}

type Props = {};

const Matches = (props: Props) => {
  const [url, setUrl] = useState(
    "https://hosted.dcd.shared.geniussports.com/QBL/en/schedule"
  );
  const { isLoading, data, refetch } = useQuery("matches", () =>
    fetchResultsData(url)
  );
  useEffect(() => {
    if (url && url !== "" && url !== null) {
      refetch();
    }
  }, [url, refetch]);

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    setUrl(event.target.href);
  };
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <div
          className="flex items-center justify-center py-5"
          dangerouslySetInnerHTML={data}
          onClick={(event) => {
            const target = event.target as HTMLAnchorElement;
            if (target.tagName.toLowerCase() === "a") {
              handleLinkClick(event);
            }
          }}
        ></div>
      )}
    </>
  );
};

export default Matches;
