/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import FetchFavouriteImage from "../lib/api/fetchFavouriteImage";
import { useQuery } from "react-query";

const ImageModal = ({ open, handleClose, setImage, userInfo }) => {
  const [images, setImages] = React.useState([]);
  const [enabled, setEnabled] = React.useState(false);

  const { isLoading } = useQuery(
    "fetchImage",
    async () => {
      const fetchImages = await FetchFavouriteImage(userInfo?.userID);
      if (fetchImages.data) {
        const imgs =
          fetchImages.data.data.filter((item) => item.favorite.image_url) || [];
        setImages(imgs);
      }
      return fetchImages;
    },
    {
      enabled,
    }
  );

  useEffect(() => {
    if (userInfo?.userID) {
      setEnabled(true);
    }
  }, [userInfo?.userID]);

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
          boxShadow: 24,
          // overflow: "scroll",
          display: "block",
          p: 4,
        }}
      >
        <Typography style={{ marginTop: 20 }}>Choose Images</Typography>

        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : images?.length > 0 ? (
          <ImageList
            className="images"
            sx={{ width: 300, height: 400 }}
            rowHeight={164}
            cols={2}
          >
            {images?.map((item, index) => (
              <ImageListItem key={index} style={{ cursor: "pointer" }}>
                <img
                  src={`${item.favorite.image_url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.favorite.image_url}??w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"crop"}
                  loading="lazy"
                  onClick={() => {
                    setImage(item.favorite.image_url);
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
