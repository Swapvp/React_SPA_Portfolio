import React from "react";
import styles from "./Experience.module.css"; // Importing the module CSS file

const Experience = () => {
  const timelineData = [
    {
      year: "2018 - Present",
      title: "Creative Director",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      description:
        "Duis aute irure dolor in reprehenderit in vol ptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      year: "2016 - 2018",
      title: "Associate Design Director",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      description:
        "Duis aute irure dolor in reprehenderit in vol ptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      year: "2013 - 2016",
      title: "Senior UI/UX Designer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      description:
        "Duis aute irure dolor in reprehenderit in vol ptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      year: "2012 - 2013",
      title: "UI/UX Designer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      description:
        "Duis aute irure dolor in reprehenderit in vol ptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      year: "2010 - 2012",
      title: "Frontend Developer",
      company: "Hoplony Tech Limited",
      location: "New York, USA",
      description:
        "Duis aute irure dolor in reprehenderit in vol ptate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occaecat cupidatat non proident.",
    },
  ];

  return (
    <section className={`padding d-none d-md-block`} id="profiles">
      <div className="secTitle">
        <h2 className="text-center text-uppercase">Experience</h2>
      </div>

      <div className="container my-5">
        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h5>{item.year}</h5>
                <h6>{item.title}</h6>
                <p>{item.company}</p>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
