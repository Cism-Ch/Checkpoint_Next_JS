/**
 * ProjectFilters Component
 *
 * Composant de filtrage des projets permettant:
 * - La sélection de catégories via SegmentedControl
 * - La recherche textuelle via TextInput
 *
 * Utilise les composants Mantine UI pour une interface cohérente
 */

import { IconSearch } from '@tabler/icons-react';
import { Group, SegmentedControl, TextInput } from '@mantine/core';
import { ProjectCategory, projectCategories } from '../../../types/project';

/**
 * Interface des props du composant ProjectFilters
 * @interface ProjectFiltersProps
 * @property {ProjectCategory | 'all'} category - Catégorie actuellement sélectionnée
 * @property {Function} setCategory - Fonction pour mettre à jour la catégorie
 * @property {string} search - Texte de recherche actuel
 * @property {Function} setSearch - Fonction pour mettre à jour le texte de recherche
 */
interface ProjectFiltersProps {
  category: ProjectCategory | 'all';
  setCategory: (value: ProjectCategory | 'all') => void;
  search: string;
  setSearch: (value: string) => void;
}

/**
 * Composant ProjectFilters
 * Gère l'interface de filtrage des projets
 *
 * @param {ProjectFiltersProps} props Les props du composant
 * @returns {JSX.Element} Interface de filtrage avec catégories et recherche
 */
export default function ProjectFilters({
  category,
  setCategory,
  search,
  setSearch,
}: ProjectFiltersProps) {
  return (
    <Group justify="space-between" wrap="nowrap" gap="xl">
      {/* Contrôle de sélection des catégories */}
      <SegmentedControl
        value={category}
        onChange={(value) => setCategory(value as ProjectCategory | 'all')}
        data={[{ label: 'Tous', value: 'all' }, ...projectCategories]}
      />

      {/* Champ de recherche avec icône */}
      <TextInput
        placeholder="Rechercher un projet..."
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        leftSection={<IconSearch size={16} />}
        style={{ maxWidth: 300 }}
      />
    </Group>
  );
}
