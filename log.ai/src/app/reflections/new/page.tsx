"use client";
import { useState } from 'react';
import styles from "./page.module.css";

export default function NewReflection() {
    const [title, setTitle] = useState("Page Title");
    const [reflectionText, setReflectionText] = useState("");
    const [aiSummary, setAiSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log("Rendering NewReflection component");

    const handleSubmit = async () => {
        console.log("Submit clicked!");
        console.log("Title:", title);
        console.log("Reflection Text:", reflectionText);
        

        // TODO - call API to get AI summary
        setIsLoading(true);


        // Simulate an API call with a timeout (1 Second)
        setTimeout(() => {
            setAiSummary("This is a simulated AI summary.");
            setIsLoading(false);
        }, 1000);
    }
    const handleTitleChange = (e: React.FocusEvent<HTMLHeadingElement>) => {
        setTitle(e.currentTarget.textContent || ""); // Use textContent for contentEditable elements
    }

    const handleReflectionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReflectionText(e.target.value || "");
    }

    return (
        <div className= {styles.reflectionPage}> 
            <div className={styles.reflectionInput}>
                {/* Editable Title */}
                <h1
                    contentEditable
                    suppressContentEditableWarning
                    onBlur= {handleTitleChange}
                    className = { styles.editableTitle }
                >
                    {title}
                </h1>

                {/* Reflection Text */}
                <textarea
                    value={reflectionText}
                    onChange={handleReflectionChange}
                    placeholder="Write your reflection here..."
                    className={styles.reflectionTextarea}
                />

                {/* Submit Button */}

                <button 
                    onClick={handleSubmit}
                    disabled={!reflectionText || isLoading}
                    className={styles.submitButton}
                > 
                    {isLoading ? "Analyzing..." : "Analyze with AI"} 
                </button>
            </div>

            {/* AI Summary Display */}
            {aiSummary && (
                <div className={styles.aiSummary}>
                    <h2>AI Summary</h2>
                    <p>{aiSummary}</p>
                </div>
            )}
        </div>
    );
}