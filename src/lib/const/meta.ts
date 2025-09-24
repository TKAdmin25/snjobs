type PageMetaTemplate = {
  title: string;
  description: string;
  keywords: string;
};
type PageDynamicMetaTemplate = {
  title: (...args: string[]) => string;
  description: (...args: string[]) => string;
  keywords: (...args: string[]) => string;
};
type PageMeta = {
  index: PageMetaTemplate;
  candidates: PageMetaTemplate;
  employers: PageMetaTemplate;
  employer: PageDynamicMetaTemplate;
  jobs: PageMetaTemplate;
  job: PageDynamicMetaTemplate;
  login: PageMetaTemplate;
  register: PageMetaTemplate;
  notFound: PageMetaTemplate;
  forgot: PageMetaTemplate;
};

export const meta: PageMeta = {
  index: {
    title: "SNJobs | ServiceNow Jobs & Careers",
    description:
      "Discover the latest ServiceNow jobs and career opportunities worldwide. Search for ServiceNow developer, administrator, architect, and consultant roles. Apply to full-time, part-time, remote, and contract positions in the ServiceNow ecosystem.",
    keywords:
      "ServiceNow jobs, ServiceNow careers, ServiceNow developer jobs, ServiceNow administrator jobs, ServiceNow consultant jobs, ServiceNow architect jobs, remote ServiceNow jobs"
  },
  candidates: {
    title: "For Candidates | Find Your Next ServiceNow Job",
    description:
      "Explore exclusive ServiceNow job opportunities tailored for professionals. Apply to roles that match your skills, get noticed by top employers, and grow your ServiceNow career.",
    keywords:
      "ServiceNow candidates, ServiceNow careers, ServiceNow job search, ServiceNow professionals, ServiceNow job applications"
  },
  employers: {
    title: "Employers on SNJobs | Discover Companies Hiring in ServiceNow",
    description:
      "Browse a list of employers hiring ServiceNow professionals. Learn more about their company profiles, open roles, and workplace culture to find the right fit for your career.",
    keywords:
      "ServiceNow employers, ServiceNow companies, ServiceNow hiring companies, ServiceNow company profiles, ServiceNow careers"
  },
  employer: {
    title: (name: string) => `${name} | ServiceNow Jobs`,
    description: (name: string) =>
      `Learn more about ${name}, an employer in the ServiceNow ecosystem. Explore their company profile, open positions, and workplace culture.`,
    keywords: (name: string) =>
      `${name}, ServiceNow employer, ServiceNow jobs at ${name}, ${name} careers`
  },
  jobs: {
    title: "Browse ServiceNow Jobs | SNJobs",
    description:
      "Search and filter ServiceNow job listings from companies worldwide. Find remote, on-site, and hybrid ServiceNow roles, including developer, admin, consultant, and architect positions.",
    keywords:
      "Browse ServiceNow jobs, ServiceNow job board, ServiceNow job listings, ServiceNow remote jobs, ServiceNow careers"
  },
  job: {
    title: (title: string, company: string) =>
      `${title} at ${company} | ServiceNow Jobs`,
    description: (title: string, company: string) =>
      `Apply for ${title} at ${company}. Discover job requirements, responsibilities, and career opportunities in the ServiceNow ecosystem.`,
    keywords: (title: string, company: string) =>
      `${title}, ${company}, ServiceNow jobs, ServiceNow careers, ${title} ServiceNow`
  },
  login: {
    title: "Login | SNJobs",
    description:
      "Access your SNJobs account to apply for jobs, save searches, and manage your ServiceNow career opportunities.",
    keywords:
      "ServiceNow jobs login, SNJobs login, candidate login, ServiceNow job portal"
  },
  register: {
    title: "Create Account | SNJobs",
    description:
      "Register for a free SNJobs account and start applying to the latest ServiceNow jobs. Connect with employers and build your ServiceNow career.",
    keywords:
      "ServiceNow jobs register, SNJobs signup, ServiceNow career account, join ServiceNow job board"
  },
  notFound: {
    title: "Page Not Found | SNJobs",
    description:
      "The page you are looking for could not be found. Return to SNJobs to discover the latest ServiceNow jobs, employers, and career opportunities.",
    keywords: "404, page not found, ServiceNow jobs, SNJobs, ServiceNow careers"
  },
  forgot: {
    title: "Forgot Password | SNJobs",
    description:
      "Reset your SNJobs account password to regain access to ServiceNow job applications, saved searches, and career opportunities.",
    keywords:
      "SNJobs forgot password, reset SNJobs password, ServiceNow jobs account recovery"
  }
};
