"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Skeleton, Avatar, Grid, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import DoneIcon from '@mui/icons-material/Done';
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const NotificationsPage = () => {
    const t = useTranslations('customer_dashboard.sections.0');
    const { data: session } = useSession();
    const userId = session?.user?.id;

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;
        setLoading(true);
        fetch(`/api/notifications?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const sorted = data.notifications.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                    setNotifications(sorted);
                }
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [userId]);

    const markAsRead = async (id) => {
        setNotifications(prev =>
            prev.map(n => n._id === id ? { ...n, status: 'read' } : n)
        );
        try {
            await fetch('/api/notifications/update-status', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notificationId: id, status: 'read' }),
            });
        } catch (err) {
            console.error('Failed to update status', err);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {t("widgets.1.title")}
            </Typography>

            {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                    <Box key={i} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
                        <Skeleton variant="text" width="80%" />
                    </Box>
                ))
            ) : notifications.length ? (
                notifications.map(({ _id, message, status, createdAt }) => (
                    <Box
                        key={_id}
                        onClick={() => status === 'unread' && markAsRead(_id)}
                        sx={{
                            display: 'flex', alignItems: 'center', mb: 2,
                            p: 2, borderRadius: 2,
                            backgroundColor: status === 'unread' ? '#f5f5f5' : '#fff',
                            cursor: status === 'unread' ? 'pointer' : 'default',
                            boxShadow: 1,
                            '&:hover': { backgroundColor: status === 'unread' ? '#e0e0e0' : '#fff' },
                        }}
                    >
                        <Avatar sx={{ bgcolor: status === 'unread' ? '#2196F3' : '#4CAF50', mr: 2 }}>
                            {status === 'unread' ? <MailIcon /> : <DoneIcon />}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography fontWeight={status === 'unread' ? 'bold' : 'normal'}>
                                {message}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {new Date(createdAt).toLocaleString()}
                            </Typography>
                        </Box>
                        {status === 'unread' && (
                            <IconButton size="small" onClick={() => markAsRead(_id)}>
                                <DoneIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                ))
            ) : (
                <Typography color="textSecondary">
                    {t("widgets.1.none")}
                </Typography>
            )}
        </Box>
    );
};

export default NotificationsPage;
