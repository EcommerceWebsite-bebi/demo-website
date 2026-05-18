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
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Header />
			<main className="flex-1 px-margin-x py-16">
				<h1 className="text-3xl font-bold mb-6">Create Your Design</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<form className="space-y-4 bg-white p-6 rounded-md shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<span className="text-xs font-semibold uppercase">Primary</span>
								<div className="text-sm">Create your design</div>
							</div>
							<button
								type="button"
								onClick={createDesign}
								className="bg-black text-white px-4 py-2 rounded-md"
							>
								Create
							</button>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1">Prompt</label>
							<textarea
								value={prompt}
								onChange={(e) => setPrompt(e.target.value)}
								placeholder="Describe the garment, mood, materials, and any visual cues..."
								className="w-full border border-gray-200 rounded-md p-3 min-h-[120px] text-sm"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium mb-1">Style</label>
								<select
									value={style}
									onChange={(e) => setStyle(e.target.value)}
									className="w-full border border-gray-200 rounded-md p-2 text-sm"
								>
									<option>Minimalist</option>
									<option>Editorial</option>
									<option>Streetwear</option>
									<option>Athletic</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium mb-1">Base Color</label>
								<input
									type="color"
									value={baseColor}
									onChange={(e) => setBaseColor(e.target.value)}
									className="w-full h-10 p-0 border border-gray-200 rounded-md"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium mb-1">Size</label>
							<select
								value={size}
								onChange={(e) => setSize(e.target.value)}
								className="w-full border border-gray-200 rounded-md p-2 text-sm"
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
								className="bg-black text-white px-4 py-2 rounded-md"
							>
								Create your design
							</button>
							<button
								type="button"
								onClick={() => setPreviewUrl(null)}
								className="border px-4 py-2 rounded-md"
							>
								Reset
							</button>
						</div>
					</form>

					<div className="bg-white p-6 rounded-md shadow-sm flex flex-col">
						<div className="w-full h-96 bg-gray-100 flex items-center justify-center">
							{previewUrl ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={previewUrl} alt="Preview" className="object-contain max-h-full w-full" />
							) : (
								<div className="text-center text-gray-500">
									<div className="text-xl font-semibold mb-2">Preview</div>
									<div className="text-sm">Your generated design will appear here.</div>
								</div>
							)}
						</div>

						<div className="mt-4 w-full">
							<h3 className="font-semibold">Design Details</h3>
							<div className="mt-2 text-sm text-gray-700">
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

