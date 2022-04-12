import React from 'react';
import Features from '../../components/feature/Feature';
import './feature.css';

const featuresData = [
  {
    title: '24-Hour',
    text: 'The 24-Hour nature offers traders instant access to the markets at all hours of the day for immediate response to global developments.',
  },
  {
    title: 'Reduced Costs',
    text: 'Costs are further reduced by the efficiencies created by a purely electronic marketplace that allows clients to deal directly with the market maker, eliminating both ticket costs and middlemen.',
  },
  {
    title: 'Competitive Spreads',
    text: 'Because the currency market offers around the clock liquidity, traders receive tight competitive spreads both intraday and at night.',
  },
  {
    title: 'Low Transaction Costs',
    text: 'Low transaction costs make online FX trading the best market to trade for short-term traders.',
  },
];

const Feature = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Features title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Feature;
