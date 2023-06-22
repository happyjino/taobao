import React, { useEffect } from "react";

const GoogleAdvertise = ({
  className = "adsbygoogle",
  client = "",
  slot = "",
  format = "",
  responsive = "",
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.error("AdvertiseError", e);
    }
  }, []);
  return (
    <ins
      className={className}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        display: "block",
        textAlign: "center"
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
};