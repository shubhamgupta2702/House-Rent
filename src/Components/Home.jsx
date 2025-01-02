import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from "@material-tailwind/react"
import { ProfileCard } from './Happycard.jsx'

function Home() {
  return (
    <>
    <div className='bg-green-200 bg-no-repeat bg-center bg-fixed bg-cover;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif m-0 p-0'>
      
    
      <div className="main">
    <div className="w-full h-auto text-center bg-[rgb(242,242,242)] mb-[30px];
">
      <h1 className=" text-center text-[45px] p-5">
        Explore Rentals on <span className="text-[#27875c]">GHAR DEKHO</span>
      </h1>
      <div className="text-[22px] pb-[50px]">
        <p>
          {" "}
          Take a deep dive and browse homes or apartments for rent and local
          insights to find what is right for you.
        </p>
      </div>
      <div className="mainsearch">
        <div className="h-[50px] w-full">
          <input
            type="search"
            name="search"
            id=""
            className="h-9 w-1/5 border mr-[15px] pl-[15px] rounded-[20px] border-solid border-[black] hover:shadow-[1px_1px_10px_rgb(109,241,109)] hover:border-[2.5px] hover:border-solid hover:border-[green];
  outline: none leading-[100px]"
            placeholder="Search Locality"
          />
          <button className="bg-[rgb(254,199,127)] font-bold px-5 py-[7px] rounded-[18px] hover:shadow-[1px_1px_10px_black] hover:cursor-pointer hover:transition-[0.7s];
">Search</button>
        </div>
      </div>
    </div>
  </div>
  
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]">
    <div>
      {" "}
      <img
        className="w-full rounded-t-[10px]"
        src="https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MyUyMGJoayUyMGhvdXNlJTIwaW1nfGVufDB8MHwwfHx8MA%3D%3D"
        alt=""
      />
    </div>
    <div className="card-content">
      <h2 className="text-center p-[7px]">
        3 BHK House for Rent in Jhilmil Colony, New Delhi
      </h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Shubham</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹6000</p>
  </div>
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]">
    <div>
      <img
        className="w-full rounded-t-[10px]"
        src="https://plus.unsplash.com/premium_photo-1694030763033-613b0b7a3f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDElMjBiaGslMjBob3VzZSUyMGltZ3xlbnwwfDB8MHx8fDA%3D"
        alt=""
      />
    </div>
    <div className="card-content">
      <h2 className="text-center p-[7px]">
        1 BHK House for Rent in Andheri East Mumbai
      </h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Shaheed Bhagat Singh</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹1500</p>
  </div>
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]">
    <img
      className="w-full rounded-t-[10px]"
      src="https://plus.unsplash.com/premium_photo-1671358689953-ee06a6671fce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
    <div className="card-content">
      <h2 className="text-center p-[7px]">
        4 BHK Villa For Rent in Diamond Garden Chennai
      </h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Chabaria Pandey</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹12000</p>
  </div>
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]" id="carder3">
    <img
      className="w-full rounded-t-[10px]"
      src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fDQlMjBiaGslMjBob3VzZSUyMGltZ3xlbnwwfDB8MHx8fDA%3D"
      alt=""
    />
    <div className="card-content">
      <h2 className="text-center p-[7px]">
        Alaknand Enclave GMS Road, Tehri Garhwal District
      </h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Akshay Rawat</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹2500</p>
  </div>
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]" id="carder2">
    <img
      className="w-full rounded-t-[10px]"
      src="https://images.unsplash.com/photo-1464146072230-91cabc968266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fDQlMjBiaGslMjBob3VzZSUyMGltZ3xlbnwwfDB8MHx8fDA%3D"
      alt=""
    />
    <div className="card-content">
      <h2 className="text-center p-[7px]">Tapovan Rishikesh, Tehri Garhwal District</h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Lakshya Chaudhary</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹5500</p>
  </div>
  <div className="w-3/12 inline-block bg-[rgb(242,242,242)] mx-[60px] my-[30px] rounded-[10px] hover:shadow-[10px_10px_15px_black] hover:cursor-pointer hover:transition-[0.7s]" id="carder1">
    <img
      className="w-full rounded-t-[10px]"
      src="https://images.unsplash.com/photo-1499814375754-a481db8ab6c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fDQlMjBiaGslMjBob3VzZSUyMGltZ3xlbnwwfDB8MHx8fDA%3D"
      alt=""
    />
    <div className="card-content">
      <h2 className="text-center p-[7px]">Sadbhav Kunj , Panditwari , Dehradun</h2>
    </div>
    <div className="text-center p-2.5">
      <p>Owner - Amit Pokhariyal</p>
      <button className="float-right bg-white mr-10 mt-[18px] mb-[30px] p-2 rounded-lg border-2 border-solid border-[black] hover:bg-black hover:cursor-pointer hover:text-white hover:transition-[0.9s]">Buy Now</button>
    </div>
    <p className="float-left font-[bolder] ml-[50px] p-2">Price:- ₹4500</p>
  </div>
  <div className="w-full h-auto text-center bg-[rgb(242,242,242)] mt-[30px]">
  <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://images.unsplash.com/photo-1721831143956-36bda7fadd01?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">Rentals Near You</h2>
        <p class="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream room today!</p>

        <div className="m-7 p-2 bg-white text-black mr-10 mt-[18px] mb-[30px] rounded-lg border-2 border-solid border-[black]  hover:cursor-pointer hover:text-white hover: hover:bg-black hover:transition-[0.9s]">
      <NavLink to="signup" variant="outlined">Book Now</NavLink>
    </div>

      </div>
    </div>
    <h1 className="text-[45px] p-5">
      <span className="ghardekho">Chat</span> and{" "}
      <span className="ghardekho">Share</span> directly with Landlords
    </h1>
    <div className="text-[22px] pb-[50px]">
      <p>
        {" "}
        No more calling, texting, emailing, and discussing things with landlords
        in different places. <br /> Get a private page to message the landlord
        directly. <br /> Ask questions, share information, <br /> and see it all
        in the same place. <br />
        No chance for misunderstandings. Everyone's always on the same page.
      </p>
    </div>
    <h1 className="text-[45px] p-5">
      Stay safe with <span className="ghardekho">Protected Payments</span>
    </h1>
    <div className="text-[22px] pb-[50px]">
      <p>
        When you pay to confirm the booking, your money is safe with us. <br />{" "}
        We send it to the landlord only 48 hours after you move in unless you
        tell us the place isn't as promised. <br /> If you contact us, we'll
        help you. <br />
        Protecting you against risks. Making your move safer.
      </p>
    </div>
    <h1 className="text-[45px] p-5">
      Get a <span className="ghardekho">Feel of the Place</span> from anywhere
    </h1>
    <div className="text-[22px] pb-[50px]">
      Tired of trying to fit in viewings around your life? Explore several
      places at your own pace from the comfort of your couch. <br /> Enjoy
      high-quality photos, videos, floor plans, detailed descriptions, and more.{" "}
      <br />
      Say goodbye to in-person viewings; - <b> say hello to more free time. </b>
    </div>
    
  </div>
  </div>
    </>
  )
}

export default Home
