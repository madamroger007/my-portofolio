import React from "react"

const CardSpotify: React.FC<{ className?: string }> = ({ className }) => {
    return (

        <div className={className}>
            <iframe
                data-testid="embed-iframe"
                className="rounded-xl max-w-[320px] h-[152px] shadow-lg shadow-slate-400 dark:shadow-blue-600 transition-colors duration-1000 "
                src="https://open.spotify.com/embed/playlist/7mSR3HLfb9XXBl77TestyB?utm_source=generator&theme=0"

                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
        </div>
    )
}

export default React.memo(CardSpotify)