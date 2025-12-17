import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import {
  Button,
  Container,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Dots } from '../Hero/Dots';
import ScrollAnimation from '../../animations/ScrollAnimation';
import classes from './Contact.module.css';

interface ContactInfo {
  icon: typeof IconMail | typeof IconPhone | typeof IconMapPin;
  title: string;
  content: string;
  link: string;
  ariaLabel?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: IconMail,
    title: 'Email',
    content: 'contact@votremail.com',
    link: 'mailto:contact@votremail.com',
    ariaLabel: 'Envoyer un email',
  },
  {
    icon: IconPhone,
    title: 'Téléphone',
    content: '+33 6 XX XX XX XX',
    link: 'tel:+33600000000',
    ariaLabel: 'Appeler',
  },
  {
    icon: IconMapPin,
    title: 'Localisation',
    content: 'Paris, France',
    link: 'https://maps.google.com',
    ariaLabel: 'Voir sur Google Maps',
  },
];

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const form = useForm<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? 'Le nom doit contenir au moins 2 caractères' : null,
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Email invalide' : null),
      subject: (value) =>
        value.trim().length < 2 ? 'Le sujet doit contenir au moins 2 caractères' : null,
      message: (value) =>
        value.trim().length < 10 ? 'Le message doit contenir au moins 10 caractères' : null,
    },
  });

  const handleSubmit = form.onSubmit(async (_values) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      notifications.show({
        title: 'Message envoyé!',
        message: 'Nous vous répondrons dans les plus brefs délais.',
        color: 'green',
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Erreur',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
        color: 'red',
      });
    }
  });

  return (
    <div className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <Container size="lg">
        <ScrollAnimation direction="up">
          <Title className={classes.title}>Me Contacter</Title>
          <Text className={classes.description} c="dimmed">
            N'hésitez pas à me contacter pour toute question ou proposition de projet.
          </Text>
        </ScrollAnimation>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <ScrollAnimation direction="right" delay={0.2}>
            <Stack gap="xl">
              <Stack gap="md">
                {contactInfo.map((info, index) => (
                  <Group key={index} wrap="nowrap">
                    <ThemeIcon size={40} radius="md" className={classes.control}>
                      <info.icon size={24} stroke={1.5} />
                    </ThemeIcon>
                    <div>
                      <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
                        {info.title}
                      </Text>
                      <Text
                        component="a"
                        href={info.link}
                        className={classes.social}
                        aria-label={info.ariaLabel}
                      >
                        {info.content}
                      </Text>
                    </div>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <LoadingOverlay visible={form.submitting} />
              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput
                    label="Nom"
                    placeholder="Votre nom"
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="votre@email.com"
                    {...form.getInputProps('email')}
                  />
                </SimpleGrid>

                <TextInput
                  mt="md"
                  label="Sujet"
                  placeholder="Sujet de votre message"
                  {...form.getInputProps('subject')}
                />

                <Textarea
                  mt="md"
                  label="Message"
                  placeholder="Votre message"
                  minRows={4}
                  {...form.getInputProps('message')}
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit" className={classes.control}>
                    Envoyer le message
                  </Button>
                </Group>
              </div>
            </form>
          </ScrollAnimation>
        </SimpleGrid>
      </Container>
    </div>
  );
}
