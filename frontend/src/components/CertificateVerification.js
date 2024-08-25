import React from "react";

const CertificateVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-8">You can either....</h1>
      <div className="flex items-center">
        <div className="flex flex-col items-center mr-10">
          <span className="text-lg mb-2">Search and select your certificate to verify</span>
        </div>
        <div className="w-px h-10 bg-gray-500"></div>
        <div className="flex flex-col items-center ml-10">
          <span className=" relative text-lg mb-2 top-[30px]">Upload your certificate to verify</span>
          <button className="relative mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full top-[20px]">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;
