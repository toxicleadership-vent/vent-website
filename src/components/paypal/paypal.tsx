"use client";

// Declare the PayPal property on the window object
declare global {
  interface Window {
    PayPal: {
      Donation: {
        Button: (options: {
          env: string;
          hosted_button_id: string;
          image: {
            src: string;
            alt: string;
            title: string;
          };
        }) => {
          render: (selector: string) => void;
        };
      };
    };
  }
}

import Script from "next/script";
import { useEffect, useState } from "react";

export default function PayPalDonate() {
  const [paypal, setPaypal] = useState(false);

  useEffect(() => {
    if (paypal) {
      console.log("PayPal SDK loaded");
      window.PayPal.Donation.Button({
        env:'production',
        hosted_button_id:'W9B22CQYEYCS4',
        image: {
        src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
        alt:'Donate with PayPal button',
        title:'PayPal - The safer, easier way to pay online!',
        }
        }).render('#donate-button');        
    }
  }, [paypal]);

  return (
    <>
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        onLoad={() => setPaypal(true)}
      />
      <div id="donate-button-container">
        <div id="donate-button"></div>
      </div>
    </>
  );
}