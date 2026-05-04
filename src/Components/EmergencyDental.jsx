import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, X } from "lucide-react";

const EmergencyDental = () => {
  const [selectedCondition, setSelectedCondition] = useState(null);

  const emergencyConditions = [
    {
      id: "01",
      title: "Toothache",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 492 492"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path d="M259.891 431.06c-1.291 0-2.6-.17-3.901-.519-5.676-1.522-9.784-6.073-10.721-11.88-5.549-34.376-12.258-63.609-19.404-84.54-10.865-31.825-18.861-33.437-20.354-33.437s-9.49 1.612-20.354 33.436c-7.145 20.928-13.854 50.161-19.403 84.538-.937 5.807-5.045 10.359-10.722 11.881-5.687 1.524-11.533-.367-15.257-4.936-6.997-8.584-13.586-18.037-19.583-28.096-15.032-25.217-18.793-54.607-22.774-85.723-1.067-8.34-2.171-16.964-3.511-25.688-1.079-7.023-4.166-14.395-7.434-22.2-4.523-10.804-9.201-21.976-9.201-33.843v-.418c.018-16.695 5.002-32.805 14.413-46.587 9.445-13.833 22.659-24.297 38.212-30.262 8.877-3.405 18.021-5.131 27.178-5.131 12.777 0 25.89 4.441 40.086 13.576a15.46 15.46 0 0 0 16.699 0c14.197-9.135 27.309-13.576 40.086-13.576 10.727 0 21.393 2.361 31.699 7.018 29.172 13.181 48.053 42.543 48.102 74.803l.001.576c0 11.867-4.678 23.039-9.201 33.843-3.268 7.805-6.355 15.178-7.434 22.2-1.34 8.723-2.444 17.348-3.511 25.688-3.982 31.116-7.742 60.506-22.774 85.723-6 10.062-12.588 19.515-19.583 28.098-2.871 3.524-7.005 5.455-11.354 5.456m-54.38-141.895c6.51 0 12.66 4.284 18.279 12.734 4.427 6.656 8.792 16.245 12.977 28.501 7.351 21.534 14.224 51.42 19.874 86.426.299 1.853 1.73 2.427 2.332 2.588.607.162 2.146.382 3.344-1.087 6.641-8.149 12.905-17.138 18.618-26.719 13.804-23.157 17.251-50.095 21.242-81.286 1.076-8.411 2.189-17.109 3.552-25.975 1.293-8.419 4.801-16.798 8.193-24.9 4.084-9.755 8.307-19.842 8.307-29.395l-.001-.56c-.042-27.749-16.263-52.997-41.325-64.321-8.806-3.979-17.875-5.996-26.956-5.996-10.499 0-21.572 3.842-33.852 11.744-8.859 5.7-20.307 5.7-29.166 0-12.28-7.902-23.354-11.744-33.853-11.744-7.742 0-15.498 1.469-23.054 4.367-27.021 10.362-45.198 36.929-45.23 66.109v.402c0 9.553 4.223 19.64 8.307 29.395 3.392 8.102 6.9 16.48 8.193 24.9 1.362 8.866 2.475 17.564 3.551 25.974 3.991 31.191 7.438 58.13 21.243 81.287 5.711 9.578 11.975 18.567 18.618 26.717 1.197 1.469 2.738 1.249 3.345 1.087.602-.161 2.033-.736 2.332-2.59 5.65-35.007 12.522-64.892 19.873-86.424 4.184-12.256 8.55-21.845 12.976-28.501 5.62-8.449 11.77-12.733 18.281-12.733m88.345-159.29a5.76 5.76 0 0 1-5.402-7.759l6.956-18.807-8.02 1.373a5.758 5.758 0 0 1-6.273-7.93l13.102-30.824a5.76 5.76 0 1 1 10.602 4.506l-8.974 21.112 7.456-1.277a5.758 5.758 0 0 1 6.374 7.675l-10.418 28.166a5.76 5.76 0 0 1-5.403 3.765m48.625 26.857a5.76 5.76 0 0 1-2.41-10.994l18.217-8.379-6.642-4.7a5.76 5.76 0 0 1 1.172-10.043l31.06-12.531a5.76 5.76 0 0 1 4.311 10.683l-21.274 8.583 6.174 4.369a5.76 5.76 0 0 1-.921 9.935l-27.283 12.549a5.75 5.75 0 0 1-2.404.528m41.536 65.167q-.237 0-.476-.02l-29.929-2.475a5.76 5.76 0 0 1 .95-11.48l19.983 1.653-3.475-7.356a5.76 5.76 0 0 1 5.955-8.172l33.21 4.346a5.761 5.761 0 0 1-1.495 11.423l-22.747-2.977 3.231 6.839a5.758 5.758 0 0 1-5.207 8.219" />
            <path d="M308.678 205.955c-15.45 0-28.019-12.57-28.019-28.02a28.1 28.1 0 0 1 6.064-17.408 5.76 5.76 0 0 1 9.02 7.165 16.3 16.3 0 0 0-3.565 10.243c0 9.098 7.402 16.5 16.5 16.5 3.136 0 6.184-.88 8.813-2.547a5.76 5.76 0 0 1 6.166 9.73 27.93 27.93 0 0 1-14.979 4.337" />
            <path d="M308.678 228.215c-27.724 0-50.279-22.555-50.279-50.279a50.24 50.24 0 0 1 6.909-25.449 5.76 5.76 0 0 1 9.93 5.84 38.7 38.7 0 0 0-5.32 19.609c0 21.372 17.387 38.759 38.759 38.759 5.612 0 11.021-1.171 16.078-3.481a5.761 5.761 0 0 1 4.787 10.478c-6.568 3.001-13.588 4.523-20.864 4.523" />
            <path d="M308.678 250.474c-19.375 0-37.591-7.546-51.292-21.247s-21.247-31.917-21.247-51.293c0-8.959 1.615-17.705 4.799-25.994a5.76 5.76 0 1 1 10.753 4.131c-2.676 6.966-4.033 14.322-4.033 21.864 0 33.646 27.373 61.019 61.019 61.019 5.464 0 10.874-.72 16.083-2.141a5.759 5.759 0 1 1 3.031 11.113 72.6 72.6 0 0 1-19.113 2.548" />
          </g>
        </svg>
      ),
      summary:
        "A toothache often indicates an underlying dental issue such as a cavity or infection. Immediate action is required to prevent further damage.",
      content:
        "A toothache can be an incredibly discomforting and sometimes even excruciating experience. It often indicates an underlying dental issue, such as a cavity, an infection, gum disease, or a damaged tooth. The pain can range from a dull ache to sharp and throbbing sensations, making it difficult to eat, drink, or concentrate on daily tasks. When faced with a toothache, it's important to take immediate action. Start by gently rinsing your mouth with warm water to remove any debris and use dental floss to check for any trapped particles. Over-the-counter pain relievers and topical anesthetics can provide temporary relief, but these are not long-term solutions. It's essential to schedule an appointment with a dentist as soon as possible. They can diagnose the root cause of the toothache and provide appropriate treatment, whether it involves a simple filling, a root canal, or other dental procedures to alleviate the pain and restore your oral health. Ignoring a toothache can lead to more significant and costly dental issues, so seeking professional care is the best course of action for your comfort and long-term well-being.",
    },
    {
      id: "02",
      title: "Lost Restorations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="28"
          height="28"
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
            strokeMiterlimit="10"
            strokeWidth="20"
            clipPath="url(#a)"
            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
          >
            <path d="M39.066 406.651c-17.753-23.288-28.512-52.172-29.045-83.471-.306-17.903 2.696-35.066 8.435-50.919l.004.002L89.527 65.229c7.166-20.877 26.803-34.897 48.876-34.897 23.898 0 44.679 16.387 50.251 39.627l26.491 110.495c3.959 16.513 27.452 16.513 31.411 0l26.492-110.495c5.572-23.24 26.353-39.627 50.251-39.627 22.074 0 41.709 14.02 48.875 34.897l71.068 207.034.004-.002c1.784 4.931 3.3 9.989 4.536 15.156 1.013 4.237-1.611 8.488-5.835 9.552-30.872 7.78-54.154 33.327-59.273 64.485-28.595 5.32-49.273 31.357-47.191 61.068a57.7 57.7 0 0 0 7.943 25.488c2.831 4.769.225 10.876-5.205 12.005a141.3 141.3 0 0 1-28.251 2.954c-29.257.109-56.464-8.621-79.119-23.659-22.656 15.039-49.864 23.768-79.12 23.659a141.2 141.2 0 0 1-39.542-5.781" />
            <path d="M230.856 439.318a143 143 0 0 0 23.839-19.87M452.71 421.215l40.674 33.017M402.04 455.868l2.668 25.8M502 361.777l-25.624 2.65M71.605 437.724" />
          </g>
        </svg>
      ),
      summary:
        "A lost filling leaves the tooth vulnerable to extreme sensitivity and pain. Avoid chewing on it and seek prompt replacement.",
      content:
        "A lost filling is a dental emergency that can cause significant discomfort and requires prompt attention. Fillings are used to repair cavities and strengthen damaged teeth. When a filling falls out, it leaves the affected tooth vulnerable to sensitivity, pain, and potential further damage. If you've lost a filling, you may experience discomfort when chewing or consuming hot or cold foods and beverages. It's important to act quickly to address this issue. Rinse your mouth with warm water to remove debris, and avoid using the damaged tooth as much as possible. While over-the-counter dental repair kits are available, it's still essential to see a dentist as soon as possible. They can evaluate the tooth, determine the cause of the lost filling, and recommend the best course of action, which may include replacing the filling or considering other dental solutions to restore the tooth's functionality and protect it from further damage. Ignoring a lost filling can lead to more extensive dental problems, so seeking immediate dental care is crucial for maintaining your oral health and preventing complications.",
    },
    {
      id: "03",
      title: "Loose Crowns",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 90 90"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <path d="M34.397 15.065c3.083 0 4.954.934 7.077 2.193 3.48 2.052 5.83 2.833 8.333 3.23 1.376.203 1.677-1.855.303-2.058-1.473-.218-2.65-.526-3.74-.969 1.215-.312 2.615-.864 3.454-1.176 1.787-.677 3.412-1.22 5.817-1.22 3.261 0 5.959 2.101 7.641 5.382s2.24 7.681 1.099 11.885c-.328 1.213-1.463 2.229-3.454 2.229H29.11c-1.995 0-3.125-1.016-3.453-2.229-1.14-4.205-.583-8.604 1.098-11.885 1.683-3.281 4.377-5.382 7.642-5.382m0-2.076c-4.167 0-7.558 2.734-9.495 6.51-1.937 3.781-2.537 8.667-1.256 13.38.584 2.15 2.705 3.76 5.464 3.76h31.817c2.757 0 4.876-1.609 5.459-3.76 1.281-4.713.688-9.599-1.254-13.38-1.938-3.776-5.328-6.51-9.491-6.51-2.728 0-4.714.661-6.547 1.353-1.681.631-3.343 1.22-5.474 1.548-.322-.183-.803-.256-1.125-.442-2.191-1.235-4.557-2.459-8.098-2.459M28.97 49.175h32.093c1.281 0 .801 1.235.484 1.882-.938 1.916-1.604 3.547-2.037 6.156-.926 5.551-.453 8.458-3.516 14.483-1.333 2.62-2.964 3.328-4.077 3.203-1.111-.119-2.005-.989-2.005-2.728v-5.772c0-1.795-.292-3.307-1.109-4.468-.819-1.155-2.199-1.803-3.787-1.803-1.59 0-2.969.647-3.787 1.803-.817 1.162-1.104 2.673-1.104 4.468v5.772c0 1.739-.896 2.609-2.011 2.728-1.109.125-2.746-.583-4.074-3.203-3.068-6.025-2.593-8.932-3.514-14.483-.434-2.609-1.063-4.257-2.037-6.156-.633-1.235-.363-1.882.481-1.882m7.416-6.973h17.26c.735 0 1.126.131 1.339.271.209.141.344.313.48.719l1.295 3.906H33.277l1.298-3.906c.129-.406.265-.578.479-.719.213-.14.597-.271 1.332-.271m0-2.083c-.984 0-1.817.176-2.484.618-.667.443-1.073 1.121-1.302 1.803l-1.511 4.558H28.97c-1.235 0-2.35.683-2.74 1.708-.385 1.032-.161 2.172.438 3.256.938 1.703 1.396 3.021 1.807 5.495.887 5.312.486 8.733 3.715 15.088 1.588 3.12 3.974 4.563 6.156 4.323 2.183-.239 3.854-2.23 3.854-4.796V66.4c0-1.557.292-2.65.729-3.271.438-.62.986-.915 2.09-.915 1.109 0 1.65.295 2.088.915.437.621.734 1.714.734 3.271v5.772c0 2.566 1.667 4.558 3.85 4.796 2.187.24 4.572-1.203 6.156-4.323 3.235-6.355 2.833-9.776 3.713-15.088.412-2.475.869-3.792 1.812-5.495.6-1.084.824-2.224.434-3.256-.391-1.025-1.5-1.708-2.74-1.708h-2.115l-1.516-4.558c-.225-.682-.64-1.36-1.307-1.803s-1.495-.618-2.48-.618z" />
        </svg>
      ),
      summary:
        "If a crown becomes loose or falls out, the underlying tooth is exposed. Preserve the crown and contact us immediately.",
      content:
        "A lost or loose dental crown is a situation that requires urgent dental attention. Crowns are used to cover and protect damaged or weakened teeth. When a crown becomes dislodged or feels loose, it can expose the underlying tooth to potential damage and sensitivity. In the case of a lost crown, it's essential to preserve the crown if possible and schedule an immediate appointment with your dentist. If the crown is still in your possession, avoid using adhesive substances to reattach it, as this can complicate the restoration process. Your dentist will assess the situation, determine the cause of the issue, and provide the necessary treatment, which may involve re-cementing the crown or possibly creating a new one. Timely professional care is crucial to prevent further damage and maintain your oral health.",
    },
    {
      id: "04",
      title: "Tooth Sensitivity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 128 128"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M64.174 23.063a1.5 1.5 0 0 1-1.128-2.487c.143-.167 3.572-4.211.569-7.056-1.852-1.754-3.534-4.837-3.115-7.77a6.9 6.9 0 0 1 4.081-5.2 1.5 1.5 0 1 1 1.369 2.664 4.02 4.02 0 0 0-2.479 2.961c-.255 1.779.917 3.946 2.207 5.167 4.078 3.863 1.539 9.021-.374 11.209a1.5 1.5 0 0 1-1.13.512m47.059 44.501a7 7 0 0 1-.926-.064 6.9 6.9 0 0 1-5.2-4.082 1.5 1.5 0 0 1 2.669-1.369 4.02 4.02 0 0 0 2.96 2.481c1.773.251 3.946-.918 5.168-2.208 3.863-4.076 9.022-1.538 11.209.374a1.5 1.5 0 0 1-1.974 2.259c-.167-.145-4.212-3.573-7.057-.569a10.08 10.08 0 0 1-6.849 3.178m-48.498 60.057a1.5 1.5 0 0 1-.685-2.835 4.02 4.02 0 0 0 2.479-2.961c.255-1.779-.917-3.946-2.207-5.167-4.078-3.863-1.539-9.021.374-11.209a1.5 1.5 0 1 1 2.258 1.975c-.143.167-3.572 4.211-.569 7.056 1.852 1.754 3.534 4.837 3.115 7.77a6.9 6.9 0 0 1-4.081 5.2 1.5 1.5 0 0 1-.684.171M6.676 67.856a7 7 0 0 1-.927-.064 6.9 6.9 0 0 1-5.2-4.082 1.5 1.5 0 0 1 2.67-1.369 4.02 4.02 0 0 0 2.96 2.481c1.785.25 3.947-.918 5.169-2.208 3.862-4.076 9.02-1.539 11.208.374a1.5 1.5 0 0 1-1.975 2.259c-.166-.144-4.207-3.575-7.055-.57a10.08 10.08 0 0 1-6.85 3.179m102.602 44.216a1.5 1.5 0 0 1-1.431-1.947 4.02 4.02 0 0 0-.374-3.844c-1.09-1.428-3.457-2.115-5.235-2.047-5.642.2-7.513-5.223-7.734-8.12a1.5 1.5 0 1 1 2.992-.228c.018.217.487 5.353 4.463 5.353h.171c2.572-.094 5.93.869 7.727 3.224a6.9 6.9 0 0 1 .853 6.559 1.5 1.5 0 0 1-1.432 1.05m-89.178-.465a8.9 8.9 0 0 1-2.654-.433 1.5 1.5 0 1 1 .895-2.863 4.03 4.03 0 0 0 3.844-.374c1.428-1.091 2.111-3.459 2.046-5.234-.2-5.613 5.224-7.514 8.121-7.735a1.5 1.5 0 1 1 .228 2.991c-.221.019-5.5.5-5.35 4.636.091 2.55-.87 5.928-3.224 7.726a6.3 6.3 0 0 1-3.906 1.286m82.612-82.493a1.5 1.5 0 0 1-.112-3c.22-.018 5.5-.5 5.35-4.636-.092-2.55.869-5.927 3.224-7.726a6.9 6.9 0 0 1 6.559-.854 1.5 1.5 0 0 1-.894 2.865 4.02 4.02 0 0 0-3.844.374c-1.429 1.09-2.111 3.458-2.047 5.233.2 5.613-5.223 7.514-8.12 7.735a.6.6 0 0 1-.116.009m-75.1-2.328a1.5 1.5 0 0 1-1.494-1.386c-.017-.22-.465-5.488-4.636-5.351-2.545.093-5.926-.868-7.725-3.223a6.9 6.9 0 0 1-.853-6.559 1.5 1.5 0 1 1 2.864.894 4.02 4.02 0 0 0 .374 3.844c1.09 1.428 3.454 2.118 5.232 2.046 5.631-.216 7.515 5.224 7.736 8.121a1.5 1.5 0 0 1-1.381 1.61q-.06.004-.117.004" />
            <path d="M98.33 35.52c-5.756-9.874-19.173-10.878-28.817-6.143a12.6 12.6 0 0 1-10.775.119 16 16 0 0 1-.327-.156c-9.639-4.692-23-3.669-28.741 6.18-7.476 12.825-.283 31.094 7.067 44.161 2.7 4.791 3.993 11.158 5.138 16.775 1.729 8.483 3.367 16.528 9.684 16.527a8.5 8.5 0 0 0 1.418-.125c4.72-.8 5.6-9.239 6.627-19.017C60.294 87.254 61.336 77.3 64 77.3s3.706 9.954 4.395 16.541c1.023 9.778 1.907 18.222 6.627 19.017 7.5 1.266 9.25-7.317 11.1-16.4 1.145-5.617 2.442-11.984 5.138-16.775 7.353-13.069 14.546-31.338 7.07-44.163m-9.683 42.69c-2.925 5.2-4.272 11.813-5.461 17.647-1.874 9.192-3.232 14.8-7.665 14.043-2.472-.417-3.476-10.018-4.141-16.371C70.3 83.211 69.369 74.3 64 74.3s-6.3 8.911-7.38 19.229c-.665 6.353-1.67 15.954-4.142 16.371-4.428.749-5.792-4.851-7.665-14.043-1.189-5.834-2.536-12.445-5.461-17.647-6.966-12.384-13.852-29.581-7.09-41.179 2.979-5.112 8.661-7.344 14.51-7.344a23.96 23.96 0 0 1 10.211 2.295c.061.029.383.185.473.23A13 13 0 0 1 61.2 35.1a7.86 7.86 0 0 0 5.307 2.91 2 2 0 0 0 .148.007 1.5 1.5 0 0 0 .145-2.992 4.24 4.24 0 0 1-2.815-1.384 15.5 15.5 0 0 0 6.848-1.575c8.23-4.042 20.092-3.293 24.9 4.961 6.767 11.602-.119 28.799-7.086 41.183" />
          </g>
        </svg>
      ),
      summary:
        "Sharp pain from hot or cold foods can indicate exposed dentin or receding gums. Professional diagnosis is necessary.",
      content:
        "Tooth sensitivity, characterized by sharp, often temporary pain when exposed to hot, cold, sweet, or acidic stimuli, can be uncomfortable and disruptive. It's usually caused by exposed dentin, a softer tissue beneath the tooth enamel, which can occur due to receding gums, enamel erosion, or dental issues. To alleviate sensitivity, consider using desensitizing toothpaste and maintaining gentle brushing techniques. However, persistent sensitivity should prompt a visit to your dentist, as it could indicate an underlying problem. Your dentist can identify the cause and recommend appropriate treatments to reduce discomfort and protect your dental health.",
    },
    {
      id: "05",
      title: "Pain & Swelling",
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
          <g>
            <path d="M55 24h-.11a3 3 0 0 0-3 2.71 15.9 15.9 0 0 1-4.48 9.44l1.73-12.8A11 11 0 0 0 53 14.08 11.26 11.26 0 0 0 41.63 4h-.84a20.6 20.6 0 0 0-7.68 1.48 2.94 2.94 0 0 1-2.22 0A20.6 20.6 0 0 0 23.21 4h-.84A11.26 11.26 0 0 0 11 14.08a11 11 0 0 0 3.8 9.27l1.73 12.81a16 16 0 0 1-4.48-9.45 3 3 0 0 0-3-2.71H9a7 7 0 0 0-7 7v26a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3V31a7 7 0 0 0-7-7m-42-9.76A9.25 9.25 0 0 1 22.37 6h.84a18.7 18.7 0 0 1 6.93 1.33 5 5 0 0 0 3.72 0A18.7 18.7 0 0 1 40.79 6h.84A9.25 9.25 0 0 1 51 14.24 9 9 0 0 1 47.59 22a1 1 0 0 0-.36.65l-3 22A3.51 3.51 0 0 1 40.78 48a3.26 3.26 0 0 1-3.28-2.78l-3.35-15.47a2.2 2.2 0 0 0-4.3 0L26.5 45.22A3.26 3.26 0 0 1 23.22 48a3.52 3.52 0 0 1-3.49-3.35l-3-22a1 1 0 0 0-.36-.65A9 9 0 0 1 13 14.24M60 57a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V31a5 5 0 0 1 5-5h.11a1 1 0 0 1 1 .93A18 18 0 0 0 17 39.2l.76 5.65a5.4 5.4 0 0 0 10.71.79l3.33-15.48a.21.21 0 0 1 .4 0l3.35 15.48A5.47 5.47 0 0 0 39 49.7a5.5 5.5 0 0 0 1.81.3 5.48 5.48 0 0 0 5.47-5.08L47 39.2a18 18 0 0 0 6.9-12.27 1 1 0 0 1 1-.93h.1a5 5 0 0 1 5 5Z" />
            <path d="M12 46.61a1 1 0 0 0-.43-.82l-2.83-2 2.83-2-1.14-1.64-4 2.8a1 1 0 0 0-.43.85 1 1 0 0 0 .43.82l2.83 2-2.83 2a1 1 0 0 0 0 1.63l2.83 2-2.83 2 1.14 1.64 4-2.8a1 1 0 0 0 .43-.89 1 1 0 0 0-.43-.82l-2.83-2 2.83-2a1 1 0 0 0 .43-.77m46 0a1 1 0 0 0-.43-.82l-2.83-2 2.83-2-1.14-1.64-4 2.8a1 1 0 0 0-.43.82 1 1 0 0 0 .43.82l2.83 2-2.83 2a1 1 0 0 0 0 1.63l2.83 2-2.83 2 1.14 1.64 4-2.8a1 1 0 0 0 .43-.86 1 1 0 0 0-.43-.82l-2.83-2 2.83-2a1 1 0 0 0 .43-.77" />
          </g>
        </svg>
      ),
      summary:
        "Swelling usually signals a serious infection or abscess. This requires urgent antibiotics and dental intervention.",
      content:
        "Pain and swelling in the oral cavity can signal various dental or medical issues. Dental conditions like tooth infections, abscesses, or gum infections can lead to localized pain and swelling. Additionally, injuries, allergic reactions, or underlying health concerns can also cause oral discomfort and swelling. It's essential to consult a healthcare or dental professional when experiencing pain and swelling, as these symptoms often indicate an underlying problem that requires proper diagnosis and treatment. Ignoring such symptoms can lead to more severe issues, making early intervention crucial for your well-being and oral health.",
    },
    {
      id: "06",
      title: "Wisdom Teeth",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M6.33 22c-.294 0-.582-.081-.832-.234-.631-.358-.946-1.105-.735-1.768l1.157-3.179a.6.6 0 0 0 .02-.129c0-.197-.13-.4-.332-.518-.249-.141-.565-.115-.729.065L2.733 18.8c-.481.536-1.325.627-1.935.255-.677-.389-.979-1.205-.689-1.891l.761-1.773c.069-.161.552-1.631 1.013-3.084a14.4 14.4 0 0 1 1.295-2.911A2.42 2.42 0 0 1 5.3 8.17c.409 0 .838.116 1.207.326.413.244.737.578.945.97a3.44 3.44 0 0 0 2.988 1.754h.13c.417 0 .841.116 1.227.335.226.125.43.29.601.487a.501.501 0 0 1-.756.656 1.2 1.2 0 0 0-.334-.27 1.5 1.5 0 0 0-.738-.208h-.13a4.44 4.44 0 0 1-3.866-2.276 1.5 1.5 0 0 0-.569-.584c-.683-.388-1.582-.124-1.961.538a13.4 13.4 0 0 0-1.208 2.713c-.232.732-.923 2.887-1.047 3.176l-.76 1.771c-.091.215.032.497.28.639.357.218.544.089.669-.051l2.148-2.566c.492-.539 1.319-.648 1.979-.274.517.301.834.83.834 1.385 0 .139-.023.283-.071.443L5.71 20.321c-.061.192.064.452.297.584A.6.6 0 0 0 6.33 21c.152 0 .29-.063.37-.17l1.149-1.54c.134-.182.954-1.09 2.231-2.497a14.3 14.3 0 0 0 1.758-2.396q.057-.102.103-.232a.5.5 0 0 1 .479-.36c.276 0 .5.219.5.495v.01a.5.5 0 0 1-.026.158 2.5 2.5 0 0 1-.185.421 15.3 15.3 0 0 1-1.889 2.576c-.608.67-2.032 2.237-2.168 2.421L7.5 21.429A1.46 1.46 0 0 1 6.33 22" />
            <path d="M19.213 18c-.746 0-1.39-.495-1.532-1.177l-.588-3.326c-.046-.22-.302-.397-.593-.397s-.547.177-.596.412l-.583 3.296c-.145.697-.789 1.192-1.534 1.192-.797 0-1.463-.556-1.551-1.294l-.228-1.914c-.015-.125-.198-1.027-.667-3.183A15 15 0 0 1 11 8.446 2.45 2.45 0 0 1 13.446 6c.453 0 .897.123 1.286.356a3.43 3.43 0 0 0 3.536 0A2.5 2.5 0 0 1 19.554 6 2.45 2.45 0 0 1 22 8.446c0 1.061-.114 2.125-.34 3.164-.592 2.719-.661 3.123-.667 3.182l-.228 1.915c-.088.737-.755 1.293-1.552 1.293M16.5 12.1c.767 0 1.429.508 1.575 1.209l.588 3.325c.042.202.28.366.55.366.286 0 .531-.181.558-.412L20 14.674c.009-.074.036-.299.683-3.276.21-.969.317-1.962.317-2.952C21 7.649 20.352 7 19.554 7c-.271 0-.538.074-.771.214a4.43 4.43 0 0 1-4.565 0A1.5 1.5 0 0 0 13.446 7C12.648 7 12 7.648 12 8.446c0 .989.107 1.982.317 2.951.429 1.97.658 3.072.683 3.276l.228 1.915c.028.231.273.412.559.412.27 0 .508-.164.553-.381l.583-3.295c.148-.716.81-1.224 1.577-1.224M.5 12a.5.5 0 0 1-.185-.964l2.5-1a.5.5 0 0 1 .371.929l-2.5 1A.5.5 0 0 1 .5 12" />
            <path d="M23.5 12a.5.5 0 0 1-.223-.053l-2-1a.5.5 0 0 1 .447-.895l2 1A.5.5 0 0 1 23.5 12M6.773 5.594a.5.5 0 0 1-.216-.049l-1.274-.614a.5.5 0 0 1 .434-.901l1.274.614a.5.5 0 0 1-.218.95m3.776-1.32a.5.5 0 0 1-.45-.716l.614-1.274a.5.5 0 1 1 .901.433L11 3.991a.5.5 0 0 1-.451.283M8.332 3.99a.5.5 0 0 1-.472-.335l-.33-.944a.5.5 0 0 1 .944-.33l.33.944a.5.5 0 0 1-.472.665" />
          </g>
        </svg>
      ),
      summary:
        "Impacted wisdom teeth can cause severe jaw pain and push against other teeth. Evaluation for extraction may be needed.",
      content:
        "The eruption of wisdom teeth, or third molars, can often be a painful and uncomfortable experience. These late-blooming molars at the back of the mouth can become impacted, meaning they don't have enough space to grow properly. This can result in pain, swelling, and tenderness, especially when the wisdom teeth partially emerge or push against adjacent teeth. Painful wisdom teeth can also lead to jaw discomfort and difficulty in chewing or opening the mouth fully. If you're experiencing these symptoms, it's advisable to consult a dentist for an evaluation. They can determine if wisdom tooth extraction is necessary to relieve the pain and prevent potential dental complications. Early assessment and intervention can help you manage the discomfort associated with wisdom teeth eruption effectively.",
    },
    {
      id: "07",
      title: "Chipped Teeth",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 128 128"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <path d="M97.794 55.957a1.75 1.75 0 0 0-1.673-1.238h-6.744V48.2a1.75 1.75 0 0 0-1.75-1.75h-8.084v-6.967a1.75 1.75 0 0 0-1.552-1.739l-8.155-.927.5-6.46a1.75 1.75 0 0 0-2.429-1.747 23.9 23.9 0 0 0-5.3 3.1 5.5 5.5 0 0 1-6.746 0 23.16 23.16 0 0 0-14.314-4.957c-13.395 0-24.294 11.574-24.294 25.8a26.5 26.5 0 0 0 8.324 19.437 14.67 14.67 0 0 1 4.937 11q-.012.472-.012.948a33.28 33.28 0 0 0 11.527 25.743 4.87 4.87 0 0 0 3.14 1.153 5 5 0 0 0 2.142-.49 4.91 4.91 0 0 0 2.831-4.55q-.009-.615-.009-1.238c0-16.042 4.805-28.029 9.1-28.029s9.1 11.987 9.1 28.029q0 .623-.01 1.238a4.952 4.952 0 0 0 8.113 3.887 33.28 33.28 0 0 0 11.539-25.735q0-.475-.013-.948a14.67 14.67 0 0 1 4.937-11 26 26 0 0 0 6.479-9.575 1.75 1.75 0 0 0 .043-1.148zm-7.273 13.47a18.16 18.16 0 0 0-6.058 13.662q.012.427.012.857c0 9.054-3.841 17.674-10.275 23.06a1.38 1.38 0 0 1-1.529.186 1.44 1.44 0 0 1-.837-1.337q.009-.642.01-1.291c0-15.284-4.417-31.529-12.6-31.529s-12.6 16.245-12.6 31.529q0 .65.009 1.291a1.44 1.44 0 0 1-.836 1.337 1.39 1.39 0 0 1-1.53-.186C37.852 101.62 34.011 93 34.011 83.946c0-.287 0-.572.011-.857a18.16 18.16 0 0 0-6.057-13.662 23 23 0 0 1-7.2-16.87c0-12.3 9.328-22.3 20.794-22.3a19.7 19.7 0 0 1 12.167 4.222 9 9 0 0 0 11.039 0 20 20 0 0 1 1.845-1.273l-.392 5.023a1.75 1.75 0 0 0 1.544 1.871l8.281.941V48.2a1.75 1.75 0 0 0 1.75 1.75h8.084v6.52a1.75 1.75 0 0 0 1.75 1.75h7.2l1.066 3.48a22.4 22.4 0 0 1-5.372 7.727M86.446 17.24a22.9 22.9 0 0 0-9.019 1.853 1.75 1.75 0 0 0-1.059 1.474l-.636 8.145a1.75 1.75 0 0 0 1.547 1.875l8.282.941v7.155a1.75 1.75 0 0 0 1.75 1.75H95.4v6.519a1.75 1.75 0 0 0 1.75 1.75h7.2l1.248 4.077a1.75 1.75 0 0 0 1.608 1.236h.066A1.75 1.75 0 0 0 108.9 52.9a27 27 0 0 0 1.845-9.862C110.74 28.814 99.842 17.24 86.446 17.24m20.619 28.7a1.75 1.75 0 0 0-1.427-.738H98.9v-6.519a1.75 1.75 0 0 0-1.75-1.75h-8.089v-6.967a1.75 1.75 0 0 0-1.553-1.739l-8.155-.927.419-5.372a19.4 19.4 0 0 1 6.674-1.188c11.466 0 20.794 10 20.794 22.3a24 24 0 0 1-.175 2.9" />
        </svg>
      ),
      summary:
        "Accidents or grinding can chip enamel. Prompt bonding or veneers can restore the tooth before decay sets in.",
      content:
        "Chipped or broken teeth are common dental issues that can result from various factors, including accidents, teeth grinding, or weakened enamel. These incidents can lead to sensitivity, pain, and aesthetic concerns. If you have a chipped or broken tooth, it's essential to seek dental care promptly. Your dentist can evaluate the extent of the damage and recommend appropriate treatment, which may involve dental bonding, veneers, or dental crowns to restore both the tooth's functionality and appearance. Ignoring a chipped or broken tooth can lead to more severe complications, so addressing it early is vital for maintaining your oral health and smile.",
    },
    {
      id: "08",
      title: "Mouth Ulcers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M323.5 161.25c0-18.641 15.109-33.75 33.75-33.75S391 142.609 391 161.25v56.25m-270 0v-56.25c0-18.641 15.109-33.75 33.75-33.75s33.75 15.109 33.75 33.75m202.5 0c0-18.641 15.109-33.75 33.75-33.75m-337.5 0c18.641 0 33.75 15.109 33.75 33.75m67.5 56.25v-56.25c0-18.641 15.109-33.75 33.75-33.75S256 142.609 256 161.25M68.5 217.5h375"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M256 217.5v-56.25c0-18.641 15.109-33.75 33.75-33.75 9.315 0 17.753 3.78 23.861 9.889a33.6 33.6 0 0 1 9.889 23.861v56.25m-285 137c0 74.558 60.442 135 135 135h15.355"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M323.145 489.5H338.5c74.558 0 135-60.442 135-135v-212c0-74.559-60.442-135-135-135-16.472 0-32.253 2.952-46.846 8.354a102.84 102.84 0 0 1-71.309 0C205.753 10.452 189.972 7.5 173.5 7.5c-74.558 0-135 60.441-135 135v182"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M400.814 409.011c25.891-19.123 42.686-49.854 42.686-84.511v-137c0-57.99-47.01-105-105-105h-165c-57.99 0-105 47.01-105 105v137c0 34.657 16.795 65.389 42.686 84.511"
          />
          <circle cx="256" cy="474.5" r="7.5" fill="currentColor" />
          <circle cx="383.5" cy="337.5" r="7.5" fill="currentColor" />
          <circle cx="353.5" cy="307.5" r="7.5" fill="currentColor" />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M240.462 307.5c-16.569-28.698-53.264-38.53-81.962-21.961-28.698 16.568-38.53 53.264-21.961 81.961 5.552 9.616 15.624 14.987 25.983 14.996 5.187 8.967 14.875 15.004 25.979 15.004s20.791-6.037 25.979-15.004c10.359-.009 20.431-5.38 25.983-14.996s5.167-21.024-.004-30c5.17-8.976 5.554-20.384.003-30"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="15"
            d="M323.5 247.5c-13.185 0-25.706 2.836-36.989 7.931a74.2 74.2 0 0 1-61.021 0c-11.283-5.095-23.805-7.931-36.989-7.931-49.706 0-90 40.294-90 90v9.5c0 86.985 70.515 157.5 157.5 157.5S413.5 433.985 413.5 347v-9.5c0-49.706-40.294-90-90-90"
          />
        </svg>
      ),
      summary:
        "Persistent sores that do not heal within two weeks need professional examination to rule out complex issues.",
      content:
        "Mouth sores and ulcers, often caused by various factors such as injury, stress, or underlying health conditions, can be painful and disruptive. These small, painful lesions can appear on the lips, gums, tongue, or inside the cheeks. While most mouth sores heal on their own within a week or two, persistent or painful ulcers should be examined by a dentist or healthcare provider. They can identify the cause and provide appropriate treatments or recommend over-the-counter remedies to alleviate discomfort. Maintaining good oral hygiene and minimizing irritants, like spicy or acidic foods, can also help prevent and manage these bothersome sores.",
    },
    {
      id: "09",
      title: "Jaw Pain",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="32"
          height="32"
          viewBox="0 0 75 75"
          className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
          fill="currentColor"
        >
          <g>
            <path d="M7.046 39.853c-.026.454.02-.385-.152 2.578-.098 1.75-.2 3.56 2.478 4.705.128.054 1.056.213 1.15.213.271 0 1.007-.183 1.51-.544.418 1.01 1.426 1.729 2.828 1.95.076.015.091.009.145.01.849-.12 2.13.224 2.92-.808 1.31 2.139 3.492 1.478 4.694 1.633 1.084-.047 1.754-.454 2.17-1.002 1.29 1.7 3.065 1.56 3.169 1.583.377-.057 2.101.302 3.568-1.177.085-.086.15-.186.227-.278.77 1.273 2.044 1.906 3.35 1.906.124 0 .092-.001 1.498-.022a3.935 3.935 0 0 0 3.867-3.993l-.069-4.351c-.01-.557-.52-.99-1.031-.996l-5.05.08a.75.75 0 0 0 .012 1.5h.011l4.566-.072.061 3.863a2.433 2.433 0 0 1-2.39 2.469l-1.434.022a2.43 2.43 0 0 1-2.469-2.39c0-.06-.022-.111-.035-.166.064-.703.015-1.608.02-4.067-.004-.577-.49-1.068-1.057-1.045l-4.367.024a.75.75 0 0 0 .004 1.5l3.922-.022.013 3.234c.003.66-.25 1.28-.714 1.748-.956.965-2.085.678-2.51.733-.101-.02-.956.07-1.746-.715-.904-.896-.752-1.73-.849-4.879-.048-1.097-.994-1.89-1.943-1.851l-3.582-.206a.743.743 0 0 0-.792.706.75.75 0 0 0 .706.792c3.847.24 3.78.145 3.971.32a.42.42 0 0 1 .141.293c.021 2.231.249 3.621-.162 4.4-.467.883-1.731.435-2.57.528-2.41.105-2.203-2.08-2.533-2.588.115-1.803.016-1.526-.023-3.413-.037-.865-.69-1.617-2.033-1.658-2.894-.428-2.814-.428-2.915-.419a1.936 1.936 0 0 0-1.853 1.997l.017 1.325c-.003.022-.014.04-.015.062-.046 1.855-.37 2.3-1.248 2.472l-.637-.113c-1.94-.86-1.586-1.607-1.34-5.857a.44.44 0 0 1 .313-.438l1.749.585a.75.75 0 0 0 .477-1.422c-1.978-.65-1.982-.698-2.186-.679a1.93 1.93 0 0 0-1.345.626c-.35.381-.529.876-.507 1.314m6.585 1.632c2.744.406 2.79.427 2.892.416.188-.003.538.042.548.217l.082 2.084-.02.426c-.093 2.177-.228 2.564-.897 2.59l-1.21.046c-.552-.099-1.67-.429-1.71-1.468l-.049-3.86a.44.44 0 0 1 .364-.45zM29.88 26.687a.751.751 0 0 0 .52 1.408c1.815-.67 2.397-4.128 2.458-4.52.326-2.114.04-7.212.03-7.368-.15-1.977.186-3.092.472-3.252.09-.048.38-.02.934.383.501.367.944.886 1.315 1.544.866 1.534 3.201 3.93 5.774 3.808 1.933-.087 3.527-1.497 4.739-4.187l.118-.251c.384-.814.96-2.638 2.254-3.065.585-.193 1.264-.039 2.025.458.13.083 1.863.652 2.216 1.88.193.672-.082 1.476-.795 2.365-2.027 2.292-5.907 7.14-7.216 10.046-3.348 7.434-7.118 8.3-9.412 9.364-2.065.96-1.692.815-9.26 2.71a.75.75 0 0 0 .367 1.455c7.566-1.895 7.3-1.772 9.524-2.804 1.215-.563 5.448-.913 9.764-9.288.271-.528.653-1.475.916-1.914 2.31-3.87 6.401-8.532 6.463-8.604 1.062-1.319 1.428-2.582 1.087-3.753-.508-1.751-2.45-2.586-2.909-2.762-2.716-1.714-5.023-.277-6.159 2.768-.064.17-.141.336-.35.78-.961 2.132-2.119 3.244-3.44 3.303-1.754.095-3.678-1.77-4.4-3.047-.86-1.524-2.788-3.335-4.285-2.5-1.262.704-1.37 2.931-1.239 4.675.015.197.299 4.988-.015 7.028-.248 1.603-.932 3.133-1.496 3.34" />
            <path d="M69.101 40.115c3.762-5.614-2.585-10.74-5.254-7.518-2.012 2.43-4.772 3.675-7.034 3.159-2.054-.466-3.534-2.291-4.281-5.277-.324-1.298-1.591-1.96-3.373-1.776-1.483.155-2.782.97-3.76 2.359-.83 1.174-1.426 3.92-1.56 5.128-.206 1.855-.706 5.255-1.737 7.185a.75.75 0 1 0 1.322.707c1.15-2.151 1.688-5.765 1.906-7.726.14-1.257.714-3.607 1.295-4.43.731-1.038 1.636-1.62 2.689-1.73.472-.05 1.58-.083 1.763.646 2.043 8.177 9.375 8.209 13.926 2.712.716-.867 1.89-.377 2.695.418 2.196 2.166.24 5.183.174 5.285-.078.107-12.332 16.81-13.997 19.674-1.278 2.192-3.695 5.017-6.181 4.931l-33.396-.706c-6.223.363-7.567-3.239-8.028-5.97-.134-.791.117-2.479.547-3.056 1.182-1.593 1.873-2.808 1.664-3.944-.039-.217-.254-1.325-.57-1.84a.75.75 0 1 0-1.278.786c.097.157.275.789.373 1.325.133.723-.937 2.163-1.393 2.778-.762 1.024-.995 3.172-.821 4.202.858 5.098 4.079 7.528 9.533 7.218 45.462.964 30.291.708 33.459.708 3.101 0 5.834-3.013 7.387-5.677 1.746-3.016 13.232-18.596 13.93-19.57zM14.306 32.6a.75.75 0 0 0-.084-1.498 7 7 0 0 0-.826.095c-1.249.226-2.29 1.171-2.635 2.565-1.052-.464-2.469.022-2.956 2.31a.749.749 0 1 0 1.467.313c.116-.546.342-1.212.756-1.282.123-.02.263.077.338.224.634 1.242 1.24 1.895 2.087 2.79.734.775 1.974 1.259 2.757 1.259.126 0 .24-.04.344-.094 1.505-.162 2.168-1.147 2.332-1.271a3.6 3.6 0 0 0 1.145-1.811c.126.017.24.08.615.001 1.061-.23 3.221-.987 3.723-1.938 1.052.341 3.199.28 5.533-.944.95-.497 1.45-1.62 1.19-2.67-.467-1.884-1.751-3.307-2.264-3.51-2.416-.944-4.212-.382-5.65.295-1.299.607-1.943 2.159-1.467 3.53.7 2.028 1.38 2.278 1.34 2.584-.015.114-1.26.87-2.722 1.186-.077.021-.175-.006-.263-.062-.094-.425-.4-1.223-.768-1.453a9.3 9.3 0 0 0-.81-1.267c-.252-.327-.232-.802.045-1.036.56-.476 1.095-.803 1.63-1a.75.75 0 0 0-.518-1.408c-.704.259-1.385.673-2.083 1.264-.883.75-1 2.138-.26 3.096.844 1.098 1.005 1.866 1.345 2.418.028.576-.234 1.153-.783 1.627-.177.118-.673.95-1.7.904-1.174-.015-2.045-1.226-2.551-1.85-.466-.566-.592-1.361-.328-2.077.364-.995 1.084-1.238 2.021-1.29m8.509-3.809c.925-.435 1.737-.648 2.541-.648.597 0 1.189.118 1.816.352.65.556 1.22 1.53 1.464 2.514a.89.89 0 0 1-.43.982c-1.415.742-2.747 1.045-4.076.913a1.48 1.48 0 0 1-.976-.511c-.405-.474-.75-1.12-1.026-1.918-.223-.647.084-1.402.687-1.684" />
          </g>
        </svg>
      ),
      summary:
        "TMJ disorders or grinding can cause debilitating jaw pain. Custom night guards and therapy can provide relief.",
      content:
        "Jaw pain can be a discomforting and sometimes debilitating condition, often associated with various causes such as temporomandibular joint (TMJ) disorders, teeth grinding, or stress. It can result in difficulty chewing, speaking, and even headaches. If you're experiencing persistent or severe jaw pain, it's advisable to consult a dentist or a healthcare professional. They can assess the source of the pain and recommend suitable treatments, which may include lifestyle adjustments, physical therapy, or dental appliances like night guards. Ignoring jaw pain can lead to worsening symptoms, making early intervention vital for your comfort and overall well-being.",
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
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/10 dark:bg-lightblue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-red-400/10 dark:bg-red-400/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Area */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-red-500 dark:text-red-400">
                Urgent Care
              </span>
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                Emergency
              </span>{" "}
              Dental Services
            </h1>
            <p className="text-lg text-mydark dark:text-lightbg/70 leading-relaxed font-light transition-colors">
              We provide swift, gentle relief for dental emergencies. Don't
              suffer in silence—our expert team is equipped to restore your
              comfort immediately.
            </p>
          </motion.div>
        </div>

        {/* Elegant Red/Blue CTA Banner (Eye-Soothing Soft Red) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none backdrop-blur-md relative overflow-hidden transition-colors"
        >
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-lightblue/5 via-transparent to-red-400/5 dark:from-lightblue/5 dark:to-red-400/5 pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-red-50 dark:bg-red-500/10 p-4 rounded-2xl flex-shrink-0 border border-red-100 dark:border-red-500/20 transition-colors">
              <Phone className="w-8 h-8 text-red-500 dark:text-red-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-2 transition-colors">
                In{" "}
                <span className=" font-bold tracking-widest  text-red-500 dark:text-red-400">
                  Pain
                </span>{" "}
                Right Now?
              </h3>
              <p className="text-mydark dark:text-lightbg/70 font-light text-lg transition-colors">
                Call our clinic immediately during operating hours for priority
                emergency assistance.
              </p>
            </div>
          </div>
          <a
            href="tel:+1234567890"
            className="relative z-10 w-full md:w-auto text-center bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-400 transition-colors shadow-[0_0_20px_rgba(248,113,113,0.3)] hover:-translate-y-1 transform duration-300 whitespace-nowrap flex items-center justify-center gap-2 group"
          >
            Call (555) 123-4567
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Minimalist Grid of Conditions (Progressive Disclosure) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {emergencyConditions.map((condition) => (
            <motion.div
              variants={itemVariants}
              key={condition.id}
              className="bg-white dark:bg-white/[0.03] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-lightblue/30 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none dark:hover:bg-white/[0.06] transition-all duration-300 relative group flex flex-col"
            >
              {/* Large faded number in background */}

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-lightblue/10 text-lightblue group-hover:bg-lightblue group-hover:text-white dark:group-hover:text-myblack transition-colors">
                  {condition.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg transition-colors">
                  {condition.title}
                </h3>
              </div>

              <p className="text-mydark dark:text-lightbg/60 font-light leading-relaxed mb-8 flex-1 relative z-10 transition-colors">
                {condition.summary}
              </p>

              <button
                onClick={() => setSelectedCondition(condition)}
                className="r hover:cursor-pointer elative z-10 mt-auto inline-flex items-center gap-2 text-sm font-semibold text-lightblue hover:text-red-500 dark:hover:text-red-400 transition-colors group/btn"
              >
                Read Details
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
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
            <p className="text-mydark dark:text-lightbg/70 mb-6 text-lg font-light transition-colors">
              Unsure if your situation is an emergency? It is always best to be
              safe.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-myblack dark:bg-lightblue text-white dark:text-myblack px-10 py-4 rounded-full font-bold hover:bg-mydark dark:hover:bg-white transition-all hover:-translate-y-1 shadow-md dark:shadow-[0_0_20px_rgba(76,156,181,0.3)] dark:hover:shadow-[0_0_30px_rgba(76,156,181,0.5)]"
            >
              Contact Us Online
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal for Full Text (Progressive Disclosure) */}
      <AnimatePresence>
        {selectedCondition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-myblack/60 dark:bg-myblack/80 backdrop-blur-md"
              onClick={() => setSelectedCondition(null)}
            ></div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-[#0a0f25] border border-gray-100 dark:border-white/10 rounded-3xl p-8 md:p-10 max-w-2xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide transition-colors"
            >
              <button
                onClick={() => setSelectedCondition(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-mydark dark:text-lightbg/50 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-myblack dark:hover:text-lightbg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-lightblue/10 dark:bg-lightblue/20 text-lightblue">
                  {selectedCondition.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg transition-colors">
                  {selectedCondition.title}
                </h3>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-8 transition-colors"></div>

              <p className="text-mydark dark:text-lightbg/80 leading-loose font-light text-[15px] md:text-base transition-colors">
                {selectedCondition.content}
              </p>

              <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 flex justify-end transition-colors">
                <a
                  href="tel:+1234567890"
                  className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-400 transition-colors shadow-lg"
                >
                  Call Clinic
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergencyDental;
