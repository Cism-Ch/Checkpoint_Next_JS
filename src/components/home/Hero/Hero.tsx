import { IconBrandGithub, IconBrandLinkedin, IconChevronDown } from '@tabler/icons-react';
import { Button, Group, Text, Title, ActionIcon, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import type { MantineGradient } from '@/src/types/ui';
import classes from './Hero.module.css';
import { Dots } from './Dots';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const titleGradient: MantineGradient = {
    from: 'pink',
    to: 'yellow',
    deg: 45
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={classes.container} data-testid="hero-container" style={{ alignContent: 'center' }}>
      <div className={classes.overlayTop} />
      <div className={classes.overlayBottom} />
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* Titre principal avec un dégradé de couleur */}
          <Title
            className={classes.title}
            data-testid="hero-title"
            style={{
              // Application d'un dégradé de couleur au texte
              color: `linear-gradient(${titleGradient.deg}deg, ${titleGradient.from}, ${titleGradient.to})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'color',
              
            }}
          >
            Hello, I'm a <span className={classes.highlight}>Full Stack</span> Developer
          </Title>
          
          {/* Description du profil avec adaptation pour mobile */}
          <Text className={classes.text} data-testid="hero-text" c="white" pl={!isMobile ? 15 : 0}>
            Passionné par le développement web et les nouvelles technologies. Je crée des
            applications web modernes et performantes.
          </Text>

          {/* Groupe de boutons pour les liens sociaux */}
          <Group className={classes.controls} align="center" justify="flex-start" gap="md" wrap="wrap" pl={!isMobile ? 15 : 0}>
            {/* Bouton GitHub avec icône */}
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="filled"
              className={classes.button}
              leftSection={<IconBrandGithub size={30} />}
            >
              GitHub
            </Button>
            {/* Bouton LinkedIn avec icône */}
            <Button
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="white"
              className={classes.button}
              leftSection={<IconBrandLinkedin size={30} />}
            >
              LinkedIn
            </Button>
          </Group>
        </div>
        <div className={classes.imageWrapper}>
          <img
            src="https://i.pinimg.com/736x/a5/87/a6/a587a67e8b01d87db5e074daafdd81d9.jpg"
            alt="Profile"
            className={classes.image}
            data-testid="hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      <Tooltip label="Scroll vers le bas" >
        <ActionIcon
          variant="transparent"
          size="xl"
          className={classes.scrollIndicator}
          onClick={scrollToContent}
          aria-label="Défiler vers le bas"
          
        >
          <IconChevronDown size={38} />
        </ActionIcon>
      </Tooltip>
    </div>
  );
}
