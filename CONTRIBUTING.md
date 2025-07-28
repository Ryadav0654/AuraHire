
<div align="center">

# 👋 Welcome to AuraHire!

[![GSSOC'25](https://img.shields.io/badge/GSSOC-2025-blueviolet)](https://gssoc.girlscript.tech/)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

</div>

Thank you for contributing to our open-source project! These guidelines will help you navigate our project setup.

## 🚀 Project Setup

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR-USERNAME/aurahire.git
cd aurahire
```
> Replace `YOUR-USERNAME` with your GitHub username.

### 2. Install Dependencies
> make sure you have `pnpm` installed globally, if not use `npm install -g pnpm`
```bash
pnpm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Fill in placeholder values
```

### 4. Start Development
```bash
# Run all workspaces
pnpm run dev

# Or run specific workspace
pnpm run dev --filter=web
```

<!-- ## 🐋 Docker Development
```bash
# Build and start containers
docker compose up --build

# Access services:
# - Web: http://localhost:3000
# - API: http://localhost:5000
# - MongoDB: mongodb://localhost:27017
``` -->

## 🔍 Finding Issues
Look for these labels in our [Issues Section](https://github.com/yourusername/aurahire/issues):
- `good first issue` - Perfect for beginners
- `gssoc25` - Specially tagged for GSSOC
- `web` - Frontend (Next.js) tasks
- `api` - Backend (Express) tasks
- `docker` - Containerization tasks

## 🛠 Development Workflow

### Turborepo Conventions
1. Workspace-specific commands:
   ```bash
   # Run command in web workspace
   npm run dev --workspace=web
   
   # Run command in api workspace
   npm run dev --workspace=api
   ```

2. Shared packages:
   - Reusable UI components in `packages/ui`
   - Config files in `packages/config`

### Branch Naming
Use format: `[type]/[workspace]-[description]`  
Example: `feat/web-resume-upload`

| Type       | Description                  |
|------------|------------------------------|
| `feat`     | New features                 |
| `fix`      | Bug fixes                    |
| `docker`   | Docker improvements          |
| `api`      | Backend-specific changes     |
| `web`      | Frontend-specific changes    |

### Commit Message Format
```bash
[type](scope): Short description

Detailed explanation. Fixes #issue-number
```
Example:
```bash
feat(web): Add application dashboard

- Created Kanban view component
- Added drag-and-drop functionality
- Integrated with API service

Fixes #42
```

## ✅ PR Review Checklist
- [ ] Works with Turborepo build system
- [ ] Docker compatibility maintained
- [ ] Environment variables documented
- [ ] No linting errors (run `pnpm run lint`)

## 🆘 Need Help?
- Join our [Discord Channel](https://discord.gg/usfeQqJZ8w) 
- Tag maintainers (@Ryadav0654) in issues

## 🎉 Contribution Recognition
We value every contribution! As part of GSSOC'25, contributors will receive:
- Recognition in our contributors hall of fame

## 📝 Additional Notes
- Ensure you have the latest version of Node.js and Docker installed.
- Regularly pull updates from the main repository to stay in sync.
- If you have any questions or need further assistance, don't hesitate to reach out to the maintainers.

