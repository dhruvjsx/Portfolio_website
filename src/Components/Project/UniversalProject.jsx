import React, { useState } from "react";
import RatexMockup from "../../assets/RateX/RatexMockup.png";
import StackingCards from "../StackingCard";
import RateXDashboard from "../../assets/RateX/rateXDashboard.png";
import RatexScreenshot from "../../assets/RateX/Screenshot (31).png";
import RatexScreenshot2 from "../../assets/RateX/Screenshot (32).png";
import RatexScreenshot3 from "../../assets/RateX/Screenshot (33).png";
import RJobMainDashboard from '../../assets/RJobs/mainDashboard.jpg'
import RWoorldDashboard from '../../assets/RWorld/RWorldDashboard.png'
import RWoorldDashboard2 from '../../assets/RWorld/RWorldDashboard2.png'
import RWorldTaskScreen from '../../assets/RWorld/RWorldTaskScreen.png'
import RWorldTaskScreen2 from '../../assets/RWorld/taskManagement2.png'
import RJobPreview from '../../assets/RJobs/jobPreview.jpg'
import RJobDashboard from '../../assets/RJobs/jobsDashboard.jpg'
import RJobMockup from '../../assets/RJobs/RJobMockup.png'
import confidentail from '../../assets/AdminPanel/confidential.webp'
import { useEffect } from "react";
import Header from "../header";
import StackingCardMobile from "../StackingCardMobile";


const UniversalProject = ({ project,isDesktop }) => {
      const [currentSection, setCurrentSection] = useState();

  const projectData = [
    {
      title: "RateX",
      subTitle: "Revenue Management software",
      tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",
      Images: {
        mockup: RatexMockup,
        Image1: RatexMockup,
        Image2: RateXDashboard,
        Image3: RatexScreenshot,
        Image4: RatexScreenshot2,
        Image5: RatexScreenshot3,
      },
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
      Images: {
        mockup: RatexMockup,
        Image1: RWoorldDashboard,
        Image2: RWoorldDashboard2,
        Image3: RWorldTaskScreen,
        Image4: RWorldTaskScreen2,
        Image5: RatexScreenshot3,
      },
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
          },
        ],
      },
    },
    {
      title: "RJob",
      subTitle: "Job Portal for Hospitality",
      tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",
      Images: {
        mockup: RJobMockup,
        Image1: RJobMainDashboard,
        Image2: RJobPreview,
        Image3: RJobDashboard,
        Image4: RJobMockup,
        Image5: RJobMockup,
      },
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
          },
        ],
      },
    },
    {
      title: "Admin Panel",
      subTitle: "Secure platform for administration",
      tags: "0-to-1 Product Design | SaaS Platform | Web Design | App Design | Stakeholder Management",
      Images: {
        mockup: RatexMockup,
        Image1: confidentail,
        Image2: confidentail,
        Image3: confidentail,
        Image4: confidentail,
        Image5: confidentail,
      },
      Description: {
        descriptionTitle: "Secure platform for administration",
        descriptionSubtitle:
          "R-Job is built with Reactjs and AntD, offers a sleek, responsive user interface designed to simplify the complex task of Administration for hospitality businesses.",
        descriptionPoints: [
          {
            title: "Built universal Patch Component for complex nested JSON ",
            description:
              "Given a complex Nested JSON structure which can contain n number of nested arrays and object. Any specified structure of JSON is not known requirement was to edit all this unstructured data. I used my knowledge of data structures and algorithms to solve this problem. I found that this problem can easily be solved if we use Recurrestion now all I need to do is loop through json if I identity any array I got inside that array if I found any object I go Inside that object unless both conditions are failed this are my keys and values this condition I created a input filed so that I can edit it.",
          },
          {
            title: "Cookie based Data Management",
            description: "All the local data are stored securely in cookies ",
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
          },
        ],
      },
    },
  ];
  const filteredData = projectData.find((item) => item?.title === project);

  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen px-8 md:px-16 w-full  relative z-20">
          <Header nodelay={true} currentSection={currentSection} />
      <div className="flex flex-col md:flex-row items-center mt-20 justify-between gap-16 w-full max-w-6xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-[#CD505A] font-semibold text-2xl md:text-3xl mb-2">
            {filteredData?.title}
          </h1>
          <p className="text-[#444346] font-SharpGrotesk text-lg md:text-xl">
            {filteredData?.subTitle}
          </p>
          <div className="mt-3 text-sm md:text-base text-[#444346] font-medium leading-relaxed">2mt-20
            {filteredData?.tags}
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 ">
          <img
            src={filteredData?.Images?.mockup}
            alt="Ratex Mockup"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* StackingCards Section */}
   {isDesktop?  <div className="mt-16 w-full h-full   oveflow-hidden">
        <StackingCards filteredData={filteredData} />
      </div>:<div className="mt-16 w-full h-full   oveflow-hidden">
        <StackingCardMobile filteredData={filteredData} />
      </div>}
    </div>
  );
};

export default UniversalProject;
