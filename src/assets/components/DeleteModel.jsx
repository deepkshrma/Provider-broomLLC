import React from "react";

function DeleteModel() {
  return (
    <>
      {/* model box */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60  flex justify-center items-center z-20">
        <div className="w-[25%] h-auto bg-[#fcfcfc] p-1 relative rounded">
          <div className="w-full flex justify-end ">
            <IoMdClose className="text-[#979797]" />
          </div>
          <div className="w-full flex justify-center p-4">
            <div className="w-[60%]">
              <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center gap-4">
                  <AiOutlineExclamationCircle
                    size={70}
                    className="text-yellow-500"
                  />
                </div>
              </div>

              {/* Bottom Two Services */}
              <div>
                <h2 className="font-[500] text-[20px] text-center mb-2">
                  Are you sure?
                </h2>
                <p className="text-[12px] text-center text-gray-600 mb-3">
                  Want to update subscription
                </p>
                <div className="flex text-[12px] justify-center">
                  <div className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                    Cancel
                  </div>
                  <div className="bg-blue-500 text-white px-4 flex items-center rounded">
                    Yes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModel;
