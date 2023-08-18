"use client";

import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import Card from "Components/Common/Card";
import Button from "Components/Common/Button";
import AddJob from "Components/Job/AddEdit";
import { API } from "utils/services";
import * as globalConstants from "utils/constants";

const { MUTATION_TYPES } = globalConstants;

const HomeView = ({ recentJobs }) => {
  const [jobs, setJobs] = useState(recentJobs);
  const [showAddJob, setShowAddJob] = useState(false);

  const updateJobs = (operationType, index, data) => {
    const duplicateJobs = [...jobs];
    switch (operationType) {
      case MUTATION_TYPES.DELETE:
        duplicateJobs.splice(index, 1);
        setJobs(duplicateJobs);
        break;
      case MUTATION_TYPES.UPDATE:
        duplicateJobs[index] = data;
        setJobs(duplicateJobs);
        break;
      case MUTATION_TYPES.POST:
        duplicateJobs.push(data);
        setJobs(duplicateJobs);
      default:
        setJobs(duplicateJobs);
    }
  };

  const deleteHandler = async (jobId, index) => {
    try {
      const deleteTask = await API.delete(`/jobs/${jobId}`);
      const { data: { id = "" } = {} } = deleteTask || {};
      if (id === jobId) {
        updateJobs(MUTATION_TYPES.DELETE, index);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const editHandler = (data, index) => {
    updateJobs(MUTATION_TYPES.UPDATE, index, data);
  };

  const toggleAddJob = () => setShowAddJob((prevState) => !prevState);

  const addJobHandler = (job) => {
    updateJobs(MUTATION_TYPES.POST, undefined, job);
    toggleAddJob();
  };

  return (
    <>
      <Button onClick={toggleAddJob}>
        <div className="flex gap-2">
          <PlusCircleIcon width={24} />
          Add Job
        </div>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {jobs.map((job, index) => (
          <Card
            key={job.id}
            job={job}
            index={index}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </div>
      {showAddJob && (
        <AddJob
          open={showAddJob}
          onClose={toggleAddJob}
          submitHandler={addJobHandler}
        />
      )}
    </>
  );
};

export default HomeView;
