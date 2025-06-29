// components/WorkEntry.tsx

type WorkEntryProps = {
    title: string;
    dateRange: string;
    bullets: string[];
};

export default function WorkEntry({
    title,
    dateRange,
    bullets,
}: WorkEntryProps) {
    return (
        <div>
            <h3 className="text-xl font-medium">
                {title}{' '}
                <span className="text-sm text-[#cfa5af99]">({dateRange})</span>
            </h3>
            <ul className="text-[#cfa5af99] list-disc ml-5 mt-1 space-y-1">
                {bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}