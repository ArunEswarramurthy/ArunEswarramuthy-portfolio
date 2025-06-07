import React from 'react';
import { Box, Typography, Container, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Skills = () => {
  const technicalSkills = [
    { name: 'C/C++', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Data Structures', level: 80 },
    { name: 'OOP Concepts', level: 85 },
  ];

  const personalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Leadership', level: 85 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Analytical Thinking', level: 90 },
    { name: 'Quick Learning', level: 95 },
  ];

  const skillCategories = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#00d4ff' }} />,
      title: 'Programming',
      description: 'Proficient in C, C++, Java, Python with strong understanding of OOP concepts',
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#00d4ff' }} />,
      title: 'Web Development',
      description: 'Experience with HTML, CSS, JavaScript and React for creating responsive web applications',
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: '#00d4ff' }} />,
      title: 'Data Structures',
      description: 'Strong foundation in data structures and algorithms for efficient problem-solving',
    },
    {
      icon: <TerminalIcon sx={{ fontSize: 40, color: '#00d4ff' }} />,
      title: 'Linux',
      description: 'Comfortable working in Linux environments for development and operations',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#00d4ff' }} />,
      title: 'Soft Skills',
      description: 'Excellent communication, leadership, and analytical thinking abilities',
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #1e0f45 0%, #0a0520 100%)',
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
          top: '20%',
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
          bottom: '10%',
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
            My Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Paper
                  elevation={6}
                  className="glass-effect"
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(16, 5, 48, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(106, 61, 232, 0.2)',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.3)',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(106, 61, 232, 0.2), rgba(0, 212, 255, 0.2))',
                      mb: 3,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#e0e0e0',
                      lineHeight: 1.7,
                    }}
                  >
                    {category.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: '5px',
                      height: '25px',
                      background: 'linear-gradient(to bottom, #6a3de8, #00d4ff)',
                      marginRight: '15px',
                      borderRadius: '3px',
                    }
                  }}
                >
                  Technical Skills
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={4} sm={3}>
                          <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={8}>
                          <Box sx={{ position: 'relative' }}>
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              }}
                            />
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'transparent',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 4,
                                  background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                          <Typography variant="body2" sx={{ color: '#00d4ff', fontWeight: 500, textAlign: 'right' }}>
                            {skill.level}%
                          </Typography>
                        </Grid>
                      </Grid>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: '5px',
                      height: '25px',
                      background: 'linear-gradient(to bottom, #00d4ff, #6a3de8)',
                      marginRight: '15px',
                      borderRadius: '3px',
                    }
                  }}
                >
                  Personal Skills
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {personalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={4} sm={3}>
                          <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={8}>
                          <Box sx={{ position: 'relative' }}>
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              }}
                            />
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'transparent',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 4,
                                  background: 'linear-gradient(45deg, #00d4ff, #6a3de8)',
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                          <Typography variant="body2" sx={{ color: '#00d4ff', fontWeight: 500, textAlign: 'right' }}>
                            {skill.level}%
                          </Typography>
                        </Grid>
                      </Grid>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;