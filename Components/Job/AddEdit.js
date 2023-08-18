import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import Modal from "Components/Common/Dialog";
import Step1 from "./FirstStep";
import Step2 from "./SecondStep";
import { API } from "utils/services";

const AddEdit = ({ open, onClose, index, jobDetails, submitHandler }) => {
  const {
    applyType = "",
    companyName = "",
    experience: { min: minExperience, max: maxExperience } = {},
    industry = "",
    jobTitle = "",
    location = "",
    remoteType = "",
    salary: { min: minSalary, max: maxSalary } = {},
    totalEmployee = "",
    id = "",
  } = jobDetails || {};

  const formMethods = useForm({
    defaultValues: {
      applyType,
      companyName,
      experience: { min: minExperience, max: maxExperience },
      industry,
      jobTitle,
      location,
      remoteType,
      salary: { min: minSalary, max: maxSalary },
      totalEmployee,
    },
  });

  const [step, setStep] = useState(0);

  const onSubmit = async (data) => {
    if (step === 0) setStep((prevState) => prevState + 1);
    if (step === 1) {
      // if id exists -> edit the job else create a job
      if (id) {
        try {
          const result = await API.put(`/jobs/${id}`, data);
          if (result && result.data && result.data.id === id) {
            submitHandler(result.data, index);
            onClose();
          }
        } catch (error) {
          console.log("Error", error);
        }
      } else {
        try {
          const result = await API.post("/jobs", data);
          if (result && result.data) {
            submitHandler(result.data, index);
          }
        } catch (error) {
          console.log("Error", error);
        }
      }
    }
  };

  const goBack = () => setStep((prevState) => prevState - 1);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={id ? "Edit Job" : "Create a Job"}
      subTitle={step === 0 ? "Step 1" : "Step 2"}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          {step === 0 && <Step1 onClose={onClose} />}
          {step === 1 && <Step2 goBack={goBack} />}
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddEdit;
