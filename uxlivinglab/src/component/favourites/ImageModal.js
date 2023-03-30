import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import FetchFavouriteImage from "../../API/FetchFavouriteImage";

const ImageModal = ({
  open,
  handleClose,
  setInputData,
  inputData,
  username,
}) => {
  const [images, setImages] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await FetchFavouriteImage(username);
        setImages(response.data);
        setStatus(response.status);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImages();
  }, []);

  return (
    <Modal
      open={open}
      style={{ overflow: "scroll", marginTop: 10 }}
      onClose={handleClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          // overflow: "scroll",
          display: "block",
          p: 4,
        }}
      >
        <Typography style={{ marginTop: 20 }}>Choose Images</Typography>
        {images.length && status === 200 ? (
          <ImageList
            className="images"
            sx={{ width: 300, height: 400, marginRight: 100 }}
            cols={2}
          >
            {images?.map((item, index) => (
              <ImageListItem key={index} style={{ cursor: "pointer" }}>
                <img
                  src={`${item.image}t`}
                  srcSet={`${item.image}`}
                  alt={"crop"}
                  loading="lazy"
                  onClick={(e) => {
                    e.preventDefault();
                    setInputData({ ...inputData, image: item.image });
                    handleClose();
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Typography style={{ marginTop: 20 }}>No Images Available</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ImageModal;
