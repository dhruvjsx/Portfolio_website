import React from 'react'

const StackingCardMobile = ({filteredData}) => {
  return (
    <div>
        <div className="ip   para   top-0  ">
          <div className="description w-full">
            <div className="flex flex-col w-full items-center py-12 px-2">
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
        <div className="cards">
          <div
            className="card  h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12 shadow-md"
            style={{ top: "40px" }}
          >
            <img
              src={filteredData?.Images?.mockup}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "45px" }}
          >
            <img
              src={filteredData?.Images?.Image1}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "50px" }}
          >
            <img
              src={filteredData?.Images?.Image2}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "55px" }}
          >
            <img
              src={filteredData?.Images?.Image3}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "60px" }}
          >
            <img
              src={filteredData?.Images?.Image4}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
        </div>
    </div>
  )
}
const Feature = ({ title, description }) => (
    <div className="flex flex-col space-y-2">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
export default StackingCardMobile

