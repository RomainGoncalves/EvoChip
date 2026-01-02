import React from "react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export const VideoEmbed = ({ videoId, title, className = "" }: VideoEmbedProps) => (
  <div
    className={`aspect-video w-full rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-950 ${className}`}
  >
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);
