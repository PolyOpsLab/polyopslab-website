import { cn } from "@/lib/utils";
import {
  IconBrandDribbbleFilled,
  IconBrandReact,
  IconBrandNodejs,
  IconCode,
  IconCloud,
  IconBrandAppstore,
  IconChartAreaLineFilled,
  IconTournament,
} from "@tabler/icons-react";

export default function FeaturesOne() {
  const features = [
    {
      title: "Design Engineering (UI)",
      description:
        "We craft intuitive, modern & conversion-focused designs that turn ideas into delightful user experiences.",
      icon: <IconBrandDribbbleFilled />,
    },
    {
      title: "Frontend Engineering",
      description:
        "We build fast, responsive, and pixel-perfect interfaces that feel smooth on every device.",
      icon: <IconBrandReact />,
    },
    {
      title: "Backend Engineering",
      description:
        "We architect secure, scalable, and high-performance backend systems that power your product reliably.",
      icon: <IconBrandNodejs />,
    },
    {
      title: "Full-Stack Engineering",
      description:
        "We handle the entire product lifecycle—design, frontend, backend, and infrastructure—so you can ship faster with confidence.",
      icon: <IconCode />,
    },
    {
      title: "DevOps Engineering",
      description:
        "We automate deployments, optimize performance, and ensure your systems run smoothly with zero downtime.",
      icon: <IconCloud />,
    },
    {
      title: "Mobile Applications",
      description:
        "We develop high-quality, cross-platform mobile apps that deliver a seamless experience on both iOS and Android.",
      icon: <IconBrandAppstore />,
    },
    {
      title: "Business Analyst",
      description:
        "We translate your business needs into clear, actionable requirements that drive product success.",
      icon: <IconChartAreaLineFilled />,
    },
    {
      title: "AI Agents",
      description:
        "We build intelligent, autonomous AI agents that automate workflows, boost productivity, and scale your operations.",
      icon: <IconTournament />,
    },
  ];

  return (
    <div className="mt-10" id="solution">
      <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl">
          The Solution We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  relative z-10 py-10 lg:max-w-6xl px-10 md:px-0 lg:mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
