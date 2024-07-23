import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import { Card } from "@/components/common/Card";
import { blogCards } from "@/assets/data/dummydata";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Blog = () => {
  return (
    <>
      <div className="container">
        <br/>
        <Title title={"Our Blogs"}/>
      <div className='blogContent grid-3'>
        <a href="/federalbudget"><Card data={{id:1 , title:"Federal Budget", cover: "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721736223/homePage/omer85xdmfprk3ohmdve.jpg" , href:"/federalbudget", }} caption={"Read Blog"}  /></a>
        <a href="/"><Card data={{id:2 , title:"Net Zero Emissions vs. AI's Rising Energy Consumption", cover: "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721735819/homePage/xugbdj1vuq9gm4o5qggb.png" , href:"/federalbudget", }} caption={"Read Blog"}  /></a>
        <a href="/agency"><Card data={{id:3 , title:"SIPBN Clean Energy Committee's Analysis", cover: "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721736591/homePage/jquatrm5gch50shbjmrr.png" , href:"/agency", }} caption={"Read Blog"}  /></a>
        </div>
      </div>
    </>
  );
};

export default Blog;
