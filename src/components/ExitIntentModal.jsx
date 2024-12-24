// components/ExitIntentModal.js
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { gsap } from 'gsap';

// Backdrop Component
const Backdrop = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1200,
    opacity: 0,
    transition: 'opacity 0.5s',
}));

// Modal Container with conditional styling based on 'isMultiple'
const ModalContainer = styled(Box)(({ theme, isMultiple }) => ({
    position: 'fixed',
    top: isMultiple ? '18%' : '50%',
    left: '50%',
    transform: isMultiple ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
    width: isMultiple ? '80%' : '90%',
    maxWidth: isMultiple ? '600px' : '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: 1300,
    opacity: 0,
    transition: 'opacity 0.5s, transform 0.5s',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 600px)': {
        width: '95%',
        padding: '15px',
        top: isMultiple ? '10%' : '50%',
        transform: isMultiple ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
    },
}));

const StyledImage = styled(Image)(({}) => ({
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "7px",
    boxShadow: "0px 4px 9.6px rgba(0, 0, 0, 0.25)",
    marginBottom: '1rem',
    "@media (max-width: 600px)": {
        padding: "0.6rem 0.6rem 0",
        width: "100%",
        objectFit: "cover",
        height: "auto",
        maxHeight: "9.3rem",
    },
}));

const ContentWrapper = styled(Box)(({ isMultiple }) => ({
    display: isMultiple ? 'flex' : 'block',
    flexDirection: 'row',
    gap: '20px',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
}));

const ExitIntentModal = ({ open, content, handleDismiss }) => {
    const modalRef = useRef(null);
    const backdropRef = useRef(null);
    const tl = useRef(null);

    // Determine if content is an array
    const isMultiple = Array.isArray(content);

    useEffect(() => {
        if (open) {
            const previousFocusedElement = document.activeElement;

            // Animate Backdrop
            gsap.to(backdropRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
            });

            // Animate Modal
            tl.current = gsap.timeline({
                defaults: { duration: 0.5, ease: "power3.out" },
            });

            tl.current.to(modalRef.current, {
                opacity: 1,
                y: '0%',
            });

            modalRef.current.focus();

            // Prevent scrolling on the background
            document.body.style.overflow = 'hidden';

            return () => {
                if (previousFocusedElement) {
                    previousFocusedElement.focus();
                }
                document.body.style.overflow = 'auto';
            };
        } else {
            if (tl.current) {
                tl.current.to(modalRef.current, {
                    opacity: 0,
                    y: isMultiple ? '-50%' : '-50%',
                    onComplete: () => {},
                });
            }

            // Animate Backdrop Out
            gsap.to(backdropRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    }, [open, isMultiple]);

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
        <>
            <Backdrop ref={backdropRef} onClick={handleDismiss} />
            <ModalContainer
                ref={modalRef}
                tabIndex="-1"
                role="dialog"
                aria-modal="true"
                aria-labelledby="exit-intent-modal-title"
                aria-describedby="exit-intent-modal-description"
                isMultiple={isMultiple}
            >
                <ContentWrapper isMultiple={isMultiple}>
                    {isMultiple ? (
                        content.map((item, index) => (
                            <Box key={index} sx={{ flex: 1 }}>
                                {item.image && (
                                    <StyledImage src={item.image} alt={item.title} width={300} height={160} />
                                )}
                                <Typography
                                    id={`exit-intent-modal-title-${index}`}
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
                                    id={`exit-intent-modal-description-${index}`}
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
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
                </ContentWrapper>
            </ModalContainer>
        </>
    );
};

export default ExitIntentModal;
