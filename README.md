# SNJobs Re-engineering Project

---

## 📄 Project Overview

This project is a complete re-engineering of the SNJobs.com website. The primary goal is to migrate the legacy PHP codebase to a modern, high-performance technology stack. This first phase focuses exclusively on refreshing the codebase to improve its readability, scalability, and maintainability.

The existing database, a MySQL instance hosted on GoDaddy, remains the single source of truth for all job and user data. Future work will focus on implementing significant improvements, including SEO, performance optimizations, and design enhancements, once this migration is complete.

---

## 💻 Technology Stack

- **Astro**: Used as the foundational framework for its performance and static site capabilities.
- **React.js**: Integrated via dynamic islands for building interactive components where needed.
- **TypeScript**: Ensures type safety and improves code quality across the entire project.
- **Bun**: Serves as the high-speed JavaScript runtime and package manager.
- **Prisma**: Acts as the ORM (Object-Relational Mapper) for seamless and type-safe database access.
- **Netlify**: The chosen platform for hosting and continuous deployment.

---

## 🚀 Getting Started

To get the project up and running locally, follow these steps:

### ⚙️ Prerequisites

- Ensure you have **Bun** installed on your system.

### 📦 Installation

Clone the repository and install the project dependencies:

```bash
bun install
```

### 🔒 Database Configuration

This project connects directly to the production database. To ensure a secure connection, you must perform two critical steps:

1.  **Request Environment Variables:** You must obtain the `.env` file from the project lead. This file contains the necessary database credentials.
2.  **Whitelist Your IP Address:** To allow your local machine to connect to the remote database, you must add your public IP address to the "Remote Database Access" list in the GoDaddy cPanel.

The URL to manage the remote hosts is:
`https://243.223.167.72.host.secureserver.net:2083/cpsess5076651262/frontend/jupiter/sql/managehost.html`

---

## 📊 Prisma & Database Schema

⚠️ **DO NOT re-generate the Prisma schema with a `db pull` command.**

The `prisma/schema.prisma` file is the definitive **source of truth**. It has already been generated to perfectly match the current database structure.

All future schema changes must be done directly within this file. Prisma will then handle the migrations from the codebase to the database, ensuring consistency.

To apply changes to the database and create a new migration, use the following command:

```bash
bun prisma migrate dev
```

---

## ▶️ Running the Project

Once the prerequisites and configuration are complete, you can start the development server with:

```bash
bun dev
```
