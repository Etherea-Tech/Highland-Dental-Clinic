import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  Sparkles,
  Activity,
  Scissors,
  Layers,
  Moon,
  ArrowRight,
} from "lucide-react";

const GeneralServices = () => {
  const services = [
    {
      id: "exam",
      title: "Dental Exam and Cleaning",
      description:
        "Comprehensive checkups and professional cleanings to maintain optimal oral health and prevent decay.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 64 64"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
        >
          <g fill="currentColor" data-name="Outline">
            <path d="M18.172 10.057a11.7 11.7 0 0 0-7.287 2.631 1 1 0 1 0 1.252 1.558 9.7 9.7 0 0 1 6.035-2.189 1 1 0 0 0 0-2"></path>
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
      ),
      href: "/services/dental-exam-and-cleaning",
    },
    {
      id: "emergency",
      title: "Emergency Dental Care",
      description:
        "Immediate, priority treatment for severe toothaches, lost fillings, and other urgent dental crises.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 682.667 682.667"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
        >
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path fill="currentColor" d="M0 512h512V0H0Z" />
            </clipPath>
          </defs>
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            clipPath="url(#a)"
            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
          >
            <path
              strokeMiterlimit="22.926"
              d="M346.574 439.13c-12.758 4.453-26.684 6.871-41.575 6.871-27.626 0-59.567-16.45-84.653-22.654M20.464 367.255c-6.803-17.124-10.465-36.175-10.465-56.252 0-38.105 15.79-72.52 41.182-97.063 33.599-32.478 32.151-42.951 35.829-76.048L94.998 86c4.866-31.607 16.159-59.998 50-59.998 14.749 0 27.739 7.596 31.516 28.337l13.094 71.883c4.263 23.408 15.964 32.529 30.391 32.529s26.127-9.122 30.39-32.529l13.094-71.883c3.778-20.74 16.767-28.337 31.516-28.337 33.842 0 45.134 28.391 50 59.998l7.988 51.892c3.678 33.097 2.23 43.57 35.829 76.048 19.264 18.62 33 42.923 38.508 70.208M285.812 406.212c-22 3.5-44.175 7.412-65.813 17.05-23.639 10.527-57.247 22.739-85.001 22.739-20.523 0-39.213-4.588-55.532-12.781"
            />
            <path
              strokeMiterlimit="22.926"
              d="m415.4 470.805 82.962-143.696c10.508-18.285-3.081-41.123-23.719-41.106h-167.6c-22.219 0-34.914 24.903-22.775 42.849l82.856 143.511c11.062 19.099 38.727 17.736 48.276-1.558M390.782 381.006v54.996m0-100v.008"
            />
            <path strokeMiterlimit="2.613" d="M43.86 405.698h.007" />
          </g>
        </svg>
      ),
      href: "/emergency",
    },
    {
      id: "restorations",
      title: "Tooth Coloured Restorations",
      description:
        "Aesthetic, metal-free fillings that blend seamlessly with your natural teeth to repair cavities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 512.001 512.001"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M281.721 335.995c-14.957 2.703-30.773 1.725-45.629-3.214a7.5 7.5 0 1 0-4.733 14.235c17.141 5.699 35.495 6.91 53.029 3.74a7.5 7.5 0 0 0 6.046-8.715 7.495 7.495 0 0 0-8.713-6.046m103.887 14.761c17.482 3.159 35.836 1.975 53.029-3.74a7.5 7.5 0 1 0-4.733-14.235c-14.863 4.942-30.676 5.916-45.629 3.214a7.501 7.501 0 0 0-2.667 14.761" />
            <path d="M511.973 242.809c-.11-4.941-.567-9.906-1.357-14.754a8.5 8.5 0 0 0-8.427-7.166h-10.966a633 633 0 0 1-5.058-15.505 7.5 7.5 0 1 0-14.323 4.459 635 635 0 0 0 3.547 11.02c-9.698-.141-19.378-2.476-28.051-6.813-18.027-9.014-30.478-25.459-34.45-44.626 17.725 2.998 35.455-6.235 43.302-22.308a507 507 0 0 0 6.107 28.45 7.5 7.5 0 1 0 14.571-3.562c-3.934-16.093-7.014-32.097-9.152-47.568l-1.04-7.518c-.006-.042-.021-.081-.028-.123-.017-.107-.026-.213-.047-.32l-7.964-39.823a8 8 0 0 0-.205-.789 7 7 0 0 0-.115-.804l-3.9-19.502c-1.639-8.193-8.893-14.139-17.248-14.139h-99.066L326.895 30.21a8.8 8.8 0 0 0-6.264-2.598h-19.552v-18.7c0-4.914-3.997-8.911-8.911-8.911h-25.616a8.96 8.96 0 0 0-6.3 2.609l-11.196 11.196H95.372a7.5 7.5 0 0 0 0 15h121.682v67.833H15.001V28.806h45.37a7.5 7.5 0 0 0 0-15H8.717C3.91 13.806 0 17.716 0 22.523v80.4c0 4.806 3.91 8.717 8.717 8.717h240.342l11.185 11.186a8.97 8.97 0 0 0 6.311 2.62h25.616c4.913 0 8.911-3.998 8.911-8.911v-18.7h19.552a8.78 8.78 0 0 0 6.258-2.593l11.214-11.213h106.711l6.659 33.298-7.778 20.909c-4.45 11.966-17.167 18.907-29.567 16.156-.86-.191-1.735-.349-2.605-.52v-7.262a8.6 8.6 0 0 0-2.556-6.091c-1.623-1.595-3.858-2.469-6.131-2.446-15.436.276-30.284 3.765-44.135 10.369-15.122 7.211-32.299 7.262-47.124.138-15.352-7.377-31.841-10.909-49.021-10.493-27.556.665-53.538 11.861-73.161 31.527-19.624 19.665-30.766 45.671-31.374 73.228-.521 23.649 6.511 46.228 20.339 65.297 19.291 26.6 29.487 57.308 29.487 88.803v21.707a7.5 7.5 0 0 0 15 0v-21.707c0-34.679-11.185-68.432-32.345-97.61-11.887-16.394-17.934-35.813-17.485-56.159 1.09-49.328 40.579-88.899 89.9-90.089 14.795-.363 28.968 2.677 42.164 9.017 18.937 9.099 40.836 9.057 60.077-.119a91.1 91.1 0 0 1 31.365-8.564c0 2.952-.024 4.197.13 7.074.005.133.009.265.021.397 1.673 28.476 18.185 53.692 43.954 66.576a80.2 80.2 0 0 0 35.683 8.424h20.213c.245 2.411.396 4.836.45 7.255.455 20.353-5.589 39.779-17.479 56.179-21.164 29.191-32.351 62.957-32.351 97.646v78.523c0 11.859-9.648 21.507-21.508 21.507-20.106 0-37.708-14.281-41.85-33.957L361.365 356.53c-2.324-11.045-12.204-19.061-23.491-19.061h-5.75c-11.286 0-21.166 8.016-23.491 19.061l-22.424 106.513C282.067 482.719 264.465 497 244.358 497c-11.86 0-21.508-9.648-21.508-21.508V453.65a7.5 7.5 0 0 0-15 0v21.842c0 20.131 16.378 36.508 36.508 36.508 27.16 0 50.934-19.29 56.529-45.868l22.424-106.512c.873-4.143 4.579-7.151 8.813-7.151h5.75c4.235 0 7.941 3.007 8.813 7.15l22.424 106.513C374.706 492.711 398.479 512 425.639 512c20.131 0 36.508-16.377 36.508-36.508V396.97c0-31.507 10.2-62.228 29.495-88.841 13.83-19.076 20.86-41.663 20.331-65.32M232.055 28.806h12.61v67.833h-12.61zm54.027 81.639h-17.004l-9.412-9.412v-76.62l9.412-9.412h17.004zm49.476-41.417a8.78 8.78 0 0 0-6.258 2.593l-11.214 11.213h-17.004V70.223h6.306a7.5 7.5 0 0 0 0-15h-6.306v-12.61h17.004l11.208 11.208a8.8 8.8 0 0 0 6.264 2.598h19.552v12.61zm34.552 0v-12.61h67.062c1.23 0 2.297.875 2.538 2.08l2.106 10.53z" />
            <path d="M186.972 56.418a7.5 7.5 0 0 0 0-15h-41.416a7.5 7.5 0 0 0 0 15zM27.611 76.528a7.5 7.5 0 0 0 7.5 7.5h151.86a7.5 7.5 0 0 0 0-15H35.112a7.5 7.5 0 0 0-7.501 7.5m342.979 96.837c-11.475 5.471-23.874 8.095-35.733 8.095-12.169 0-24.353-2.764-35.235-7.992a7.5 7.5 0 0 0-6.496 13.521c12.896 6.197 27.326 9.472 41.731 9.472 14.465 0 29.054-3.292 42.188-9.555a7.5 7.5 0 0 0 3.542-9.998c-1.783-3.74-6.261-5.327-9.997-3.543" />
          </g>
        </svg>
      ),
      href: "/services/tooth-coloured-restorations",
    },
    {
      id: "root-canals",
      title: "Root Canals",
      description:
        "Expert endodontic therapy to save severely infected or damaged teeth and relieve pain.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          fillRule="evenodd"
          viewBox="0 0 1707 1707"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M1061 1706c-81 0-109-124-109-150v-259c0-206-198-213-198 0v265c-10 66-58 190-161 128-81-49-183-204-204-355-30-216 24-167-87-386C83 518 404 233 853 451c450-218 771 67 552 498-112 219-58 170-88 386-21 156-153 371-256 371M560 416c-268 0-365 235-222 515 115 227 61 186 91 398 22 162 165 365 232 334 24-11 45-53 53-105v-261c0-266 278-259 278 0v257c3 38 31 144 101 102 72-44 166-189 185-327 29-212-25-171 91-398 205-402-91-647-507-440-5 3-12 3-18 0-100-50-198-75-284-75" />
            <path d="M1085 1053c-188 0-451-151-584-49-51 39-157 72-157 28 1-39 52 2 133-60 192-147 558 137 729 6 68-52 134-52 178-43 26 5 17 44-9 39-132-28-129 79-290 79M410 773c-11 0-20-9-20-20 0-120 98-217 218-217 27 0 27 40 0 40-98 0-177 79-177 177-1 11-9 20-21 20m886 0c-11 0-20-9-20-20 0-98-80-178-178-178-26 0-26-39 0-39 121 0 218 97 218 217 0 11-9 20-20 20M989 218l-127-33c-11-3-17-14-14-25l39-145c3-11 14-17 24-14l122 33c11 2 17 13 14 24l-39 145c-2 9-10 15-19 15m-97-67 83 23 28-107-83-22z" />
            <path d="m1004 293-192-51c-14-4-19-21-10-33l50-57c17-20 48 7 30 27l-29 33 125 33c-6-29-19-61 7-67 11-2 22 5 24 16l14 75c3 12-7 24-19 24" />
            <path d="M720 979c-13 0-23-12-19-25l190-711c7-26 45-15 39 10L739 964c-2 9-10 15-19 15" />
            <circle cx="604" cy="1162" r="20" />
            <circle cx="663" cy="1069" r="20" />
            <circle cx="545" cy="1064" r="20" />
            <circle cx="514" cy="1152" r="20" />
            <circle cx="479" cy="1234" r="20" />
            <circle cx="582" cy="1250" r="20" />
            <circle cx="660" cy="1229" r="20" />
            <circle cx="656" cy="1326" r="20" />
            <circle cx="573" cy="1359" r="20" />
            <circle cx="490" cy="1329" r="20" />
            <circle cx="506" cy="1416" r="20" />
            <circle cx="601" cy="1453" r="20" />
            <circle cx="669" cy="1420" r="20" />
            <circle cx="596" cy="1557" r="20" />
            <circle cx="535" cy="1498" r="20" />
            <circle cx="662" cy="1513" r="20" />
            <circle cx="651" cy="1599" r="20" />
            <circle cx="686" cy="1133" r="20" />
            <circle cx="1115" cy="1162" r="20" />
            <circle cx="946" cy="1088" r="20" />
            <circle cx="1156" cy="1107" r="20" />
            <circle cx="1204" cy="1152" r="20" />
            <circle cx="1239" cy="1234" r="20" />
            <circle cx="1136" cy="1250" r="20" />
            <circle cx="1058" cy="1229" r="20" />
            <circle cx="1062" cy="1326" r="20" />
            <circle cx="1145" cy="1359" r="20" />
            <circle cx="1228" cy="1329" r="20" />
            <circle cx="1213" cy="1416" r="20" />
            <circle cx="1117" cy="1453" r="20" />
            <circle cx="1050" cy="1420" r="20" />
            <circle cx="1122" cy="1557" r="20" />
            <circle cx="1183" cy="1498" r="20" />
            <circle cx="1057" cy="1513" r="20" />
            <circle cx="1067" cy="1599" r="20" />
            <circle cx="1032" cy="1133" r="20" />
            <circle cx="836" cy="1051" r="20" />
            <circle cx="739" cy="1073" r="20" />
            <circle cx="1250" cy="1073" r="20" />
            <circle cx="459" cy="1093" r="20" />
          </g>
        </svg>
      ),
      href: "/services/root-canals",
    },
    {
      id: "extractions",
      title: "Extractions",
      description:
        "Gentle and safe removal of severely decayed, damaged, or problematic teeth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 64 64"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <path d="M62 49h-8.25c-3.6 0-7.11.61-10.46 1.79.46-1.12.79-2.29.94-3.5l.09-.73c.23-1.81-.39-3.59-1.68-4.87a5.81 5.81 0 0 0-4.88-1.64l-3.75.5c-1.33.18-2.67.18-4 0l-3.75-.5a5.8 5.8 0 0 0-4.88 1.64 5.78 5.78 0 0 0-1.68 4.87l.09.73c.15 1.2.48 2.38.94 3.5A31.4 31.4 0 0 0 10.27 49H2c-.55 0-1 .45-1 1s.45 1 1 1h8.25c4.15 0 8.17.86 11.95 2.53.42.61.77 1.26 1.03 1.96l2.08 5.53c.45 1.19 1.6 1.98 2.87 1.98a3.07 3.07 0 0 0 3.03-2.65l.78-5.74.78 5.74A3.08 3.08 0 0 0 35.8 63c1.27 0 2.42-.8 2.87-1.98l2.08-5.53c.26-.69.61-1.35 1.03-1.96 3.78-1.68 7.8-2.53 11.95-2.53h8.25c.55 0 1-.45 1-1s-.45-1-1-1zM36.81 60.31c-.16.41-.56.69-.99.69-.53 0-.98-.4-1.05-.92l-.86-6.29c-.13-.95-.95-1.67-1.91-1.67s-1.78.72-1.91 1.67l-.86 6.29c-.07.52-.52.92-1.05.92-.44 0-.84-.28-.99-.69l-2.08-5.53c-.33-.88-.78-1.72-1.32-2.48-1.1-1.55-1.8-3.37-2.03-5.25l-.09-.73c-.15-1.19.26-2.36 1.11-3.2s2.02-1.24 3.21-1.08l3.75.5c1.5.2 3.03.2 4.53 0l3.75-.5c1.19-.16 2.36.23 3.21 1.08.85.84 1.26 2.01 1.11 3.2s-.09.73-.09.73c-.23 1.89-.94 3.7-2.03 5.25-.54.77-.99 1.6-1.32 2.49l-2.08 5.53zM14 47c2.76 0 5-2.24 5-5v-2c0-6.25 4.56-11.66 10.66-12.78.68.5 1.48.78 2.34.78s1.69-.29 2.34-.78C40.44 28.34 45 33.75 45 40v2c0 2.76 2.24 5 5 5 .55 0 1-.45 1-1v-6c0-6.99-3.85-13.38-9.93-16.68C43.58 20.88 45 17.57 45 14v-1c.55 0 1-.45 1-1V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v7c0 .55.45 1 1 1v1c0 1.86-.73 3.62-2.04 4.95-.79.79-1.76 1.36-2.81 1.7-1.29-.8-3-.8-4.28 0a6.96 6.96 0 0 1-4.86-6.64v-1c.55 0 1-.45 1-1V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v7c0 .55.45 1 1 1v1c0 3.57 1.42 6.89 3.93 9.32-6.08 3.3-9.93 9.69-9.93 16.68v6c0 .55.45 1 1 1zm35-7v4.83c-1.16-.41-2-1.53-2-2.83v-2c0-6.85-4.75-12.85-11.27-14.53l.03-.1c.05-.15.09-.3.13-.45.02-.07.04-.14.05-.22.04-.23.06-.46.06-.7 0-.17-.01-.35-.04-.52l.23.06c.33.08.65.18.97.28.13.04.26.08.39.13.44.16.88.33 1.32.52a17 17 0 0 1 10.12 15.54zM40 5c0-1.1.9-2 2-2s2 .9 2 2v6h-4zm-1.63 15.37A8.97 8.97 0 0 0 41 14v-1h2v1c0 3.27-1.41 6.3-3.88 8.39-.13-.05-.26-.09-.39-.14-.17-.07-.35-.13-.53-.2-.25-.09-.5-.16-.74-.24-.16-.05-.32-.1-.48-.14-.06-.02-.13-.04-.19-.06.57-.35 1.09-.77 1.58-1.25zm-5.04 2.14c.08.07.16.15.24.27a1.97 1.97 0 0 1 .11 2.31c-.04.04-.07.09-.1.14s-.08.1-.13.15l-.07.07c-.74.73-1.97.77-2.81-.05a.6.6 0 0 1-.14-.17c-.02-.03-.04-.05-.06-.08-.08-.11-.14-.24-.19-.37-.03-.06-.06-.11-.08-.18q-.09-.285-.09-.6c0-.315.04-.42.11-.63v-.03c.07-.19.17-.38.3-.54.01-.02.02-.03.03-.05.06-.09.14-.17.23-.25.75-.65 1.89-.65 2.65 0zM20 5c0-1.1.9-2 2-2s2 .9 2 2v6h-4zm1 8h2v1c0 3.63 2.16 6.85 5.41 8.25-.02.04-.03.09-.05.14-.08.19-.15.38-.21.58l-.06.23c-.06.26-.09.53-.09.8v.24c-.08-.03-.15-.06-.23-.09-.3-.12-.59-.26-.87-.41-.13-.07-.27-.14-.4-.21-.39-.23-.78-.47-1.15-.75-.01 0-.02-.01-.03-.02-2.75-2.1-4.32-5.29-4.32-8.75v-1zm-6 27a17 17 0 0 1 9.61-15.3c.14.1.29.18.44.27s.29.19.45.28c.27.15.54.29.81.43.13.07.27.14.4.2.03.02.07.03.1.05-5.75 2.15-9.8 7.74-9.8 14.07v2c0 1.3-.84 2.42-2 2.83V40z" />
        </svg>
      ),
      href: "/services/extractions",
    },
    {
      id: "crowns",
      title: "Crown and Bridge Procedures",
      description:
        "Custom-crafted prosthetics to restore the strength, function, and appearance of damaged or missing teeth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 64 64"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g data-name="molar crown">
            <path d="m45.76 47.78-1.1 5.36a3.61 3.61 0 0 1-7 .11l-2-8.11a3.76 3.76 0 0 0-7.3 0c-2 8-1.86 9-3.26 10.09a3.61 3.61 0 0 1-5.75-2.09C17 41.79 16.7 37.51 12.92 32.92A12.7 12.7 0 0 1 10.19 27H15a1 1 0 0 0 0-2H8.33a14 14 0 0 1 18.2-16.25c9.16 3.16 12.27-3 20.39.15a1 1 0 0 0 .72-1.9c-9-3.46-11.92 2.76-20.45-.17C15.08 2.64 3.06 14.09 6.6 26.28a1 1 0 0 0 1 .72h.61c1.06 7 5.19 7 6.89 15.24l2.32 11.31a5.61 5.61 0 0 0 10.93.18l2-8.11a1.76 1.76 0 0 1 3.42 0l2 8.11a5.61 5.61 0 0 0 9 3c2.09-1.7 2.06-3.71 3.06-8.57a1 1 0 0 0-2.07-.38" />
            <path d="M42.48 11.13c-.07 0-10.38 6.39-21 0a1 1 0 0 0-1 1.71A24.3 24.3 0 0 0 32 16a24.3 24.3 0 0 0 11.52-3.14 1 1 0 0 0-1.04-1.73" />
            <path d="M51.38 9.07a1 1 0 0 0-1.18 1.62A13.88 13.88 0 0 1 55.67 25H41.52a1.38 1.38 0 0 1-1.38-1.38 4.57 4.57 0 0 0-4.57-4.56h-7.14a4.57 4.57 0 0 0-4.57 4.56A1.39 1.39 0 0 1 22.48 25H19a1 1 0 0 0 0 2h3.48a3.38 3.38 0 0 0 3.38-3.38 2.57 2.57 0 0 1 2.57-2.56h7.14a2.57 2.57 0 0 1 2.57 2.56A3.39 3.39 0 0 0 41.52 27h12.29c-1 5.69-4.23 5.88-6.3 12.77a1 1 0 0 0 1 1.29c1.6 0 .65-2.6 4.15-6.86a14.67 14.67 0 0 0 3.17-7.2h.61a1 1 0 0 0 1-.72 15.84 15.84 0 0 0-6.06-17.21M47.57 43a1 1 0 0 0 0 2 1 1 0 0 0 0-2" />
          </g>
        </svg>
      ),
      href: "/services/crown-and-bridge-procedures",
    },
    {
      id: "guards",
      title: "Nightguards and Sportsguards",
      description:
        "Custom-fitted appliances to protect your teeth from grinding, clenching, and athletic injuries.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="28"
          height="28"
          viewBox="0 0 512 512"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M256 312c-75 0-136-61-136-136V71c0-11 9-20 20-20 11.1 0 20 9 20 20v105c0 52.9 43.1 96 96 96s96-43.1 96-96V71c0-11 9-20 20-20 11.1 0 20 9 20 20v105c0 75-61 136-136 136M140 61c-5.5 0-10 4.5-10 10v105c0 69.5 56.5 126 126 126s126-56.5 126-126V71c0-5.5-4.5-10-10-10s-10 4.5-10 10v105c0 58.4-47.6 106-106 106s-106-47.6-106-106V71c0-5.5-4.5-10-10-10" />
            <path d="M256 461c-53.3 0-99.4-13.9-137.1-41.4-31.8-23.2-57.8-56.2-77.3-98C4.1 241.1 0 147.5 0 111V71.1C0 60 9 51 20.1 51 31 51 40 59.9 40.2 70.8c1.5 97.4 18.4 168.4 50.2 211.1 24.6 33 57.3 49.1 100.1 49.1 37.3 0 57.3 22.4 65.5 34.9 8.2-12.5 28.2-34.9 65.5-34.9 42.8 0 75.5-16.1 100.2-49.1 31.8-42.7 48.7-113.7 50.2-211.1.2-10.9 9.2-19.8 20.1-19.8 11 0 20 9 20 20.1V111c0 36.5-4.1 130.1-41.6 210.6-19.5 41.9-45.5 74.9-77.3 98C355.4 447.1 309.3 461 256 461M20.1 61C14.5 61 10 65.5 10 71.1V111c0 35.8 4 127.7 40.6 206.4C92 406 161.1 451 256 451s164-45 205.4-133.6C498 238.7 502 146.8 502 111V71.1c0-5.5-4.5-10.1-10.1-10.1-5.5 0-10 4.5-10.1 9.9C479.1 250.1 425.1 341 321.5 341c-43.8 0-60.3 35.5-60.9 37-.8 1.8-2.6 3-4.6 3s-3.8-1.2-4.6-3c-.7-1.5-17.1-37-60.9-37C86.9 341 32.9 250.1 30.1 70.9c-.1-5.4-4.6-9.9-10-9.9" />
            <path d="M35 66h90v10H35zm352 0h90v10h-90zM85 136H75c-13.8 0-25-11.2-25-25s11.2-25 25-25h10c13.8 0 25 11.2 25 25s-11.2 25-25 25M75 96c-8.3 0-15 6.7-15 15s6.7 15 15 15h10c8.3 0 15-6.7 15-15s-6.7-15-15-15zm10 104H75c-13.8 0-25-11.2-25-25s11.2-25 25-25h10c13.8 0 25 11.2 25 25s-11.2 25-25 25m-10-40c-8.3 0-15 6.7-15 15s6.7 15 15 15h10c8.3 0 15-6.7 15-15s-6.7-15-15-15zm3.3 106.7c-3 0-6.1-.6-8.9-1.6l3.6-9.3c3.4 1.3 7.1 1.3 10.5.1l9.4-3.4c7.8-2.8 11.8-11.5 9-19.2-1.4-3.8-4.1-6.8-7.8-8.5-3.6-1.7-7.7-1.9-11.5-.5l-9.4 3.4c-4 1.5-7.2 4.5-8.8 8.5l-9.3-3.7c2.6-6.6 8-11.7 14.6-14.1l9.4-3.4c6.3-2.3 13.1-2 19.1.8 6.1 2.8 10.6 7.8 12.9 14.1 4.7 13-2 27.3-14.9 32l-9.4 3.4c-2.7.9-5.6 1.4-8.5 1.4m45.8 51.5-7.1-7.1 7.1-7.1c5.8-5.8 5.8-15.4 0-21.2s-15.4-5.8-21.2 0l-7.1 7.1-7.1-7.1 7.1-7.1c9.7-9.7 25.6-9.7 35.4 0 9.7 9.7 9.7 25.6 0 35.4zM437 136h-10c-13.8 0-25-11.2-25-25s11.2-25 25-25h10c13.8 0 25 11.2 25 25s-11.2 25-25 25m-10-40c-8.3 0-15 6.7-15 15s6.7 15 15 15h10c8.3 0 15-6.7 15-15s-6.7-15-15-15zm10 104h-10c-13.8 0-25-11.2-25-25s11.2-25 25-25h10c13.8 0 25 11.2 25 25s-11.2 25-25 25m-10-40c-8.3 0-15 6.7-15 15s6.7 15 15 15h10c8.3 0 15-6.7 15-15s-6.7-15-15-15zm6.7 106.7c-2.9 0-5.8-.5-8.6-1.5l-9.4-3.4c-13-4.7-19.7-19.1-14.9-32 2.3-6.3 6.9-11.3 12.9-14.1 6.1-2.8 12.8-3.1 19.1-.8l9.4 3.4c6.7 2.4 12 7.6 14.6 14.1l-9.3 3.7c-1.6-3.9-4.8-7-8.8-8.5l-9.4-3.4c-3.8-1.4-7.8-1.2-11.5.5-3.6 1.7-6.4 4.7-7.8 8.5-2.8 7.8 1.2 16.4 9 19.2l9.4 3.4c3.4 1.2 7.1 1.2 10.5-.1l3.6 9.3c-2.7 1.2-5.8 1.7-8.8 1.7m-45.8 51.5-7.1-7.1c-9.7-9.7-9.7-25.6 0-35.4 9.7-9.7 25.6-9.7 35.4 0l7.1 7.1-7.1 7.1-7.1-7.1c-5.8-5.8-15.4-5.8-21.2 0s-5.8 15.4 0 21.2l7.1 7.1z" />
          </g>
        </svg>
      ),
      href: "/services/nightguards-and-sportsguards",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lightblue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Area */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">
                Comprehensive Care
              </span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors">
              General{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">
                Dentistry
              </span>
            </h1>
            <p className="text-lg text-mydark dark:text-lightbg/70 leading-relaxed font-light transition-colors">
              From routine cleanings to complex restorative procedures, our
              comprehensive general dentistry services form the foundation of a
              lifetime of healthy, beautiful smiles.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              key={service.id}
              className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl p-8 hover:border-lightblue/30 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none dark:hover:bg-white/[0.04] transition-all duration-300 relative group flex flex-col h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightblue/0 to-lightblue/0 group-hover:from-lightblue/5 group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-lightblue/10 text-lightblue group-hover:bg-lightblue group-hover:text-white dark:group-hover:text-myblack transition-colors shadow-sm">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-3 transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-mydark dark:text-lightbg/60 font-light leading-relaxed mb-8 flex-1 relative z-10 transition-colors">
                {service.description}
              </p>

              <Link
                to={service.href}
                className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-bold text-lightblue group-hover:text-myblack dark:group-hover:text-white transition-colors group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">
              Ready for your next checkup?
            </h3>
            <p className="text-mydark dark:text-lightbg/70 mb-8 max-w-lg font-light transition-colors">
              Preventative care is the best way to maintain your oral health.
              Book your appointment today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-myblack dark:bg-lightblue text-white dark:text-myblack px-12 py-4 rounded-full font-bold hover:bg-mydark dark:hover:bg-white transition-all shadow-md hover:-translate-y-1"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeneralServices;
