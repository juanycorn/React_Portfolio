import React from 'react';

function Portfolio() {
  // Sample data for portfolio items with images
  const portfolioItems = [
    {
      id: 1,
      title: 'Slashline Stats',
      description: 'a web app for tracking baseball with head-to-head player comparisons',
      imageUrl: '/images/slashline.png',
      demoLink: 'https://elindstr.github.io/slash-line-stats/',
      githubLink: 'https://github.com/juanycorn/slash-line-stats'
    },
    {
      id: 2,
      title: 'Sunnyside',
      description: 'a business management cloud solution',
      imageUrl: '/images/sunnyside.png',
      demoLink: 'https://sunnyside-699326087e54.herokuapp.com/',
      githubLink: 'https://github.com/juanycorn/sunnyside'
    },
    {
      id: 3,
      title: 'javascript quiz',
      description: 'web application designed to help coding boot camp students test their knowledge of JavaScript fundamentals',
      imageUrl: '/images/quiz.png',
      demoLink: 'https://juanycorn.github.io/javascript_quiz/',
      githubLink: 'https://github.com/juanycorn/javascript_quiz'
    },
    {
      id: 4,
      title: 'Work Day Sheduler',
      description: 'allows users to plan their daily tasks during standard business hours (9AM to 5PM).',
      imageUrl: '/images/work_day.png',
      demoLink: 'https://juanycorn.github.io/Workday_scheduler/',
      githubLink: 'https://github.com/juanycorn/Workday_scheduler'
    },
    {
      id: 5,
      title: 'Password Generator',
      description: 'generates a random password based on given criteria',
      imageUrl: '/images/generator.png',
      demoLink: 'https://juanycorn.github.io/Random-Password-Generator/',
      githubLink: 'https://github.com/juanycorn/Random-Password-Generator'
    },
    {
      id: 6,
      title: 'horiseon',
      description: 'an example of clean and professional css for a webpage',
      imageUrl: '/images/horiseon.png',
      demoLink: 'https://juanycorn.github.io/Homework-First-Week/',
      githubLink: 'https://github.com/juanycorn/Homework-First-Week'
    },
  ];

  return (
    <section className="portfolio py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 title">Portfolio</h2>
        <div className="row">
          {portfolioItems.map(item => (
            <div key={item.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer">
                  <a href={item.demoLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={item.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
