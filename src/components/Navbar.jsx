import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'About', icon: <PersonIcon /> },
    { name: 'Skills', icon: <CodeIcon /> },
    { name: 'Education', icon: <SchoolIcon /> },
    { name: 'Projects', icon: <WorkIcon /> },
    { name: 'Contact', icon: <ContactMailIcon /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.name.toLowerCase());
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ 
      width: 250, 
      backgroundColor: 'rgba(10, 5, 32, 0.95)', 
      height: '100%',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        mb: 4
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ARUN E
        </Typography>
      </Box>
      <List sx={{ width: '100%' }}>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            onClick={() => scrollToSection(item.name)}
            sx={{ 
              py: 2,
              mb: 1,
              borderRadius: '0 30px 30px 0',
              width: '90%',
              backgroundColor: activeSection === item.name.toLowerCase() 
                ? 'rgba(106, 61, 232, 0.2)' 
                : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
              },
              transition: 'all 0.3s ease',
              position: 'relative',
              '&::before': activeSection === item.name.toLowerCase() ? {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(to bottom, #6a3de8, #00d4ff)',
                borderRadius: '0 2px 2px 0'
              } : {}
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              color: activeSection === item.name.toLowerCase() ? '#00d4ff' : 'white'
            }}>
              <Box sx={{ mr: 2 }}>{item.icon}</Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{item.name}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: scrolled ? 'rgba(10, 5, 32, 0.85)' : 'transparent',
          boxShadow: scrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none',
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(106, 61, 232, 0.1)' : 'none',
        }}
        elevation={scrolled ? 0 : 0}
      >
        <Toolbar sx={{ py: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #6a3de8, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: 1,
                mr: 4
              }}
              className="neon-text"
            >
              ARUN ESWARRAMURTHY
            </Typography>
          </motion.div>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  color: '#00d4ff',
                  transform: 'rotate(180deg)',
                },
                transition: 'all 0.5s ease',
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', ml: 'auto' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Button 
                    onClick={() => scrollToSection(item.name)}
                    sx={{ 
                      color: activeSection === item.name.toLowerCase() ? '#00d4ff' : 'white', 
                      mx: 1,
                      px: 2,
                      position: 'relative',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        transform: 'translateY(-3px)',
                        '&::after': {
                          width: '100%',
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: activeSection === item.name.toLowerCase() ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(to right, #6a3de8, #00d4ff)',
                        transition: 'width 0.3s ease'
                      },
                      transition: 'all 0.3s ease',
                    }}
                    startIcon={item.icon}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            borderLeft: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar />
    </motion.div>
  );
};

export default Navbar;