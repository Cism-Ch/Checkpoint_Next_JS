import { mkdir, writeFile, copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";

// Utilise par défaut le pseudo demandé, tout en laissant la possibilité
// de le surcharger via l'environnement.
const username = process.env.GITHUB_USERNAME ?? "Cism-Ch";
const token = process.env.GITHUB_TOKEN; // optionnel pour + de quota

async function main() {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : undefined
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();

  const minimal = data.map((r) => ({
    name: r.name,
    fullName: r.full_name,
    url: r.html_url,
    homepage: r.homepage,
    description: r.description,
    topics: r.topics,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    license: r.license?.spdx_id,
    updatedAt: r.updated_at,
  }));

  const output = {
    generatedAt: new Date().toISOString(),
    username,
    totalRepos: minimal.length,
    repositories: minimal,
  };

  // S'assure que le dossier cible existe
  await mkdir("data", { recursive: true });

  // Backup de l'ancien fichier s'il existe
  const targetFile = "data/repos.json";
  const backupFile = `data/repos.backup.${Date.now()}.json`;
  
  try {
    await access(targetFile, constants.F_OK);
    await copyFile(targetFile, backupFile);
    console.log(`✓ Backup créé: ${backupFile}`);
  } catch {
    // Pas de fichier existant, pas de backup nécessaire
  }

  await writeFile(targetFile, JSON.stringify(output, null, 2), "utf8");
  console.log(`✓ ${minimal.length} repos écrits dans ${targetFile}`);
  console.log(`✓ Généré le: ${output.generatedAt}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});