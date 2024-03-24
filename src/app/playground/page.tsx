"use client";
import { useState } from "react";

export default function Playground() {
	const [code, setCode] = useState(`যদি (সত্য) {
        দেখাও "স্বাগতম!";
    }
    নাহয় {
        দেখাও "পরিচয় করা হয়নি!";
    }`);
	const [output, setOutput] = useState("");

	const handleRunCode = () => {
		setOutput("স্বাগতম!");
	};

	return (
		<div>
			<h1>Bong Programming Language Playground</h1>
			<textarea
				value={code}
				onChange={(e) => setCode(e.target.value)}
				rows={10}
				cols={50}
			/>
			<br />
			<button onClick={handleRunCode}>Run Code</button>
			<h2>Output:</h2>
			<pre>{output}</pre>
		</div>
	);
}
