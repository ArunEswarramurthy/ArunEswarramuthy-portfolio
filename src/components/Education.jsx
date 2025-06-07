import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Electronics and Communication Engineering',
      institution: 'Sri Shanmugha College of Engineering and Technology',
      location: 'Salem',
      period: 'Expected May 2026',
      details: 'CGPA (until last semester): 7.9',
    },
    {
      degree: 'HSC',
      field: 'Higher Secondary',
      institution: 'KRP Matric Higher Secondary School',
      location: 'Salem',
      period: 'June 2020 - May 2022',
      details: 'Percentage: 70%',
    },
    {
      degree: 'SSLC',
      field: 'Secondary School',
      institution: 'KRP Matric Higher Secondary School',
      location: 'Salem',
      period: 'June 2019 - May 2020',
      details: 'Percentage: 76%',
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Development',
      issuer: 'Udemy',
      date: '2023',
      description: 'Comprehensive course covering front-end and back-end web development technologies',
    },
  ];

  const awards = [
    {
      title: '1st Prize in Technical Symposium "PROXIM 25"',
      issuer: 'Saveetha Institute of Medical and Technical Sciences',
      date: '2023',
    },
    {
      title: '3rd Prize in Technical Quiz',
      issuer: 'Shreenivasa Engineering College',
      date: '2023',
    },
    {
      title: 'Paper Presentation on IoT Gas Safety System',
      issuer: 'ICETS\'25 International Conference',
      date: '2023',
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0a0520 0%, #1e0f45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(106, 61, 232, 0.05)',
          filter: 'blur(100px)',
          top: '10%',
          right: '-200px',
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 1
        }}
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(0, 212, 255, 0.05)',
          filter: 'blur(80px)',
          bottom: '5%',
          left: '-100px',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
              },
            }}
          >
            Education & Achievements
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 6 }}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                    mr: 2,
                    boxShadow: '0 5px 15px rgba(106, 61, 232, 0.3)',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 30, color: 'white' }} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: 1,
                  }}
                >
                  Education
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <Paper
                      elevation={6}
                      className="glass-effect"
                      sx={{
                        p: 3,
                        background: 'rgba(16, 5, 48, 0.4)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(106, 61, 232, 0.2)',
                        borderRadius: '20px',
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(106, 61, 232, 0.2)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: 'linear-gradient(to bottom, #6a3de8, #00d4ff)',
                          borderRadius: '4px 0 0 4px',
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 1,
                        }}
                      >
                        {edu.degree} - {edu.field}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#00d4ff',
                          mb: 1,
                          fontWeight: 500,
                        }}
                      >
                        {edu.institution}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', sm: 'row' },
                        mb: 2
                      }}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#e0e0e0',
                            mb: { xs: 0.5, sm: 0 },
                          }}
                        >
                          {edu.location}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(0, 212, 255, 0.7)',
                            fontWeight: 500,
                          }}
                        >
                          {edu.period}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          mt: 2,
                          p: 2,
                          borderRadius: '10px',
                          background: 'rgba(106, 61, 232, 0.1)',
                          border: '1px solid rgba(106, 61, 232, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#e0e0e0',
                            fontWeight: 500,
                          }}
                        >
                          {edu.details}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 5 }}>
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(45deg, #00d4ff, #6a3de8)',
                      mr: 2,
                      boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)',
                    }}
                  >
                    <CardMembershipIcon sx={{ fontSize: 30, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      letterSpacing: 1,
                    }}
                  >
                    Certifications
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ y: -5 }}
                    >
                      <Paper
                        elevation={6}
                        className="glass-effect"
                        sx={{
                          p: 3,
                          background: 'rgba(16, 5, 48, 0.4)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 212, 255, 0.2)',
                          borderRadius: '20px',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'white',
                            mb: 1,
                          }}
                        >
                          {cert.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#00d4ff',
                            mb: 2,
                            fontWeight: 500,
                          }}
                        >
                          {cert.issuer} | {cert.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#e0e0e0',
                            lineHeight: 1.6,
                          }}
                        >
                          {cert.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 6 }}>
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(45deg, #00d4ff, #6a3de8)',
                      mr: 2,
                      boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)',
                    }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 30, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      letterSpacing: 1,
                    }}
                  >
                    Awards
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <Paper
                        elevation={6}
                        className="glass-effect"
                        sx={{
                          p: 3,
                          background: 'rgba(16, 5, 48, 0.4)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 212, 255, 0.2)',
                          borderRadius: '20px',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(to bottom, #00d4ff, #6a3de8)',
                            borderRadius: '4px 0 0 4px',
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'white',
                            mb: 1,
                          }}
                        >
                          {award.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#00d4ff',
                            fontWeight: 500,
                          }}
                        >
                          {award.issuer} | {award.date}
                        </Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;