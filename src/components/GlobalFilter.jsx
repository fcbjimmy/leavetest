import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  //   const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div className="mb-6 mt-6 flex items-center">
      <h2 className="text-xl text-gray-600 mr-6">Search:</h2>
      <input
        className="h-8 border-2border-solid border-green-500 outline-none p-4 rounded-lg"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={``}
      />
    </div>
  );
}
export default GlobalFilter;
