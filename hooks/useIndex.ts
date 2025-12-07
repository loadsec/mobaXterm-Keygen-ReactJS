"use client";

import { useState } from "react";
import JSZip from "jszip";
import fileSaver from "file-saver";

import { generateLicense } from "../utils/mobaXtermGenerater";

const LICENSE_TYPES_MAP = {
  Professional: 1,
  Educational: 3,
  Personal: 4,
};

export const LICENSE_TYPES = [
  "Professional",
  "Educational",
  "Personal",
];

export default function useIndex() {
  const [formData, setFormData] = useState({
    licenseType: "Professional",
    userName: "mobaXterm",
    versionName: "25.4",
    userNum: "1",
  });
  
  // Adicionar estado para mensagem de erro
  const [userNameError, setUserNameError] = useState<string>("");

  let licenseStr = generateLicense(
    LICENSE_TYPES_MAP[formData.licenseType as keyof typeof LICENSE_TYPES_MAP],
    formData.userName,
    parseInt(formData.userNum),
    parseInt(formData.versionName.split(".")[0]),
    parseInt(formData.versionName.split(".")[1]),
  );

  console.log(LICENSE_TYPES_MAP[formData.licenseType as keyof typeof LICENSE_TYPES_MAP]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação do userName
    if (!formData.userName || formData.userName.length < 5) {
      setUserNameError("O nome de usuário deve ter pelo menos 5 caracteres");
      return;
    }
    
    let zip = new JSZip();
    zip.file("Pro.key", licenseStr);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      fileSaver.saveAs(content, "Custom.mxtpro");
    });
  };

  return { formData, setFormData, handleSubmit, userNameError };
}
