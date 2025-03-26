import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TokenPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setCurrentDate(
      now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  //Design 1
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main ticket container */}
      <div className="max-w-sm w-full bg-white shadow-lg transform rotate-0">
        {/* Colored tear-off strip at top */}
        <div className="bg-blue-500 h-8 flex items-center justify-between px-4">
          <div className="text-white font-bold">CLINIC QUEUE</div>
          <div className="text-white text-sm">{currentDate}</div>
        </div>

        {/* Perforation line */}
        <div className="border-b border-dashed border-gray-900 relative"></div>

        {/* Main content area */}
        <div className="p-6">
          {/* Clinic name */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-500">Patient Queue System</p>
          </div>

          {/* Queue number display */}
          <div className="flex justify-center my-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">YOUR NUMBER</p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg py-4 px-8">
                <span className="text-6xl font-bold text-blue-600 font-mono">
                  {id}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Information and barcode section */}
        <div className="bg-gray-50 p-4">
          {/* Instructions */}
          <p className="text-xs text-center text-gray-500">
            Please listen for your number to be called.
            <br />
            Your position in queue will be forfeited if missed.
          </p>
        </div>

        {/* Perforation line */}
        <div className="border-t border-dashed border-gray-900 relative"></div>

        {/* Bottom tear-off stub */}

        <div className="px-4 py-2 h-8 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition duration-200"></div>
      </div>
    </div>
  );

  //Design 2
  // return (
  //   <div className="min-h-screen bg-gray-200 flex-col items-center justify-center p-4">
  //     <div className="bg-blue-900 h-8 flex items-center justify-between px-4">
  //       <div className="text-white font-bold">CLINIC QUEUE</div>
  //       <div className="text-white text-sm">{currentDate}</div>
  //     </div>

  //     <div className="container">
  //       <div className="container-inner">
  //         <p className="text-sm text-gray-500 mb-1">YOUR NUMBER</p>
  //         <div className="sticky-container">
  //           <div className="sticky-outer">
  //             <div className="sticky">
  //               <svg width="0" height="0">
  //                 <defs>
  //                   <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
  //                     <path
  //                       d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
  //                       stroke-linejoin="round"
  //                       stroke-linecap="square"
  //                     />
  //                   </clipPath>
  //                 </defs>
  //               </svg>
  //               <div className="sticky-content">{id}</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default TokenPage;
