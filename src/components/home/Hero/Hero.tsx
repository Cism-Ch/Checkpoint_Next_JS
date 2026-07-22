import { IconBrandGithub, IconBrandLinkedin, IconChevronDown } from '@tabler/icons-react';
import { Button, Group, Text, Title, ActionIcon, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Hero.module.css';
import { Dots } from './Dots';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={classes.container} data-testid="hero-container">
      <div className={classes.overlayTop} />
      <div className={classes.overlayBottom} />
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <div className={classes.content}>
          {/* Titre principal moderne avec typographie Inter & effet dégradé */}
          <Title
            className={classes.title}
            data-testid="hero-title"
          >
            Hello, I'm a <span className={classes.highlight}>Full Stack</span> Developer
          </Title>
          
          {/* Description responsive avec contraste WCAG AAA */}
          <Text className={classes.text} data-testid="hero-text" pl={!isMobile ? 15 : 0}>
            Passionné par le développement web et les nouvelles technologies. Je crée des
            applications web modernes, accessibles et performantes.
          </Text>

          {/* Groupe d'actions sociales avec micro-interactions */}
          <Group className={classes.controls} align="center" justify="flex-start" gap="md" wrap="wrap" pl={!isMobile ? 15 : 0}>
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="filled"
              className={classes.button}
              leftSection={<IconBrandGithub size={26} />}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="default"
              className={classes.buttonSecondary}
              leftSection={<IconBrandLinkedin size={26} />}
            >
              LinkedIn
            </Button>
          </Group>
        </div>
        <div className={classes.imageWrapper}>
          <img
            src="https://i.pinimg.com/736x/a5/87/a6/a587a67e8b01d87db5e074daafdd81d9.jpg"
            alt="Developer Profile"
            className={classes.image}
            data-testid="hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      <Tooltip label="Défiler vers le bas">
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
