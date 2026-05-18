"use client";

interface CustomPreviewProps {
	previewUrl: string | null;
	style: string;
	size: string;
	baseColor: string;
	prompt: string;
}

export default function CustomPreview({
	previewUrl,
	style,
	size,
	baseColor,
	prompt,
}: CustomPreviewProps) {
	return (
		<div className="flex flex-col rounded-md border border-gray-200 bg-white p-8 shadow-sm">
			<div className="flex h-96 w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100">
				{previewUrl ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={previewUrl}
						alt="Preview"
						className="object-contain max-h-full w-full"
					/>
				) : (
					<div className="text-center text-gray-500">
						<div className="text-sm font-semibold uppercase">Preview</div>
						<div className="mt-1 text-sm text-gray-500">
							Your generated design will appear here.
						</div>
					</div>
				)}
			</div>

			<div className="mt-4 w-full">
				<h3 className="text-xs font-semibold uppercase text-gray-500">
					Design Details
				</h3>
				<div className="mt-2 text-sm text-gray-600">
					<p>
						<strong>Style:</strong> {style}
					</p>
					<p>
						<strong>Size:</strong> {size}
					</p>
					<p className="flex items-center gap-2">
						<strong>Base Color:</strong>{" "}
						<span
							className="w-4 h-4 inline-block"
							style={{ background: baseColor }}
						/>
					</p>
					<p className="mt-2">
						<strong>Prompt:</strong> {prompt || "—"}
					</p>
				</div>
			</div>
		</div>
	);
}
