import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RatexMockup from "../assets/RateX/RatexMockup.png";
import RateXDashboard from "../assets/RateX/RateXDashboard.png";
import RatexScreenshot from "../assets/RateX/Screenshot (31).png";
import RatexScreenshot2 from "../assets/RateX/Screenshot (32).png";
import RatexScreenshot3 from "../assets/RateX/Screenshot (33).png";
gsap.registerPlugin(ScrollTrigger);

const StackingCards = ({project}) => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    const spacer = 25;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: ".cards",
        end: `bottom top+=${200 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        id: "pin",
        invalidateOnRefresh: true,
      });
    });
  }, []);
  console.log(document.querySelector('.stackingContainer')?.offsetHeight,'offsetHeight');
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".para",
      start: "top top",
      end: () => `+=${document.querySelector('.cards')?.offsetHeight -200 || 0}`,
      pin: ".description",
      pinSpacing: true,
      markers: true, // Use this for debugging; remove in production
    });
  }, []);
  

  const projectData = [
    {
      title: "RateX",
      subTitle: "Revenue Management software",
      tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",

      Description: {
        descriptionTitle: "Revenue Management Software for Hospitality",
        descriptionSubtitle:
          "Ratex is built with React and Tailwind CSS, offers a sleek, responsive user interface designed to simplify the complex task of revenue management for hospitality businesses.",
        descriptionPoints: [
          {
            title: "Dynamic Report Generation",
            description:
              "Engineered a report generation feature that converts dynamic JSON data into validated Excel files, ensuring accurate and customizable reporting.",
          },
          {
            title: "Advanced Rate Suggestion Mechanism",
            description:
              "Designed a rate suggestion tool with configurable rules, adjusting daily rates based on occupancy and competitive set (compset) data, and offering day-wise Excel downloads for strategic pricing",
          },
          {
            title: "Hotel Intelligence Dashboard",
            description:
              "Developed a data-driven intelligence page using ApexCharts, tracking metrics like revenue, room nights, ADR, and cancellations, presenting large volumes of data in an actionable visual format",
          },
          {
            title: "Complex Data Handling",
            description:
              "Implemented dynamically nested tables for handling complex JSON structures, demonstrating expertise in managing intricate data models.",
          },
          {
            title: "Optimized Application ",
            description:
              "Enhanced application performance by implementing code splitting, lazy loading, and removing unnecessary dependencies. Optimized component structure by reducing states and eliminating unnecessary re-renders, resulting in a Lighthouse performance score of 97/100.",
          },
        ],
      },
    },
    {
      title: "RWorld",
      subTitle: "Task Management / Employee management",
      tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",

      Description: {
        descriptionTitle: "Task Management Software for Hospitality",
        descriptionSubtitle:
          "RWorld is built with React and Tailwind CSS, offers a sleek, responsive user interface designed to simplify the complex task of Employee management for hospitality businesses.",
        descriptionPoints: [
          {
            title: "Dynamic Onboarding",
            description:
              "In RWorld an Ravanue Manager can Invite their team member which can onboard to system. The onboarding for Manager and employee will be completely different ,This 15 page of onboarding handled in very optimized way.",
          },
          {
            title: "Drag And Drop Kanban",
            description:
              "When manager creates a task/subtask he/she can assign the task to particular employee. Assignee can manage task progress by drang and drop the task",
          },
          {
            title: "Dynamic header for Meeting Manager",
            description:
              "Sales team can view upcoming meeting information in header. Also meeting progress can be tracked in realtime",
          },
          {
            title: "Retvens Ecosystem",
            description:
              "Built entire EcoSystem beetween RateX and RWorld where user can switch between Rworld to rateX in one click and continue to use all features of RateX eventhough user has done no onBoarding in RateX",
          }
        ],
      },
    },
    {
        title: "RJob",
        subTitle: "Job Portal for Hospitality",
        tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",
  
        Description: {
          descriptionTitle: "Job Portal for Hospitality",
          descriptionSubtitle:
            "R-Job is built with Nextjs and Tailwind CSS, offers a sleek, responsive user interface designed to simplify the complex task of Job Search for hospitality businesses.",
          descriptionPoints: [
            {
              title: "SEO Optimization",
              description:
                "R-Job is a commerical application which needs a lot of users attention which can be performed using SEO ranking for search engines",
            },
            {
              title: "Dynamic Interface for each user type",
              description:
                "An Job applicant can see the jobs, apply to jobs , see the total applied jobs and The jobs he/she is shortlisted. Whereas Recruiter can see the jobs he/she has posted , can view the applicats profile and their resume based on skills recruiter can shortlist for further process",
            },
            {
              title: "Automatic Job closing",
              description:
                "While posting a job vacany the recruiter is asked the deadline or the maximum candidate can apply if the limit is reached the job will not be displayed at the dashboard until the recruiter changes job description",
            },
            {
              title: "Filtering jobs",
              description:
                "Built an amazing FilterBar where user can filter the jobs based on their needs, this include salary based , deadline based, skill based apart from this user can also search for particular company or job title",
            }
          ],
        },
    },
    {
        title: "Admin Panel",
        subTitle: "Secure platform for administration",
        tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",
  
        Description: {
          descriptionTitle: "Secure platform for administration",
          descriptionSubtitle:
            "R-Job is built with Reactjs and AntD, offers a sleek, responsive user interface designed to simplify the complex task of Administration for hospitality businesses.",
          descriptionPoints: [
            {
                title: "Built universal Patch Component for complex nested JSON ",
                description:
                  "Given a complex Nested JSON structure which can contain n number of nested arrays and object. Any specified structure of JSON is not known requirement was to edit all this unstructured data. I used my knowledge of data structures and algorithms to solve this problem. I found that this problem can easily be solved if we use Recurrestion now all I need to do is loop through json if I identity any array I got inside that array if I found any object I go Inside that object unless both conditions are failed this are my keys and values this condition I created a input filed so that I can edit it."
              },
            {
              title: "Cookie based Data Management",
              description:
                "All the local data are stored securely in cookies "
            },
            {
              title: "Data Encryption",
              description:
                "While storing critical information the data is being encrypted and stored which prevent any sort of data Integrity issues",
            },
            {
              title: "Automatic Logout when token expires",
              description:
                "After few hours of being logged in if users token gets invalid he/she will be logged out immediately",
            },
            {
              title: "Role Based permissions",
              description:
                "Different roles are given different permission to access the application. For example only Admin account can create modify any data all other accounts can view the data but cannot change it. similary only admins have access to recover any forgotten password",
            }
          ],
        },
    },
  ];


  const filteredData = projectData.find((item) => item?.title === project);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-light">Description</h1> */}
      <div className="stackingContainer relative flex gap-4   w-full justify-start items-start">
        <div className="cards">
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12 shadow-md"
            style={{ top: "40px" }}
          >
            <img
              src={RatexMockup}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "45px" }}
          >
            <img
              src={RateXDashboard}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "50px" }}
          >
            <img
              src={RatexScreenshot}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "55px" }}
          >
            <img
              src={RatexScreenshot2}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "60px" }}
          >
            <img
              src={RatexScreenshot3}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Sticky description div */}
        <div className="p-4   para h-[1000px] sticky top-0  ">
          <div className="description">
            <div className="flex flex-col items-center py-12 px-4 bg-gray-100">
              <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              {filteredData?.Description.descriptionTitle}
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
              {filteredData?.Description.descriptionSubtitle}
              </p>

              <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
              {filteredData?.Description.descriptionPoints.map((desc)=>(

                  <Feature
                  title={desc?.title}
                  description={desc?.description}
                  />
                ))}

               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2 pt-10 w-full  h-[50vh]"></div>
    </div>
  );
};

const Feature = ({ title, description }) => (
  <div className="flex flex-col space-y-2">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default StackingCards;
