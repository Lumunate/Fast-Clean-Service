'use client';
import { Box, styled, Typography } from "@mui/material";

export const FeedbackContainer = styled(Box)(({ theme }) => ({
    padding: '150px 0 100px',
    textAlign: 'center',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      padding: '150px 0 80px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '150px 0 60px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '120px 0 40px',
    },
  }));

  export const FeedbackHeadingTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: '#232E4A',
    fontSize: '56px',
    textAlign:"center",
    [theme.breakpoints.down('xl')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
      lineHeight: 'normal',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down(400)]: {
      fontSize: '16px',
    },
  }));

  export const FeedbackParaTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    color: '#232E4A',
    fontSize: '18px',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down(576)]: {
      fontSize: '12px',
    }
  }));