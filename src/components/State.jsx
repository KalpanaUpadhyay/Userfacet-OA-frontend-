import React from "react";

import Members from "./Members";

export default function State({ state }) {
  return (
    <div>
      <h1>{state.name}</h1>
      <Members members={state.members} />
    </div>
  );
}
