"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';



export default function NewReflection() {
    const [title, setTitle] = useState("Page Title");
    const [aiSummary, setAiSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [editorContent, setEditorContent] = useState("");

    console.log("Rendering NewReflection component");

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                },
            }),
            Typography,TaskList, TaskItem.configure({ nested: true, }),
        ],
        content: "",
        onUpdate: ({ editor }) => {
            const json = editor.getJSON();
            setEditorContent(JSON.stringify(json));
        },
        immediatelyRender: false,
    });
    
    // Add this after the editor is created
    if (editor) {
        console.log("Extensions loaded:", editor.extensionManager.extensions.map(e => e.name));
    }

    console.log("Editor object:", editor);

    const handleSubmit = async () => {
        console.log("Submit clicked!");
        console.log("Title: ", title);
        console.log("Editable Text: ", editorContent);
        

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

                <EditorContent 
                    editor={editor}
                    className={styles.editorContent}
                />

                {/* Submit Button */}

                <button 
                    onClick={handleSubmit}
                    disabled={!editorContent || isLoading}
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