import React from "react";

function AbvFilter({ handleAbvChange , abv}) {
  return (
    <div>
      <h3>Abv Filter:</h3>
      <div>
        <input
          onChange={(e) => {
            handleAbvChange(e);
          }}
          type="number"
          id="Abv_filter"
          name="Abv_filter"
          min="1"
          max="13"
          value={abv}
        />
      </div>
    </div>
  );
}

export default AbvFilter;
