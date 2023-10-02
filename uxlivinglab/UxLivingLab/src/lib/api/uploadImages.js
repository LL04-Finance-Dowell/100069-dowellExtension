import axios from "axios";

export default async function UploadImages(data) {
  try {
    return await axios.post(
      "https://dowellfileuploader.uxlivinglab.online/uploadfiles/upload-image-to-drive/",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log("error uploading image", error);
    return error;
  }
}
