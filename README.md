# Official Weond Templates

Modular starter templates for one-click deployment on [Weond](https://weond.com).

## Structure

Each template lives in its own isolated folder under `templates/<slug>/`:

```text
templates/
├── vite-react-starter/
│   ├── template.json
│   └── ...
├── nextjs-starter/
│   ├── template.json
│   └── ...
├── astro-portfolio/
│   ├── template.json
│   └── ...
└── static-landing/
    ├── template.json
    └── ...
```

## Adding a New Template

1. Create a new folder `templates/<your-slug>/`.
2. Add a `template.json` manifest with `slug`, `name`, `category`, `framework`, `tagline`, `description`, `installCommand`, `buildCommand`, `outputDir`, `tags`, and optional `envVars`.
3. Add your starter project files inside the same folder and push to `main`.

Weond automatically discovers every folder under `templates/` containing a valid `template.json` without affecting existing templates.
