import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import InterestsIcon from '@mui/icons-material/Interests';

const About = () => {
  const interests = ['Web Development', 'IoT', 'Problem Solving', 'New Technologies', 'Music'];

  return (
    <Box
      id="about"
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
          top: '-100px',
          right: '-100px',
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
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(0, 212, 255, 0.05)',
          filter: 'blur(120px)',
          bottom: '-150px',
          left: '-150px',
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
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 6 }}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={6}
                className="glass-effect"
                sx={{
                  p: 4,
                  background: 'rgba(16, 5, 48, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(106, 61, 232, 0.2)',
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
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
                    <PersonIcon sx={{ fontSize: 30, color: 'white' }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      letterSpacing: 1,
                    }}
                  >
                    Who Am I?
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e0e0e0',
                        mb: 3,
                        lineHeight: 1.9,
                        fontSize: '1.05rem',
                      }}
                    >
                      I am Arun Eswarramurthy, an Electronics and Communication Engineering student with a passion for technology and problem-solving. I am enthusiastic about applying my technical skills in real-world scenarios and contributing to innovative projects.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#e0e0e0',
                        mb: 3,
                        lineHeight: 1.9,
                        fontSize: '1.05rem',
                      }}
                    >
                      With a strong foundation in programming languages like C, C++, Java, and Python, along with front-end development skills in HTML, CSS, JavaScript, and React, I am equipped to take on challenging technical tasks and deliver effective solutions.
                    </Typography>

                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '15px',
                        background: 'rgba(0, 212, 255, 0.05)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#00d4ff',
                          fontWeight: 500,
                          fontStyle: 'italic',
                          lineHeight: 1.8,
                        }}
                      >
                        "I am a quick learner with excellent communication and leadership skills. My analytical thinking and problem-solving abilities enable me to approach challenges methodically and find optimal solutions."
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <InterestsIcon sx={{ mr: 1, color: '#00d4ff' }} /> Interests
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {interests.map((interest, index) => (
                          <Chip
                            key={index}
                            label={interest}
                            sx={{
                              background: 'linear-gradient(45deg, rgba(106, 61, 232, 0.2), rgba(0, 212, 255, 0.2))',
                              color: '#e0e0e0',
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                              fontWeight: 500,
                              py: 2.5,
                              '&:hover': {
                                background: 'linear-gradient(45deg, rgba(106, 61, 232, 0.4), rgba(0, 212, 255, 0.4))',
                                transform: 'translateY(-3px)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 3 }} />

                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#e0e0e0',
                          mb: 1,
                        }}
                      >
                        <strong style={{ color: '#00d4ff' }}>Languages:</strong> Tamil, English
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#e0e0e0',
                          mb: 1,
                        }}
                      >
                        <strong style={{ color: '#00d4ff' }}>Location:</strong> Salem, Tamil Nadu
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;