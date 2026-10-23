# Security Policy

## Supported Versions

Security updates are provided for the actively maintained version of this project.

| Version | Supported |
| ------- | --------- |
| `main` (latest production release) | Yes |
| Older releases and unmaintained branches | No |

This project uses Next.js and its associated dependencies. Security updates may require upgrading Next.js, React, Node.js, or other dependencies to patched versions.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately through GitHub's **Private Vulnerability Reporting** feature, if enabled for this repository.

Please do not disclose exploitable vulnerabilities publicly before they have been investigated and addressed.

When reporting a vulnerability, include:

- A description of the vulnerability and its potential impact.
- The affected component, route, dependency, or configuration.
- Steps to reproduce the issue.
- Proof-of-concept details, screenshots, or logs when applicable.

Please do not include real credentials, access tokens, personal information, or other sensitive data in your report.

## Response and Disclosure

Reports will be reviewed as soon as reasonably possible. The reporter will be informed whether the issue is accepted, requires additional information, or is outside the scope of this project.

If a vulnerability is confirmed, remediation may include code changes, dependency upgrades, security configuration updates, and a patched release or deployment.

Response and remediation timelines depend on the severity, complexity, and available information. No fixed response-time guarantee is provided.

## Security Maintenance

The project maintainer aims to:

- Monitor relevant security advisories for Next.js, React, Node.js, and project dependencies.
- Apply available security patches and review dependency updates.
- Review HTTP security headers and Content Security Policy (CSP) configuration.
- Avoid committing credentials, private keys, API tokens, or other secrets to the repository.
- Use automated dependency and code security checks where available.

Security headers and automated scanners are defense-in-depth measures. They do not guarantee that the application is free from vulnerabilities.
