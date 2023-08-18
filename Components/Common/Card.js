import React, { useState } from "react";
import Image from "next/image";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import * as globalConstants from "utils/constants";
import Button from "./Button";
import EditJob from "Components/Job/AddEdit";

const { COMPANY_LOGO, APPLY_TYPE } = globalConstants;

const Card = ({
  job = {},
  deleteHandler = () => {},
  editHandler = () => {},
  index,
}) => {
  const [showEditJob, setShowEditJob] = useState(false);
  const {
    applyType = "",
    companyName = "",
    experience: { min: minExperience = 0, max: maxExperience = 0 } = {},
    id = "",
    industry = "",
    jobTitle = "",
    location = "",
    remoteType = "",
    salary: { min: minSalary = 0, max: maxSalary = 0 } = {},
    totalEmployee = 0,
  } = job || {};

  const toggleEditJob = () => setShowEditJob((prevState) => !prevState);

  return (
    <>
      <div className="w-100 rounded-[10px] bg-background flex justify-between px-[1.5rem] py-4">
        <div className="flex gap-2">
          <div>
            <Image
              className="rounded-[5px]"
              src={COMPANY_LOGO}
              alt="Company"
              width={48}
              height={48}
            />
          </div>
          <div>
            <div>
              <p className="font-normal text-xl leading-8">{jobTitle}</p>
              <p className="font-normal text-base leading-6">
                {companyName} - {industry}
              </p>
              <p className="font-normal text-base leading-6 text-disabled">
                {location}, {`(${remoteType})`}
              </p>
            </div>
            <div className="mt-6">
              <p className="font-normal text-base leading-6">
                Part-Time (9.00 am - 5.00 pm IST)
              </p>
              <p className="font-normal text-base leading-6 mt-2">
                Experience ({minExperience} - {maxExperience} years)
              </p>
              <p className="font-normal text-base leading-6 mt-2">
                INR (&#8377;) (
                {minSalary.toLocaleString("en-US", {
                  currency: "INR",
                })}{" "}
                -{" "}
                {maxSalary.toLocaleString("en-US", {
                  currency: "INR",
                })}{" "}
                / Month)
              </p>
              <p className="font-normal text-base leading-6 mt-2">
                {totalEmployee || 0} employees
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                {applyType === APPLY_TYPE.EXTERNAL ? (
                  <Button variant="outlined">External Apply</Button>
                ) : (
                  <Button variant="contained">Apply Now</Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <TrashIcon
            className="cursor-pointer"
            width={24}
            onClick={() => deleteHandler(id, index)}
          />
          <PencilSquareIcon
            className="cursor-pointer"
            width={24}
            onClick={toggleEditJob}
          />
        </div>
      </div>
      {showEditJob && (
        <EditJob
          index={index}
          jobDetails={job}
          open={showEditJob}
          onClose={toggleEditJob}
          submitHandler={editHandler}
        />
      )}
    </>
  );
};

export default Card;
