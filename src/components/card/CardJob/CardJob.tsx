import type { jobs } from "@prisma/client";
import { JobTrait } from "./JobTrait";
import UtilFormat from "@/lib/util/UtilFormat";
import { IconClock } from "@/components/icon/IconClock";
import { IconSuitcase } from "@/components/icon/IconSuitcase";
import { IconDollar } from "@/components/icon/IconDollar";

export const CardJob = ({ job }: { job: jobs }) => {
  return (
    <a
      href={`/jobs/${job.id}/${job.slug}`}
      className="flex items-start gap-4 p-4 border border-solid border-black/15"
    >
      <img
        className="w-12 h-12 object-cover"
        src={job.thumbnail ?? ""}
        alt=""
      />
      <div>
        <h5 className="text-primary-dark text-lg">{job.title}</h5>
        <p className="mb-1">
          <span className="text-primary-dark">{job.company}</span>{" "}
          <span className="text-muted w-full break-words">
            - {job.location}
          </span>
        </p>
        <div>
          <JobTrait value={UtilFormat.dateAsTimeAgo(job.posted_on)}>
            <IconClock className="inline -mt-1" size={15} strokeWidth={2.5} />
          </JobTrait>
          <JobTrait value={job.schedule_type}>
            <IconSuitcase
              className="inline -mt-1"
              size={15}
              strokeWidth={2.5}
            />
          </JobTrait>
          <JobTrait value={job.salary}>
            <IconDollar
              className="inline -mt-1 -mr-1"
              size={15}
              strokeWidth={2.5}
            />
          </JobTrait>
        </div>
      </div>
    </a>
  );
};
