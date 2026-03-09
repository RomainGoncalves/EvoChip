import Link from "next/link";

export default function HDLWhitePaper() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        .hdl-wrap * { box-sizing: border-box; }

        :root {
          --navy: #1a2744; --mid: #223060; --copper: #c8923a; --copper-lt: #e8b96a;
          --rule: #c8d0df; --text: #1e1e2e; --muted: #5a6070;
        }

        .hdl-wrap {
          font-family: 'Inter', sans-serif;
          background: #e8ebf0;
          color: var(--text);
          font-size: 13px;
          line-height: 1.75;
          min-height: 100vh;
        }

        .hdl-toolbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: #1a2744;
          display: flex; align-items: center;
          padding: 10px 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,.35);
        }
        .hdl-toolbar a.hdl-btn {
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600;
          padding: 7px 18px; border-radius: 3px; cursor: pointer;
          letter-spacing: .05em; text-transform: uppercase;
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .hdl-btn-back { background: transparent; color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.2); }
        .hdl-btn-back:hover { color: #fff; border-color: rgba(255,255,255,0.5); }

        .hdl-doc { max-width: 960px; margin: 68px auto 48px; box-shadow: 0 4px 32px rgba(0,0,0,.18); }

        /* COVER */
        .hdl-cover { background: var(--navy); color: #fff; display: flex; flex-direction: column; }
        .hdl-band { background: var(--copper); height: 7px; }
        .hdl-cover-in { padding: 52px 66px 54px; flex: 1; display: flex; flex-direction: column; }
        .hdl-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; color: var(--copper-lt); margin-bottom: 18px; }
        .hdl-c-title { font-family: 'EB Garamond', serif; font-size: 42px; font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 8px; }
        .hdl-c-sub { font-size: 16px; font-weight: 300; color: rgba(255,255,255,.68); margin-bottom: 40px; line-height: 1.5; }
        .hdl-c-stats { display: flex; border: 1px solid rgba(255,255,255,.15); border-radius: 4px; overflow: hidden; margin-bottom: 40px; }
        .hdl-cs { flex: 1; padding: 16px 12px; text-align: center; border-right: 1px solid rgba(255,255,255,.12); }
        .hdl-cs:last-child { border-right: none; }
        .hdl-cs-v { font-size: 22px; font-weight: 700; color: var(--copper-lt); display: block; line-height: 1; }
        .hdl-cs-l { font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.5); margin-top: 5px; display: block; }
        .hdl-c-meta { margin-top: auto; display: flex; gap: 44px; padding-top: 26px; border-top: 1px solid rgba(255,255,255,.15); flex-wrap: wrap; }
        .hdl-ml { font-size: 9px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.38); display: block; }
        .hdl-mv { font-size: 12px; font-weight: 500; color: rgba(255,255,255,.85); display: block; }

        /* TOC */
        .hdl-toc { background: #f4f6fa; border-left: 5px solid var(--copper); padding: 36px 66px; }
        .hdl-toc-h { font-size: 10px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); margin-bottom: 20px; }
        .hdl-toc-g { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 44px; }
        .hdl-tr { display: flex; gap: 9px; font-size: 12px; color: var(--navy); align-items: baseline; }
        .hdl-tn { font-weight: 700; color: var(--copper); min-width: 20px; font-size: 11px; }

        /* BODY */
        .hdl-body { background: #fff; padding: 58px 66px; }
        .hdl-ch { margin-bottom: 48px; }
        .hdl-ch + .hdl-ch { margin-top: 50px; }
        .hdl-sec { font-size: 10px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--copper); margin-bottom: 5px; }
        .hdl-cht { font-family: 'EB Garamond', serif; font-size: 26px; font-weight: 700; color: var(--navy); line-height: 1.2; margin-bottom: 14px; }
        .hdl-rule { height: 2px; background: linear-gradient(to right, var(--copper) 56px, var(--rule) 56px); margin-bottom: 24px; }
        .hdl-sub { font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--mid); margin: 24px 0 9px; }
        .hdl-body p { margin-bottom: 12px; line-height: 1.78; }
        .hdl-body p:last-child { margin-bottom: 0; }
        .hdl-divider { border: none; border-top: 1px solid var(--rule); margin: 48px 0 0; }

        /* callout */
        .hdl-box { background: #f0f3f9; border-left: 4px solid var(--navy); padding: 18px 22px; margin: 18px 0; border-radius: 0 4px 4px 0; }
        .hdl-box-t { font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: var(--navy); margin-bottom: 10px; }
        .hdl-box ul { list-style: none; padding: 0; margin: 0; }
        .hdl-box ul li { position: relative; padding-left: 18px; margin-bottom: 6px; font-size: 12.5px; }
        .hdl-box ul li::before { content: '▸'; position: absolute; left: 0; color: var(--copper); font-size: 11px; top: 2px; }

        /* stat strip */
        .hdl-strip { background: var(--navy); border-radius: 4px; padding: 16px 20px; margin: 18px 0; display: flex; }
        .hdl-ss { flex: 1; text-align: center; padding: 0 14px; border-right: 1px solid rgba(255,255,255,.18); }
        .hdl-ss:last-child { border-right: none; }
        .hdl-sv { font-size: 22px; font-weight: 700; color: var(--copper-lt); display: block; line-height: 1; }
        .hdl-sl { font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.55); margin-top: 4px; display: block; }

        /* lists */
        .hdl-bl { list-style: none; padding: 0; margin: 11px 0; }
        .hdl-bl li { position: relative; padding-left: 18px; margin-bottom: 8px; font-size: 12.5px; }
        .hdl-bl li::before { content: '▸'; position: absolute; left: 0; color: var(--copper); font-size: 11px; top: 2px; }
        .hdl-bl li strong { color: var(--mid); }
        .hdl-nl { list-style: none; padding: 0; margin: 11px 0; }
        .hdl-nl li { display: flex; gap: 12px; margin-bottom: 12px; font-size: 12.5px; align-items: flex-start; }
        .hdl-nb { flex-shrink: 0; width: 22px; height: 22px; background: var(--navy); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; margin-top: 2px; }

        /* tables */
        .hdl-body table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 11.5px; }
        .hdl-body th { background: var(--navy); color: #fff; padding: 8px 10px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; }
        .hdl-body th.c { text-align: center; }
        .hdl-body td { padding: 7px 10px; border-bottom: 1px solid var(--rule); vertical-align: top; }
        .hdl-body tr:nth-child(even) td { background: #f7f8fb; }
        .hdl-body td.c { text-align: center; }
        .hdl-body td.hi { color: var(--copper); font-weight: 700; text-align: center; }
        .hdl-body td.b { font-weight: 600; color: var(--navy); }

        /* timing sketch */
        .hdl-timing { background: #f7f8fb; border: 1px solid var(--rule); border-radius: 4px; padding: 18px 22px; margin: 16px 0; font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.9; color: var(--navy); }
        .hdl-timing .hdl-lbl { color: var(--copper); font-weight: 700; display: inline-block; width: 70px; }

        /* about */
        .hdl-about { background: #f4f6fa; border-left: 4px solid var(--copper); padding: 22px 28px; margin: 32px 0 0; border-radius: 0 4px 4px 0; font-size: 12.5px; }
        .hdl-about strong { color: var(--navy); }

        /* app items */
        .hdl-app-item { margin-bottom: 18px; }
        .hdl-app-item-title { font-weight: 700; font-size: 13px; color: var(--navy); margin-bottom: 4px; }
        .hdl-app-item-title span { color: var(--copper); margin-right: 6px; }

        /* footer */
        .hdl-foot { background: var(--navy); color: rgba(255,255,255,.45); padding: 20px 66px; display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; flex-wrap: wrap; gap: 8px; }
        .hdl-foot strong { color: rgba(255,255,255,.82); }

        @media print {
          .hdl-toolbar { display: none; }
          .hdl-wrap { background: #fff; }
          .hdl-doc { margin: 0; box-shadow: none; max-width: 100%; }
          .hdl-ch { page-break-inside: avoid; }
          .hdl-toc { page-break-after: always; }
        }

        @media (max-width: 700px) {
          .hdl-cover-in { padding: 32px 24px; }
          .hdl-toc { padding: 24px; }
          .hdl-toc-g { grid-template-columns: 1fr; }
          .hdl-body { padding: 32px 24px; }
          .hdl-foot { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .hdl-strip { flex-wrap: wrap; gap: 16px; }
          .hdl-ss { flex: 0 0 calc(50% - 8px); }
          .hdl-sv { white-space: normal; }
          .hdl-c-stats { flex-wrap: wrap; }
          .hdl-cs { flex: 0 0 calc(50% - 1px); }
        }
      `}</style>

      <div className="hdl-wrap">
        {/* Toolbar */}
        <div className="hdl-toolbar">
          <Link href="/" className="hdl-btn hdl-btn-back">
            ← Back to Site
          </Link>
        </div>

        <div className="hdl-doc" id="doc">
          {/* COVER */}
          <div className="hdl-cover">
            <div className="hdl-band"></div>
            <div className="hdl-cover-in">
              <div className="hdl-eyebrow">Technical White Paper — EvoChip.ai</div>
              <div className="hdl-c-title">AltiCoreHDL</div>
              <div className="hdl-c-sub">Hardware-Integrated Intelligence for Production Silicon</div>
              <div className="hdl-c-stats">
                <div className="hdl-cs">
                  <span className="hdl-cs-v">1</span>
                  <span className="hdl-cs-l">Inference / clock / core</span>
                </div>
                <div className="hdl-cs">
                  <span className="hdl-cs-v">~100</span>
                  <span className="hdl-cs-l">Cycle-constant latency (typical)</span>
                </div>
                <div className="hdl-cs">
                  <span className="hdl-cs-v">3.19 B</span>
                  <span className="hdl-cs-l">Peak inf/sec — ZCU104</span>
                </div>
                <div className="hdl-cs">
                  <span className="hdl-cs-v">0</span>
                  <span className="hdl-cs-l">External DRAM required</span>
                </div>
              </div>
              <div className="hdl-c-meta">
                <div>
                  <span className="hdl-ml">Document</span>
                  <span className="hdl-mv">Version 3.0</span>
                </div>
                <div>
                  <span className="hdl-ml">Date</span>
                  <span className="hdl-mv">February 2026</span>
                </div>
                <div>
                  <span className="hdl-ml">Classification</span>
                  <span className="hdl-mv">Public Distribution</span>
                </div>
                <div>
                  <span className="hdl-ml">Issued by</span>
                  <span className="hdl-mv">EvoChip.ai</span>
                </div>
              </div>
            </div>
          </div>

          {/* TOC */}
          <div className="hdl-toc">
            <div className="hdl-toc-h">Table of Contents</div>
            <div className="hdl-toc-g">
              <div className="hdl-tr"><span className="hdl-tn">1</span><span>Executive Summary</span></div>
              <div className="hdl-tr"><span className="hdl-tn">6</span><span>Demonstrated Implementations and Measured Performance</span></div>
              <div className="hdl-tr"><span className="hdl-tn">2</span><span>Product Boundary and Integration Scope</span></div>
              <div className="hdl-tr"><span className="hdl-tn">7</span><span>Ecosystem Integration</span></div>
              <div className="hdl-tr"><span className="hdl-tn">3</span><span>Interface and Timing Contract (en / valid)</span></div>
              <div className="hdl-tr"><span className="hdl-tn">8</span><span>Target Applications</span></div>
              <div className="hdl-tr"><span className="hdl-tn">4</span><span>Core Technical Architecture</span></div>
              <div className="hdl-tr"><span className="hdl-tn">9</span><span>Conclusion</span></div>
              <div className="hdl-tr"><span className="hdl-tn">5</span><span>Structural Design Principles</span></div>
              <div className="hdl-tr"><span className="hdl-tn">A</span><span>Appendix A — Interface Summary and Timing Diagram</span></div>
            </div>
          </div>

          {/* BODY */}
          <div className="hdl-body">
            {/* Section 01 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 01</div>
              <div className="hdl-cht">Executive Summary</div>
              <div className="hdl-rule"></div>
              <p>
                AltiCoreHDL is a <strong>hardware IP core</strong> that maps models trained within the AltiCore
                mathematical framework directly into <strong>FPGA and ASIC logic</strong>. It is delivered as a{" "}
                <strong>synchronous, fixed-depth pipelined circuit</strong> with a minimal-control interface
                designed for <strong>maximum throughput</strong> and <strong>minimal fabric overhead</strong>.
              </p>
              <p>
                AltiCoreHDL is <strong>not a conventional neural network</strong> and does not execute
                tensor-centric floating-point workloads. Inference is realized primarily through{" "}
                <strong>bitwise logic operations, shifts, and a bounded amount of integer DSP</strong>, compiled
                into a deterministic pipeline.
              </p>
              <p>A fully pipelined configuration supports:</p>
              <ul className="hdl-bl">
                <li>
                  <strong>Up to 1 accepted inference per clock cycle per core</strong> (when en=1 each cycle)
                </li>
                <li>
                  <strong>Up to 1 valid result per clock cycle per core</strong> (steady state, after pipeline
                  fill)
                </li>
                <li>
                  <strong>Fixed, cycle-constant core latency</strong> of approximately{" "}
                  <strong>L cycles</strong> (typical ~100 cycles, configuration dependent)
                </li>
              </ul>
              <div className="hdl-box">
                <div className="hdl-box-t">Key Benefits</div>
                <ul>
                  <li>
                    <strong>Cycle-constant core latency</strong> and <strong>order-preserving</strong> results
                    at the IP boundary
                  </li>
                  <li>
                    <strong>Maximum throughput</strong> via a backpressure-free token pipeline (en/valid)
                  </li>
                  <li>
                    <strong>Minimal control fabric</strong> — no internal ready/valid networks, skid buffers,
                    or arbitration
                  </li>
                  <li>
                    <strong>No floating-point dependency</strong> — logic-centric with bounded integer
                    arithmetic
                  </li>
                  <li>
                    <strong>No external DRAM required</strong> for FPGA inference operation (on-chip storage
                    only)
                  </li>
                  <li>
                    <strong>Wrapper-friendly</strong> — integrators can add FIFOs / framing / standard
                    streaming adapters externally to suit their system
                  </li>
                </ul>
              </div>
            </div>

            <hr className="hdl-divider" />

            {/* Section 02 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 02</div>
              <div className="hdl-cht">Product Boundary and Integration Scope</div>
              <div className="hdl-rule"></div>
              <p>
                AltiCoreHDL is delivered as a <strong>synthesizable RTL core</strong> with defined input and
                output pins. The product boundary is the core interface.
              </p>
              <p>
                AltiCoreHDL makes <strong>no architectural assumptions</strong> about the external system beyond
                standard synchronous digital integration requirements (clock, reset, and pin-level timing).
                System-level concerns — interconnect arbitration, DMA behavior, host software, clock-domain
                crossings, buffering strategy, and end-to-end application latency — are{" "}
                <strong>out of scope</strong> for the core and are the responsibility of the integrator.
              </p>
              <p>
                The core is intentionally designed to be <strong>simple to wrap</strong> (e.g., external FIFO
                buffering, framing, or adapters to standard streaming protocols). Reference wrappers will be
                developed on a demand-priority basis.
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 03 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 03</div>
              <div className="hdl-cht">Interface and Timing Contract (en / valid)</div>
              <div className="hdl-rule"></div>

              <div className="hdl-sub">3.1 — Backpressure-Free Token Pipeline</div>
              <p>AltiCoreHDL uses a minimal-control interface:</p>
              <ul className="hdl-bl">
                <li>
                  <strong>en (input enable token):</strong> qualifies the input pins on a given clock cycle.
                  If en=1, that cycle&apos;s input sample is <strong>accepted</strong>. If en=0, the cycle is
                  a <strong>bubble</strong> (no accepted sample).
                </li>
                <li>
                  <strong>valid (output token):</strong> asserts when the output pins contain a{" "}
                  <strong>meaningful result</strong> corresponding to a previously accepted input sample.
                </li>
              </ul>
              <p>
                This interface is <strong>backpressure-free</strong> (no ready signal). The pipeline advances
                every clock; if downstream logic cannot accept results at line rate, buffering/flow control must
                be implemented <strong>externally</strong>.
              </p>

              <div className="hdl-sub">3.2 — Fixed-Latency Mapping</div>
              <p>
                The en token propagates through the pipeline alongside the computation. For a pipeline depth of{" "}
                <strong>L cycles</strong>:
              </p>
              <ul className="hdl-bl">
                <li>
                  Each accepted input (en=1) produces exactly one corresponding output with valid=1 after
                  exactly <strong>L cycles</strong>.
                </li>
                <li>
                  The token relationship is: <strong>valid[t] = en[t − L]</strong> (after reset/pipeline fill)
                </li>
              </ul>
              <p>
                This latency is <strong>data-independent</strong> at the core boundary: there are no
                data-dependent early exits and no variable-iteration loops.
              </p>

              <div className="hdl-sub">3.3 — Independence and No Cross-Sample Coupling</div>
              <p>
                The core is strictly <strong>feed-forward</strong> for inference: internal state consists only
                of <strong>pipeline storage and static parameters</strong>. There are no feedback paths or state
                updates that couple one sample to another. Bubble cycles (en=0) do not affect subsequent
                accepted samples (en=1) beyond inserting bubbles in the token stream.
              </p>

              <div className="hdl-sub">3.4 — Stall Conditions</div>
              <p>
                The inference pipeline does not stall internally.{" "}
                <strong>The only stall condition is reset asserted.</strong> When reset is asserted, internal
                state and token pipeline state are cleared.
              </p>

              <div className="hdl-sub">3.5 — Output Meaning When valid=0</div>
              <p>
                When valid=0, output pins are <strong>not meaningful</strong> for inference results and may
                change. Downstream logic must qualify sampling using valid.
              </p>

              <div className="hdl-sub">3.6 — Throughput Statement (Precise)</div>
              <div className="hdl-strip">
                <div className="hdl-ss">
                  <span className="hdl-sv">1 / cycle</span>
                  <span className="hdl-sl">Peak acceptance rate</span>
                </div>
                <div className="hdl-ss">
                  <span className="hdl-sv">1 / cycle</span>
                  <span className="hdl-sl">Peak result rate (steady state)</span>
                </div>
                <div className="hdl-ss">
                  <span className="hdl-sv">L cycles</span>
                  <span className="hdl-sl">Latency (en=1 → valid=1)</span>
                </div>
                <div className="hdl-ss">
                  <span className="hdl-sv">0</span>
                  <span className="hdl-sl">Internal stalls</span>
                </div>
              </div>
              <p>
                Per instantiated core: peak acceptance rate up to 1 sample/cycle (sustained en=1), peak result
                rate up to 1 result/cycle (steady state, after pipeline fill), and latency of exactly L cycles
                from acceptance (en=1) to corresponding valid=1 result.
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 04 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 04</div>
              <div className="hdl-cht">Core Technical Architecture</div>
              <div className="hdl-rule"></div>

              <div className="hdl-sub">4.1 — Fixed-Depth Synchronous Pipeline</div>
              <p>
                AltiCoreHDL inference is implemented as a <strong>fixed-depth pipeline</strong> consisting of:
              </p>
              <ul className="hdl-bl">
                <li>combinational logic stages (logic-centric primitives),</li>
                <li>
                  pipeline storage (registers and/or on-chip memory configured as deterministic pipeline
                  storage),
                </li>
                <li>
                  bounded fixed-point/integer arithmetic where required, optionally mapped to device primitives
                  (e.g., DSP blocks).
                </li>
              </ul>
              <p>
                The pipeline advances every clock, and output validity is carried by the token pipeline
                (en → valid).
              </p>

              <div className="hdl-sub">4.2 — Resource Model</div>
              <p>
                Each instantiated AltiCoreHDL core uses <strong>dedicated resources</strong> for that core.
                There are no shared compute resources across samples and no internal arbitration that could
                introduce stalls or variable service time.
              </p>

              <div className="hdl-sub">4.3 — Memory and External Dependencies</div>
              <p>
                <strong>For FPGA implementations:</strong> the core uses <strong>on-chip resources only</strong>{" "}
                (logic, registers, DSP blocks, and/or on-chip memory for deterministic pipeline storage). The
                core <strong>does not require external DRAM</strong> or off-FPGA resources for inference
                operation.
              </p>
              <p>
                <strong>For ASIC implementations:</strong> equivalent storage and arithmetic primitives are
                realized using on-chip resources (standard-cell and/or embedded memory macros as appropriate to
                the implementation).
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 05 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 05</div>
              <div className="hdl-cht">Structural Design Principles</div>
              <div className="hdl-rule"></div>

              <div className="hdl-sub">5.1 — Minimal Control Fabric by Design</div>
              <p>
                AltiCoreHDL minimizes control overhead by using a token pipeline rather than backpressure
                networks or dynamic scheduling. This reduces: internal control logic, stall/bubble management
                complexity, and fabric used for handshake infrastructure.
              </p>

              <div className="hdl-sub">
                5.2 — Backpressure-Free Interface for Maximum Throughput and Minimal Fabric
              </div>
              <p>
                The en/valid interface was selected to: maximize achievable throughput at the core boundary,
                minimize interface and internal control fabric, and allow integrators to add only the wrappers
                they need (FIFO buffering, framing, protocol adapters).
              </p>

              <div className="hdl-sub">5.3 — Flexible Word-Length Support</div>
              <p>
                AltiCoreHDL supports configurable integer word sizes to match integration and PPA goals:
              </p>
              <ul className="hdl-bl">
                <li>
                  configurable widths (e.g., 4-bit through 64-bit and beyond, implementation dependent),
                </li>
                <li>alignment to device primitives and interface requirements,</li>
                <li>precision/resource tradeoffs.</li>
              </ul>

              <div className="hdl-sub">5.4 — Arithmetic Positioning (Accurate Claim)</div>
              <p>
                AltiCoreHDL uses <strong>minimal arithmetic</strong> relative to MAC-dominant tensor approaches
                typical of neural inference accelerators. It does not claim &quot;no arithmetic&quot;; instead,
                arithmetic is <strong>bounded</strong> and used where needed within an otherwise logic-centric
                compute profile.
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 06 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 06</div>
              <div className="hdl-cht">Demonstrated Implementations and Measured Performance</div>
              <div className="hdl-rule"></div>
              <p>
                AltiCoreHDL has been implemented and validated on shipping Xilinx FPGA platforms. Under
                sustained en=1 (steady state), observed throughput matches the token-pipeline contract:{" "}
                <strong>one valid result per clock per instantiated core</strong>.
              </p>

              <div className="hdl-sub">6.1 — Measured FPGA Implementations</div>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Device</th>
                      <th className="c">Cores Instantiated</th>
                      <th className="c">Clock (MHz)</th>
                      <th className="c">Observed Throughput</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="b">Digilent Arty Z7 (battery-powered)</td>
                      <td>Zynq-7000 Zynq-7020 / &quot;-20&quot;</td>
                      <td className="c">3</td>
                      <td className="c">100.0</td>
                      <td className="hi">300 M inferences/sec</td>
                    </tr>
                    <tr>
                      <td className="b">Xilinx ZCU104</td>
                      <td>Zynq UltraScale+ XCZU7EV MPSoC</td>
                      <td className="c">17</td>
                      <td className="c">187.5</td>
                      <td className="hi">3.1875 B inferences/sec</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="hdl-sub">6.2 — Measurement Method</div>
              <p>
                Throughput was validated at the core boundary using a <strong>logic analyzer</strong> observing
                the valid output token under continuous operation (en=1, steady state). The observed valid
                behavior confirmed <strong>one asserted valid per clock per core</strong>, consistent with the
                fixed pipeline contract.
              </p>
              <p>
                These implementations are observable and can be independently validated by instrumenting valid
                and confirming the en → valid delay and sustained token rate at the selected clock frequency.
              </p>

              <div className="hdl-sub">6.3 — Interpreting Multi-Core Scaling</div>
              <p>
                When multiple identical cores are instantiated and clocked together, aggregate peak throughput
                scales approximately linearly with:
              </p>
              <ul className="hdl-bl">
                <li>number of cores, and</li>
                <li>clock frequency,</li>
              </ul>
              <p>
                subject to device capacity, timing closure, and integrator routing/floorplanning constraints.
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 07 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 07</div>
              <div className="hdl-cht">Ecosystem Integration</div>
              <div className="hdl-rule"></div>
              <p>AltiCoreHDL integrates into a development pipeline that supports:</p>
              <ol className="hdl-nl">
                <li>
                  <span className="hdl-nb">1</span>
                  <span>
                    <strong>Model development and training</strong> in AltiCore tooling
                  </span>
                </li>
                <li>
                  <span className="hdl-nb">2</span>
                  <span>
                    <strong>Hardware mapping</strong> into AltiCoreHDL for FPGA-based characterization and
                    deployment
                  </span>
                </li>
                <li>
                  <span className="hdl-nb">3</span>
                  <span>
                    <strong>Production migration</strong> into ASIC/SoC implementations as required
                  </span>
                </li>
              </ol>
              <p>
                Algorithmic specifics and training methodology can be provided under NDA as part of technical
                diligence.
              </p>
            </div>

            <hr className="hdl-divider" />

            {/* Section 08 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 08</div>
              <div className="hdl-cht">Target Applications</div>
              <div className="hdl-rule"></div>
              <p>
                AltiCoreHDL is engineered for deployments prioritizing deterministic core timing and efficient
                hardware realization, including:
              </p>
              <div style={{ marginTop: "16px" }}>
                <div className="hdl-app-item">
                  <div className="hdl-app-item-title">
                    <span>▸</span>Safety- and compliance-sensitive systems
                  </div>
                  <p>
                    Where predictable core timing and repeatable behavior support system assurance activities.
                  </p>
                </div>
                <div className="hdl-app-item">
                  <div className="hdl-app-item-title">
                    <span>▸</span>High-volume production
                  </div>
                  <p>
                    Where dedicated, low-overhead inference cores can be integrated into cost-sensitive silicon.
                  </p>
                </div>
                <div className="hdl-app-item">
                  <div className="hdl-app-item-title">
                    <span>▸</span>Always-on monitoring (&ldquo;sentinel&rdquo;)
                  </div>
                  <p>
                    Low-overhead inference used for continuous detection and wake-on-event patterns.
                  </p>
                </div>
                <div className="hdl-app-item">
                  <div className="hdl-app-item-title">
                    <span>▸</span>Embedded and edge inference
                  </div>
                  <p>Where power/area constraints favor fixed pipelines and logic-centric computation.</p>
                </div>
              </div>
            </div>

            <hr className="hdl-divider" />

            {/* Section 09 */}
            <div className="hdl-ch">
              <div className="hdl-sec">Section 09</div>
              <div className="hdl-cht">Conclusion</div>
              <div className="hdl-rule"></div>
              <p>
                AltiCoreHDL is a deterministic inference IP core implemented as a{" "}
                <strong>fixed-depth synchronous pipeline</strong> with a backpressure-free en/valid token
                interface. This design choice maximizes achievable throughput and minimizes fabric overhead,
                while enabling integrators to wrap the core as best suits their system.
              </p>
              <p>
                Measured FPGA implementations demonstrate real, observable throughput consistent with the
                contract: <strong>one inference per core per clock</strong> with{" "}
                <strong>fixed latency</strong> (approximately L cycles, configuration dependent). The result is
                a production-oriented pathway for deploying AltiCore model intelligence in FPGA and ASIC
                environments where predictable core behavior and efficient implementation are primary
                requirements.
              </p>
              <div className="hdl-about">
                <p>
                  <strong>About EvoChip.ai</strong>
                </p>
                <p style={{ marginTop: "6px" }}>
                  EvoChip.ai develops AI computing technology that transforms training data into deterministic
                  hardware inference implementations.
                </p>
                <p style={{ marginTop: "8px" }}>
                  Contact: <strong>ab@evochip.ai</strong> &nbsp;|&nbsp; Document Version: V3 &nbsp;|&nbsp;
                  Publication Date: February 2026 &nbsp;|&nbsp; © 2026 EvoChip.ai. All rights reserved.
                </p>
              </div>
            </div>

            <hr className="hdl-divider" />

            {/* Appendix A */}
            <div className="hdl-ch">
              <div className="hdl-sec">Appendix A</div>
              <div className="hdl-cht">Interface Summary and Timing Diagram</div>
              <div className="hdl-rule"></div>

              <div className="hdl-sub">Signal Summary (Core Boundary)</div>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th>Signal</th>
                      <th>Direction</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="b">clk</td>
                      <td>Input</td>
                      <td>Synchronous clock</td>
                    </tr>
                    <tr>
                      <td className="b">rst</td>
                      <td>Input</td>
                      <td>
                        Synchronous/asynchronous reset (implementation defined); when asserted, core is held
                        in reset and internal state is cleared
                      </td>
                    </tr>
                    <tr>
                      <td className="b">en</td>
                      <td>Input</td>
                      <td>Input token — en=1 indicates an accepted sample on input pins</td>
                    </tr>
                    <tr>
                      <td className="b">valid</td>
                      <td>Output</td>
                      <td>
                        Output token — valid=1 indicates output pins contain a meaningful result for a
                        previously accepted input
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="hdl-sub">Token Relationship</div>
              <p>
                For fixed latency <strong>L</strong>: &nbsp;
                <strong>valid[t] = en[t−L]</strong> &nbsp;(after reset/pipeline fill)
              </p>

              <div className="hdl-sub">Bubble Semantics</div>
              <p>
                If en=0, the cycle is a bubble: no accepted sample for that cycle, and a corresponding
                valid=0 bubble emerges after L cycles.
              </p>

              <div className="hdl-sub">Timing Sketch (Illustrative — L = 4 cycles)</div>
              <div className="hdl-timing">
                <span className="hdl-lbl">Cycle:</span> &nbsp;0 &nbsp;&nbsp;1 &nbsp;&nbsp;2 &nbsp;&nbsp;3
                &nbsp;&nbsp;4 &nbsp;&nbsp;5 &nbsp;&nbsp;6 &nbsp;&nbsp;7 &nbsp;&nbsp;8
                <br />
                <span className="hdl-lbl">en:</span> &nbsp;&nbsp;&nbsp;&nbsp;1 &nbsp;&nbsp;0 &nbsp;&nbsp;1
                &nbsp;&nbsp;1 &nbsp;&nbsp;0 &nbsp;&nbsp;0 &nbsp;&nbsp;1 &nbsp;&nbsp;0 &nbsp;&nbsp;0
                <br />
                <span className="hdl-lbl">valid:</span> &nbsp;0 &nbsp;&nbsp;0 &nbsp;&nbsp;0 &nbsp;&nbsp;0
                &nbsp;&nbsp;1 &nbsp;&nbsp;0 &nbsp;&nbsp;1 &nbsp;&nbsp;1 &nbsp;&nbsp;0 &nbsp;&nbsp;
                <em style={{ color: "var(--muted)" }}>(= en delayed by 4)</em>
              </div>
              <p>
                When valid=1, output pins correspond to the input sample presented on the cycle where the
                matching en=1 occurred (L cycles earlier).
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="hdl-foot">
            <span>
              <strong>EvoChip.ai</strong> — AltiCoreHDL Technical White Paper
            </span>
            <span>Version 3.0 &nbsp;|&nbsp; February 2026 &nbsp;|&nbsp; Hardware-Integrated Intelligence</span>
            <span>© 2026 EvoChip.ai. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}
