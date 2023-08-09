import React from "react";

export const Home = () => {
  return (
    <>
      <div className="container-top">
        <div className="image" data-aos="fade-right">
          <img src="360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="your image description" />
        </div>
        <div className="content" data-aos="fade-left">
          <h1 className="heading-top">MAKE GOOD THINGS TOGETHER</h1>
          <p className="info-top">A non-governmental organization, or NGO, typically is established to work toward public or social welfare goals. For instance, an NGO could focus on human rights, voters' rights, healthcare, helping the poor, and preventing cruelty to animals. NGOs can be funded by donations and grants.</p>
          
        </div>
      </div>
      <div className="what-we-do" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <div className="wwd01">
          <h2 className="heading-what-we-do">WHAT WE DO?</h2>
          <p>Healthy People 2030 includes objectives focused on improving health care quality and making sure all people get the health care services they need.</p>
          <p style={{ marginTop: '1rem' }}>tyhyt tht h th</p>
        </div>  
        <div className="wwd02">
          <div className="group">
          <i className="fas fa-message wwd02-icons"></i>
            <h4>TALKS</h4>
            <p>Get updated with the latest news and announcements</p>
          </div>
          <div className="group">
          <i className="fas fa-code wwd02-icons"></i>
            <h4>poor people</h4>
            <p>Gtyr trh th trh trh </p>
          </div>
          <div className="group">
          <i className="fas fa-graduation-cap wwd02-icons"></i>
            <h4>CAMPUS ROADSHOWS</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio asperiores dicta et voluptatem ipsum animi alias perferendis ipsa voluptates soluta ut nihil quo, unde dolores incidunt sapiente natus numquam modi!</p>
          </div>
          <div className="group">
          <i className="fas fa-circle-nodes wwd02-icons"></i>
            <h4>LIVE VIEWING PARTIES</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio perferendis labore perspiciatis animi tempora est, incidunt dignissimos consequatur repellat minus eum ullam quaerat dicta reiciendis tempore commodi voluptatum magnam voluptatem?</p>
          </div>
        </div>
      </div>

    
    </>
  );
};