import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";
import toothcolour from "../../../images/teethcolour.png";
import veneers from "../../../images/dental-veneer.png";
import mercury from "../../../images/mercury free.png";
import whitening from "../../../images/tooth-whitening.png";

const CosmeticDentistry = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {

          setAnimate(true);

    }, []);
  

  return (
    <div class="">
      <div className="bg-sky-300 py-4 text-white text-center">
        <p className="text-2xl font-semibold">
          Book Your Dental Appointment Today! Call: (123) 456-7890
        </p>
      </div>
    <div class=" container my-24 ">
      <section class="mb-32 text-center md:text-left">
        <div class="block bg-white">
          <div class="flex flex-wrap items-center">
            <div
              class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
              <img
                src={qualityServiceImg}
                alt=""
                class="w-full" />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h1 class=" text-4xl font-semi-bold">
                  <span class="text-danger dark:text-danger-500">Cosmetic Dentistry in Oshawa</span>
                </h1>
                <h2 class="mb-6 text-2xl">
                  <span class="text-danger dark:text-danger-500">Having a great smile can make a huge difference in the way you look & feel.</span>
                </h2>
                <p class="mb-3 text-neutral-500 text-2xl">
                Taunton Village Dental offers a complete range of cosmetic dentistry treatments to create the confident smile you’ve always wanted.</p>
                <p class="mb-6 text-neutral-500 text-2xl">
                We begin with a detailed smile assessment, discussing with you which aspects you like & dislike about your smile. Once our assessment is complete, we will discuss with you some treatment options to help your smile look more natural, healthy & youthful. Call today to schedule your free cosmetic dentistry consultation!</p>
                <a href="tel:99999999">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Call Us 99999999
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className={`flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
      <div class="grid grid-cols-2 grid-rows-2 text-center">

            <a href="/DentalServices/CosmeticDentist/ToothColouredDentistry">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mb-3 hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={toothcolour} alt="tooth" />
                </div>
                <h1 className="text-2xl">Tooth-Coloured Dentistry</h1>
                <p className="text-1xl">
                Modern tooth-coloured fillings made of durable resin or porcelain can be bonded to your teeth for a stronger & more natural-looking effect.
                </p>
              </div>
            </a>

            <a href="/DentalServices/CosmeticDentist/PorcelainVeneers">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 mb-3 mx-1.5 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={veneers} alt="tooth" />
                </div>
                <h1 className="text-2xl">Porcelain Veneers</h1>
                <p className="text-1xl">
                Excellent alternative to crowns & can perfect your smile by masking stains, hiding chips, correcting misalignment & creating uniformity.
                </p>
              </div>
            </a>

            <a href="/DentalServices/CosmeticDentist/MercuryFreeDentistry">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mt-3 hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={mercury} alt="tooth" />
                </div>
                <h1 className="text-2xl">Mercury-Free Dentistry</h1>
                <p className="text-1xl">
                New & advanced fillings made of tooth-coloured materials that contain no metals or mercury.
                </p>
              </div>
            </a>
            <a href="/DentalServices/CosmeticDentist/TeethWhitening">
              <div className="min-w-sm bg-white rounded overflow-hidden shadow-lg p-4 h-full mx-1.5 mt-3 hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={whitening} alt="tooth" />
                </div>
                <h1 className="text-2xl">Teeth Whitening</h1>
                <p className="text-1xl">
                Now you can have significantly whiter teeth in a matter of a few days using advanced teeth whitening techniques.
                </p>
              </div>
            </a>


    </div>

      </div>
      <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
    </div>




    </div>


  );
};

export default CosmeticDentistry;
