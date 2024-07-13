import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="w-full bg-gray-600 flex text-white gap-3 p-3">
      <div>Home</div>
      <div>Sports</div>
      <div>News</div>
      <div>Contacts</div>
    </div>
  );
};

export default Navigation;
