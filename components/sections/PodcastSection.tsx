import Image from "next/image";
import { SectionHeading } from "@/components/ui";

export const PodcastSection = () => (
  <section className="py-16 bg-slate-900 border-t border-slate-800 relative">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="PODCAST" title="EvoChip Explained" />

      <div className="space-y-8 mt-12">
        {/* Episode 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-950">
            <Image
              src="/podcasts/podcast_cover.png"
              alt="EvoChip Explained Podcast Cover"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-cyan-400 font-mono text-sm mb-2">
                Episode 1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                AltiCore Fits AI Into 521 Bytes
              </h3>
              <p className="text-slate-400 text-sm">
                Discover how AltiCore's revolutionary synthesis technology
                trains and executes AI models into impossibly small footprints,
                enabling edge computing at unprecedented scales.
              </p>
            </div>

            <audio
              controls
              className="w-full h-12 rounded-lg"
              style={{
                filter: "hue-rotate(180deg) saturate(1.5)",
              }}
            >
              <source
                src="/podcasts/EvoChipExplained_-_AltiCore_Fits_AI_Into_521_Bytes.m4a"
                type="audio/mp4"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Episode 2 (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-950">
            <Image
              src="/podcasts/podcast_cover.png"
              alt="EvoChip Explained Podcast Cover"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-cyan-400 font-mono text-sm mb-2">
                Episode 2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-slate-400 text-sm">
                Stay tuned for our next episode exploring the future of
                semiconductor design and AI optimization.
              </p>
            </div>

            <div className="w-full h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <span className="text-slate-500 font-mono text-sm">
                Episode Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
