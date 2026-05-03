import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, Stethoscope, Search, ShieldCheck, Activity, Droplet, Sparkles, Shield } from "lucide-react";

const DentalExamCleaning = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const examBenefits = [
    {
      title: "Detect Early Issues",
      desc: "Early detection prevents minor problems from turning into major concerns. We identify cavities and gum disease in their earliest stages.",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="64" height="64" viewBox="0 0 512 512">
  <g fill="#4c9cb5">
    <path d="M316.882 163.46c-16.436 0-32 5.202-45.014 15.051-9.49 7.214-22.25 7.214-31.751-.005-13.004-9.844-28.68-15.046-45.331-15.046-41.503 0-75.268 33.913-75.268 75.596 0 15.079 4.347 29.571 12.58 41.92 22.24 33.145 17.089 57.957 17.807 63.451 0 38.29 15.104 73.574 41.445 96.818 6.795 5.977 16.037 7.172 24.077 3.353 7.928-3.767 12.651-11.523 12.323-20.231-.107-3.112-.216-6.328-.216-9.546 0-49.261 15.028-86.07 28.464-86.07s28.464 36.809 28.464 86.07c0 3.219-.109 6.33-.216 9.422-.328 8.766 4.448 16.563 12.463 20.345 8.126 3.833 17.307 2.548 23.955-3.358 26.327-23.353 41.427-58.637 41.427-96.802.184-1.356-2.223-32.402 18.884-65.778 7.298-11.678 11.274-24.999 11.502-38.523v-.015c.583-42.315-33.447-76.652-75.595-76.652m55.281 109.651c-22.11 34.96-19.391 63.315-20.48 71.316 0 35.193-13.824 67.637-37.929 89.021-4.164 3.696-9.239 3.318-12.607 1.73-4.245-2.004-6.676-5.947-6.503-10.56.112-3.229.221-6.457.221-9.798 0-46.769-13.624-96.475-38.869-96.475s-38.869 49.706-38.869 96.475c0 3.34.109 6.678.221 9.922.173 4.565-2.215 8.474-6.389 10.456-3.358 1.6-8.482 1.976-12.732-1.763-24.097-21.262-37.919-53.704-37.919-89.009-.697-5.166 4.33-33.627-19.563-69.235-7.082-10.621-10.824-23.117-10.824-36.135 0-35.947 29.099-65.191 64.864-65.191 14.365 0 27.869 4.473 39.044 12.933 13.255 10.07 31.07 10.075 44.325.005 11.185-8.464 24.575-12.938 38.727-12.938 36.355 0 65.694 29.606 65.189 66.103-.198 11.627-3.627 23.097-9.907 33.143"/>
    <path d="M190.096 191.17c-20.414 2.012-37.233 16.918-41.849 37.093a5.2 5.2 0 0 0 3.909 6.231c2.757.645 5.584-1.079 6.231-3.909 3.617-15.808 16.771-27.488 32.729-29.061a5.2 5.2 0 0 0 4.666-5.688c-.277-2.855-2.83-4.971-5.686-4.666"/>
    <path d="M462.577 467.923V44.08c0-20.843-16.956-37.799-37.797-37.799H87.22c-20.84 0-37.797 16.956-37.797 37.799v423.843c0 20.84 16.956 37.797 37.797 37.797h337.56c20.84-.001 37.797-16.957 37.797-37.797m-402.749 0V44.08c0-15.104 12.287-27.394 27.392-27.394h337.56c15.104 0 27.392 12.29 27.392 27.394v423.843c0 15.104-12.287 27.392-27.392 27.392H87.22c-15.104-.001-27.392-12.288-27.392-27.392"/>
    <path d="M109.915 66.506h138.694a5.202 5.202 0 1 0 0-10.404H109.915a5.202 5.202 0 1 0 0 10.404m191.936 37.413a5.2 5.2 0 0 0-5.202-5.202H109.915a5.202 5.202 0 1 0 0 10.404h186.733a5.203 5.203 0 0 0 5.203-5.202"/>
  </g>
</svg>
    },
    {
      title: "Oral Cancer Screening",
      desc: "Our comprehensive exams include a thorough screening. Early detection significantly improves the chances of successful treatment.",
      icon:  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="40"
    height="48"
    viewBox="0 0 64 64"
  >
    <g fill="#4c9cb5">
      <path
        d="M57.15 18.53C51.29 12.14 41.49 1.94 32.03 5.9 21.47 1.93 13.25 12.35 6.7 18.7c-3.57 3.39-3.57 9.53 0 12.92L21.9 46.7c.1.1.19.18.29.27.39 4.84 4.33 8.79 9.23 9.05 1.27 0 1.33-1.91.06-2-4.07-.24-7.19-3.65-7.35-7.66l-2.06-15.35c-.28-1.7 1.35-3.18 3.01-2.9.97.08 6.71 1.31 7.55 1.04l6.28-1.04c1.66-.28 3.29 1.21 3.02 2.9-.1.74-.4 1.77.56 2.07.85.96 2.42 1.02 3.32.08l3.27-3.24c2.63-2.5 2.63-7.02 0-9.52-2.92-2.87-6.72-7.24-10.69-8.46-.17-.13-.4-.24-.63-.22-3.73-1.26-7.8-1.26-11.53 0-.23-.02-.45.09-.62.22-3.96 1.21-7.79 5.59-10.7 8.46-2.64 2.5-2.64 7.02 0 9.52l5.75 5.7 1.09 8.11L8.1 30.19c-2.79-2.65-2.79-7.43 0-10.07 6.16-5.78 13.76-16.11 23.5-12.23.25.11.53.11.78.01 6.54-2.37 10.1.19 16.63 5.37 3.54 2.81 4.35 4.26 6.73 6.69 2.88 2.68 3.02 7.51.16 10.23l-6.26 6.21c-.93.91.48 2.34 1.41 1.42l6.26-6.21c3.65-3.47 3.5-9.67-.18-13.09zm-12.89-.11H38.8v-4.13c2.03.9 3.9 2.47 5.46 4.13m-11.25 0V12.8c1.28.08 2.55.31 3.79.7v4.92zm-5.79 0V13.5c1.24-.39 2.51-.62 3.79-.7v5.62zm-2-4.13v4.13h-5.47c1.57-1.66 3.44-3.23 5.47-4.13m-8.9 14.21c-1.85-1.75-1.85-4.92 0-6.67l1.41-1.4h28.54l1.41 1.41c1.85 1.75 1.85 4.92 0 6.67l-3.27 3.24c-.13.13-.26.1-.35.06-.19-.06-.17-.34-.13-.52.47-2.9-2.24-5.59-5.14-5.16-.51 0-6.71 1.22-7.1 1.06l-6.28-1.04c-.14-.02-.28-.03-.42-.04-3.55-.18-5.61 2.95-4.77 6.28l-3.91-3.87z"
        data-original="#000000"
      ></path>
      <path
        d="M49.12 38.25c-11.58-9.7-26.52 6.98-15.05 17.05 11.66 9.19 26.07-6.72 15.05-17.05M41.5 56c-4.96.09-9.46-4.1-9.5-9.04-.19-5.56 4.85-10.09 10.44-9.51 11.83 1.33 11 18.33-.94 18.56z"
        data-original="#000000"
      ></path>
      <path
        d="M39.5 47.17c-4.62.12-4.61 6.78 0 6.9 4.62-.12 4.61-6.78 0-6.9m0 4.9c-1.97-.03-1.97-2.87 0-2.9 1.97.03 1.97 2.87 0 2.9"
        data-original="#000000"
      ></path>
      <path
        d="M45 40.31c-5.27.14-5.27 7.75 0 7.88 5.27-.14 5.27-7.75 0-7.88m0 5.88c-2.63-.05-2.63-3.84 0-3.88 2.63.05 2.63 3.84 0 3.88m-6.59-1.51c1.84-1.89-.92-4.6-2.82-2.83-1.84 1.88.94 4.67 2.82 2.83m-13.23-7.63c.55-.06.94-.56.88-1.11l-.59-4.97c-.06-.55-.56-.93-1.11-.88-.55.06-.94.56-.88 1.11l.59 4.97c.06.55.57.94 1.11.88m.47 4.97c.59 0 1.07-.53.99-1.12-.22-.93.13-2.98-1.34-2.86-.55.06-.94.56-.88 1.11.22.94-.11 2.86 1.23 2.87M26 45c1.88-.16.76-2.91-.71-1.71-.62.6-.17 1.74.71 1.71"
        data-original="#000000"
      ></path>
    </g>
  </svg>
    },
    {
      title: "Evaluate Dental Work",
      desc: "We ensure your existing dental work, such as fillings or crowns, are functioning properly and do not need replacement.",
      icon:  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"

width="28" 
height="68" 
viewBox="0 0 512 512">

    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path fill="#4c9cb5" d="M0 512h512V0H0Z" data-original="#000000"></path>
      </clipPath>
    </defs>
    <g
      fill="none"
      stroke="#4c9cb5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="20"
      clipPath="url(#a)"
      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
    >
      <path
        d="M394 227V34c0-13.255-10.745-24-24-24H34c-13.255 0-24 10.745-24 24v444c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V305.758"
        data-original="#000000"
      ></path>
      <path
        d="M148.083 430h107.833c11.736 0 21.25 9.514 21.25 21.25V502H126.833v-50.75c0-11.736 9.514-21.25 21.25-21.25M162 50H50v412h73.667M354 201V50H242M280.333 462H354V267.22M456.984 293.936l-79.898-79.898-67.419-30.017 30.016 67.419 117.168 117.169c10.329 10.328 27.075 10.328 37.403 0v-.001c10.328-10.328 10.328-27.074 0-37.402zM374.894 216.23l-34.32 34.32M481.397 318.35l-37.403 37.403"
        data-original="#000000"
      ></path>
      <path
        d="M162 318H98v64h64zm0-110H98v64h64zm0-110H98v64h64zM218.403 349.674l22.247-22.247 45.145 45.146M218.403 239.674l22.247-22.247 45.145 45.146M229.526 107.427l45.146 45.146M229.526 152.573l45.146-45.146"
        data-original="#000000"
      ></path>
    </g>
  </svg>
    }
  ];

  const cleaningProcess = [
    {
      title: "Plaque & Tartar Removal",
      desc: "Using specialized tools, our hygienists gently remove hardened tartar from above and below the gumline.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Teeth Polishing",
      desc: "After tartar removal, we polish your teeth to remove surface stains and achieve a brilliant, smooth texture.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Fluoride Treatment",
      desc: "We offer professional fluoride treatments to strengthen your tooth enamel and protect against decay.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      
      {/* Minimal Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/5 dark:bg-lightblue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/general-dentistry" 
            className="inline-flex items-center gap-2 text-mydark dark:text-lightbg/60 hover:text-lightblue dark:hover:text-lightblue font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lightblue/10 text-lightblue mb-6"
            >
              

            
 <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="48"
    height="48"
    viewBox="0 0 64 64"
  >
    <g fill="#4c9cb5" data-name="Outline">
      <path
        d="M18.172 10.057a11.7 11.7 0 0 0-7.287 2.631 1 1 0 1 0 1.252 1.558 9.7 9.7 0 0 1 6.035-2.189 1 1 0 0 0 0-2"
        data-original="#000000"
      ></path>
      <path
        d="M60.806 29.362a17.4 17.4 0 0 0-1.187-15.146l.971-.531a2.709 2.709 0 0 0 0-4.755l-1.221-.668a5.83 5.83 0 0 1-2.323-2.324l-.668-1.22a2.711 2.711 0 0 0-4.756 0l-.668 1.221a6 6 0 0 1-.574.843c-6.293-1.99-12.908.176-18.38 6.03C24.71 5 16.714 4.958 11.21 7.742c-4.694.353-7.755 1.9-8.842 4.5a6.82 6.82 0 0 0 .426 5.61 17.4 17.4 0 0 0 .4 11.51 35 35 0 0 0 3.7 6.728c1.73 2.654 3.364 5.162 4.036 8.158a21.3 21.3 0 0 1 .377 3.9 21 21 0 0 0 .522 4.654c1.341 5.106 4.339 7.982 8.3 7.891 6.237-.142 7.782-6.206 9.023-11.073.74-2.9 1.407-5.948 2.85-5.948s2.11 3.047 2.85 5.948c1.241 4.867 2.786 10.925 9.022 11.073 3.943.045 6.961-2.782 8.3-7.891a21 21 0 0 0 .522-4.654 21.3 21.3 0 0 1 .377-3.9 15 15 0 0 1 .875-2.638c4.057-.482 6.741-1.979 7.748-4.372.841-1.994.406-4.439-1.223-7.093.107-.263.233-.515.333-.783M52.708 6.9l.668-1.22a.712.712 0 0 1 1.248 0l.668 1.22a7.8 7.8 0 0 0 3.117 3.119l1.222.668a.711.711 0 0 1 0 1.247l-1.222.668a7.8 7.8 0 0 0-3.117 3.117l-.668 1.222a.712.712 0 0 1-1.248 0l-.668-1.22a7.8 7.8 0 0 0-3.117-3.121l-1.222-.669a.71.71 0 0 1 0-1.246l1.221-.668A7.8 7.8 0 0 0 52.708 6.9m-48.5 6.117a4.97 4.97 0 0 1 3.114-2.49 17.5 17.5 0 0 0-3.342 4.469 3.8 3.8 0 0 1 .232-1.982zm46.905 30.8a23 23 0 0 0-.425 4.264 19.3 19.3 0 0 1-.458 4.22c-.635 2.431-2.342 6.472-6.314 6.4-4.721-.111-5.947-4.919-7.132-9.567-.965-3.732-1.842-7.578-4.9-7.46-2.872.11-3.738 3.8-4.672 7.46-1.186 4.648-2.411 9.448-7.132 9.567-3.991.1-5.679-3.966-6.314-6.4a19.3 19.3 0 0 1-.458-4.22 23 23 0 0 0-.425-4.264c-.75-3.348-2.56-6.126-4.311-8.813a33 33 0 0 1-3.507-6.341 15.6 15.6 0 0 1-.822-8.343c3.929 5.5 12.569 11.546 22.949 15.917 9.007 3.732 17.4 5.738 24.534 5.552a16 16 0 0 0-.609 2.02zm1.494-4.079c-6.4.46-15.549-1.514-24.643-5.344-11.053-4.654-20-11.16-23.013-16.688a15.2 15.2 0 0 1 6.331-7.722c4.971-2.962 12.794-3.218 19.88 4.9C32.274 17.1 33.5 20.077 39 20.135a1 1 0 0 0 0-2c-3.9 0-4.91-1.828-5.8-3.656 4.592-5.056 10.04-7.226 15.28-6.133l-1.067.583a2.71 2.71 0 0 0 0 4.756l1.221.668a5.82 5.82 0 0 1 2.323 2.324l.668 1.219a2.71 2.71 0 0 0 4.756 0l.668-1.221a5.9 5.9 0 0 1 .93-1.254 15.42 15.42 0 0 1 .959 13.235A33 33 0 0 1 55.428 35a47 47 0 0 0-2.817 4.73zm7.237-3.27c-.606 1.44-2.316 2.46-4.815 2.962.631-1.116 1.34-2.213 2.071-3.334.787-1.209 1.579-2.45 2.294-3.747a5.13 5.13 0 0 1 .454 4.111z"
        data-original="#000000"
      ></path>
      <path
        d="m50.224 21.669-.684-.369a2.82 2.82 0 0 1-1.125-1.127l-.374-.683a1.96 1.96 0 0 0-1.719-1.019 1.96 1.96 0 0 0-1.722 1.013l-.374.684A2.82 2.82 0 0 1 43.1 21.3l-.683.373a1.958 1.958 0 0 0 0 3.436l.684.375a2.8 2.8 0 0 1 1.126 1.126l.374.683a1.96 1.96 0 0 0 1.718 1.02 1.96 1.96 0 0 0 1.719-1.019l.374-.685a2.83 2.83 0 0 1 1.125-1.125l.684-.374a1.958 1.958 0 0 0 0-3.436zm-1.643 2.056a4.8 4.8 0 0 0-1.921 1.92l-.3.683-.374-.682a4.8 4.8 0 0 0-1.921-1.921l-.684-.3.683-.374a4.8 4.8 0 0 0 1.922-1.921l.3-.684.374.683a4.83 4.83 0 0 0 1.921 1.921l.684.3z"
        data-original="#000000"
      ></path>
      <circle cx="9" cy="16.307" r="1" data-original="#000000"></circle>
    </g>
  </svg>


            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Dental Examination<span className="bg-clip-text text-lightblue dark:text-lightblue">  & Cleaning</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              Welcome to Highland Hills Dental Centre! We are committed to providing comprehensive dental care to ensure your oral health and beautiful smile. Regular exams and cleanings are the heart of our preventive approach.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group border border-gray-100 dark:border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Dental Examination Room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lightblue/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lightblue/20 dark:bg-lightblue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Section 1: Exams */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors"><span className="bg-clip-text text-lightblue dark:text-lightblue">Dental  Exams </span>Are Important</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              During these appointments, our experienced dentists perform a thorough evaluation of your teeth, gums, and overall oral structures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examBenefits.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden">
                {/* Step number watermark */}
               
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Cleanings */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Cleaning Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our skilled dental hygienists perform professional cleanings to complement your regular at-home oral hygiene routine.
            </p>
          </div>
          
          <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-16 pb-10">
            {/* Center Line Track */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-lightblue/10 dark:bg-white/5 -translate-x-1/2 rounded-full z-0"></div>
            {/* Center Line Fill (Animated) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="hidden md:block absolute left-1/2 top-4 w-1 bg-gradient-to-b from-lightblue via-lightblue/80 to-transparent -translate-x-1/2 rounded-full z-0 origin-top"
            ></motion.div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {cleaningProcess.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} group`}
                >
                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:pr-16 justify-end' : 'md:pl-16 justify-start'}`}>
                    <div className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden w-full max-w-lg">
                      {/* Step number watermark */}
                      <div className="absolute -top-4 right-4 text-[100px] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-lightblue/[0.05] dark:group-hover:text-lightblue/[0.05] transition-colors pointer-events-none z-0">
                        0{idx + 1}
                      </div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-lightblue/10 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform relative z-10">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                      <p className="text-mydark dark:text-lightbg/70 leading-relaxed font-light relative z-10 text-lg">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lightbg dark:bg-myblack border-4 border-lightblue/30 dark:border-lightblue/20 items-center justify-center shadow-[0_0_20px_rgba(76,156,181,0.2)] z-20 group-hover:border-lightblue transition-colors">
                     <div className="w-4 h-4 bg-lightblue rounded-full group-hover:scale-125 transition-transform"></div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Minimalist CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lightblue/10 dark:bg-lightblue/5 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Maintain Optimal Oral Health</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            We recommend scheduling regular exams and cleanings every six months. By partnering with us, you're taking proactive steps toward a healthier smile that lasts a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-lightblue text-myblack px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(76,156,181,0.3)] hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Schedule Now
            </a>
            <a 
              href="tel:+1234567890"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-lightblue/30 dark:border-white/20 bg-transparent text-myblack dark:text-lightbg px-8 py-4 rounded-full font-bold hover:bg-lightblue/20 dark:hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Clinic
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DentalExamCleaning;
