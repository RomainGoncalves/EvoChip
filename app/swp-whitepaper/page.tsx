import Link from "next/link";

export default function SWPWhitePaper() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Exo+2:wght@700;800;900&display=swap');

        .wp-wrap * { box-sizing: border-box; }

        .wp-wrap {
          font-family: 'Inter', sans-serif;
          background: #e8ebf0;
          color: #1e1e2e;
          font-size: 14px;
          line-height: 1.75;
          min-height: 100vh;
        }

        .wp-toolbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: #1a2744;
          display: flex; align-items: center;
          padding: 10px 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,.35);
        }
        .wp-toolbar a.wp-btn {
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600;
          padding: 7px 18px; border-radius: 3px; cursor: pointer;
          letter-spacing: .05em; text-transform: uppercase;
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .wp-btn-back { background: transparent; color: rgba(255,255,255,0.65); border: 1px solid rgba(255,255,255,0.2); }
        .wp-btn-back:hover { color: #fff; border-color: rgba(255,255,255,0.5); }

        .wp-page-wrap { max-width: 900px; margin: 68px auto 48px; }

        /* COVER */
        .wp-cover { background: #1a2744; color: #fff; position: relative; overflow: hidden; min-height: 420px; display: flex; flex-direction: column; }
        .wp-cover-band { background: #c8923a; height: 6px; width: 100%; }
        .wp-cover-inner { padding: 50px 64px 54px; flex: 1; display: flex; flex-direction: column; }

        .wp-cover-label { font-size: 11px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #e8b96a; margin-bottom: 18px; }
        .wp-cover-title { font-family: 'EB Garamond', serif; font-size: 38px; font-weight: 700; line-height: 1.18; color: #fff; margin-bottom: 10px; }
        .wp-cover-sub { font-size: 17px; font-weight: 300; color: rgba(255,255,255,.72); margin-bottom: 40px; }
        .wp-cover-meta { margin-top: auto; display: flex; gap: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.18); flex-wrap: wrap; }
        .wp-meta-item { display: flex; flex-direction: column; gap: 3px; }
        .wp-meta-label { font-size: 10px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.45); }
        .wp-meta-val   { font-size: 13px; font-weight: 500; color: rgba(255,255,255,.88); }

        /* TOC */
        .wp-toc { background: #f4f6fa; border-left: 4px solid #c8923a; padding: 36px 64px; }
        .wp-toc-title { font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #5a6070; margin-bottom: 20px; }
        .wp-toc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 40px; }
        .wp-toc-item { display: flex; align-items: baseline; gap: 8px; font-size: 13px; color: #1a2744; }
        .wp-toc-num { font-weight: 700; color: #c8923a; font-size: 12px; min-width: 20px; }

        /* BODY */
        .wp-body-section { background: #ffffff; padding: 56px 64px; }

        .wp-chapter { margin-bottom: 46px; }
        .wp-chapter + .wp-chapter { margin-top: 52px; }
        .wp-ch-number { font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #c8923a; margin-bottom: 6px; }
        .wp-ch-title { font-family: 'EB Garamond', serif; font-size: 26px; font-weight: 700; color: #1a2744; line-height: 1.22; margin-bottom: 16px; }
        .wp-ch-rule { height: 2px; background: linear-gradient(to right, #c8923a 60px, #c8d0df 60px); margin-bottom: 26px; }

        .wp-sub-title { font-size: 13px; font-weight: 700; color: #223060; letter-spacing: .04em; text-transform: uppercase; margin: 28px 0 10px; }

        .wp-body-section p { margin-bottom: 14px; color: #1e1e2e; line-height: 1.78; }
        .wp-body-section p:last-child { margin-bottom: 0; }

        .wp-callout { background: #f0f3f9; border-left: 4px solid #1a2744; padding: 22px 28px; margin: 24px 0; border-radius: 0 4px 4px 0; }
        .wp-callout-title { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #1a2744; margin-bottom: 14px; }
        .wp-callout ul { list-style: none; padding: 0; margin: 0; }
        .wp-callout ul li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 13.5px; color: #1e1e2e; }
        .wp-callout ul li::before { content: '▸'; position: absolute; left: 0; color: #c8923a; font-size: 12px; top: 1px; }

        /* benchmark table */
        .wp-bench-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 13px; }
        .wp-bench-table th { background: #1a2744; color: #fff; padding: 10px 14px; text-align: left; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; font-weight: 600; }
        .wp-bench-table td { padding: 10px 14px; border-bottom: 1px solid #c8d0df; vertical-align: top; }
        .wp-bench-table tr:nth-child(even) td { background: #f4f6fa; }
        .wp-bench-table td strong { color: #c8923a; font-size: 15px; }

        /* stat bar */
        .wp-stat-bar { background: #1a2744; color: #fff; border-radius: 4px; padding: 20px 28px; margin: 24px 0; display: flex; gap: 40px; align-items: center; flex-wrap: wrap; }
        .wp-stat { text-align: center; }
        .wp-stat-val { font-size: 26px; font-weight: 700; color: #e8b96a; line-height: 1; }
        .wp-stat-lbl { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,255,255,.6); margin-top: 4px; }
        .wp-stat-div { width: 1px; background: rgba(255,255,255,.2); height: 44px; }

        /* eco list */
        .wp-eco-list { list-style: none; padding: 0; margin: 16px 0; }
        .wp-eco-list li { position: relative; padding-left: 20px; margin-bottom: 10px; font-size: 13.5px; }
        .wp-eco-list li::before { content: '▸'; position: absolute; left: 0; color: #c8923a; font-size: 12px; top: 1px; }
        .wp-eco-list li strong { color: #223060; }

        /* app list */
        .wp-app-item { margin-bottom: 20px; }
        .wp-app-item-title { font-weight: 700; font-size: 13.5px; color: #1a2744; margin-bottom: 4px; }
        .wp-app-item-title span { color: #c8923a; margin-right: 6px; }

        /* appendix sub */
        .wp-app-sub { font-size: 13px; font-weight: 700; color: #223060; letter-spacing: .04em; margin: 22px 0 8px; }

        .wp-ch-divider { border: none; border-top: 1px solid #c8d0df; margin: 48px 0 0; }

        .wp-body-section ol { margin: 16px 0 16px 24px; font-size: 13.5px; line-height: 1.8; }
        .wp-body-section ol li { margin-bottom: 8px; }

        /* footer */
        .wp-doc-footer { background: #1a2744; color: rgba(255,255,255,.5); padding: 22px 64px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; letter-spacing: .05em; flex-wrap: wrap; gap: 8px; }
        .wp-doc-footer strong { color: rgba(255,255,255,.85); }

        @media print {
          .wp-toolbar { display: none; }
          .wp-wrap { background: #fff; }
          .wp-page-wrap { margin: 0; max-width: 100%; }
          .wp-chapter { page-break-inside: avoid; }
          .wp-toc { page-break-after: always; }
        }

        @media (max-width: 700px) {
          .wp-cover-inner { padding: 32px 24px; }
          .wp-toc { padding: 24px; }
          .wp-toc-grid { grid-template-columns: 1fr; }
          .wp-body-section { padding: 32px 24px; }
          .wp-doc-footer { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .wp-stat-bar { gap: 20px; }
          .wp-stat-div { display: none; }
        }
      `}</style>

      <div className="wp-wrap">
        {/* Toolbar */}
        <div className="wp-toolbar">
          <Link href="/" className="wp-btn wp-btn-back">
            ← Back to Site
          </Link>
        </div>

        <div className="wp-page-wrap" id="doc">
          {/* COVER */}
          <div className="wp-cover">
            <div className="wp-cover-band"></div>
            <div className="wp-cover-inner">
              <div className="wp-cover-label">Technical White Paper</div>
              <div className="wp-cover-title">AltiCoreSWP</div>
              <div className="wp-cover-sub">
                Cross-Platform Software Runtime for General-Purpose Compute
              </div>
              <div className="wp-cover-meta">
                <div className="wp-meta-item">
                  <span className="wp-meta-label">Document</span>
                  <span className="wp-meta-val">Version 1.0</span>
                </div>
                <div className="wp-meta-item">
                  <span className="wp-meta-label">Date</span>
                  <span className="wp-meta-val">February 2026</span>
                </div>
                <div className="wp-meta-item">
                  <span className="wp-meta-label">Classification</span>
                  <span className="wp-meta-val">Public Distribution</span>
                </div>
                <div className="wp-meta-item">
                  <span className="wp-meta-label">Issued by</span>
                  <span className="wp-meta-val">EvoChip.ai</span>
                </div>
              </div>
            </div>
          </div>

          {/* TOC */}
          <div className="wp-toc">
            <div className="wp-toc-title">Table of Contents</div>
            <div className="wp-toc-grid">
              <div className="wp-toc-item">
                <span className="wp-toc-num">01</span>
                <span>Executive Summary</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">06</span>
                <span>Demonstrated Implementations and Measured Performance</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">02</span>
                <span>Product Boundary and Integration Scope</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">07</span>
                <span>Ecosystem Integration</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">03</span>
                <span>Execution, Timing, and Measurement Contract</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">08</span>
                <span>Target Applications</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">04</span>
                <span>Core Technical Architecture</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">09</span>
                <span>Conclusion</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">05</span>
                <span>Deployment Workflow and Integration Model</span>
              </div>
              <div className="wp-toc-item">
                <span className="wp-toc-num">A</span>
                <span>Appendix A — Benchmark Scope and Measurement Summary</span>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="wp-body-section">
            {/* Section 01 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 01</div>
              <div className="wp-ch-title">Executive Summary</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is the software deployment tier of the AltiCore
                product family, providing model training and inference on
                existing general-purpose compute systems. Built on the AltiCore
                mathematical framework, AltiCoreSWP is not a conventional
                neural-network runtime and does not rely primarily on
                tensor-centric floating-point execution. Instead, trained models
                are executed through logic-dominant operator chains implemented
                largely with hardware-native logical operations, with bounded
                arithmetic where required.
              </p>
              <p>
                AltiCoreSWP is engineered for CPU-first deployment on standard
                compute infrastructure. It is intended to deliver high sustained
                inference throughput on supported systems without requiring an
                NPU, cloud inference service, or hardware modification to the
                host platform. Within the same framework, AltiCoreSWP supports
                model training and inference for supported software targets.
              </p>
              <p>
                In a CPU-only benchmark across seven public datasets and two
                AVX2-capable x86 platforms, AltiCoreSWP delivered a large and
                consistent throughput advantage over the fastest neural-network
                CPU implementation tested (TensorFlow Lite with XNNPACK). Under
                the stated benchmark conditions, observed speedups were typically
                approximately 13× on the workstation-class CPU (range
                approximately 6.7× to 21×) and typically approximately 17× on
                the server-class CPU (range approximately 9.1× to 27.6×). These
                are measured benchmark results under defined conditions, not
                universal guarantees for every workload, model shape, or
                deployment environment.
              </p>
              <div className="wp-callout">
                <div className="wp-callout-title">Key Benefits</div>
                <ul>
                  <li>CPU-first deployment on existing infrastructure</li>
                  <li>
                    High sustained inference throughput for structured
                    decisioning workloads
                  </li>
                  <li>
                    Reduced arithmetic intensity relative to conventional
                    neural-network CPU inference
                  </li>
                  <li>
                    Standard software integration through C/C++ and Python
                    workflows
                  </li>
                  <li>Training and inference within a common framework</li>
                </ul>
              </div>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 02 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 02</div>
              <div className="wp-ch-title">
                Product Boundary and Integration Scope
              </div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is delivered as a software execution platform for
                supported general-purpose compute targets. Depending on
                deployment mode, the product boundary consists of:
              </p>
              <ol>
                <li>
                  the AltiCore model training workflow and artifact generation
                  process,
                </li>
                <li>
                  the software runtime and/or compiled execution artifact used
                  to execute trained AltiCore models, and
                </li>
                <li>
                  the inference and, where applicable, training interfaces
                  exposed to the surrounding application or service.
                </li>
              </ol>
              <p>
                AltiCoreSWP makes no architectural assumptions about the
                surrounding software system beyond standard integration
                requirements. It may be integrated into standalone applications,
                libraries, services, or batch-processing pipelines as supported
                by the target platform.
              </p>
              <p>
                System-level responsibilities remain outside the AltiCoreSWP
                product boundary and are the responsibility of the integrator.
                These include application orchestration, data acquisition,
                feature engineering, storage, security, service topology,
                batching strategy, network transport, process lifecycle
                management, concurrency policy, observability, and end-to-end
                application latency.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 03 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 03</div>
              <div className="wp-ch-title">
                Execution, Timing, and Measurement Contract
              </div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is characterized primarily by sustained inference
                throughput on supported software targets. Unless otherwise
                stated, performance statements in this paper refer to CPU-only
                execution under defined benchmark conditions. Training
                performance, end-to-end application latency, and alternative
                platform realizations should be characterized separately.
              </p>

              <div className="wp-sub-title">3.1 &nbsp;Execution Model</div>
              <p>
                AltiCoreSWP executes trained models on the host CPU through
                standard software deployment workflows. CPU inference does not
                require hardware modification, an external NPU, or an off-device
                inference service.
              </p>

              <div className="wp-sub-title">
                3.2 &nbsp;Measurement Boundary
              </div>
              <p>
                In the demonstrated CPU benchmark, throughput is measured in
                inferences per second over the timed inference region only.
                Input preparation, model loading and initialization,
                output-buffer allocation, and warm-up are performed outside the
                timed region. Reported figures therefore represent sustained
                compute throughput under the stated test conditions, not
                end-to-end application throughput.
              </p>

              <div className="wp-sub-title">
                3.3 &nbsp;Variability and Integration Responsibility
              </div>
              <p>
                Observed performance depends on the specific trained model being
                executed, compiler and runtime configuration, batch size, thread
                settings, memory placement, host platform, operating-system
                scheduling, and surrounding application architecture. Because
                AltiCoreSWP runs on general-purpose compute systems, wall-clock
                latency is not cycle-constant, and final end-to-end performance
                remains a system-integration responsibility.
              </p>

              <div className="wp-sub-title">3.4 &nbsp;Platform Scope</div>
              <p>
                The demonstrated benchmark results summarized in this paper are
                based on AVX2-capable x86 CPU systems. Other supported targets,
                optimizations, or deployment modes should be specified separately
                and should not be inferred from the CPU benchmark data alone.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 04 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 04</div>
              <div className="wp-ch-title">Core Technical Architecture</div>
              <div className="wp-ch-rule"></div>

              <div className="wp-sub-title">
                4.1 &nbsp;Logic-Dominant Computation
              </div>
              <p>
                AltiCoreSWP executes trained models through logic-dominant
                operator chains rather than conventional tensor-centric
                neural-network execution. Runtime behavior relies primarily on
                hardware-native logical operations, with bounded arithmetic where
                required. This reduces arithmetic intensity relative to
                conventional neural-network CPU inference and aligns execution
                with standard general-purpose processors.
              </p>

              <div className="wp-sub-title">
                4.2 &nbsp;Compact Model Footprint and Reduced Arithmetic Work
              </div>
              <p>
                At its current demonstrated stage, AltiCoreSWP shows its
                strongest value on compact, low-parameter models. In the
                seven-dataset CPU benchmark described in this paper, the selected
                AltiCoreSWP models were substantially smaller than the selected
                multilayer perceptron (MLP) baselines, using approximately 35×
                to 301× fewer parameters and approximately 40× to 343× fewer
                arithmetic operations per inference, depending on dataset.
              </p>
              <p>
                These structural differences reduce the amount of work performed
                per inference and provide the technical basis for the throughput
                advantage observed in the benchmark. These figures are
                benchmark-specific and should not be interpreted as universal
                ratios for all model classes or deployment scenarios.
              </p>

              <div className="wp-sub-title">
                4.3 &nbsp;Variable Usage and Deployment Reach
              </div>
              <p>
                The AltiCoreSWP training workflow naturally identifies and
                retains the variables that contribute most to model performance
                as a consequence of its training and model-selection process,
                without requiring a separate explicit feature-selection
                preprocessing stage. In the benchmark suite, the selected
                AltiCoreSWP models used no more input variables than the compared
                MLP models and, in most datasets, used fewer.
              </p>
              <p>
                Operationally, reduced input requirements can lower upstream data
                dependencies and simplify deployment in environments where signal
                availability, data-pipeline complexity, or integration cost are
                limiting factors.
              </p>

              <div className="wp-sub-title">
                4.4 &nbsp;Unified Training and Inference Framework
              </div>
              <p>
                AltiCoreSWP supports both model training and inference within
                the same underlying framework. A model can be developed,
                trained, evaluated, and deployed within a common AltiCore
                workflow, while the final software realization is matched to the
                intended target environment and integration path.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 05 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 05</div>
              <div className="wp-ch-title">
                Deployment Workflow and Integration Model
              </div>
              <div className="wp-ch-rule"></div>

              <div className="wp-sub-title">
                5.1 &nbsp;Data Ingestion and Model Training
              </div>
              <p>
                A labeled dataset is ingested through AltiCore tooling using
                supported software workflows, including file-based and
                API-mediated inputs where applicable. Model training is performed
                within the AltiCore framework on supported compute platforms.
              </p>

              <div className="wp-sub-title">
                5.2 &nbsp;Model Shape Selection
              </div>
              <p>
                For AltiCoreSWP, model shape is a user-selected hyperparameter.
                Specific shape values are chosen according to the desired balance
                of model capability, complexity, resource consumption, and
                deployment objectives, in a manner analogous to shape-variant
                model selection in other algorithm families. Candidate model
                shapes may therefore be evaluated and compared within the
                AltiCore workflow before selecting the deployment model.
              </p>

              <div className="wp-sub-title">
                5.3 &nbsp;Command-Line Training and Inference Tools
              </div>
              <p>
                AltiCoreSWP provides command-line tools for both training and
                inference. These tools allow users to train models, execute
                inference, and evaluate performance without requiring custom
                application development, making them suitable for rapid
                evaluation, benchmarking, and development-free deployment
                workflows.
              </p>
              <p>
                On supported platforms, the supplied command-line binaries are
                implemented as heavily optimized, multithreaded executables
                designed to utilize available parallel compute resources
                effectively out of the box.
              </p>

              <div className="wp-sub-title">
                5.4 &nbsp;Software Realization and Application Integration
              </div>
              <p>
                In addition to command-line execution, AltiCoreSWP integrates
                into standard software toolchains and may be used through C/C++
                and other workflows, depending on the deployment path. The
                selected model is realized as an AltiCoreSWP software deployment
                artifact matched to the intended runtime environment.
              </p>
              <p>
                Application-specific responsibilities — including feature
                acquisition, batching policy, service orchestration, security,
                observability, and end-to-end latency management — remain outside
                the AltiCoreSWP runtime boundary and are the responsibility of
                the integrator.
              </p>

              <div className="wp-sub-title">
                5.5 &nbsp;Deployment and Scale-Out
              </div>
              <p>
                The resulting runtime can be deployed on supported workstation-
                and server-class systems using conventional software deployment
                methods. Horizontal scale-out across processes, services, or
                nodes is handled by the surrounding application and
                infrastructure architecture rather than by the AltiCoreSWP
                runtime itself.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 06 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 06</div>
              <div className="wp-ch-title">
                Demonstrated Implementations and Measured Performance
              </div>
              <div className="wp-ch-rule"></div>

              <p>
                AltiCoreSWP&apos;s logic-dominant execution model translates into
                measured, order-of-magnitude throughput advantages on standard
                CPU infrastructure. In the AltiCoreSWP Benchmark Report v6.0,
                conducted jointly by EvoChip and SidePath, AltiCoreSWP was
                evaluated against multiple widely used neural-network CPU
                inference implementations across seven public datasets on two
                AVX2-capable x86 systems.
              </p>
              <p>
                Across the demonstrated benchmark scope, AltiCoreSWP delivered
                higher throughput than the fastest neural-network CPU
                implementation tested in every dataset included in the report.
              </p>

              <div className="wp-sub-title">
                6.1 &nbsp;Demonstrated Benchmark Results
              </div>

              <div className="wp-stat-bar">
                <div className="wp-stat">
                  <div className="wp-stat-val">225–361M</div>
                  <div className="wp-stat-lbl">Inf/sec — Workstation</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">472–575M</div>
                  <div className="wp-stat-lbl">Inf/sec — Server</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">~13×</div>
                  <div className="wp-stat-lbl">Typical speedup (WS)</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">27.6×</div>
                  <div className="wp-stat-lbl">Peak observed speedup</div>
                </div>
              </div>

              <table className="wp-bench-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>CPU</th>
                    <th>Observed AltiCoreSWP Throughput</th>
                    <th>Relative Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Workstation-class</td>
                    <td>Intel Core i7-13700H</td>
                    <td>
                      <strong>~225–361 M</strong> inf/sec
                    </td>
                    <td>typically ~13×, range ~6.7×–21×</td>
                  </tr>
                  <tr>
                    <td>Server-class</td>
                    <td>Intel Xeon Gold 5416S</td>
                    <td>
                      <strong>~472–575 M</strong> inf/sec
                    </td>
                    <td>typically ~17×, range ~9.1×–27.6×</td>
                  </tr>
                </tbody>
              </table>

              <div className="wp-sub-title">
                6.2 &nbsp;Out-of-the-Box Benchmark Realization
              </div>
              <p>
                The demonstrated benchmark results were produced using the
                standard AltiCoreSWP-supplied command-line binaries for training
                and inference. No customer-specific development work,
                model-serving integration work, or benchmark-specific application
                engineering was required to obtain the reported AltiCoreSWP
                results.
              </p>
              <p>
                The supplied command-line tools are heavily optimized for
                multithreaded execution and are designed to utilize available
                parallel compute resources on supported platforms out of the box.
              </p>

              <div className="wp-sub-title">6.3 &nbsp;Benchmark Reference</div>
              <p>
                Detailed methodology, dataset-level results, baseline
                definitions, hardware configuration, and measurement procedures
                are documented in the AltiCoreSWP Benchmark Report v6.0.
                Performance claims in this white paper summarize the demonstrated
                results reported there.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 07 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 07</div>
              <div className="wp-ch-title">Ecosystem Integration</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is one deployment tier within the broader AltiCore
                product family. Alongside AltiCoreMCU and AltiCoreHDL, it is
                built on the same underlying AltiCore mathematical framework,
                allowing model development and training to proceed within a
                common technical foundation across software, constrained
                embedded, and hardware-integrated targets.
              </p>
              <p>
                Within that ecosystem, each tier delivers the framework in a
                target-specific form:
              </p>
              <ul className="wp-eco-list">
                <li>
                  <strong>AltiCoreSWP</strong> for general-purpose software
                  training and inference,
                </li>
                <li>
                  <strong>AltiCoreMCU</strong> for constrained MCU-class
                  deployment through validated runtime templates and static
                  parameter blocks, and
                </li>
                <li>
                  <strong>AltiCoreHDL</strong> for FPGA and ASIC realization as
                  deterministic hardware logic.
                </li>
              </ul>
              <p>
                A model developed within AltiCore tooling can, where a
                corresponding supported deployment realization exists, be carried
                into the delivery tier that best matches the system constraint
                profile.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 08 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 08</div>
              <div className="wp-ch-title">Target Applications</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is presently best matched to CPU-first,
                high-throughput structured decisioning workloads where inference
                cost, deployment simplicity, and predictable compute behavior are
                primary requirements, including:
              </p>

              <div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Risk screening and fraud detection
                  </div>
                  <p>
                    High-volume decisioning workloads where throughput directly
                    affects capacity and cost per decision.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Industrial monitoring and operational
                    classification
                  </div>
                  <p>
                    Structured inference tasks where sustained CPU throughput and
                    deployment simplicity matter more than accelerator-centric
                    execution.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>On-premises and security-sensitive deployments
                  </div>
                  <p>
                    Environments where organizations prefer inference to remain
                    inside standard CPU-based infrastructure without mandatory
                    dependency on external AI accelerators or cloud inference
                    services.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Capacity-bound inference services
                  </div>
                  <p>
                    Systems in which inference is a meaningful operating expense
                    and higher inferences-per-second directly improve server
                    utilization and unit economics.
                  </p>
                </div>
              </div>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 09 */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Section 09</div>
              <div className="wp-ch-title">Conclusion</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreSWP is a CPU-first software runtime built on the
                AltiCore mathematical framework. By executing trained models
                through logic-dominant operator chains with reduced arithmetic
                intensity relative to conventional neural-network CPU inference,
                it provides a practical path to higher sustained throughput on
                existing general-purpose compute infrastructure.
              </p>
              <p>
                In the demonstrated seven-dataset CPU benchmark summarized in
                this paper, AltiCoreSWP delivered a large and consistent
                throughput advantage over the fastest neural-network CPU
                implementation tested, with typical observed speedups of
                approximately 13× on the workstation-class platform and
                approximately 17× on the server-class platform, and a peak
                observed speedup of 27.6× under the stated benchmark conditions.
              </p>
              <p>
                These results are configuration-specific, but they support the
                central conclusion: AltiCoreSWP provides a production-relevant
                software deployment pathway for structured workloads where CPU
                throughput, deployment simplicity, and unit economics are primary
                requirements.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Appendix A */}
            <div className="wp-chapter">
              <div className="wp-ch-number">Appendix A</div>
              <div className="wp-ch-title">
                Benchmark Scope and Measurement Summary
              </div>
              <div className="wp-ch-rule"></div>

              <div className="wp-sub-title">A.1 &nbsp;Purpose and Scope</div>
              <p>
                This white paper summarizes performance results reported in the{" "}
                <strong>AltiCoreSWP Benchmark Report v6.0</strong>, a joint
                benchmark initiative conducted by EvoChip and SidePath. The
                benchmark measured{" "}
                <strong>maximum sustained CPU inference throughput</strong>,
                reported in <strong>inferences per second</strong>, across seven
                public datasets on two AVX2-capable x86 systems.
              </p>
              <p>
                Throughout the benchmark, one input row corresponds to one
                inference. The benchmark objective was{" "}
                <strong>
                  relative throughput comparison under CPU-only conditions
                </strong>
                . End-to-end application latency, GPU-accelerated
                neural-network performance, and full service-level deployment
                behavior were outside the benchmark scope.
              </p>

              <div className="wp-sub-title">
                A.2 &nbsp;Systems Under Test
              </div>
              <p>
                The demonstrated benchmark was executed on two general-purpose
                CPU platforms:
              </p>
              <ul className="wp-eco-list">
                <li>
                  <strong>Workstation-class system:</strong> Intel Core
                  i7-13700H, 32 GB RAM
                </li>
                <li>
                  <strong>Server-class system:</strong> Intel Xeon Gold 5416S,
                  64 GB RAM
                </li>
              </ul>
              <p>
                All evaluated methods used AVX2-capable CPU execution paths.
                Although the server platform supported AVX512,{" "}
                <strong>AVX512 was not used</strong> in the reported benchmark
                results.
              </p>

              <div className="wp-sub-title">
                A.3 &nbsp;Inference Methods Evaluated
              </div>
              <p>
                For each dataset and hardware platform, AltiCoreSWP was compared
                against multiple CPU implementations of a neural-network
                baseline. The evaluated methods included:
              </p>
              <ul className="wp-eco-list">
                <li>Python TensorFlow/Keras baseline</li>
                <li>Multithreaded Python TensorFlow/Keras</li>
                <li>C++ TensorFlow Lite with XNNPACK</li>
                <li>
                  C++ TensorFlow Lite with application-managed RUY-based
                  parallelism
                </li>
                <li>Multithreaded AltiCoreSWP execution</li>
              </ul>
              <p>
                Within the demonstrated benchmark scope, the{" "}
                <strong>fastest neural-network CPU implementation tested</strong>{" "}
                was <strong>C++ TensorFlow Lite with XNNPACK</strong>.
              </p>

              <div className="wp-sub-title">
                A.4 &nbsp;Timed Region and Throughput Definition
              </div>
              <p>
                Throughput was measured{" "}
                <strong>only over the timed inference region</strong>. The
                following activities were performed outside the timed region:
                input preparation, model loading and initialization,
                output-buffer allocation, and warm-up execution.
              </p>
              <p>
                Throughput was computed as:{" "}
                <strong>Throughput (inferences/sec) = N / t</strong>, where{" "}
                <strong>N</strong> = number of rows processed and{" "}
                <strong>t</strong> = elapsed time in seconds. Because each input
                row represents one inference,{" "}
                <strong>rows per second</strong> and{" "}
                <strong>inferences per second</strong> are equivalent in this
                benchmark.
              </p>

              <div className="wp-sub-title">A.5 &nbsp;Replicate Protocol</div>
              <p>
                Each unique{" "}
                <strong>hardware / dataset / method</strong> configuration was
                executed as{" "}
                <strong>five independent process launches</strong>. Reported
                benchmark results use the{" "}
                <strong>median throughput</strong> across those five runs for
                each configuration.
              </p>
              <p>
                This protocol was intended to characterize sustained compute
                throughput under repeatable CPU-only test conditions rather than
                single-run best-case behavior.
              </p>

              <div className="wp-sub-title">
                A.6 &nbsp;Out-of-the-Box AltiCoreSWP Realization
              </div>
              <p>
                The AltiCoreSWP results summarized in this white paper were
                produced using the standard{" "}
                <strong>AltiCoreSWP-supplied command-line binaries</strong> for
                training and inference.
              </p>
              <p>
                No customer-specific development work, model-serving integration
                work, or benchmark-specific application engineering was required
                to obtain the reported AltiCoreSWP results. The supplied
                command-line tools are heavily optimized, multithreaded
                executables designed to utilize available parallel compute
                resources on supported platforms out of the box.
              </p>

              <div className="wp-sub-title">
                A.7 &nbsp;Summary of Reported Benchmark Results
              </div>
              <p>Under the demonstrated benchmark conditions:</p>
              <ul className="wp-eco-list">
                <li>
                  On the <strong>workstation-class platform</strong>,
                  AltiCoreSWP sustained approximately{" "}
                  <strong>225 to 361 million inferences per second</strong>,
                  depending on dataset, and was typically approximately{" "}
                  <strong>13× faster</strong> than the fastest neural-network
                  CPU implementation tested, with observed speedups ranging from
                  approximately <strong>6.7× to 21×</strong>.
                </li>
                <li>
                  On the <strong>server-class platform</strong>, AltiCoreSWP
                  sustained approximately{" "}
                  <strong>472 to 575 million inferences per second</strong>,
                  depending on dataset, and was typically approximately{" "}
                  <strong>17× faster</strong> than the fastest neural-network
                  CPU implementation tested, with observed speedups ranging from
                  approximately <strong>9.1× to 27.6×</strong>.
                </li>
                <li>
                  The <strong>peak observed speedup</strong> reported in the
                  benchmark was <strong>27.6×</strong>.
                </li>
              </ul>

              <div className="wp-sub-title">
                A.8 &nbsp;Interpretation Boundary
              </div>
              <p>
                The benchmark establishes demonstrated{" "}
                <strong>sustained CPU inference throughput</strong> under the
                stated conditions. It does <strong>not</strong> characterize:
                end-to-end service latency, network transport, storage or
                database behavior, feature-pipeline overhead, application
                orchestration effects, or full deployment-level SLA performance.
              </p>
              <p>
                Detailed methodology, hardware configuration, baseline
                definitions, dataset-level results, and measurement procedures
                are documented in the{" "}
                <strong>AltiCoreSWP Benchmark Report v6.0</strong>. Performance
                statements in this white paper summarize the demonstrated results
                reported there.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="wp-doc-footer">
            <span>
              <strong>EvoChip.ai</strong> — AltiCoreSWP Technical White Paper
            </span>
            <span>Version 1.0 &nbsp;|&nbsp; February 2026 &nbsp;|&nbsp; Public Distribution</span>
            <span>© 2026 EvoChip.ai. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}
