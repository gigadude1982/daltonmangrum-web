import React from "react";
import mangrum_family_low_res from "../images/mangrum_family_low_res.jpg";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header reveal">
        <h1 className="page-title">About</h1>
        <p className="page-description">A little about me, my family, and my work</p>
      </div>
      <div className="card reveal reveal-delay-1">
        <div className="about-grid">
          <img
            src={mangrum_family_low_res}
            className="about-image"
            alt="Mangrum Family"
          />
          <div>
            <p className="about-section-label">My Family</p>
            <p className="about-text">
              My beautiful wife Alison, myself, and our 3 dogs: 15&nbsp;year old
              Toby the Maltese, 6&nbsp;year old Charlie the Goldendoodle, and
              9&nbsp;month old Winston the Pembroke Welsh Corgi.
            </p>
            <p className="about-section-label">My Story</p>
            <p className="about-text">
              I was born in the wee hours of a dark and stormy night in the
              town of Akron, Ohio.
            </p>
          </div>
        </div>
      </div>
      <div className="card reveal reveal-delay-2">
        <p className="about-section-label">My Career</p>
        <p className="about-text">
          I&rsquo;m a software architect with more than 20 years of experience
          designing and evolving enterprise platforms, API ecosystems, and
          cloud-native systems. My career spans healthcare claims, payroll,
          telecom, oil and gas, water utilities, satellite ground control, and
          restaurant technology. Across all of them, my focus has been the
          same: taking live, business-critical systems and moving them toward
          cleaner, more scalable architecture without disrupting the people
          who depend on them.
        </p>
        <p className="about-text">
          Today I&rsquo;m a Principal Software Architect at Bounteous, where I
          lead the architecture of the NomNom API, a multi-client SaaS platform
          that provides menu, ordering, loyalty, and payment services to the
          mobile apps of brands including 7Brew, Freddy&rsquo;s, Smoothie King,
          Pilot Flying J, and Five Guys. I was the founding architect of the
          7Brew integration, and for that launch I designed a load-testing
          harness that ran on 972 AWS Fargate tasks and validated 350,000 user
          journeys. The app then reached #1 on the Apple App Store and passed
          roughly one million downloads in its first 24 hours. I&rsquo;ve also
          moved the team to an AI-orchestrated development model, where I
          architect, plan, and review while agentic tools such as Claude Code
          handle a growing share of the implementation.
        </p>
        <p className="about-text">
          Before Bounteous, I was Principal Ground Software Engineer at York
          Space Systems, building distributed mission-planning and automation
          services for Space Development Agency satellite missions. Earlier, as
          Principal Software Engineer at Tap Rock Resources, I designed the
          company&rsquo;s whole internal software suite, including enterprise
          search, SSO, and a production analytics platform that went from a
          performance liability to sub-second response times. Leadership roles
          at Xylem, DCP Midstream, and Paychex built my depth in integration
          architecture, legacy modernization, and leading teams spread across
          time zones.
        </p>
        <p className="about-text">
          Outside my day job, I build agentic AI products under my Vanehouse
          studio, including ShipVane, an autonomous development-lifecycle
          platform; Vaneskald, an AI content creation and distribution engine;
          and PitchVault. I also maintain a legacy admissions system for
          Maricopa Community College. I graduated cum laude from the University
          of Akron with a BS in Computer Science and a minor in Applied
          Mathematics, and I&rsquo;m a Microsoft Certified Professional
          Developer (MCPD).
        </p>
      </div>
    </div>
  );
};

export default About;
