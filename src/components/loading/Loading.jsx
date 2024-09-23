import React, { useState, useEffect } from "react";
import "./loading.css";

export default function Loading() {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const body = document.body;

    const updatePercentage = () => {
        let percent = 0;

        const interval = setInterval(() => {

        if (percent < 100) {
          percent += 1;
          setPercentage(percent);
          body.classList.add('active');
        } else {
          clearInterval(interval);
          setIsLoading(false);
          body.classList.remove('active');
        }
      }, 10);
    };

    updatePercentage();


    return () => clearInterval(updatePercentage);
  }, []);

  return (
    isLoading && (
      <div id="loadingContainer" className="loading-container">
        <div className="loading-circle"></div>
        <div className="percent">
          <span>{percentage}%</span>
        </div>
        <div className="loading-text absolute text-slate-100 font-bold text-2xl bottom-[200px]">Loading...</div>
      </div>
    )
  );
}