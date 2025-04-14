const TextHighlight = ({ children } : {children: string }) => {
    return (
        <span className="text-primary font-bold transition duration-300 ease-in-out hover:text-accent">{children}</span>
    )
}

export default TextHighlight;