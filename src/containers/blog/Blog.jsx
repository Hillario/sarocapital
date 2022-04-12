import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 13, 2022" text="Perfect platform for technical analysis and automated trading" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Aug 13, 2022" text="A trading platform that provides leveraged trading" />
        <Article imgUrl={blog03} date="Aug 13, 2022" text="The 24-Hour nature offers traders instant access to the markets at all hours of the day for immediate response to global developments." />
        <Article imgUrl={blog04} date="Aug 13, 2022" text="Data related to interest rates and international trade is looked at most closely" />
        <Article imgUrl={blog05} date="Aug 13, 2022" text="If the market has uncertainity 
        regarding interest rates, then any bit of news relating to interest rates can directly 
        affect the currency market" />
      </div>
    </div>
  </div>
);

export default Blog;
