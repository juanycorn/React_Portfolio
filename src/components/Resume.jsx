import React from 'react';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
  ];

  return (
    <section className="resume py-5">
      <div className="container">
        <h2 className="text-center mb-4 title">Resume</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="proficiencies text-center">
              <h3 className="mb-3">Proficiencies</h3>
              <ul className="list-group list-group-flush">
                {proficiencies.map((proficiency, index) => (
                  <li key={index} className="list-group-item">{proficiency}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="download-resume mt-4 text-center">
          <p>Download my resume:</p>
          <a href="./src/2024 resume.docx.pdf" download className="btn btn-primary">Resume.pdf</a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
