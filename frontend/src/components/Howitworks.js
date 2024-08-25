import React from 'react';

const HowItWorks = () => {
  return (
    <div className=" text-white py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">How it Works</h2>
      <div className="flex justify-center space-x-20">
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-2xl p-15">Select or Upload</span>
          </div>
          <p className="text-center mt-4">1</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-2xl p-20">Pay and Request Verification</span>
          </div>
          <p className="text-center mt-4">2</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-2xl p-20">Receive Verified Certificate</span>
          </div>
          <p className="text-center mt-4">3</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
