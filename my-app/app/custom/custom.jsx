"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CustomPage() {
	const [prompt, setPrompt] = useState("");
	const [style, setStyle] = useState("Minimalist");
	const [baseColor, setBaseColor] = useState("#f3f3f4");
	const [size, setSize] = useState("medium");
	const [previewUrl, setPreviewUrl] = useState(null);

	function createDesign() {
		const url = `/api/generate?prompt=${encodeURIComponent(prompt)}&style=${encodeURIComponent(
			style
		)}&baseColor=${encodeURIComponent(baseColor)}&size=${encodeURIComponent(size)}&_=${Date.now()}`;
		setPreviewUrl(url);
	}

	return (
		<div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
			<Header />
			<main className="flex-1 px-margin-x py-16 space-y-16">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900">Create Your Design</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<form className="space-y-4 rounded-md border border-gray-200 bg-white p-8 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<span className="text-xs font-semibold uppercase text-gray-500">Primary</span>
								<div className="text-sm text-gray-600">Create your design</div>
							</div>
							<button
								type="button"
								onClick={createDesign}
								className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
							>
								Create
							</button>
						</div>

						<div>
							<label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Prompt</label>
							<textarea
								value={prompt}
								onChange={(e) => setPrompt(e.target.value)}
								placeholder="Describe the garment, mood, materials, and any visual cues..."
								className="w-full rounded-md border border-gray-200 p-3 min-h-[120px] text-sm text-gray-700 placeholder:text-gray-400"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Style</label>
								<select
									value={style}
									onChange={(e) => setStyle(e.target.value)}
									className="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-700"
								>
									<option>Minimalist</option>
									<option>Editorial</option>
									<option>Streetwear</option>
									<option>Athletic</option>
								</select>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Base Color</label>
								<input
									type="color"
									value={baseColor}
									onChange={(e) => setBaseColor(e.target.value)}
									className="w-full h-10 rounded-md border border-gray-200 bg-white p-0"
								/>
							</div>
						</div>

						<div>
							<label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Size</label>
							<select
								value={size}
								onChange={(e) => setSize(e.target.value)}
								className="w-full rounded-md border border-gray-200 p-2 text-sm text-gray-700"
							>
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
							</select>
						</div>

						<div className="flex gap-2">
							<button
								type="button"
								onClick={createDesign}
								className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
							>
								Create your design
							</button>
							<button
								type="button"
								onClick={() => setPreviewUrl(null)}
								className="rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"
							>
								Reset
							</button>
						</div>
					</form>

					<div className="flex flex-col rounded-md border border-gray-200 bg-white p-8 shadow-sm">
						<div className="flex h-96 w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100">
							{previewUrl ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={previewUrl} alt="Preview" className="object-contain max-h-full w-full" />
							) : (
								<div className="text-center text-gray-500">
									<div className="text-sm font-semibold uppercase">Preview</div>
									<div className="mt-1 text-sm text-gray-500">Your generated design will appear here.</div>
								</div>
							)}
						</div>

						<div className="mt-4 w-full">
							<h3 className="text-xs font-semibold uppercase text-gray-500">Design Details</h3>
							<div className="mt-2 text-sm text-gray-600">
								<p><strong>Style:</strong> {style}</p>
								<p><strong>Size:</strong> {size}</p>
								<p className="flex items-center gap-2"><strong>Base Color:</strong> <span className="w-4 h-4 inline-block" style={{ background: baseColor }} /></p>
								<p className="mt-2"><strong>Prompt:</strong> {prompt || "—"}</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

