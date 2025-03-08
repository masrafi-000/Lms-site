import { Button } from "../ui/button";
import Formcontrols from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* Render From Controls here */}
      <Formcontrols
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button disabled={isButtonDisabled} className="mt-5 w-full" type="submit">{buttonText || "Submtit"}</Button>
    </form>
  );
}

export default CommonForm;
