import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Paper, IconButton, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      title: 'Email',
      value: 'aruneswarramurthy@gmail.com',
      link: 'mailto:aruneswarramurthy@gmail.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24 }} />,
      title: 'Phone',
      value: '9994494765',
      link: 'tel:9994494765',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 24 }} />,
      title: 'WhatsApp',
      value: '9994494765',
      link: 'https://wa.me/919994494765',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
      title: 'Location',
      value: 'Salem, Tamil Nadu',
      link: 'https://maps.google.com/?q=Salem,Tamil+Nadu',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
      link: 'http://www.linkedin.com/in/aruneswarramurthy',
      name: 'LinkedIn',
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 28 }} />,
      link: 'https://github.com/ArunEswarramurthy',
      name: 'GitHub',
    },
  ];

  return (
    <Box
      id="contact"
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
          bottom: '5%',
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
            Get In Touch
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ mt: 6 }}>
          <Grid item xs={12} md={5}>
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
                  height: '100%',
                  background: 'rgba(16, 5, 48, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(106, 61, 232, 0.2)',
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(106, 61, 232, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
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
                  Contact Information
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#e0e0e0',
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  Feel free to reach out to me for any inquiries, opportunities, or just to say hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Box
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          padding: 1.5,
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(106, 61, 232, 0.1)',
                          },
                        }}
                      >
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
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#00d4ff',
                              fontWeight: 500,
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'white',
                              fontWeight: 400,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    Find me on
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
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
                          aria-label={social.name}
                          sx={{
                            width: 50,
                            height: 50,
                            background: 'rgba(106, 61, 232, 0.1)',
                            color: 'white',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                              boxShadow: '0 5px 15px rgba(106, 61, 232, 0.3)',
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
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
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: 'white',
                    mb: 3,
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
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: 'rgba(106, 61, 232, 0.3)',
                              borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 212, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00d4ff',
                              borderWidth: '2px',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#e0e0e0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#00d4ff',
                          },
                          '& .MuiInputBase-input': {
                            padding: '16px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: 'rgba(106, 61, 232, 0.3)',
                              borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 212, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00d4ff',
                              borderWidth: '2px',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#e0e0e0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#00d4ff',
                          },
                          '& .MuiInputBase-input': {
                            padding: '16px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: 'rgba(106, 61, 232, 0.3)',
                              borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 212, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00d4ff',
                              borderWidth: '2px',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#e0e0e0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#00d4ff',
                          },
                          '& .MuiInputBase-input': {
                            padding: '16px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            borderRadius: 2,
                            '& fieldset': {
                              borderColor: 'rgba(106, 61, 232, 0.3)',
                              borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(0, 212, 255, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00d4ff',
                              borderWidth: '2px',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#e0e0e0',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#00d4ff',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          className="glow-animation"
                          sx={{
                            mt: 2,
                            py: 1.5,
                            px: 4,
                            background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
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
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>

                <Snackbar
                  open={formSubmitted}
                  autoHideDuration={5000}
                  onClose={() => setFormSubmitted(false)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <Alert
                    severity="success"
                    variant="filled"
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  >
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                </Snackbar>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;