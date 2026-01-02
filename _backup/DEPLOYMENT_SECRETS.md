# CI/CD Secrets Configuration

Untuk menjalankan pipeline CI/CD, tambahkan secrets berikut di GitHub repository settings:

## Development Environment

- `DEV_SSH_KEY`: Private SSH key untuk akses ke server development
- `DEV_HOST`: IP atau hostname server development
- `DEV_USER`: Username SSH untuk server development

## Production Environment

- `PROD_SSH_KEY`: Private SSH key untuk akses ke server production
- `PROD_HOST`: IP atau hostname server production
- `PROD_USER`: Username SSH untuk server production

## Optional

- `SLACK_WEBHOOK_URL`: Webhook URL untuk notifikasi Slack (opsional)

## Cara menambahkan secrets:

1. Buka repository di GitHub
2. Settings → Secrets and variables → Actions
3. Klik "New repository secret"
4. Masukkan name dan value untuk setiap secret

## SSH Key Setup

Generate SSH key pair untuk deployment:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy
```

Copy public key ke server:

```bash
ssh-copy-id -i ~/.ssh/github_deploy.pub user@server
```

Copy private key ke GitHub secrets:

```bash
cat ~/.ssh/github_deploy
```
