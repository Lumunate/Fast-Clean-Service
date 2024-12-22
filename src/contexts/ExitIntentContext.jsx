// contexts/ExitIntentContext.js
'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import ExitIntentModal from '../components/ExitIntentModal';

export const ExitIntentContext = createContext();
const ALLOWED_PATHS = ['/booking', '/fleet', '/other-vehicles'];

export const ExitIntentProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null); // Content for the modal
    const [leaveUrl, setLeaveUrl] = useState(null); // Dynamic leave URL

    // Handle dismissing the modal
    const handleDismiss = useCallback(() => {
        setModalOpen(false);
        setModalContent(null);
        setLeaveUrl(null); // Reset to no leave URL
    }, []);

    // Function to get modal content based on current path and leaveUrl
    const getModalContent = (currentPath, leaveUrl, handleDismiss) => {
        const contentMap = {
            '/booking': [
                {
                    image: '/g1.jpg',
                    title: 'Book a Fleet Cleanup Now',
                    description: 'Schedule a proper one-time cleanup for your fleet of vehicles! We provide you with the best autocare possible!',
                    buttons: [
                        {
                            label: 'Book Now!',
                            variant: 'contained',
                            color: 'secondary',
                            onClick: () => {
                                window.location.href = '/fleet';
                            },
                        },
                    ],
                },
                {
                    image: '/g4.jpg',
                    title: 'Book Other Vehicle Cleanup',
                    description: 'Book a one-time cleanup for your boats, bikes, etc. Any type of vehicle? We provide services for all!',
                    buttons: [
                        {
                            label: 'Book Now!',
                            variant: 'contained',
                            color: 'secondary',
                            onClick: () => {
                                window.location.href = '/other-vehicles';
                            },
                        },
                    ],
                },
            ],
            '/fleet': {
                image: '/g1.jpg',
                title: 'Book a Fleet Cleanup Now',
                description: 'Your fleet isn\'t ready yet? Try booking a service for your car!',
                buttons: [
                    {
                        label: 'Book Now!',
                        variant: 'contained',
                        color: 'secondary',
                        onClick: () => {
                            window.location.href = '/booking';
                        },
                    },
                ],
            },
            '/other-vehicles': {
                image: '/g4.jpg',
                title: 'Book Other Vehicle Cleanup',
                description: 'Don\'t have any other vehicles in mind? Try booking a service for your car!',
                buttons: [
                    {
                        label: 'Book Now!',
                        variant: 'contained',
                        color: 'secondary',
                        onClick: () => {
                            window.location.href = '/booking';
                        },
                    },
                ],
            },
        };

        const content = contentMap[currentPath];

        if (!content) return null;

        const generateLeaveOrCloseButton = () => {
            if (leaveUrl) {
                return {
                    label: 'Leave',
                    variant: 'outlined',
                    color: 'primary',
                    onClick: () => {
                        window.location.href = leaveUrl; // Redirect to the provided URL
                    },
                };
            } else {
                return {
                    label: 'Close',
                    variant: 'outlined',
                    color: 'primary',
                    onClick: handleDismiss, // Just dismiss the modal
                };
            }
        };

        // If the content is an array (e.g., '/booking'), map through each item
        if (Array.isArray(content)) {
            return content.map(item => ({
                ...item,
                buttons: [
                    ...item.buttons,
                    generateLeaveOrCloseButton(), // Append "Leave" or "Close" button
                ],
            }));
        } else if (typeof content === 'object') {
            return {
                ...content,
                buttons: [
                    ...content.buttons,
                    generateLeaveOrCloseButton(), // Append "Leave" or "Close" button
                ],
            };
        }

        return content;
    };

    // Define openModal to handle both cases
    const openModal = useCallback((redirectUrl = null) => {
        if (modalOpen) return;

        const currentPath = window.location.pathname;

        // Check if the current path is allowed
        if (!ALLOWED_PATHS.includes(currentPath)) {
            // If not allowed, navigate normally
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
            return;
        }

        const urlToSet = redirectUrl; // Can be a URL string or null

        setLeaveUrl(urlToSet); // Set the leaveUrl state

        const content = getModalContent(currentPath, urlToSet, handleDismiss);

        if (content) {
            setModalContent(content);
            setModalOpen(true);
        } else {
            // Fallback to default content if needed
            setModalContent({
                image: '/default.jpg',
                title: 'Are you sure you want to leave?',
                description: 'We would love to assist you further before you navigate away.',
                buttons: [
                    {
                        label: 'Stay',
                        variant: 'outlined',
                        color: 'primary',
                        onClick: () => {
                            handleDismiss();
                        },
                    },
                    {
                        label: 'Close',
                        variant: 'contained',
                        color: 'secondary',
                        onClick: () => {
                            handleDismiss(); // Just dismiss the modal
                        },
                    },
                ],
            });
            setModalOpen(true);
        }
    }, [modalOpen, handleDismiss]);

    // Handle mouse exit intent
    const handleMouseLeave = useCallback((e) => {
        // Prevent triggering on touch devices
        const isTouchDevice = () => {
            return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        };

        if (isTouchDevice()) return;

        // Trigger when mouse leaves the viewport from the top
        if (e.clientY < 50 && !modalOpen) { // Threshold for exit intent
            const currentPath = window.location.pathname;
            if (ALLOWED_PATHS.includes(currentPath)) {
                openModal(); // Call openModal without redirectUrl
            }
        }
    }, [modalOpen, openModal]);

    // Listen for exit intent
    useEffect(() => {
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    // Handle beforeunload for tab/window close
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (modalOpen) {
                e.preventDefault();
                e.returnValue = ''; // Required for Chrome to show the confirmation dialog
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [modalOpen]);

    return (
        <ExitIntentContext.Provider value={{ openModal }}>
            {children}
            {modalOpen && modalContent && (
                <ExitIntentModal
                    open={modalOpen}
                    content={modalContent}
                    handleDismiss={handleDismiss}
                />
            )}
        </ExitIntentContext.Provider>
    );
};
