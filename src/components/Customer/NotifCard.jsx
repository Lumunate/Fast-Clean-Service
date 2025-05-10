"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Grid, Typography, Skeleton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import DoneIcon from '@mui/icons-material/Done';
import { CardBody, CardHeading, StyledCard } from '../mui/AdminPkgs';
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const NotificationCard = ({ id, message, status, date, onStatusChange }) => {
    const handleClick = () => {
        if (status === "unread") {
            console.log(`📨 Marking notification ${id} as read`);
            onStatusChange(id);
        }
    };

    return (
        <StyledCard
            onClick={handleClick}
            sx={{
                mb: 2,
                backgroundColor: status === "unread" ? "#f5f5f5" : "#ffffff",
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                cursor: status === "unread" ? "pointer" : "default",
                "&:hover": {
                    backgroundColor: status === "unread" ? "#e0e0e0" : "inherit",
                }
            }}
        >
            <CardBody>
                <Grid container alignItems="center">
                    <Grid item>
                        <Avatar
                            sx={{
                                bgcolor: status === "unread" ? "#2196F3" : "#4CAF50",
                                width: 40,
                                height: 40,
                                marginRight: '16px',
                            }}
                        >
                            {status === "unread" ? <MailIcon /> : <DoneIcon />}
                        </Avatar>
                    </Grid>

                    <Grid item xs>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: status === "unread" ? 'bold' : 'normal',
                                color: status === "unread" ? "#333" : "#666",
                            }}
                        >
                            {message}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#888' }}>
                            {new Date(date).toLocaleString("en-US", {
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </Typography>
                    </Grid>
                </Grid>
            </CardBody>
        </StyledCard>
    );
};

const NotifCard = () => {
    const t = useTranslations('customer_dashboard.sections.0');
    const { data: session, status } = useSession();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = session?.user?.id;

    useEffect(() => {
        console.log("🟡 Session status:", status);
        if (session) {
            console.log("🔐 Session object:", session);
        } else {
            console.log("❌ No session available");
        }
    }, [session, status]);

    useEffect(() => {
        const fetchNotifications = async () => {
            if (userId) {
                setLoading(true);
                console.log(`🔄 Fetching notifications for userId: ${userId}`);
                try {
                    const response = await fetch(`/api/notifications?userId=${userId}`);
                    const data = await response.json();
                    console.log("📥 Notification response:", data);
                    if (data.success) {
                        const sortedNotifications = data.notifications.sort(
                            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                        );
                        setNotifications(sortedNotifications);
                        console.log("✅ Notifications loaded and sorted");
                    } else {
                        console.warn("⚠️ Notification fetch failed:", data.message);
                    }
                } catch (error) {
                    console.error("❌ Failed to fetch notifications:", error);
                } finally {
                    setLoading(false);
                    console.log("⏹️ Notification fetch complete");
                }
            } else {
                console.warn("🚫 No userId available, skipping fetch");
            }
        };

        fetchNotifications();
    }, [userId]);

    const markAsRead = async (notificationId) => {
        console.log(`📤 Sending mark-as-read for notificationId: ${notificationId}`);
        setNotifications((prev) =>
            prev.map((notif) =>
                notif._id === notificationId ? { ...notif, status: "read" } : notif
            )
        );

        try {
            const response = await fetch(`/api/notifications/update-status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ notificationId, status: "read" }),
            });

            if (response.ok) {
                console.log(`✅ Notification ${notificationId} marked as read successfully`);
            } else {
                console.warn(`⚠️ Failed to update status for ${notificationId}`);
            }
        } catch (error) {
            console.error("❌ Error while updating notification status:", error);
        }
    };

    return (
        <StyledCard sx={{ maxHeight: '600px', overflowY: 'scroll' }}>
            <CardBody>
                <CardHeading sx={{ marginBottom: '20px', color: '#333' }}>
                    {t("widgets.1.title")}
                </CardHeading>

                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Skeleton variant="rectangular" height={40} width={40} sx={{ borderRadius: '50%', display: 'inline-block', marginRight: '16px' }} />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="40%" />
                        </Box>
                    ))
                ) : notifications.length > 0 ? (
                    notifications.map((notif) => (
                        <NotificationCard
                            key={notif._id}
                            id={notif._id}
                            message={notif.message}
                            status={notif.status}
                            date={notif.createdAt}
                            onStatusChange={markAsRead}
                        />
                    ))
                ) : (
                    <Typography sx={{ color: '#888', fontSize: '1rem', textAlign: 'center' }}>
                        {t("widgets.1.none")}
                    </Typography>
                )}
            </CardBody>
        </StyledCard>
    );
};

export default NotifCard;
