"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Divider, Modal, Box, Typography, Button } from "@mui/material";

interface PackageModalProps {
  open: boolean;
  handleClose: () => void;
  imageSrc: string;
  title: string;
  pros: string[];
  cons: string[];
  extras: {
    interior: string[];
    exterior: string[];
    detailing: string[];
  };
}

export default function PackageModal({
  open,
  handleClose,
  imageSrc,
  title,
  pros,
  cons,
  extras,
}: PackageModalProps) {
  const [showExtras, setShowExtras] = useState(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 800,
          bgcolor: "background.paper",
          borderRadius: 8,
          boxShadow: 24,
          p: 3,
          outline: "none",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Image
          src={imageSrc}
          alt="modal image"
          width={200}
          height={200}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
        <Divider sx={{ width: "100%", marginY: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Pros:
            </Typography>
            <ul>
              {pros.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Cons:
            </Typography>
            <ul>
              {cons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Box>
        </Box>
        <Divider sx={{ width: "100%", marginY: 2 }} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowExtras((prev) => !prev)}
          sx={{ mb: 2 }}
        >
          {showExtras ? "Hide Extras" : "Show Extras"}
        </Button>
        {showExtras && (
          <Box sx={{ width: "100%", overflowY: "auto", maxHeight: 300 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Extras:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Interior:</Typography>
                <ul>
                  {extras.interior.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Exterior:</Typography>
                <ul>
                  {extras.exterior.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">Detailing:</Typography>
                <ul>
                  {extras.detailing.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
