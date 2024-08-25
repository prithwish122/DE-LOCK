import './App.css';
import CertificateVerification from './components/CertificateVerification';
import HowItWorks from './components/Howitworks';
import bottomwave from './bottomWaveEduchain.png';
import topwave from './topWaveEduchain.png';


function App() {
  return (
    <div className="App">
      {/* <div class="h-screen flex items-center justify-center">
        <p class="text-center text-white text-4xl">You can either...</p>
      </div> */}
        {/* <CertificateVerification /> */}
        {/* <HowItWorks /> */}
        {/* <div className=''> Hello </div> */}
        <img src={topwave} className='fixed'/>
        <div className='text-3xl text-[#A9A9A9] relative top-[200px]'>You can either.....</div>
        <div className='text-2xl text-[#A9A9A9] relative top-[340px] right-[277px]'>Search and select <br/> your certificate to <br/> verify</div>
        <div className='text-2xl text-[#A9A9A9] relative top-[245px] left-[280px]'>Upload your<br/> certificate to verify<br/>
        <button className='relative text-xl text-[#6A73D4] border border-[#6A73D4] rounded-full py-2 px-5 top-2'>Upload</button>
        </div>
        <img src={bottomwave} className='fixed top-[530px]'/>

    </div>
  );
}

export default App;
