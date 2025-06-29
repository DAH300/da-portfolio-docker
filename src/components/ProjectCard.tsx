// components/ProjectCard.tsx

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
  tags?: string[];
};

export default function ProjectCard({
  href,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-transparent hover:border-[#cfa5af55] hover:bg-[#cfa5af0a] transition-all duration-200 p-4"
    >
      <h3 className="text-xl font-medium text-[#CFA5AF] group-hover:text-white transition-colors duration-200">
        {title}
      </h3>
      <p className="text-[#cfa5af99] mt-1 group-hover:text-[#cfa5afdd] transition-colors duration-200">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#CFA5AF33] text-white px-2 py-1 rounded-full border border-[#CFA5AF88] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}