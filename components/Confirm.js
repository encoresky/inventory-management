import Button from "./Button";

function Confirm() {
  return (
    <div className="bg-primary_light fixed  bottom-[15px] w-full py-[2.125rem] px-[1.25rem]">
      <div className="flex justify-between">
        <div className="">
          <div className="flex ">
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.293 14.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1 0 1.414z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.293 14.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1 0 1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className="btn-primary" name="Confirm" />
        </div>
      </div>
    </div>
  );
}

export default Confirm;
