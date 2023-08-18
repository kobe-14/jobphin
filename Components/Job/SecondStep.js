import React from "react";

import Input from "Components/Common/Input";
import Button from "Components/Common/Button";
import * as globalConstants from "utils/constants";

const { APPLY_TYPE, INPUT_TYPES } = globalConstants;

const Step2 = ({ goBack }) => {
  return (
    <>
      <div className="mt-6">
        <p className="text-sm font-medium">Experience</p>
        <div className="flex flex-wrap gap-4">
          <Input
            placeholder="Minimum"
            name="experience.min"
            type={INPUT_TYPES.NUMBER}
          />
          <Input
            placeholder="Maximum"
            name="experience.max"
            type={INPUT_TYPES.NUMBER}
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium">Salary</p>
        <div className="flex flex-wrap gap-4">
          <Input
            placeholder="Minimum"
            name="salary.min"
            type={INPUT_TYPES.NUMBER}
          />
          <Input
            placeholder="Maximum"
            name="salary.max"
            type={INPUT_TYPES.NUMBER}
          />
        </div>
      </div>
      <div className="mt-6">
        <Input
          label="Total Employee"
          name="totalEmployee"
          placeholder="ex: 100"
          type={INPUT_TYPES.NUMBER}
        />
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium">Apply type</p>
        <div className="flex gap-4">
          <Input
            type={INPUT_TYPES.RADIO}
            name="applyType"
            value={APPLY_TYPE.QUICK_APPLY}
            label="Quick apply"
          />
          <Input
            type={INPUT_TYPES.RADIO}
            name="applyType"
            value={APPLY_TYPE.EXTERNAL}
            label="External apply"
          />
        </div>
      </div>
      <div className="mt-24 flex justify-end gap-4">
        <Button variant="outlined" onClick={goBack}>
          Back
        </Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
    </>
  );
};

export default Step2;
