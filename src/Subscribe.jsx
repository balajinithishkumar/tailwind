function Subscribe() {
  return (
    <div className="flex bg-slate-50  justify-center">
      <div className=" w-fit space-y-8 py-10">
        <div className="flex flex-col items-center space-y-2">
          <h className='font-bold text-2xl text-textColor sm:text-lg'>Subscribe for the latest course updates!</h>
          <p className="text-subsTextColor font-medium sm:text-xs">Subscribe for new courses and offers! Get 20% off!</p>
        </div>
        <div className="space-y-2" >
          <div className="flex justify-between py-1.5 px-3 bg-subInput" style={{borderRadius:"50px"}}>
            <div className="flex  w-full gap-4">
              <img className="w-5" src="subs_email_icon.svg" alt="" />
              <input className="text-sm w-9/12 outline-0 bg-transparent" type="text" placeholder="Enter your email" />
            </div>
            <button className="bg-textColor text-white font-semibold py-2  px-5 " style={{borderRadius:"50px"}}>Subscribe</button>
          </div>
          <p className="text-subsTextColor font-medium sm:text-xs">We prioritize the protection of your data in our <span className="cursor-pointer underline underline-offset-3">privacy policy.</span></p>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;