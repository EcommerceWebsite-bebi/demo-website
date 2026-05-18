interface DailyHeroProps {
	title: string;
	description: string;
	metaItems: string[];
	heroLabel: string;
	kicker: string;
}

export default function DailyHero({
	title,
	description,
	metaItems,
	heroLabel,
	kicker,
}: DailyHeroProps) {
	return (
		<section className="rounded-md border border-gray-200 bg-white p-8 md:p-10">
			<div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase text-gray-600">
				{kicker}
			</div>
			<h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
			<p className="mt-4 max-w-2xl text-sm text-gray-600">{description}</p>
			<div className="mt-6 flex flex-wrap gap-2">
				{metaItems.map((item) => (
					<span
						key={item}
						className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold uppercase text-gray-600"
					>
						{item}
					</span>
				))}
			</div>
			<div className="mt-8 aspect-[16/9] w-full rounded-md border border-gray-200 bg-gray-100">
				<div className="flex h-full items-end p-4 text-xs font-semibold uppercase text-gray-500">
					{heroLabel}
				</div>
			</div>
		</section>
	);
}
