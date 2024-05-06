import { FunctionComponent, useEffect, useState } from "react";
interface PricingProps {}

const Pricing: FunctionComponent<PricingProps> = ({}) => {
  let plans = [
    {
      id: 0,
      title: "BEGINNERS",
      price: 95,
      description:
        "Mobile-Optimized Happy Customers Best Hosting Free Custom Outstanding",
    },
    {
      id: 1,
      title: "BASIC PLAN",
      price: 149,
      description:
        "Mobile-Optimized Happy Customers Best Hosting Free Custom Outstanding",
    },
    {
      id: 2,
      title: "ADVANCED",
      price: 199,
      description:
        "Mobile-Optimized Happy Customers Best Hosting Free Custom Outstanding",
    },
  ];
  return (
    <div className="text-light">
      <div className="titleSection mb-5">
        <h1 className="h1">PRICING PLANS</h1>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain will give you a complete account of the
          system and expound teachings.
        </p>
      </div>
      <div className="row" style={{ maxWidth: "80%", margin: "0 auto" }}>
        {plans.map((plan) => (
          <div
            className="col-xl-4 my-2 border border-light p-5 pricingPlan"
            key={plan.id}
            style={{ maxWidth: "350px", margin: "0 auto" }}
          >
            <p>Billed Monthly</p>
            <h3>{plan.title}</h3>
            <div className="heading">
              <h2 className="h2">
                <span className="fs-1 "> $</span>
                <span className="fw-bold">{plan.price}</span>
              </h2>
            </div>
            <div
              style={{
                maxWidth: "150px",
                margin: "0 auto",
                lineHeight: "50px",
              }}
            >
              <p>{plan.description}</p>
            </div>
            <button className="btn border text-light rounded-5 p-3 btnPricing">
              CHOOSE PLAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pricing;
