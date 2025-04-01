/**
 * Composant Contact - Affiche un formulaire de contact et des informations de contact
 * avec des animations et des effets visuels
 */
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

/**
 * Interface définissant la structure des informations de contact
 */
interface ContactInfo {
  icon: typeof IconMail | typeof IconPhone | typeof IconMapPin;  // Type d'icône à afficher
  title: string;                                                // Titre de l'info de contact
  content: string;                                              // Contenu/valeur de l'info
  link: string;                                                 // Lien associé (email, tel, map)
  ariaLabel?: string;                                           // Label d'accessibilité
}

/**
 * Tableau des informations de contact à afficher
 * Chaque entrée génère une carte dans la section de contact
 */
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

/**
 * Interface définissant la structure du formulaire de contact
 */
interface ContactFormValues {
  name: string;     // Nom de l'utilisateur
  email: string;    // Email de l'utilisateur
  subject: string;  // Sujet du message
  message: string;  // Corps du message
}

/**
 * Composant principal de la section Contact
 */
export default function Contact() {
  /**
   * Configuration du formulaire avec validation
   * Utilise le hook useForm de Mantine pour gérer les valeurs et la validation
   */
  const form = useForm<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      // Règles de validation pour chaque champ
      name: (value) =>
        value.trim().length < 2 ? 'Le nom doit contenir au moins 2 caractères' : null,
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Email invalide' : null),
      subject: (value) =>
        value.trim().length < 2 ? 'Le sujet doit contenir au moins 2 caractères' : null,
      message: (value) =>
        value.trim().length < 10 ? 'Le message doit contenir au moins 10 caractères' : null,
    },
  });

  /**
   * Gestionnaire de soumission du formulaire
   * Simule l'envoi et affiche une notification de succès ou d'erreur
   * @param _values - Valeurs du formulaire (non utilisées actuellement)
   */
  const handleSubmit = form.onSubmit(async (_values) => {
    try {
      // TODO: Implement form submission
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });
      
      // Affichage d'une notification de succès
      notifications.show({
        title: 'Message envoyé!',
        message: 'Nous vous répondrons dans les plus brefs délais.',
        color: 'green',
      });
      form.reset();  // Réinitialisation du formulaire après envoi
    } catch (error) {
      // Affichage d'une notification d'erreur en cas d'échec
      notifications.show({
        title: 'Erreur',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
        color: 'red',
      });
    }
  });

  return (
    <div className={classes.container}>
      {/* Effets visuels : lignes de scan et dégradés en haut/bas */}
      <div className={classes.scanlines} />
      <div className={classes.overlayTop} />
      <div className={classes.overlayBottom} />
      
      <div className={classes.content}>
        {/* Titre de la section avec effet néon */}
        <Title className={classes.title} order={2} mx="60px" >
          Me Contacter
        </Title>

        {/* Conteneur avec animations - utilise Framer Motion */}
        <motion.div
          variants={staggerContainer}  // Animation séquentielle pour les enfants
          initial="initial"            // État initial
          whileInView="animate"        // Animation quand visible dans le viewport
          viewport={{ once: true }}    // Ne joue l'animation qu'une fois
        >
          {/* Grille des cartes d'information de contact */}
          <div className={classes.infoCards}>
            {/* Génération des cartes à partir du tableau contactInfo */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}  // Animation d'apparition du bas vers le haut
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.ariaLabel}
                className={classes.card}
                style={{ textDecoration: 'none' }}
              >
                <Group>
                  {/* Icône dynamique basée sur le type spécifié */}
                  <info.icon size={rem(36)} stroke={1.5} className={classes.cardContent} />
                  <div style={{ width: rem(200) }}>
                    {/* Titre et contenu de l'information de contact */}
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

          {/* Formulaire de contact avec animation */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className={classes.form}
          >
            {/* Overlay affiché pendant la soumission */}
            <LoadingOverlay visible={form.submitting} />
            
            {/* Groupe de deux champs côte à côte (nom et email) */}
            <Group grow mb="md">
              <TextInput
                label="Nom"
                placeholder="Votre nom"
                description="2 caractères minimum"
                {...form.getInputProps('name')}  // Liaison avec le gestionnaire de formulaire
              />
              <TextInput
                label="Email"
                placeholder="votre@email.com"
                description="Format: exemple@domaine.com"
                {...form.getInputProps('email')}
              />
            </Group>

            {/* Champ sujet */}
            <TextInput
              label="Sujet"
              placeholder="Sujet de votre message"
              description="2 caractères minimum"
              mb="md"
              {...form.getInputProps('subject')}
            />

            {/* Zone de texte pour le message */}
            <Textarea
              label="Message"
              placeholder="Votre message"
              description="10 caractères minimum"
              minRows={4}
              maxRows={8}
              autosize  // S'adapte automatiquement à la taille du contenu
              mb="xl"
              {...form.getInputProps('message')}
            />

            {/* Bouton d'envoi centré */}
            <Group justify="center">
              <Button
                type="submit"
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}  // Dégradé de couleur
                loading={form.submitting}  // Affiche un état de chargement pendant la soumission
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
