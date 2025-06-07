import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Chip, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SensorsIcon from '@mui/icons-material/Sensors';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Dynamic Dice Duel',
      description: 'Built a two-player dice game with score tracking, customizable names, and a goal of 20 points to win. Includes winner alerts and a reset option for replayability. Features interactive dice, responsive design, and JavaScript-based game logic.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: <DevicesIcon sx={{ fontSize: 60, color: '#00d4ff' }} />,
      github: 'https://github.com/ArunEswarramurthy/dynamic-dice-duel',
      demo: '#',
      color: 'linear-gradient(135deg, rgba(106, 61, 232, 0.2), rgba(0, 212, 255, 0.2))',
    },
    {
      id: 2,
      title: 'IoT Gas Safety System',
      description: 'Designed to detect gas leakage and trigger an automatic shutoff for safety. Real-time monitoring and alert system using IoT and embedded technologies. Preventing LPG Hazards with Advanced IoT Gas Monitoring and Automatic Shutdown System.',
      technologies: ['ESP32', 'IoT', 'C++', 'Sensors'],
      icon: <SensorsIcon sx={{ fontSize: 60, color: '#00d4ff' }} />,
      github: 'https://github.com/ArunEswarramurthy/iot-gas-safety',
      demo: '#',
      color: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(106, 61, 232, 0.2))',
    },
  ];

  return (
    <Box
      id="projects"
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
          bottom: '10%',
          left: '-200px',
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
          top: '20%',
          right: '-100px',
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
            My Projects
          </Typography>
        </motion.div>

        <Box sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    elevation={6}
                    className="glass-effect"
                    sx={{
                      height: '100%',
                      background: 'rgba(16, 5, 48, 0.4)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(106, 61, 232, 0.2)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
                      },
                      position: 'relative',
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: project.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '150%',
                          height: '150%',
                          background: 'radial-gradient(circle, rgba(106, 61, 232, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                          animation: 'rotate 10s linear infinite',
                        }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {project.icon}
                      </motion.div>
                      
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(10, 5, 32, 0.85)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 3,
                            }}
                          >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                href={project.github}
                                target="_blank"
                                sx={{
                                  background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                                  borderRadius: 2,
                                  px: 2,
                                  py: 1,
                                  '&:hover': {
                                    background: 'linear-gradient(45deg, #5a2de8, #00c4ff)',
                                    boxShadow: '0 5px 15px rgba(106, 61, 232, 0.4)',
                                  },
                                }}
                              >
                                GitHub
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outlined"
                                startIcon={<LaunchIcon />}
                                href={project.demo}
                                target="_blank"
                                sx={{
                                  color: '#00d4ff',
                                  borderColor: '#00d4ff',
                                  borderRadius: 2,
                                  px: 2,
                                  py: 1,
                                  '&:hover': {
                                    borderColor: '#00d4ff',
                                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                    boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)',
                                  },
                                }}
                              >
                                Demo
                              </Button>
                            </motion.div>
                          </Box>
                        </motion.div>
                      )}
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#e0e0e0',
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'linear-gradient(45deg, rgba(106, 61, 232, 0.2), rgba(0, 212, 255, 0.2))',
                              color: '#e0e0e0',
                              fontWeight: 500,
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, rgba(106, 61, 232, 0.4), rgba(0, 212, 255, 0.4))',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/ArunEswarramurthy"
                target="_blank"
                className="glow-animation"
                sx={{
                  background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                  px: 4,
                  py: 1.8,
                  borderRadius: 3,
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #5a2de8, #00c4ff)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(106, 61, 232, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View More Projects on GitHub
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;