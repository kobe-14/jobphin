import React from "react";

import Input from "Components/Common/Input";
import Button from "Components/Common/Button";

const Step1 = ({ onClose }) => {
  return (
    <>
      <div className="mt-6">
        <Input
          label="Job title"
          placeholder="ex: UX UI Designer"
          required="Job title is required"
          name="jobTitle"
        />
      </div>
      <div className="mt-6">
        <Input
          label="Company name"
          placeholder="ex: Google"
          required="Company name is required"
          name="companyName"
        />
      </div>
      <div className="mt-6">
        <Input
          label="Industry"
          name="industry"
          placeholder="ex: Information Technology"
          required="Industry is required"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Input
          label="Location"
          placeholder="ex: Chennai"
          required="Location is required"
          name="location"
        />
        <Input
          label="Remote type"
          placeholder="ex: In-office"
          required="Remote type is required"
          name="remoteType"
          className="mt-6 md:mt-0"
        />
      </div>
      <div className="mt-24 flex justify-end gap-4">
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button type="submit" variant="contained">
          Next
        </Button>
      </div>
    </>
  );
};

export default Step1;
