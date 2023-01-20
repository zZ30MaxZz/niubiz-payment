export const AppendScript  = (scriptToAppend: string) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.id = "checkpuJs";
    script.async = true;
    
    document.body.appendChild(script);
}