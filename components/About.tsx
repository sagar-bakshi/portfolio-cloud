/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="puppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2 text-gray-600">
            My name is <strong>Sagar Bakshi</strong>, and I&apos;m a seasoned
            <strong> Cloud Architect</strong> with over 8 years of experience in
            designing, implementing, and managing cutting-edge cloud solutions.
            I&apos;m passionate about helping businesses navigate the
            complexities of cloud computing and utilize the latest technologies
            to achieve their goals.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my career, I&apos;ve worked with numerous clients across
            various industries, including finance, healthcare, and technology.
            My expertise spans across multiple cloud platforms, such as Amazon
            Web Services (AWS), Microsoft Azure, and Google Cloud Platform
            (GCP). I am skilled in areas like infrastructure design, automation,
            and optimization, as well as containerization, serverless
            architectures, and cloud security.
          </p>
          <p className="py-2 text-gray-600">
            I hold several industry certifications, including AWS Certified
            Solutions Architect, Microsoft Certified:{" "}
            <strong>Azure Solutions Architect </strong>
            Expert, and <strong>AWS Solutions Architect</strong>. I&apos;m
            committed to continuous learning and staying up-to-date with the
            latest advancements in the cloud computing landscape.
          </p>
          <p className="py-2 text-gray-600">
            Outside of my professional life, I enjoy playing guitar and
            exercise.
          </p>
          <a
            href="#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Project have worked in recent years
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="foto de um notebook"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
