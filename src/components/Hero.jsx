import React from 'react';
import { Box, Typography, Container, Button, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0520 0%, #1e0f45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: ['120px', '180px', '240px'][i % 3],
            height: ['120px', '180px', '240px'][i % 3],
            borderRadius: '50%',
            background: i % 2 === 0 
              ? 'rgba(106, 61, 232, 0.08)' 
              : 'rgba(0, 212, 255, 0.08)',
            filter: 'blur(40px)',
            zIndex: 0,
          }}
          animate={{
            x: [Math.random() * 100, Math.random() * -100],
            y: [Math.random() * 100, Math.random() * -100],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 15 + i * 3,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: '#00d4ff',
                  }}
                >
                  HELLO, I'M
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: 1,
                  }}
                >
                  ARUN ESWARRAMURTHY
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#00d4ff',
                    mb: 3,
                    fontWeight: 400,
                    letterSpacing: 1,
                  }}
                >
                  Electronics & Communication Engineer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    mb: 4,
                    maxWidth: '600px',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  Enthusiastic and detail-oriented fresher seeking an internship opportunity to apply my technical
                  skills, gain hands-on experience, and contribute to real-world projects. Passionate about
                  continuous learning, collaborating with dynamic teams, and growing in a fast-paced tech
                  environment.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<DownloadIcon />}
                    sx={{
                      background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5a2de8, #00c4ff)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(106, 61, 232, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: '#00d4ff',
                      borderColor: '#00d4ff',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: '#00d4ff',
                        color: '#ffffff',
                        background: 'rgba(0, 212, 255, 0.1)',
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(0, 212, 255, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Projects
                  </Button>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <Button
                    variant="text"
                    startIcon={<LinkedInIcon />}
                    href="http://www.linkedin.com/in/aruneswarramurthy"
                    target="_blank"
                    sx={{
                      color: '#ffffff',
                      '&:hover': {
                        color: '#00d4ff',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/ArunEswarramurthy"
                    target="_blank"
                    sx={{
                      color: '#ffffff',
                      '&:hover': {
                        color: '#00d4ff',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="float-animation"
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '280px', md: '320px' },
                  height: { xs: '280px', md: '320px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '4px solid rgba(0, 212, 255, 0.3)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, rgba(106, 61, 232, 0.2), rgba(0, 212, 255, 0.2))',
                }}
              >
                <Avatar
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(16, 5, 48, 0.8)',
                  }}
                >
                  <Typography variant="h3" sx={{ color: '#00d4ff' }}>
                    AE
                  </Typography>
                </Avatar>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Animated scroll indicator */}
      <Box
        component={motion.div}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <Typography variant="body2" sx={{ color: '#00d4ff', mb: 1 }}>
          Scroll Down
        </Typography>
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid #00d4ff',
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            padding: '5px 0',
          }}
        >
          <Box
            component={motion.div}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            sx={{
              width: 6,
              height: 10,
              backgroundColor: '#00d4ff',
              borderRadius: 3,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;