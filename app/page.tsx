"use client";
import React, { useState } from "react";
import { usePageData } from "@/hooks/usePageData";
import { FeatureItem, Spinner } from "@/components";
import { formatMarkdownDescription } from "@/lib/functions";
import { API_URLS } from "@/const/api-url";

export default function Home() {
  const [selectedFeautureIndex, setSelectedFeatureIndex] = useState<number>(0);

  const handleSelectedFeatureIndex = (id: number) => {
    setSelectedFeatureIndex(id);
  };

  const { data, error, isLoading } = usePageData(API_URLS.HOME);

  if (isLoading) return <Spinner />;

  const selectedFeature = data?.Features.find(
    (feature) => feature.id === selectedFeautureIndex
  );

  const imageUrl = data?.WhyChooseUsImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.WhyChooseUsImage.url}`
    : null;

  return (
    <section className="section-container">
      <div className="pageName uppercase">{data?.WhyChooseUsSectionName}</div>
      <div className="title capitalize">{data?.WhyChooseUsTitle}</div>
      <div className="subTitle">{data?.WhyChooseUsSubTitle}</div>
      <div className="features">
        <div className="relative">
          <div className="circle">
            <div className="feature">
              <div className="feature-title">{selectedFeature?.Title}</div>
              <div className="feature-description">
                {selectedFeature &&
                  formatMarkdownDescription(selectedFeature.Description)}
              </div>
            </div>
          </div>
          <div className="image-container">
            <div
              style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                height: "360px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
        <div className="feature-list">
          {data?.Features.map((item) => (
            <FeatureItem
              key={item.id}
              id={item.id}
              title={item.Title}
              selectedFeautureIndex={selectedFeautureIndex}
              handleSelectedFeatureIndex={handleSelectedFeatureIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
