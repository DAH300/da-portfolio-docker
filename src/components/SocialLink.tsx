// components/SocialLink.tsx

type SocialLinkProps = {
    href: string;
    name: string;
    Icon: React.ComponentType<{ className?: string }>;
}

export default function SocialLink({
    href,
    name,
    Icon,
}: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex items-center space-x-2 text-[#CFA5AF] hover:text-white transition-colors duration-200"
        >
            <Icon className="w-10 h-10" />
            <span className="text-base font-bold">{name}</span>
        </a>
    );
}