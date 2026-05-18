"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomForm from "../../components/custom/CustomForm";
import CustomPreview from "../../components/custom/CustomPreview";

export default function CustomPage() {
	const [prompt, setPrompt] = useState("");
	const [style, setStyle] = useState("Minimalist");
	const [baseColor, setBaseColor] = useState("#f3f3f4");
	const [size, setSize] = useState("medium");
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
					Create Your Design
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<CustomForm
						prompt={prompt}
						style={style}
						baseColor={baseColor}
						size={size}
						onPromptChange={setPrompt}
						onStyleChange={setStyle}
						onBaseColorChange={setBaseColor}
						onSizeChange={setSize}
						onCreateDesign={createDesign}
						onReset={() => {
							setPrompt("");
							setStyle("Minimalist");
							setBaseColor("#f3f3f4");
							setSize("medium");
							setPreviewUrl(null);
						}}
					/>
					<CustomPreview
						previewUrl={previewUrl}
						style={style}
						size={size}
						baseColor={baseColor}
						prompt={prompt}
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}
