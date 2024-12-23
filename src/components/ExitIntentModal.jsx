// components/ExitIntentModal.js
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material';
import Image from 'next/image';
import { gsap } from 'gsap';

const ModalContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: '-330px',
    right: '20px',
    width: '320px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: 1300,
    opacity: 0,
    transition: 'opacity 0.5s, transform 0.5s',
    '@media (max-width: 600px)': {
        width: '90%',
        right: '5%',
    },
}));

const StyledImage = styled(Image)(({}) => ({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "7px",
    boxShadow: "0px 4px 9.6px rgba(0, 0, 0, 0.25)",

    "@media (max-width: 600px)": {
        padding: "0.6rem 0.6rem 0",
        width: "100%",
        objectFit: "cover",
        height: "auto",
        maxHeight: "9.3rem",
    },
}));

const ExitIntentModal = ({ open, content, handleDismiss }) => {
    const modalRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        if (open) {
            const previousFocusedElement = document.activeElement;

            tl.current = gsap.timeline({
                defaults: { duration: 0.5, ease: "power3.out" },
            });

            tl.current.to(modalRef.current, {
                y: '-320px',
                opacity: 1,
            });

            modalRef.current.focus();

            return () => {
                if (previousFocusedElement) {
                    previousFocusedElement.focus();
                }
            };
        } else if (tl.current) {
            tl.current.to(modalRef.current, {
                y: '0px',
                opacity: 0,
                onComplete: () => {
                },
            });
        }
    }, [open]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && open) {
                handleDismiss();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleDismiss]);

    if (!open) return null;

    return (
        <ModalContainer
            ref={modalRef}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-modal-title"
            aria-describedby="exit-intent-modal-description"
        >
            {Array.isArray(content) ? (
                content.map((item, index) => (
                    <Box key={index} sx={{ marginBottom: index !== content.length - 1 ? '20px' : '0' }}>
                        {item.image && (
                            <StyledImage src={item.image} alt={item.title} width={300} height={160} />
                        )}
                        <Typography
                            id="exit-intent-modal-title"
                            variant="h5"
                            sx={{
                                fontFamily: "Unbounded",
                                fontSize: "1.8rem",
                                fontWeight: "bold",
                                color: "#232E4A",
                                padding: "1rem 0",
                                textAlign: "center",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            id="exit-intent-modal-description"
                            variant="body1"
                            sx={{
                                fontSize: "1.4rem",
                                color: "#555",
                                textAlign: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            {item.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            {item.buttons.map((button, btnIndex) => (
                                <Button
                                    key={btnIndex}
                                    variant={button.variant}
                                    color={button.color}
                                    onClick={button.onClick}
                                    sx={{
                                        borderRadius: "25px",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        padding: '8px 16px',
                                    }}
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                ))
            ) : (
                <Box>
                    {content.image && (
                        <StyledImage src={content.image} alt={content.title} width={300} height={160} />
                    )}
                    <Typography
                        id="exit-intent-modal-title"
                        variant="h5"
                        sx={{
                            fontFamily: "Unbounded",
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#232E4A",
                            padding: "1rem 0",
                            textAlign: "center",
                        }}
                    >
                        {content.title}
                    </Typography>
                    <Typography
                        id="exit-intent-modal-description"
                        variant="body1"
                        sx={{
                            fontSize: "1.4rem",
                            color: "#555",
                            textAlign: "center",
                            marginBottom: "1rem",
                        }}
                    >
                        {content.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: "3rem", }}>
                        {content.buttons.map((button, btnIndex) => (
                            <Button
                                key={btnIndex}
                                variant={button.variant}
                                color={button.color}
                                onClick={button.onClick}
                                sx={{
                                    borderRadius: "25px",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    padding: '8px 16px',
                                }}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}
        </ModalContainer>
    );
};

export default ExitIntentModal;