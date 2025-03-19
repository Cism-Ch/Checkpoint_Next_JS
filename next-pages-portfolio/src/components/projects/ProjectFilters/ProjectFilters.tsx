import { IconSearch } from '@tabler/icons-react';
import { Group, SegmentedControl, TextInput } from '@mantine/core';
import { ProjectCategory, projectCategories } from '../../../types/project';

interface ProjectFiltersProps {
  category: ProjectCategory | 'all';
  setCategory: (value: ProjectCategory | 'all') => void;
  search: string;
  setSearch: (value: string) => void;
}

export default function ProjectFilters({
  category,
  setCategory,
  search,
  setSearch,
}: ProjectFiltersProps) {
  return (
    <Group justify="space-between" wrap="nowrap" gap="xl">
      <SegmentedControl
        value={category}
        onChange={(value) => setCategory(value as ProjectCategory | 'all')}
        data={[{ label: 'Tous', value: 'all' }, ...projectCategories]}
      />

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
