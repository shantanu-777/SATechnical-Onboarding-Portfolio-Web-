/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";

/**

  "During my academic journey, I gained practical experience in web development through an internship. I also hold the position of Microsoft Student Learn Ambassador and actively collaborate on projects with a team. Additionally, I have completed 2 certifications from IBM! I have been actively involved in the IMUN community and various clubs within my university, where I had the opportunity to lead them for a tenure"
  
  "Apart from academics, I am an avid reader with a particular interest in productive books and thrilling novels. Recently, I completed Atomic Habits by James Clear and have started reading The Subtle Art of Not Giving a F*ck by Mark Manson. I am a fast learner who enjoys exploring and acquiring new knowledge to foster personal development. Currently, I am working on improving my French language skills."
  
  "I am looking for an opportunity to work as a Data Analyst and contribute to the organization's growth. I am open to learning new skills and technologies and am willing to relocate. I am a hardworking and dedicated individual who is always ready to take on new challenges. I am confident that I will be an asset to your organization and look forward to hearing from you soon."
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>        
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
