import React from "react";
import { motion } from "framer-motion";

import { pathLeft, pathRight } from "./Variants";
import { lightColor } from "./Variables";

export const Logo = () => {
  return (
    <>
      <svg
        width="182"
        height="154"
        viewBox="0 0 182 154"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathLeft}
          d="M21.51 40L12.24 26.185V40H2.25V8.14H12.24V21.55L21.375 8.14H32.67L21.69 23.395L33.39 40H21.51ZM63.0847 14.62V40H53.0947V36.13C52.3147 37.33 51.2647 38.305 49.9447 39.055C48.6547 39.805 47.1097 40.18 45.3097 40.18C42.3997 40.18 40.1197 39.205 38.4697 37.255C36.8497 35.305 36.0397 32.665 36.0397 29.335V14.62H45.9847V28.075C45.9847 29.275 46.2997 30.235 46.9297 30.955C47.5897 31.645 48.4597 31.99 49.5397 31.99C50.6497 31.99 51.5197 31.645 52.1497 30.955C52.7797 30.235 53.0947 29.275 53.0947 28.075V14.62H63.0847ZM77.1817 31.72H87.7567V40H66.2467V32.17L75.9217 22.9H66.3817V14.62H87.3067V22.45L77.1817 31.72ZM83.0767 8.68L71.4217 12.91V6.25L83.0767 1.3V8.68ZM108.663 14.44C111.573 14.44 113.838 15.415 115.458 17.365C117.108 19.315 117.933 21.955 117.933 25.285V40H107.988V26.545C107.988 25.345 107.658 24.4 106.998 23.71C106.368 22.99 105.513 22.63 104.433 22.63C103.323 22.63 102.453 22.99 101.823 23.71C101.193 24.4 100.878 25.345 100.878 26.545V40H90.8877V14.62H100.878V18.49C101.658 17.29 102.693 16.315 103.983 15.565C105.303 14.815 106.863 14.44 108.663 14.44ZM127.305 12.595C125.565 12.595 124.17 12.13 123.12 11.2C122.07 10.27 121.545 9.1 121.545 7.69C121.545 6.25 122.07 5.065 123.12 4.135C124.17 3.175 125.565 2.695 127.305 2.695C129.015 2.695 130.395 3.175 131.445 4.135C132.495 5.065 133.02 6.25 133.02 7.69C133.02 9.1 132.495 10.27 131.445 11.2C130.395 12.13 129.015 12.595 127.305 12.595ZM132.255 14.62V40H122.265V14.62H132.255ZM135.417 27.31C135.417 24.64 135.867 22.33 136.767 20.38C137.697 18.4 138.957 16.9 140.547 15.88C142.137 14.83 143.922 14.305 145.902 14.305C147.552 14.305 148.977 14.65 150.177 15.34C151.377 16 152.292 16.915 152.922 18.085V14.62H162.867V40H152.922V36.535C152.292 37.705 151.377 38.635 150.177 39.325C148.977 39.985 147.552 40.315 145.902 40.315C143.922 40.315 142.137 39.805 140.547 38.785C138.957 37.735 137.697 36.235 136.767 34.285C135.867 32.305 135.417 29.98 135.417 27.31ZM152.922 27.31C152.922 25.96 152.577 24.91 151.887 24.16C151.197 23.41 150.312 23.035 149.232 23.035C148.152 23.035 147.267 23.41 146.577 24.16C145.887 24.91 145.542 25.96 145.542 27.31C145.542 28.66 145.887 29.71 146.577 30.46C147.267 31.21 148.152 31.585 149.232 31.585C150.312 31.585 151.197 31.21 151.887 30.46C152.577 29.71 152.922 28.66 152.922 27.31Z"
          fill={lightColor}
        />
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathRight}
          d="M12.24 71.085C12.87 69.915 13.77 69 14.94 68.34C16.14 67.65 17.565 67.305 19.215 67.305C21.195 67.305 22.98 67.83 24.57 68.88C26.16 69.9 27.405 71.4 28.305 73.38C29.235 75.33 29.7 77.64 29.7 80.31C29.7 82.98 29.235 85.305 28.305 87.285C27.405 89.235 26.16 90.735 24.57 91.785C22.98 92.805 21.195 93.315 19.215 93.315C17.565 93.315 16.14 92.985 14.94 92.325C13.77 91.635 12.87 90.705 12.24 89.535V105.15H2.25V67.62H12.24V71.085ZM19.575 80.31C19.575 78.96 19.23 77.91 18.54 77.16C17.85 76.41 16.965 76.035 15.885 76.035C14.805 76.035 13.92 76.41 13.23 77.16C12.54 77.91 12.195 78.96 12.195 80.31C12.195 81.66 12.54 82.71 13.23 83.46C13.92 84.21 14.805 84.585 15.885 84.585C16.965 84.585 17.85 84.21 18.54 83.46C19.23 82.71 19.575 81.66 19.575 80.31ZM42.8259 72.3C43.8459 70.83 45.0909 69.66 46.5609 68.79C48.0309 67.89 49.5609 67.44 51.1509 67.44V78.105H48.3159C46.4259 78.105 45.0309 78.435 44.1309 79.095C43.2609 79.755 42.8259 80.925 42.8259 82.605V93H32.8359V67.62H42.8259V72.3ZM65.9018 93.315C63.3518 93.315 61.0568 92.79 59.0168 91.74C56.9768 90.69 55.3718 89.19 54.2018 87.24C53.0618 85.26 52.4918 82.95 52.4918 80.31C52.4918 77.67 53.0618 75.375 54.2018 73.425C55.3718 71.445 56.9768 69.93 59.0168 68.88C61.0568 67.83 63.3518 67.305 65.9018 67.305C68.4518 67.305 70.7468 67.83 72.7868 68.88C74.8268 69.93 76.4168 71.445 77.5568 73.425C78.7268 75.375 79.3118 77.67 79.3118 80.31C79.3118 82.95 78.7268 85.26 77.5568 87.24C76.4168 89.19 74.8268 90.69 72.7868 91.74C70.7468 92.79 68.4518 93.315 65.9018 93.315ZM65.9018 84.675C66.8318 84.675 67.6118 84.315 68.2418 83.595C68.8718 82.845 69.1868 81.75 69.1868 80.31C69.1868 78.87 68.8718 77.79 68.2418 77.07C67.6118 76.32 66.8318 75.945 65.9018 75.945C64.9718 75.945 64.1918 76.32 63.5618 77.07C62.9318 77.79 62.6168 78.87 62.6168 80.31C62.6168 81.75 62.9168 82.845 63.5168 83.595C64.1468 84.315 64.9418 84.675 65.9018 84.675ZM87.4002 65.595C85.6602 65.595 84.2652 65.13 83.2152 64.2C82.1652 63.27 81.6402 62.1 81.6402 60.69C81.6402 59.25 82.1652 58.065 83.2152 57.135C84.2652 56.175 85.6602 55.695 87.4002 55.695C89.1102 55.695 90.4902 56.175 91.5402 57.135C92.5902 58.065 93.1152 59.25 93.1152 60.69C93.1152 62.1 92.5902 63.27 91.5402 64.2C90.4902 65.13 89.1102 65.595 87.4002 65.595ZM92.4402 94.755C92.4402 101.685 88.9602 105.15 82.0002 105.15H78.6702V96.645H80.6052C81.2652 96.645 81.7302 96.51 82.0002 96.24C82.3002 95.97 82.4502 95.535 82.4502 94.935V67.62H92.4402V94.755ZM121.434 80.085C121.434 80.775 121.389 81.435 121.299 82.065H105.234C105.384 84.255 106.299 85.35 107.979 85.35C109.059 85.35 109.839 84.855 110.319 83.865H120.894C120.534 85.665 119.769 87.285 118.599 88.725C117.459 90.135 116.004 91.26 114.234 92.1C112.494 92.91 110.574 93.315 108.474 93.315C105.954 93.315 103.704 92.79 101.724 91.74C99.7743 90.69 98.2443 89.19 97.1343 87.24C96.0543 85.26 95.5143 82.95 95.5143 80.31C95.5143 77.67 96.0543 75.375 97.1343 73.425C98.2443 71.445 99.7743 69.93 101.724 68.88C103.704 67.83 105.954 67.305 108.474 67.305C110.994 67.305 113.229 67.83 115.179 68.88C117.159 69.9 118.689 71.37 119.769 73.29C120.879 75.21 121.434 77.475 121.434 80.085ZM111.309 77.7C111.309 76.86 111.039 76.23 110.499 75.81C109.959 75.36 109.284 75.135 108.474 75.135C106.704 75.135 105.669 75.99 105.369 77.7H111.309ZM140.839 93L134.584 82.875V93H124.594V59.7H134.584V77.115L140.929 67.62H152.539L143.044 80.4L152.764 93H140.839ZM170.799 84.495V93H167.019C160.059 93 156.579 89.535 156.579 82.605V75.945H153.429V67.62H156.579V61.5H166.569V67.62H170.709V75.945H166.569V82.785C166.569 83.385 166.704 83.82 166.974 84.09C167.274 84.36 167.754 84.495 168.414 84.495H170.799Z"
          fill={lightColor}
        />
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathLeft}
          d="M14.31 150.315C11.76 150.315 9.465 149.79 7.425 148.74C5.385 147.69 3.78 146.19 2.61 144.24C1.47 142.26 0.9 139.95 0.9 137.31C0.9 134.67 1.47 132.375 2.61 130.425C3.78 128.445 5.385 126.93 7.425 125.88C9.465 124.83 11.76 124.305 14.31 124.305C16.86 124.305 19.155 124.83 21.195 125.88C23.235 126.93 24.825 128.445 25.965 130.425C27.135 132.375 27.72 134.67 27.72 137.31C27.72 139.95 27.135 142.26 25.965 144.24C24.825 146.19 23.235 147.69 21.195 148.74C19.155 149.79 16.86 150.315 14.31 150.315ZM14.31 141.675C15.24 141.675 16.02 141.315 16.65 140.595C17.28 139.845 17.595 138.75 17.595 137.31C17.595 135.87 17.28 134.79 16.65 134.07C16.02 133.32 15.24 132.945 14.31 132.945C13.38 132.945 12.6 133.32 11.97 134.07C11.34 134.79 11.025 135.87 11.025 137.31C11.025 138.75 11.325 139.845 11.925 140.595C12.555 141.315 13.35 141.675 14.31 141.675ZM69.3784 124.62L63.3484 150H52.0984L49.0384 135.69L45.7984 150H34.5484L28.5634 124.62H38.4634L40.5784 140.055L43.8634 124.62H54.5284L57.9934 140.235L60.1534 124.62H69.3784ZM70.1578 137.31C70.1578 134.64 70.6078 132.33 71.5078 130.38C72.4378 128.4 73.6978 126.9 75.2878 125.88C76.8778 124.83 78.6628 124.305 80.6428 124.305C82.2928 124.305 83.7178 124.65 84.9178 125.34C86.1178 126 87.0328 126.915 87.6628 128.085V124.62H97.6078V150H87.6628V146.535C87.0328 147.705 86.1178 148.635 84.9178 149.325C83.7178 149.985 82.2928 150.315 80.6428 150.315C78.6628 150.315 76.8778 149.805 75.2878 148.785C73.6978 147.735 72.4378 146.235 71.5078 144.285C70.6078 142.305 70.1578 139.98 70.1578 137.31ZM87.6628 137.31C87.6628 135.96 87.3178 134.91 86.6278 134.16C85.9378 133.41 85.0528 133.035 83.9728 133.035C82.8928 133.035 82.0078 133.41 81.3178 134.16C80.6278 134.91 80.2828 135.96 80.2828 137.31C80.2828 138.66 80.6278 139.71 81.3178 140.46C82.0078 141.21 82.8928 141.585 83.9728 141.585C85.0528 141.585 85.9378 141.21 86.6278 140.46C87.3178 139.71 87.6628 138.66 87.6628 137.31ZM119.869 124.44C122.779 124.44 125.044 125.415 126.664 127.365C128.314 129.315 129.139 131.955 129.139 135.285V150H119.194V136.545C119.194 135.345 118.864 134.4 118.204 133.71C117.574 132.99 116.719 132.63 115.639 132.63C114.529 132.63 113.659 132.99 113.029 133.71C112.399 134.4 112.084 135.345 112.084 136.545V150H102.094V124.62H112.084V128.49C112.864 127.29 113.899 126.315 115.189 125.565C116.509 124.815 118.069 124.44 119.869 124.44ZM138.511 122.595C136.771 122.595 135.376 122.13 134.326 121.2C133.276 120.27 132.751 119.1 132.751 117.69C132.751 116.25 133.276 115.065 134.326 114.135C135.376 113.175 136.771 112.695 138.511 112.695C140.221 112.695 141.601 113.175 142.651 114.135C143.701 115.065 144.226 116.25 144.226 117.69C144.226 119.1 143.701 120.27 142.651 121.2C141.601 122.13 140.221 122.595 138.511 122.595ZM143.461 124.62V150H133.471V124.62H143.461ZM146.623 137.31C146.623 134.64 147.073 132.33 147.973 130.38C148.903 128.4 150.163 126.9 151.753 125.88C153.343 124.83 155.128 124.305 157.108 124.305C158.758 124.305 160.183 124.65 161.383 125.34C162.583 126 163.498 126.915 164.128 128.085V124.62H174.073V150H164.128V146.535C163.498 147.705 162.583 148.635 161.383 149.325C160.183 149.985 158.758 150.315 157.108 150.315C155.128 150.315 153.343 149.805 151.753 148.785C150.163 147.735 148.903 146.235 147.973 144.285C147.073 142.305 146.623 139.98 146.623 137.31ZM164.128 137.31C164.128 135.96 163.783 134.91 163.093 134.16C162.403 133.41 161.518 133.035 160.438 133.035C159.358 133.035 158.473 133.41 157.783 134.16C157.093 134.91 156.748 135.96 156.748 137.31C156.748 138.66 157.093 139.71 157.783 140.46C158.473 141.21 159.358 141.585 160.438 141.585C161.518 141.585 162.403 141.21 163.093 140.46C163.783 139.71 164.128 138.66 164.128 137.31Z"
          fill={lightColor}
        />
      </svg>
    </>
  );
};