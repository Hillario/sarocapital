import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Saro Capital" text="Traders access a 24-hour market with low
      transaction costs, high leverage, the ability to profit in both bull and bear
      markets, minimized error rates, limited slippage and no trading curbs or uptick
      rules." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore Bots</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="24-Hour" text="The 24-Hour nature offers traders instant access
      to the markets at all hours of the day for immediate response to global developments." />
      <Feature title="Reduced Costs" text="Costs are further reduced by the efficiencies created
      by a purely electronic marketplace that allows clients to deal directly with the market
      maker, eliminating both ticket costs and middlemen." />
      <Feature title="Competitive Spreads" text="Because the currency market offers around the
       clock liquidity, traders receive tight competitive spreads both intraday and at night." />
    </div>
  </div>
);

export default About;
