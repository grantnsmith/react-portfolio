import React from "react";
import "./style.css";

function ResumeContainer(props) {
  return (
    <div className="container">
      <h1 className="resume-header">
        <i className="fas fa-chevron-right resume-arrow"></i> What I've been
        working on <i className="fas fa-chevron-left resume-arrow"></i>
      </h1>
      <div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              <img
                src={"images/uwash.png"}
                className="align-self-start mr-3 rounded resume-image"
                alt="University of Washington"
              />
            </div>
          </div>
          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              <h5 className="mt-0 mb-1 resume-title">
                UW Full-Stack Web Development Bootcamp
              </h5>
              <p className="resume-subtitle">February 2020 to August 2020</p>
              <p className="resume-text-body">
                I learned front and backend web development and became a
                proficient full stack engineer. I completed the bootcamp with an
                A+ average. Topics covered included Javascript, React.js, HTML,
                CSS, jQuery, Bootstrap, Materialize, UI Kit, ESLint, Express.js,
                Node.js, MongoDB, Mongoose MySQL, Sequelize, Handlebars, Jest,
                Travis CI, bash, Git, Heroku, and more. To see more of what I
                learned and built, check out my{" "}
                <a className="resume-link" href="/portfolio">
                  Projects Page.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              <img
                src={"images/oracle.jpg"}
                className="align-self-start mr-3 rounded resume-image"
                alt="Oracle"
              />
            </div>
          </div>
          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              <h5 className="mt-0 mb-1 resume-title">
                Oracle Cloud Infrastructure
              </h5>
              <p className="resume-subtitle">
                Senior IT Support Engineer - since January 2019
              </p>
              <p className="resume-text-body">
                As part of Oracle Cloud Infrastructure I provide in person and
                online support for software and hardware systems in a large
                enterprise environment. I troubleshoot issues and implement long
                term solutions including updates, new processes, and user
                education. I work with Yubikeys, conference room A/V
                troubleshooting, Atlassian tools (Confluence, Jira, Bitbucket),
                Cisco AnyConnect, multiple VPN configurations, Zoom, PagerDuty,
                McAfee AV, and am a Slack Admin.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              <img
                src={"images/AdventureProtocolLogo.jpg"}
                className="align-self-start mr-3 rounded resume-image"
                alt="Adventure Protocol"
              />
            </div>
          </div>
          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              <h5 className="mt-0 mb-1 resume-title">Adventure Protocol</h5>
              <p className="resume-subtitle">Website Developer - since 2017</p>
              <p className="resume-text-body">
                My brother and I developed Adventure Protocol from the ground up
                as a way to share our passion of the outdoors. I manage content
                contributors and monetize the website through affiliate
                marketing (hitting a 2.5% conversion rate in 2019). I taught
                myself SEO, Wordpress development, and web content best
                practices. I have written over 100,000 words and achieved a
                viewership of 7,000+ individual users per month with 225,500+
                views all time. Check out what we built at{" "}
                <a
                  className="resume-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.adventureprotocol.com/"
                >
                  Adventure Protocol.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              <img
                src={"images/santacatalina.png"}
                className="align-self-start mr-3 rounded resume-image"
                alt="Santa Catalina School"
              />
            </div>
          </div>
          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              <h5 className="mt-0 mb-1 resume-title">Santa Catalina School</h5>
              <p className="resume-subtitle">
                Technology Support Coordinator 2014 - 2016
              </p>
              <p className="resume-text-body">
                Managed the installation, user education, and troubleshooting of
                desktops, printers, copiers, network equipment, projectors, and
                peripherals for a school of 500+ and 125+ teachers and staff. I
                supported systems including Windows XP - 10, Mac OSX, TCP/IP
                systems, MS Office Suite, iOS, Cisco Meraki, Acronis True Image,
                Parallels, Faronics software, Google Apps for Education, Google
                Admin, Spiceworks, Active Directory, and inSSIDer.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              <img
                src={"images/applelogo.png"}
                className="align-self-start mr-3 rounded resume-image"
                alt="Apple Inc."
              />
            </div>
          </div>

          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              <h5 className="mt-0 mb-1 resume-title">Apple Inc.</h5>
              <p className="resume-subtitle">Genius 2012 - 2014</p>
              <p className="resume-text-body">
                I used troubleshooting skills to quickly resolve client
                technical issues and educated customers on products while
                maintaining composure in a fast-paced environment. I also
                performed hardware and software repairs on iPhone, iPad, and Mac
                computers. Certifications: Apple Certified Mac Technician 2013;
                Apple Certified Mobile Device Technician 2012.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-auto col- mx-auto">
          <div class="resume-block">
            {/* <img
              src={"images/profile_img.JPG"}
              class="align-self-start mr-3 rounded resume-image"
              alt="Grant Smith"
            /> */}
          </div>
        </div>
        <div className="col-auto col-sm mx-auto">
          <div class="resume-body">
            <h5 class="mt-0 mb-1 resume-title">
              <u>Other Experiences and Education</u>
            </h5>
            <br />
            <p class="resume-extra">
              <i class="fas fa-chevron-circle-right resume-arrow"></i> Bachelors
              of Arts with Honors in Social Science (3.8 GPA), Azusa Pacific
              University - 2010
            </p>
            <p class="resume-extra">
              <i class="fas fa-chevron-circle-right resume-arrow"></i> Teacher
              at the International School of Tegucigalpa, Honduras - 2011
            </p>
            <p class="resume-extra">
              <i class="fas fa-chevron-circle-right resume-arrow"></i> American
              Mountain Guides Certified Single Pitch Instructor - 2016
            </p>
            <p class="resume-extra">
              <i class="fas fa-chevron-circle-right resume-arrow"></i> Outward
              Bound California Instructor - 2017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeContainer;
