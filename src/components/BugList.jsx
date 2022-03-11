import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBugs, addBug, getBugs } from "../store/bugs";

let id = 20;
export function BugList() {
  const bugs = useSelector(getBugs);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Loading bug" onClick={() => dispatch(loadBugs())}>
        loadBug
      </button>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
      <button
        aria-label="Decrement value"
        onClick={() =>
          dispatch(
            addBug({
              id: ++id,
              description: "another bug by liedji",
              resolved: false,
            })
          )
        }
      >
        AddBug
      </button>
    </div>
  );
}

export default BugList;
