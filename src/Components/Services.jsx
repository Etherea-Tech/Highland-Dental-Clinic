import { motion } from "framer-motion";
import {
  Sparkles,
  AlignJustify,
  ShieldPlus,
  Wind,
  Syringe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description:
        "Comprehensive cleanings, exams, and restorations to maintain optimal oral health and prevent future complications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          style={{ enableBackground: "new 0 0 512 512" }}
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
        >
          <g>
            <path
              d="M462.472 106.444c-13.654-9.027-30.019-14.283-47.612-14.283h0a86.432 86.432 0 0 0-43.173 11.554l-30.358 17.502M489.29 134.62a86.118 86.118 0 0 1 8.87 20.8 86.874 86.874 0 0 1 3.14 23.18c0 9.32-.76 18.6-2.27 27.74M241.06 375.63c-.04-6.47-.54-12.9-1.47-19.27M241.07 410.63v18.1c0 6.43 5.22 11.65 11.65 11.65a49.7 49.7 0 0 0 21.27-4.79 49.489 49.489 0 0 0 17.15-13.45c7.06-8.65 13.1-18.03 18.05-27.96 4.95-9.92 8.81-20.4 11.48-31.24l4.39-17.83c1.72-7 7.99-11.91 15.2-11.91 3.6 0 6.97 1.23 9.65 3.33s4.68 5.08 5.54 8.58l4.39 17.83a150.66 150.66 0 0 0 29.53 59.2 49.673 49.673 0 0 0 17.15 13.45 49.7 49.7 0 0 0 21.27 4.79c3.22 0 6.13-1.3 8.24-3.41 2.11-2.11 3.41-5.03 3.41-8.24V376.7c0-21.6 4.97-42.91 14.53-62.29l29.7-60.22c2.27-4.6 4.33-9.3 6.17-14.07M197.63 125.25a86.817 86.817 0 0 1 29.59-24.1c1.85-.92 3.73-1.77 5.65-2.55M267.36 92.18c14.57.28 28.83 4.24 41.47 11.53l68.75 39.64M110.984 110.159C90.58 120.176 82.46 128.296 72.443 148.7c-10.017-20.404-18.137-28.524-38.541-38.541 20.404-10.017 28.524-18.137 38.541-38.541 10.017 20.404 18.137 28.524 38.541 38.541z"
              style={{
                strokeWidth: 15,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              opacity="1"
            />
            <path
              d="M504.5 124.042c-16.878 8.286-23.595 15.003-31.881 31.881-8.286-16.878-15.003-23.595-31.881-31.881 16.878-8.286 23.595-15.003 31.881-31.881 8.286 16.878 15.003 23.595 31.881 31.881zM424.926 304.905c-12.902 6.334-18.036 11.468-24.37 24.37-6.334-12.902-11.468-18.036-24.37-24.37 12.902-6.334 18.036-11.468 24.37-24.37 6.334 12.902 11.468 18.037 24.37 24.37zM90.627 325.758l19.431-16.814M102.866 379.51l-43.909 50.744c-11.132 12.865-30.845 13.576-42.875 1.546h0c-12.03-12.03-11.319-31.743 1.546-42.875l51.273-44.367M139.398 337.291l-16.502 19.071M105.069 379.086l-36.273-36.273a4.433 4.433 0 0 1 0-6.269l11.643-11.643a4.433 4.433 0 0 1 6.269 0l36.273 36.273a4.433 4.433 0 0 1 0 6.269l-11.643 11.643a4.431 4.431 0 0 1-6.269 0zM46.785 365.719l35.378 35.378M92.73 221c9.58-54.2 56.92-95.37 113.87-95.37 63.87 0 115.65 51.78 115.65 115.65 0 63.88-51.78 115.66-115.65 115.66-58.88 0-107.49-44.01-114.72-100.94"
              style={{
                strokeWidth: 15,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              opacity="1"
            />
            <circle
              cx="206.6"
              cy="241.283"
              r="83.02"
              style={{
                strokeWidth: 15,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              opacity="1"
            />
            <path
              d="M193.393 286.789a12.811 12.811 0 0 1-9.131-3.826l-25.798-26.224c-4.961-5.043-4.894-13.153.149-18.114 5.043-4.96 13.153-4.895 18.114.149l16.096 16.362 39.199-44.991c4.648-5.333 12.738-5.89 18.072-1.243 5.334 4.647 5.89 12.738 1.243 18.072l-48.287 55.421a12.81 12.81 0 0 1-9.657 4.394z"
              style={{
                strokeWidth: 15,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              opacity="1"
            />
          </g>
        </svg>
      ),

      link: "/general-dentistry",
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description:
        "Enhance your confidence with premium veneers, bonding, and professional laser tooth whitening treatments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="128"
          height="128"
          viewBox="0 0 75 75"
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M63.409 12.842c.046.38.37.66.744.66.079 0 .87-.1 3.109-.367a.75.75 0 0 0 .655-.835l-.828-6.89a.76.76 0 0 0-.835-.656l-3.018.362a.75.75 0 0 0-.655.835l.019.16-18.593 2.234a.75.75 0 0 0-.504.288.8.8 0 0 0-.25-.01l-3.775.574a.8.8 0 0 0-.235.078l-5.172 2.71-7.744.718a3.78 3.78 0 0 0-3.151 2.323l-.606 1.461a.75.75 0 0 0 1.387.575l.604-1.462a2.29 2.29 0 0 1 1.905-1.403l7.765-.72 5.956 1.465q.124.03.247.018l3.32-.304a.74.74 0 0 0 .32-.114.73.73 0 0 0 .72.35l18.593-2.235zm-19.792.32-3.194.292-4.034-.99 3.44-1.803 3.634-.554.37 3.078c-.07-.014-.142-.03-.216-.023m22.071-6.829.65 5.402-1.529.183-.649-5.401zm-20.329 6.98-.429-3.568 17.85-2.144.428 3.566zM30.623 27.514c2.302-.56 4.71.384 6.144 2.405.119.168.301.28.504.309.416.058.576-.182.961-.438 3.645-2.437 8.596-.281 9.496 5.18a.75.75 0 0 0 1.48-.244c-1.078-6.514-7.161-9.166-11.68-6.267-1.825-2.113-4.599-3.053-7.26-2.402a.75.75 0 1 0 .355 1.457M11.336 53.958c1.1-.199 1.509.267 1.543.31a.75.75 0 0 0 1.243-.839c-.326-.5-1.334-1.26-3.058-.945-1.885.346-3.203 1.82-3.203 3.583v9.794a4.393 4.393 0 0 0 4.388 4.388H52.07a4.393 4.393 0 0 0 4.388-4.388v-9.916c0-2.07-1.112-3.731-3.152-3.445-2.048.065-3.972.838-4.502 2.822a.75.75 0 1 0 1.45.387c.466-1.744 3.037-1.71 3.085-1.708.82-.017 1.619.007 1.619 1.944v9.916a2.89 2.89 0 0 1-2.888 2.888H12.25a2.89 2.89 0 0 1-2.888-2.888v-9.794c0-1.205.992-1.928 1.975-2.109z" />
            <path d="M57.707 29.755c-.338-.209.145-2.853-9.371-1.15a.75.75 0 0 0 .265 1.477c1.58-.283 6.846-1.179 7.694.179.129.36-.613 1.924-5.519 4.804-4.163 2.443-9.942 5.034-16.275 7.296-15.21 5.43-24.056 5.777-24.534 4.439-.11-.314.471-1.665 4.426-4.142a.75.75 0 0 0-.797-1.271c-3.93 2.462-5.578 4.395-5.042 5.912v.007c2.502 6.999 51.636-10.605 49.153-17.55z" />
            <path d="M7.156 31.182v.004c-.819 2.595 5.043 5.678 7.478 6.949a25.2 25.2 0 0 0 1.845 7.944.75.75 0 0 0 1.387-.572 23.6 23.6 0 0 1-1.66-6.597c2.335 1.122 10.609 4.559 11.429 4.559.843 0 1.04-1.185.244-1.46-3.86-1.326-8.081-2.988-11.772-4.814-.008-.258-.038-.511-.038-.77a9 9 0 0 1 1.228-4.522.751.751 0 0 0-1.293-.762 10.5 10.5 0 0 0-1.434 5.263 45 45 0 0 1-1.54-.853c-3.93-2.295-4.541-3.601-4.444-3.914.1-.316 1.379-1.037 6.031-.612a.75.75 0 1 0 .137-1.494c-4.623-.423-7.11.117-7.598 1.65zm44.116 9.838a.75.75 0 0 0-.717 1.318c5.069 2.758 4.975 4 4.905 4.22-.212.667-2.949 1.086-8.394.325a24.9 24.9 0 0 0 2.108-7.451.75.75 0 0 0-.658-.833.76.76 0 0 0-.833.657 23.4 23.4 0 0 1-2.157 7.392c-2.709-.448-5.972-1.153-9.843-2.22a.747.747 0 0 0-.921.523c-.11.4.124.813.523.922 1.457.402 5.438 1.456 9.597 2.184-.57 1.358-.804 2.647-.476 4.48.477 2.838-.318 5.8-2.128 7.92l-3.826 4.488c-.348.407-.913.035-.837-.51.048-.544.636-3.207.156-6.31-1.716-11.081-9.852-11.075-11.56.018-.476 3.101.1 5.746.147 6.293.073.523-.467.94-.858.485l-3.807-4.464c-1.81-2.12-2.604-5.082-2.129-7.912.228-1.277.198-2.315-.098-3.366a.75.75 0 0 0-1.443.406c.234.833.253 1.64.064 2.704-.55 3.27.372 6.687 2.466 9.14l3.806 4.466c1.36 1.59 3.768.353 3.485-1.666-.05-.571-.585-3.02-.15-5.858 1.108-7.192 4.402-7.115 4.299-7.051 1.597 0 3.544 2.174 4.296 7.034.441 2.852-.109 5.318-.158 5.872-.292 2.048 2.157 3.223 3.462 1.692l3.826-4.488c2.094-2.454 3.015-5.871 2.465-9.149-.267-1.494-.136-2.522.527-3.976 1.955.297 3.886.499 5.552.499 2.533 0 4.446-.464 4.9-1.741.953-2.34-3.37-4.835-5.59-6.043zM19.8 19.012a.75.75 0 0 0-1.205.893c.05.067 1.243 1.656 3.075 1.71 1.395.042 2.542-.805 3.426-1.869a.75.75 0 0 0-1.154-.959c-.746.899-1.48 1.332-2.22 1.328-1.09-.026-1.902-1.077-1.922-1.103" />
            <path d="M16.804 21.575a.75.75 0 0 0-.158 1.05c1.082 1.46 3.078 2.772 5.108 2.772 1.893 0 3.714-1.035 5.412-3.077a.75.75 0 0 0-1.154-.96c-1.153 1.387-2.561 2.536-4.356 2.536-2.208-.059-3.788-2.143-3.804-2.164a.75.75 0 0 0-1.048-.157" />
            <path d="M15.195 23.653a.75.75 0 0 0-1.206.892c1.584 2.159 4.594 4.164 7.646 4.164 2.83 0 5.566-1.566 8.137-4.658a.75.75 0 0 0-1.154-.959c-2.325 2.797-4.743 4.16-7.152 4.115-3.663-.1-6.245-3.52-6.27-3.554z" />
          </g>
        </svg>
      ),
      link: "/services#cosmetic",
    },
    {
      id: 3,
      title: "Orthodontics",
      description:
        "Achieve a perfectly aligned smile with our customized traditional braces, clear Invisalign aligners, or Myobrace.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="512"
          height="512"
          fillRule="evenodd"
          viewBox="0 0 512 512"
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M211 419h-1c-15-1-30-24-40-43-27-51-23-87-19-114 1-13 2-24-2-32l-6-12c-9-16-17-28-17-58s12-49 38-62c21-10 41-3 59 4q9 4.5 18 6c20 5 32 1 46-5 7-3 15-6 24-8 24-5 45 1 59 17 9 11 14 26 16 44 1 16-2 34-9 50-6 14-10 20-13 24-4 6-4 6-1 38 7 47-14 116-43 142-8 8-17 10-25 7-7-3-12-9-13-19-2-7-1-18-1-28 0-5 1-9 1-12 1-47-11-69-23-70-11-1-24 12-27 36-1 6-1 21-1 35 1 29 1 43-2 48v1c-6 9-13 11-18 11m-41-309c-21 11-30 25-30 50 0 26 6 36 15 51 2 4 4 8 7 13 6 11 4 25 2 40-2 25-6 58 19 106 12 24 23 35 28 35 2 0 4-2 5-4 2-5 1-27 1-42s0-30 1-37c4-29 22-50 42-48 6 0 18 4 27 23 6 15 9 35 8 61v12c0 9-1 20 0 26 1 4 3 7 5 8s7-1 11-4c25-23 44-88 39-130-4-34-5-37 3-48 2-4 6-9 11-22 12-28 10-61-5-79-10-12-26-16-45-12-8 2-15 4-22 7-14 6-29 12-54 6-7-2-14-4-20-7-17-6-32-12-48-5" />
            <path d="M328 225c-1 0-2 0-3-1-3-2-5-6-3-9 2-4 4-8 6-11 3-5 6-9 9-15 6-15 8-41-2-50-4-3-9-2-15-1-10 2-20 6-27 9 0 0 0 1-1 1-23 7-41 8-61 3-8-3-15-5-23-8-3-1-6-2-9-4-7-2-13-3-15-2h-1c-10 5-13 10-13 23 0 19 3 25 11 38 2 3 4 7 7 12 1 3 0 7-3 9-4 2-8 1-10-3s-4-8-6-11c-8-14-13-22-13-45 0-18 6-29 21-35 9-5 21-1 27 1 3 2 6 3 9 4 7 3 14 5 21 7 21 5 37 2 54-3 12-5 21-8 29-10 7-1 18-3 27 4 18 16 12 52 6 66v1c-3 6-7 11-10 16-2 4-4 7-6 10-1 3-3 4-6 4m41 164c-13 0-25-19-31-30-2-3 0-7 3-9s8-1 9 3c9 15 17 22 19 22q1.5 0 3-3v-1c2-4 1-25 1-38v-24c4-24 19-42 36-40 5 0 16 3 23 19 5 12 8 29 7 50v10c-1 7-1 15 0 19v1c1 3 2 6 3 6s3 0 8-4c19-17 34-68 30-104-3-27-3-30 3-38 2-3 5-7 9-17 9-23 7-49-5-63-8-10-20-13-34-9h-1c-6 1-11 3-17 5-12 4-24 9-44 5-7-1-13-4-20-7-3-2-5-6-3-9 2-4 6-5 9-3 6 2 11 4 16 5h1c16 4 25 0 36-4 6-2 12-5 20-6 20-4 37 0 48 14 15 18 18 50 7 78-5 11-9 16-11 19-3 4-3 4 0 29 4 40-12 96-35 116-11 9-18 7-22 6s-10-5-12-17c-1-6-1-15 0-23v-9c1-37-8-55-18-55-7-1-17 10-20 28v22c1 29 0 40-3 45-4 9-10 11-15 11q1.5 0 0 0m-299 0c-14 0-25-18-34-34l-1-2c-22-41-18-71-16-92 1-11 2-19-1-25-2-3-4-6-5-9-8-13-14-24-13-48 0-25 11-42 31-51 17-9 34-3 48 2 5 2 10 4 15 5 15 4 24 1 35-4 2 0 4-1 6-2 3-1 7 1 9 5 1 3-1 7-4 8-2 1-4 2-6 2-12 5-24 10-43 5-6-2-11-4-17-6-13-4-25-9-37-3-15 7-23 19-23 39 0 21 4 28 11 41 2 3 4 6 6 10 5 9 3 20 2 32-2 20-5 47 15 85v1c14 26 20 27 22 27s1-1 2-3c2-4 1-21 1-33s-1-24 0-30c4-24 19-41 36-40 5 0 16 3 23 19 5 12 8 29 7 50v13c-1 6-1 13-1 17 1 4 3 6 4 6s3 0 7-3c5-5 10-10 13-17 2-4 6-5 9-3 4 1 5 6 3 9-4 8-9 15-16 21-9 8-17 8-21 6-3-1-10-4-13-16v-1c0-6 0-13 1-20v-12c1-37-8-54-18-55-7-1-17 10-20 28-1 5 0 16 0 28 0 24 0 34-3 39-4 9-10 11-14 11" />
            <path d="M274 256c-7 0-15 0-22-1h-21c-4 0-7-3-7-7s3-7 7-7h21c7 1 15 1 22 1 4 0 7 3 7 7s-3 7-7 7m27-1c-3 0-7-3-7-7s3-7 7-7c68-1 132-9 191-24 3-1 7 1 8 5s-1 8-5 9c-59 15-124 23-194 24m-97-2c-72-5-139-18-194-36-4-2-6-6-4-9 1-4 5-6 9-5 53 19 119 31 190 36 4 0 7 4 6 7 0 4-3 7-7 7" />
            <path d="M232 277h-28c-4 0-7-3-7-7v-42c0-4 3-7 7-7h28c4 0 7 3 7 7v42c0 4-3 7-7 7m-21-14h14v-28h-14zm91 14h-28c-4 0-7-3-7-7v-42c0-4 3-7 7-7h28c4 0 7 3 7 7v42c0 4-3 7-7 7m-21-14h14v-28h-14z" />
          </g>
        </svg>
      ),
      link: "/services#orthodontics",
    },
    {
      id: 4,
      title: "Oral Surgery",
      description:
        "Expert wisdom tooth removal, complex extractions, bone grafting, and precise dental implant placements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="512"
          height="512"
          fillRule="evenodd"
          viewBox="0 0 1707 1707"
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M680 1706c-88 0-199-177-218-313-25-180 20-139-72-321-185-364 85-604 463-422 378-182 649 58 464 422-92 181-47 140-72 321-20 146-152 352-246 307-49-23-66-105-66-123v-216c0-169-159-173-159 0l-1 222c-4 32-26 123-93 123M608 627c-222 0-301 195-183 426 97 191 52 157 77 334 19 137 137 301 189 277 19-9 36-43 43-85v-218c0-226 239-222 239 0v215c2 27 23 116 79 82 60-36 137-156 153-271 25-177-20-143 77-334 170-333-74-535-419-363-6 3-13 3-18 0-84-42-166-63-237-63" />
            <path d="M483 926c-11 0-20-9-20-20 0-102 83-185 186-185 26 0 26 40 0 40-81 0-146 65-146 145 0 11-9 20-20 20m741 0c-11 0-20-9-20-20 0-80-66-145-146-145-26 0-26-40 0-40 102 0 186 83 186 185 0 11-9 20-20 20M853 815c-171 0-214-193-184-217 22-18 151 36 184 52 33-16 163-70 185-52 30 24-14 217-185 217M702 638c7 77 72 137 151 137s144-60 152-137c-46 10-94 28-143 52-5 3-12 3-18 0-48-24-96-42-142-52m325-429H680c-19 0-34-14-39-35L613 43c-5-23 16-43 38-43h404c23 0 44 21 39 43l-29 131c-4 21-19 35-38 35m-345-40h343l29-129H653z" />
            <path d="M971 369H735c-31 0-57-26-57-58V189c0-12 9-20 20-20h311c11 0 20 8 20 20v122c0 32-26 58-58 58M718 209v102c0 10 8 18 17 18h236c10 0 18-8 18-18V209z" />
            <path d="M888 540h-68c-33 0-61-27-61-61V349c0-11 9-20 20-20h150c11 0 20 9 20 20v130c0 34-27 61-61 61m-89-171v110c0 12 10 21 21 21h68c12 0 21-9 21-21V369zm261-245H853c-26 0-26-40 0-40h207c26 0 26 40 0 40" />
            <path d="M854 747c-11 0-20-9-20-20V520c0-26 40-26 40 0v207c0 11-9 20-20 20m124-162c-18 0-26-22-14-35l65-65c18-18 47 10 28 29s-63 71-79 71m-248 0c-15 0-59-51-79-71-18-19 10-47 29-29l65 65c12 13 3 35-15 35" />
          </g>
        </svg>
      ),
      link: "/services#surgery",
    },
    {
      id: 5,
      title: "Airway Dentistry",
      description:
        "Specialized TMJ treatments and advanced oral appliance therapies for snoring and sleep apnea relief.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          style={{ enableBackground: "new 0 0 512 512" }}
          xmlSpace="preserve"
          fillRule="evenodd"
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path
              d="M363.56 511.1c-20.91 0-37.92-17.01-37.92-37.92v-227c0-3.31 2.68-6 6-6h63.85c3.31 0 6 2.69 6 6v227c0 20.91-17.02 37.92-37.93 37.92zm-25.92-258.92v221c0 14.29 11.63 25.92 25.92 25.92 14.3 0 25.93-11.63 25.93-25.92v-221z"
              opacity="1"
            />
            <path
              d="M361.1 252.18c-3.31 0-6-2.69-6-6V114.96c0-1.51.57-2.96 1.59-4.07l46.67-50.55-47.96-49.25c-2.31-2.38-2.26-6.18.11-8.49a6.003 6.003 0 0 1 8.49.12l51.92 53.32a5.994 5.994 0 0 1 .11 8.26l-48.93 53v128.88c0 3.31-2.68 6-6 6zM331.64 338.18c-2.07 0-4.09-1.08-5.2-3.01-1.66-2.86-.67-6.53 2.2-8.19l63.85-36.87a6.012 6.012 0 0 1 8.2 2.2c1.65 2.87.67 6.54-2.2 8.19l-63.85 36.87c-.95.55-1.98.81-3 .81zM331.64 400.07c-2.07 0-4.09-1.07-5.2-3a5.99 5.99 0 0 1 2.2-8.19l63.85-36.87a6 6 0 0 1 8.2 2.19c1.65 2.87.67 6.54-2.2 8.2l-63.85 36.87c-.95.54-1.98.8-3 .8zM331.64 461.97c-2.07 0-4.09-1.07-5.2-3a5.99 5.99 0 0 1 2.2-8.19l63.85-36.87a6 6 0 0 1 8.2 2.19c1.65 2.87.67 6.54-2.2 8.2l-63.85 36.87c-.95.54-1.98.8-3 .8zM172.65 511.98c-23.74 0-43.06-19.32-43.06-43.06v-284.5c0-3.32 2.68-6 6-6h74.14a5.99 5.99 0 0 1 5.99 6v284.5c0 23.74-19.32 43.06-43.07 43.06zm-31.06-321.57v278.51c0 17.13 13.93 31.06 31.06 31.06 17.14 0 31.08-13.93 31.08-31.06V190.41z"
              opacity="1"
            />
            <path
              d="M209.73 239.98h-74.14c-3.32 0-6-2.69-6-6s2.68-6 6-6h74.14c3.31 0 5.99 2.69 5.99 6s-2.68 6-5.99 6zM172.66 190.41c-3.32 0-6-2.68-6-5.99v-33.84c0-3.32 2.68-6 6-6 3.31 0 6 2.68 6 6v33.84c0 3.31-2.69 5.99-6 5.99z"
              opacity="1"
            />
            <path
              d="M172.66 156.58c-43.17 0-78.28-35.12-78.28-78.28 0-43.17 35.11-78.28 78.28-78.28 43.16 0 78.28 35.11 78.28 78.28 0 43.16-35.12 78.28-78.28 78.28zm0-144.56c-36.55 0-66.28 29.73-66.28 66.28 0 36.54 29.73 66.28 66.28 66.28s66.28-29.74 66.28-66.28c0-36.55-29.73-66.28-66.28-66.28zM135.59 344c-2.07 0-4.09-1.08-5.2-3-1.66-2.87-.67-6.54 2.2-8.2l74.13-42.8c2.87-1.65 6.54-.68 8.2 2.19 1.65 2.87.67 6.54-2.2 8.2l-74.13 42.8c-.95.55-1.98.81-3 .81zM135.59 405.9c-2.07 0-4.09-1.08-5.2-3-1.66-2.87-.67-6.54 2.2-8.2l74.13-42.81c2.88-1.65 6.54-.67 8.2 2.2s.67 6.54-2.19 8.19l-74.14 42.81c-.95.55-1.98.81-3 .81zM135.59 467.8c-2.07 0-4.09-1.08-5.2-3-1.66-2.87-.67-6.54 2.2-8.2l74.14-42.81c2.86-1.65 6.53-.67 8.19 2.2s.67 6.54-2.19 8.19l-74.14 42.81c-.95.55-1.98.81-3 .81zM395.49 281.48h-63.85c-3.32 0-6-2.69-6-6 0-3.32 2.68-6 6-6h63.85c3.31 0 6 2.68 6 6 0 3.31-2.69 6-6 6zM371.28 480.44h-16.31c-3.32 0-6-2.68-6-6a5.99 5.99 0 0 1 6-5.99h16.31c3.31 0 5.99 2.68 5.99 5.99 0 3.32-2.68 6-5.99 6zM180.68 480.44h-16.3c-3.32 0-6-2.68-6-6a5.99 5.99 0 0 1 6-5.99h16.3c3.32 0 6 2.68 6 5.99 0 3.32-2.68 6-6 6z"
              opacity="1"
            />
          </g>
        </svg>
      ),
      link: "/services#airway",
    },
    {
      id: 6,
      title: "Sedation Options",
      description:
        "Experience pain-free, anxiety-free dentistry with our full range of safe, professional anesthesia services.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          className="w-12 h-12 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path d="M22.5 291.7c4.6-2.9 8.9 4.1 4.5 7C17.1 305 10.9 316 10.9 328v140.8c0 9.6 3.9 18.3 10.2 24.6s15 10.2 24.6 10.2h420.6c19.2 0 34.8-15.7 34.8-34.8V328c0-19.2-15.7-34.8-34.8-34.8h-55.7c-5.5.1-5.3-8.4 0-8.3h55.7c23.7 0 43.1 19.4 43.2 43.2v140.8c0 23.7-19.4 43.1-43.2 43.2H45.7C22 512 2.6 492.6 2.6 468.8V328c-.1-14.8 7.7-28.4 19.9-36.3m344.7-6.8h-51.7c-5.4-.1-5.4 8.4 0 8.3h51.7c5.4.1 5.4-8.4 0-8.3" />
            <path d="M165.5 174.6c-48.1-53.5-121.1-40.4-147.1 19.2-13 30.8-10.4 72 19.8 114.7 19 24.8 23 110.3 45.5 128.6 16.7 13.1 44.3 6.3 52.9-11.7 5.2-13.2 11.6-34.4 16.3-49.6 2.1-7 8.4-11.6 15.7-11.6s13.5 4.6 15.7 11.6c4.8 15.3 11.1 36.5 16.3 49.6 8.6 18 36.3 24.8 52.9 11.7C276 418.8 280 333.3 299 308.5c30.2-42.7 32.8-83.9 19.8-114.7-26.1-59.5-99-72.6-147.2-19.2-1.7 1.8-4.5 1.8-6.1 0m-88.9-40c29.3-6.4 62.9 1.8 91.9 31.2 52.2-54.6 130.4-38.5 157.8 24.8 14 33.2 11.4 77.3-20.7 122.7-18.7 26.2-22.1 112.1-47.4 130.6-20.9 16.3-55 7.7-65.5-15.2-5.5-14-11.2-33.2-16.6-50.4-1.1-3.5-4.1-5.7-7.7-5.7-3.7 0-6.7 2.2-7.8 5.7-3.5 11.6-7.2 23.4-10.2 32.4-5.4 34.2-42.5 54.1-71.8 33.1C53.4 425.4 50 339.5 31.4 313.3-20.3 241.2-.9 156.2 76.6 134.6" />
            <path d="M165.3 169.1c3.4-4.1 9.9 1.3 6.3 5.4 0 0-13.1 16.2-43 21.3-5.3 1-6.7-7.3-1.4-8.2 26.9-4.5 38.1-18.5 38.1-18.5m246.8 97.7c.2-5.4 8.7-4.9 8.3.5.1 2-5.4 21.2-5.9 23.5-2.5 9.2-12.1 14.8-21.3 12.3l-20.1-5.4c-9.2-2.5-14.8-12.1-12.3-21.3l5.4-20.1c.2-.8.9-2.5 1.3-3.3 2.3-4.8 9.9-1.1 7.4 3.7-1.9 9.1-13 28.3.4 32.9l20.1 5.4c13.5 3 14-19.6 16.7-28.2" />
            <path d="M468.9 122.9c1.3-5.2 9.5-3.1 8 2.1l-30.7 115c-17.1 57.2-101.3 34.7-87.5-23.4l30.8-114.9c.6-2.2 2.9-3.5 5.1-2.9s3.5 2.9 2.9 5.1l-30.8 114.9c-11.7 47.2 58 65.8 71.4 19.1z" />
            <path d="m385.5 96.3 97.7 26.2c8.8 2.4 9.6-11 11.4-16.3.5-1.8.2-3.7-.7-5.3-.9-1.5-2.4-2.8-4.2-3.3L392 71.4c-8.9-2.4-9.6 11-11.4 16.3-1 3.8 1.2 7.6 4.9 8.6m95.4 34.1-97.5-26.1c-8.1-2.2-13-10.6-10.8-18.7 2.4-11.7 6.5-25.5 21.6-22.2l97.6 26.1c8.1 2.2 13 10.6 10.8 18.7-2.4 11.9-6.6 25.7-21.7 22.2" />
            <path d="m424 71.4 38.3 10.2 7-26.2L431 45.2zm40.1 19.3-46.3-12.4c-2.2-.6-3.5-2.9-2.9-5.1l9.2-34.2c.6-2.2 2.9-3.5 5.1-2.9l46.3 12.4c2.2.6 3.5 2.9 2.9 5.1l-9.2 34.2c-.6 2.2-2.9 3.5-5.1 2.9" />
            <path d="M419.5 33.6 485 51.1c6.8 1.8 13.8-2.1 15.7-8.9 2-6.9-2.1-14.1-9-15.9L426.2 8.7c-16.3-4.2-22.9 20.4-6.7 24.9m63.3 25.5-65.5-17.5c-17.9-4.2-21.1-30.3-5.1-38.7 4.7-2.7 10.4-3.6 16-2.1l65.5 17.5c26.8 7.7 16.1 47.5-10.9 40.8M380.2 295.3c1.3-5.2 9.5-3.1 8 2.1l-25.5 95.3c-1.3 5.2-9.5 3.1-8-2.1zm12.2-188.6c-5.2-1.3-3.1-9.5 2.1-8l39.7 10.6c5.2 1.3 3 9.5-2.1 8zm-6.6 24.8c-5.2-1.3-3-9.5 2.1-8l31.5 8.4c2.2.6 3.5 2.9 2.9 5.1s-2.9 3.5-5.1 2.9zm-7.7 28.7c-5.2-1.3-3-9.5 2.1-8l31.5 8.4c2.2.6 3.5 2.9 2.9 5.1s-2.9 3.5-5.1 2.9zm-7.7 28.7c-5.2-1.3-3-9.5 2.1-8l31.5 8.5c2.2.6 3.5 2.9 2.9 5.1s-2.9 3.5-5.1 2.9zm-7.7 28.8c-5.2-1.3-3-9.5 2.1-8l31.5 8.4c2.2.6 3.5 2.9 2.9 5.1s-2.9 3.5-5.1 2.9z" />
          </g>
        </svg>
      ),
      link: "/services#anesthesia",
    },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white dark:bg-myblack transition-colors duration-300 font-poppins relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lightblue/5 dark:from-lightblue/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">
                Clinic Expertise
              </span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h2 className="text-myblack dark:text-lightbg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors">
              Our Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">
                Services
              </span>
            </h2>
            <p className="font-poppins max-w-2xl mt-6 text-mydark dark:text-lightbg/80 text-lg leading-relaxed transition-colors">
              At{" "}
              <span className="font-semibold text-myblack dark:text-lightbg">
                Highland Dental Clinics
              </span>
              , we are equipped with the latest dental technology to provide
              optimum care for your comfort and peace of mind.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              key={service.id}
              className="group hover:cursor-pointer bg-lightbg dark:bg-myblack/50 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/10 hover:border-lightblue/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Background Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightblue/0 to-lightblue/0 group-hover:from-lightblue/5 group-hover:to-transparent transition-all duration-500"></div>

              {/* Service Icon */}
              <div className="bg-white dark:bg-white/5 w-16 h-16 rounded-2xl flex justify-center items-center shadow-sm border border-gray-100 dark:border-white/10 mb-8 group-hover:bg-lightblue group-hover:border-lightblue transition-colors duration-300 relative z-10">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h4 className="font-bold text-2xl text-myblack dark:text-lightbg mb-4 group-hover:text-lightblue dark:group-hover:text-lightblue transition-colors">
                  {service.title}
                </h4>
                <p className="text-mydark dark:text-lightbg/70 leading-relaxed mb-8 font-light transition-colors">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 font-semibold text-sm text-myblack dark:text-lightbg group-hover:text-lightblue dark:group-hover:text-lightblue transition-colors"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mt-20 text-center bg-myblack rounded-[2rem] p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightblue/20 via-transparent to-transparent pointer-events-none"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-lightbg mb-6 relative z-10">
            Need a service not listed here?
          </h3>
          <p className="text-lightbg/80 mb-8 max-w-xl relative z-10">
            We offer a comprehensive range of dental treatments. Contact us to
            discuss your specific needs with our specialists.
          </p>
          <Link
            to="/contact"
            className="font-poppins font-semibold text-myblack bg-yellow-400 px-10 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
          >
            Contact Our Clinic
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
