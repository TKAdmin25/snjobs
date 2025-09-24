import { IconBuilding } from "../../components/icon/IconBuilding";
import { IconGroup } from "../../components/icon/IconGroup";

export const CALLS_TO_ACTION = [
  {
    title: "Find qualified candidates!",
    description:
      "Search our database of ServiceNow candidates from all around the world",
    link: { label: "Find Candidates", href: "#" },
    tag: {
      label: "employers",
      icon: {
        element: IconBuilding,
        props: { size: 20, strokeWidth: 2 }
      }
    }
  },
  {
    title: "Create your candidate profile",
    description:
      "Sign up as a candidate and have companies reach out to you directly with opportunities!",
    link: { label: "Create Profile", href: "#" },
    tag: {
      label: "candidates",
      icon: {
        element: IconGroup,
        props: { size: 20, strokeWidth: 2 }
      }
    }
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Sign up and complete your candidate profile",
    description:
      "Complete your online profile in just a few minutes, and enter your ServiceNow experience and any certifications you may have."
  },
  {
    title: "Your profile gets featured to companies",
    description:
      "We feature your profile to both ServiceNow customers as well as partners, with a simple to use interface for finding the right candidates."
  },
  {
    title: "Receive offers. Get hired.",
    description:
      "We try not to get in the way. We connect companies with candidates via email while protecting any personal information of the candidate."
  }
];
