import type { companies } from "@prisma/client";

export const CardCompany = ({ company }: { company: companies }) => {
  return (
    <a
      className="border border-solid border-black/15 flex items-start p-4 gap-4 group cursor-pointer"
      href={`/employers/${company.slug}`}
    >
      <img
        className="w-12 h-12 object-contain"
        src={
          !!company.thumbnail
            ? `/uploads/${company.thumbnail}`
            : "company-default-logo.webp"
        }
        alt={company.name}
      />
      <div className="text-primary-dark">
        <h3 className="font-semibold">{company.name}</h3>
        <p className="group-hover:text-blue-600">{company.industry}</p>
      </div>
    </a>
  );
};
