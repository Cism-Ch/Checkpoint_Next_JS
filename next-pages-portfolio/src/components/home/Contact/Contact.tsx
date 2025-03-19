import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Button,
  Group,
  LoadingOverlay,
  Text,
  Textarea,
  TextInput,
  Title,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
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
      // TODO: Implement form submission
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
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
    <div className={classes.container}>
      <div className={classes.scanlines} />
      <div className={classes.overlayTop} />
      <div className={classes.overlayBottom} />
      
      <div className={classes.content}>
        <Title className={classes.title} order={2} mx="60px" >
          Me Contacter
        </Title>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className={classes.infoCards}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.ariaLabel}
                className={classes.card}
                style={{ textDecoration: 'none' }}
              >
                <Group>
                  <info.icon size={rem(36)} stroke={1.5} className={classes.cardContent} />
                  <div style={{ width: rem(200) }}>
                    <Text className={classes.cardContent} fw={500}>
                      {info.title}
                    </Text>
                    <Text size="lg" className={classes.cardContent} opacity={0.7}>
                      {info.content}
                    </Text>
                  </div>
                </Group>
              </motion.a>
            ))}
          </div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <LoadingOverlay visible={form.submitting} />
            
            <Group grow mb="md">
              <TextInput
                label="Nom"
                placeholder="Votre nom"
                description="2 caractères minimum"
                {...form.getInputProps('name')}
              />
              <TextInput
                label="Email"
                placeholder="votre@email.com"
                description="Format: exemple@domaine.com"
                {...form.getInputProps('email')}
              />
            </Group>

            <TextInput
              label="Sujet"
              placeholder="Sujet de votre message"
              description="2 caractères minimum"
              mb="md"
              {...form.getInputProps('subject')}
            />

            <Textarea
              label="Message"
              placeholder="Votre message"
              description="10 caractères minimum"
              minRows={4}
              maxRows={8}
              autosize
              mb="xl"
              {...form.getInputProps('message')}
            />

            <Group justify="center">
              <Button
                type="submit"
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                loading={form.submitting}
              >
                {form.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </Group>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
