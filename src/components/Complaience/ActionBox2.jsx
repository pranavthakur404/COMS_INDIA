import React from "react";
import ActionList from "./ActionList";

const ActionBox2 = () => {
  const data = [
    {
      id: 1,
      title: "ESI Challan",
      file: "",
    },
    {
      id: 2,
      title: "MUSTER-ROLL",
      file: "",
    },
    {
      id: 3,
      title: "Receipt Book 22 March Quartly 2022",
      file: "",
    },
    {
      id: 4,
      title: "Mobile Development",
      file: "",
    },
    {
      id: 5,
      title: "Database Design",
      file: "",
    },
  ];
  return (
    <div className="w-full mt-[50px]">
      <h4 className="font-bold text-[24px]">Title</h4>
      <div className="w-full border-2 border-gray-300 rounded-lg shadow-md mt-5">
        <div className="p-5 border-b-8 border-red-600">
          <label for="Date" className="text-[20px] font-[500] mb-2">
            Type :-
          </label>
          <select
            name="select"
            id="select"
            className="w-[200px] text-gray-700 border rounded py-2 px-4 mb-3 leading-tight ml-3 focus:outline-none shadow-md focus:bg-white focus:border-gray-500"
          >
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
          </select>
        </div>
        {/* action table */}
        <div className="w-full">
          <div className="w-full flex justify-between py-5 px-10 font-bold border-b-2 border-gray-400">
            <p>Compliance</p>
            <p>Action</p>
          </div>
          {data.map((list, index) => {
            return <ActionList key={list.id} index={index} {...list} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionBox2;
