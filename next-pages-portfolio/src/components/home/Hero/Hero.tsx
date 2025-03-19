import { IconBrandGithub, IconBrandLinkedin, IconChevronDown } from '@tabler/icons-react';
import { Button, Group, Text, Title, ActionIcon, Tooltip } from '@mantine/core';
import type { MantineGradient } from '@/src/types/ui';
import classes from './Hero.module.css';
import { Dots } from './Dots';

export default function Hero() {
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
    <div className={classes.container} data-testid="hero-container">
      <div className={classes.overlayTop} />
      <div className={classes.overlayBottom} />
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title
            className={classes.title}
            data-testid="hero-title"
            style={{
              background: `linear-gradient(${titleGradient.deg}deg, ${titleGradient.from}, ${titleGradient.to})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              
            }}
          >
            Hello, I'm a <span className={classes.highlight}>Full Stack</span> Developer
          </Title>
          <Text className={classes.text} data-testid="hero-text" c="white">
            Passionné par le développement web et les nouvelles technologies. Je crée des
            applications web modernes et performantes.
          </Text>
          <Group className={classes.controls} align="center" justify="flex-start" gap="md" wrap="wrap">
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
              className={classes.button}
              leftSection={<IconBrandGithub size={20} />}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
              className={classes.button}
              leftSection={<IconBrandLinkedin size={20} />}
            >
              LinkedIn
            </Button>
          </Group>
        </div>
        <div className={classes.imageWrapper}>
          <img
            src="https://placehold.co/500x500/png"
            alt="Profile"
            className={classes.image}
            data-testid="hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      <Tooltip label="Scroll vers le bas">
        <ActionIcon
          variant="transparent"
          size="xl"
          className={classes.scrollIndicator}
          onClick={scrollToContent}
          aria-label="Défiler vers le bas"
        >
          <IconChevronDown size={32} />
        </ActionIcon>
      </Tooltip>
    </div>
  );
}
