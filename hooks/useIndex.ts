import { useState } from "react";
import JSZip from "jszip";
import fileSaver from "file-saver";

import { generateLicense } from "../utils/mobaXtermGenerater";

export const LICENSE_TYPES = {
  Professional: 1,
  Educational: 3,
  Personal: 4,
};

export default function useIndex() {
  const [formData, setFormData] = useState({
    licenseType: "Professional",
    userName: "defaultUserName",
    versionName: "24.3",
    userNum: "1",
  });

  let licenseStr = generateLicense(
    LICENSE_TYPES[formData.licenseType as keyof typeof LICENSE_TYPES],
    formData.userName,
    parseInt(formData.userNum),
    parseInt(formData.versionName.split(".")[0]),
    parseInt(formData.versionName.split(".")[1]),
  );

  const handleSubmit = () => {
    let zip = new JSZip();

    zip.file("Pro.key", licenseStr);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      fileSaver.saveAs(content, "Custom.mxtpro");
    });
  };

  return { formData, setFormData, handleSubmit };
}
