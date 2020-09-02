import React from "react";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  return (
    <div className="about mt-2">
      <h1>about this app </h1>
      <p>
        <span>
          this app is using{" "}
          <a href="https://www.thecocktaildb.com/api.php">cocktail api</a>{" "}
          <br />
          by using this app you can and browse the new cocktails and their
          ingredients
        </span>
      </p>

      <h3>you can visit my website by clicking on the logo</h3>
      <div className="logo2">
        <a
          href="https://9mooder7.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.18 217.97">
            <defs></defs>
            <title>logo_2</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M73.71,149.81V76.1L38.85,134.31H37.08L2.21,76.1v73.71H0V71.23H1.77L38,131.66,74.15,71.23h1.78v78.58Z"
                />
                <path
                  className="cls-1"
                  d="M128.83,150.36A32.68,32.68,0,0,1,114,147a37.07,37.07,0,0,1-11.62-9,41.85,41.85,0,0,1,.33-55.18,37.68,37.68,0,0,1,11.67-8.85,32.5,32.5,0,0,1,14.45-3.26,32.09,32.09,0,0,1,14.88,3.43,36.55,36.55,0,0,1,11.51,9.18,43.91,43.91,0,0,1,7.47,12.84,40.49,40.49,0,0,1,2.66,14.39,41.69,41.69,0,0,1-10.51,27.84,37.33,37.33,0,0,1-11.62,8.8A32.79,32.79,0,0,1,128.83,150.36ZM94.41,110.52a39.62,39.62,0,0,0,9.74,26.12,34.81,34.81,0,0,0,10.95,8.41,30.67,30.67,0,0,0,13.73,3.1,30.27,30.27,0,0,0,13.94-3.21,34.34,34.34,0,0,0,10.85-8.63,41.25,41.25,0,0,0,7-12.12,39,39,0,0,0-.11-27.73,40.06,40.06,0,0,0-7.25-12.06A35.14,35.14,0,0,0,142.38,76a30,30,0,0,0-13.55-3.1,30.63,30.63,0,0,0-14,3.21,34,34,0,0,0-10.9,8.63,41,41,0,0,0-7,12.12A38.91,38.91,0,0,0,94.41,110.52Z"
                />
                <path
                  className="cls-1"
                  d="M188.48,150.36A32.68,32.68,0,0,1,173.65,147,37.07,37.07,0,0,1,162,138a41.85,41.85,0,0,1,.33-55.18A37.6,37.6,0,0,1,174,73.94a32.42,32.42,0,0,1,14.44-3.26,32.09,32.09,0,0,1,14.88,3.43,36.43,36.43,0,0,1,11.51,9.18,43.94,43.94,0,0,1,7.48,12.84A40.7,40.7,0,0,1,225,110.52a41.55,41.55,0,0,1-10.51,27.84,37.33,37.33,0,0,1-11.62,8.8A32.79,32.79,0,0,1,188.48,150.36Zm-34.42-39.84a39.62,39.62,0,0,0,9.74,26.12,34.81,34.81,0,0,0,10.95,8.41,30.7,30.7,0,0,0,13.73,3.1,30.27,30.27,0,0,0,13.94-3.21,34.34,34.34,0,0,0,10.85-8.63,41.25,41.25,0,0,0,7-12.12,39,39,0,0,0-.11-27.73,40.06,40.06,0,0,0-7.25-12.06A35.22,35.22,0,0,0,202,76a30.07,30.07,0,0,0-13.56-3.1,30.63,30.63,0,0,0-14,3.21,34,34,0,0,0-10.9,8.63,41,41,0,0,0-7,12.12A38.91,38.91,0,0,0,154.06,110.52Z"
                />

                <path
                  className="cls-1"
                  d="M295.34,71.23v78.58H270.11q-12.39,0-20.54-5.26a32.8,32.8,0,0,1-12.22-14.16,46.77,46.77,0,0,1-4.1-19.76q0-12,4.48-20.81A32.62,32.62,0,0,1,250.52,76.1q8.29-4.87,19.59-4.87Zm-59.88,39.4a43.22,43.22,0,0,0,4,19.09,30.9,30.9,0,0,0,11.73,13.12q7.69,4.75,18.87,4.76h23V73.44h-23q-11.4,0-19.1,4.87a30.84,30.84,0,0,0-11.62,13.34A44.68,44.68,0,0,0,235.46,110.63Z"
                />
                <path
                  className="cls-1"
                  d="M363.52,147.6v2.21H311.94V71.23h50.58v2.21H314.15v35.09h42.4v2.21h-42.4V147.6Z"
                />
                <path
                  className="cls-1"
                  d="M424.77,115.06a23.94,23.94,0,0,0,7-8.69A25.67,25.67,0,0,0,434.35,95a23.48,23.48,0,0,0-1.66-8.64,26.74,26.74,0,0,0-4.6-7.63,22.27,22.27,0,0,0-7-5.48,19.34,19.34,0,0,0-8.91-2h-32l.35,1.42c.73-.18.9.36,1.63.46,0-.42.23.33.23.33h29.77a17.67,17.67,0,0,1,10.07,3A22.31,22.31,0,0,1,432.13,95a24.31,24.31,0,0,1-2.32,10.4,21,21,0,0,1-6.59,8.13A16.67,16.67,0,0,1,413,116.72H382.44a21.06,21.06,0,0,1-1,2.67c-.29,0,.22-.56-.05-.6l-.46,0c-.33.07.23-.34-.08-.33l-.6,31.31,1.92-.15.29-30.9,29.22.17,19.92,30.88h2.66l-19.92-30.88A19.14,19.14,0,0,0,424.77,115.06Z"
                />
                <motion.path
                  className="cls-2"
                  d="M380.84,203.55s.22-42,.46-86.83"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, yoyo: Infinity }}
                />
                <motion.path
                  className="cls-2"
                  d="M381.54,73.44l.37-70.7,165.5,106.52L380.83,216.71"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, yoyo: Infinity }}
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <h5>
        if you want to watch the githup repo of this app click here{" "}
        <a
          href="https://github.com/Mood-al/cocktaily"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fab fa-github fa-2x"></i>{" "}
        </a>
      </h5>
    </div>
  );
};

export default About;
