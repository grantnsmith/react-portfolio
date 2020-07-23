import React, { Fragment } from "react";
import "./style.css";

function ResumeCard() {
  return (
    <Fragment>
      <li className="media resume-block">
        <img
          src={require("../../assets/images/uwash.png")}
          className="align-self-start mr-3 rounded"
          alt="University of Washington"
        />
        <div className="media-body resume-body">
          <h5 className="mt-0 mb-1 resume-title">
            University of Washington Full-Stack Web Development Bootcamp
          </h5>
          <p className="resume-subtitle">
            Student - February 2020 to August 2020
          </p>
          <p className="resume-text-body">
            I am learning front and backend technologies and becoming a
            proficient full stack developer. Topics covered include HTML5, CSS3,
            JavaScript, jQuery, Bootstrap and other CSS Frameworks, Express.js,
            React.js, Node.js, Database Theory, MongoDB, MySQL, Handlebars,
            API's, Command Line, Git, Heroku and more. To see more of what I
            have learned and built, check out my{" "}
            <a href="portfolio.html">Portfolio Page.</a>
          </p>
        </div>
      </li>
      <li className="media resume-block">
        <img
          src={require("../../assets/images/oracle.jpg")}
          className="align-self-start mr-3 rounded"
          alt="Oracle Cloud Infrastructure"
        />
        <div className="media-body resume-body">
          <h5 className="mt-0 mb-1 resume-title">
            Oracle Cloud Infrastructure
          </h5>
          <p className="resume-subtitle">
            System Administrator - since January 2019
          </p>
          <p className="resume-text-body">
            As part of Oracle Cloud Infrastructure I provide in person and
            online support for software and hardware systems in a large
            enterprise environment. I troubleshoot issues and implement long
            term solutions including updates, new processes, and user education.
            I work with Yubikeys, conference room A/V troubleshooting, Atlassian
            tools (Confluence, Jira, Bitbucket), Cisco AnyConnect, multiple VPN
            configurations, Zoom, PagerDuty, McAfee AV, and am a Slack Admin.
          </p>
        </div>
      </li>
      <li className="media resume-block">
        <img
          src={require("../../assets/images/AdventureProtocolLogo.jpg")}
          className="align-self-start mr-3 rounded"
          alt="Adventure Protocol"
        />
        <div className="media-body resume-body">
          <h5 className="mt-0 mb-1 resume-title">Adventure Protocol</h5>
          <p className="resume-subtitle">
            Co-founder and Content Manager - since 2017
          </p>
          <p className="resume-text-body">
            I developed Adventure Protocol from the ground up with my brother as
            a way to share our passion of climbing and the outdoors. I managed
            content contributors and monetized the website through affiliate
            marketing. I taught myself SEO and Wordpress development skills as
            well as web content creation best practices. In the first year I
            wrote over 100,000 words of content and got our viewership up to
            7,000+ individual users per month. Check out what we built at{" "}
            <a href="http://www.adventureprotocol.com/">
              www.adventureprotocol.com.
            </a>
          </p>
        </div>
      </li>
      <li className="media resume-block">
        <img
          src={require("../../assets/images/santacatalina.png")}
          className="align-self-start mr-3 rounded"
          alt="Santa Catalina School"
        />
        <div className="media-body resume-body">
          <h5 className="mt-0 mb-1 resume-title">Santa Catalina School</h5>
          <p className="resume-subtitle">
            Technology Support Coordinator - 2014 - 2016
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
      </li>
      <li class="media resume-block">
        <img
          src={require("../../assets/images/applelogo.png")}
          class="align-self-start mr-3 rounded"
          alt="Apple Logo"
        />
        <div class="media-body resume-body">
          <h5 class="mt-0 mb-1 resume-title">Apple Inc.</h5>
          <p class="resume-subtitle">Genius - 2012 - 2014</p>
          <p class="resume-text-body">
            I used troubleshooting skills to quickly resolve client technical
            issues and educated customers on products while maintaining
            composure in a fast-paced environment. I also performed hardware and
            software repairs on iPhone, iPad, and Mac computers.
            <br />
            Certifications:
            <br />
            Apple Certified Mac Technician 2013
            <br />
            Apple Certified Mobile Device Technician 2012
          </p>
        </div>
      </li>
      <li class="media resume-block">
        <img
          src={require("../../assets/images/profile_img.JPG")}
          class="align-self-start mr-3 rounded"
          alt="Grant Smith"
        />
        <div class="media-body resume-body">
          <h5 class="mt-0 mb-1 resume-title">
            Other Experiences, Education, and Adventures
          </h5>
          <br />
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Bachelors of Arts in
            Social Science, Azusa Pacific University - 2010
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Teacher at the
            International School of Tegucigalpa, Honduras - 2011
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> American Mountain Guides
            Certified Single Pitch Instructor - 2016
          </p>
          <p class="resume-subtitle">
            <i class="fas fa-chevron-circle-right"></i> Outward Bound California
            Instructor - 2017
          </p>
        </div>
      </li>
    </Fragment>
  );
}

export default ResumeCard;
