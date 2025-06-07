import React from 'react';
import { Box, Typography, Container, IconButton, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      link: 'http://www.linkedin.com/in/aruneswarramurthy',
      label: 'LinkedIn',
      color: '#0077B5',
    },
    {
      icon: <GitHubIcon />,
      link: 'https://github.com/ArunEswarramurthy',
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: <EmailIcon />,
      link: 'mailto:aruneswarramurthy@gmail.com',
      label: 'Email',
      color: '#EA4335',
    },
    {
      icon: <WhatsAppIcon />,
      link: 'https://wa.me/919994494765',
      label: 'WhatsApp',
      color: '#25D366',
    },
  ];

  const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];

  return (
    <Box
      sx={{
        pt: 8,
        pb: 4,
        background: 'linear-gradient(135deg, #0a0520 0%, #1e0f45 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
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
          background: 'rgba(106, 61, 232, 0.03)',
          filter: 'blur(100px)',
          top: '10%',
          left: '-200px',
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
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
          background: 'rgba(0, 212, 255, 0.03)',
          filter: 'blur(80px)',
          bottom: '5%',
          right: '-100px',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: 6,
          }}
        >
          <Box sx={{ mb: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  letterSpacing: 1,
                }}
                className="neon-text"
              >
                ARUN ESWARRAMURTHY
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '350px',
                  mb: 3,
                }}
              >
                Electronics & Communication Engineer passionate about technology and problem-solving.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconButton
                      component="a"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#00d4ff',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 4, sm: 8 } }}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00d4ff',
                    mb: 2,
                    fontWeight: 600,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button
                        onClick={() => document.getElementById(link.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textTransform: 'none',
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                          padding: '4px 0',
                          '&:hover': {
                            color: '#00d4ff',
                            backgroundColor: 'transparent',
                          },
                        }}
                      >
                        {link}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>

            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00d4ff',
                    mb: 2,
                    fontWeight: 600,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  Contact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textAlign: { xs: 'center', sm: 'left' },
                    }}
                  >
                    Salem, Tamil Nadu
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href="mailto:aruneswarramurthy@gmail.com"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#00d4ff',
                      },
                      textAlign: { xs: 'center', sm: 'left' },
                      display: 'block',
                    }}
                  >
                    aruneswarramurthy@gmail.com
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href="tel:9994494765"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#00d4ff',
                      },
                      textAlign: { xs: 'center', sm: 'left' },
                      display: 'block',
                    }}
                  >
                    +91 9994494765
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 2, md: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              © {new Date().getFullYear()} Arun Eswarramurthy. Made with 
              <FavoriteIcon sx={{ color: '#00d4ff', mx: 0.5, fontSize: '0.9rem' }} />
              using React & Material UI
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: 'rgba(106, 61, 232, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 212, 255, 0.2)',
                  boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
              className="bounce-animation"
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;