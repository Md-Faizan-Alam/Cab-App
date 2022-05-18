import React, { useState } from "react";

export default function Test() {
  const [checked, setChecked] = useState({ apple: true, orange: false });

  const changeRadio = (e) => {
    setChecked(() => {
      return {
        apple: false,
        orange: false,
        [e.target.value]: true
      };
    });
  };

  return (
    <>
      <button
        onClick={() => setChecked(() => ({ apple: false, orange: false }))}
      >
        uncheck
      </button>
      <label>
        <input
          type="radio"
          checked={checked.apple}
          value="apple"
          name="choice"
          onChange={changeRadio}
        />
        apple
      </label>

      <label>
        <input
          type="radio"
          checked={checked.orange}
          value="orange"
          name="choice"
          onChange={changeRadio}
        />
        orange
      </label>
    </>
  );
}