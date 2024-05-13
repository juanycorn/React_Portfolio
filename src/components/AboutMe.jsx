import React from 'react';

function AboutMe() {
  return (
    <section className="about-me py-5">
      <div className="container">
        <h2 className="text-center mb-4 title">About Me</h2>
        <div className="row">
          <div className="col-lg-6">
            <img src="/images/profile-pic.png" alt="Profile" className="img-fluid rounded-circle mb-4" />
          </div>
          <div className="col-lg-6">
            <p className="lead about-paragraph">
              I'm Juan Cornejo, a passionate full-stack web developer with a love for building innovative solutions. With a background in computer science and several years of experience in the industry, I've honed my skills in both frontend and backend development. My journey into web development began with a fascination for crafting digital experiences that are not only visually stunning but also highly functional. Over time, I've embraced a mindset of continuous learning, always seeking to stay updated with the latest technologies and best practices in the ever-evolving world of web development.
            </p>
            <p className="lead about-paragraph">
              As a full-stack developer, I bring a versatile skill set to the table. On the frontend, I specialize in creating responsive and intuitive user interfaces using modern frameworks like React and Vue.js. I have a keen eye for design and enjoy turning wireframes into polished web applications. On the backend, I'm proficient in building robust APIs and server-side logic using Node.js, Express, and MongoDB. I'm also experienced in database management, utilizing technologies such as MySQL and PostgreSQL. Whether it's crafting RESTful APIs or deploying scalable web solutions, I thrive on tackling challenges and delivering high-quality results.
            </p>
            <p className="lead about-paragraph">
              What drives me in this field is the opportunity to turn ideas into reality through code. I'm deeply passionate about solving real-world problems and making a positive impact through technology. Whether it's developing an e-commerce platform, a social networking site, or a custom web application, I approach each project with enthusiasm and dedication. Looking ahead, I'm excited to continue expanding my skill set, diving deeper into emerging technologies like serverless architecture and machine learning. My goal is to contribute to meaningful projects and collaborate with like-minded individuals in shaping the future of the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
