export const convertFileToBase64 = (
  file: File,
  callback: (base64: string) => void
) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    if (reader.result) {
      callback(reader.result.toString());
    }
  };
  reader.readAsDataURL(file);
};
