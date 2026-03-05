import Link from "next/link";

export default function MCUWhitePaper() {
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
        .wp-toc-item { display: flex; align-items: baseline; gap: 8px; font-size: 13px; color: #1a2744; text-decoration: none; }
        .wp-toc-item:hover span:last-child { text-decoration: underline; color: #c8923a; }
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

        /* numbered list */
        .wp-num-list { list-style: none; padding: 0; margin: 16px 0; display: flex; flex-direction: column; gap: 10px; }
        .wp-num-list li { display: flex; align-items: baseline; gap: 12px; font-size: 13.5px; color: #1e1e2e; }
        .wp-num-badge { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: #1a2744; color: #fff; font-size: 11px; font-weight: 700; flex-shrink: 0; }

        /* stat bar */
        .wp-stat-bar { background: #1a2744; color: #fff; border-radius: 4px; padding: 20px 24px; margin: 24px 0; display: flex; gap: 16px; align-items: center; flex-wrap: nowrap; justify-content: space-between; }
        .wp-stat { text-align: center; flex: 1; }
        .wp-stat-val { font-size: 24px; font-weight: 700; color: #e8b96a; line-height: 1; white-space: nowrap; }
        .wp-stat-lbl { font-size: 10px; letter-spacing: .04em; text-transform: uppercase; color: rgba(255,255,255,.6); margin-top: 4px; white-space: nowrap; }
        .wp-stat-div { width: 1px; background: rgba(255,255,255,.2); height: 44px; flex-shrink: 0; }

        /* app list */
        .wp-app-item { margin-bottom: 20px; }
        .wp-app-item-title { font-weight: 700; font-size: 13.5px; color: #1a2744; margin-bottom: 4px; }
        .wp-app-item-title span { color: #c8923a; margin-right: 6px; }

        /* eco list */
        .wp-eco-list { list-style: none; padding: 0; margin: 16px 0; }
        .wp-eco-list li { position: relative; padding-left: 20px; margin-bottom: 10px; font-size: 13.5px; }
        .wp-eco-list li::before { content: '▸'; position: absolute; left: 0; color: #c8923a; font-size: 12px; top: 1px; }
        .wp-eco-list li strong { color: #223060; }

        .wp-ch-divider { border: none; border-top: 1px solid #c8d0df; margin: 48px 0 0; }

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
              <div className="wp-cover-title">AltiCoreMCU</div>
              <div className="wp-cover-sub">
                Embedded AI Runtime for Resource-Constrained Devices
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
              <a href="#section-01" className="wp-toc-item">
                <span className="wp-toc-num">01</span>
                <span>Executive Summary</span>
              </a>
              <a href="#section-05" className="wp-toc-item">
                <span className="wp-toc-num">05</span>
                <span>Deployment Workflow and Integration Model</span>
              </a>
              <a href="#section-02" className="wp-toc-item">
                <span className="wp-toc-num">02</span>
                <span>Product Boundary and Integration Scope</span>
              </a>
              <a href="#section-06" className="wp-toc-item">
                <span className="wp-toc-num">06</span>
                <span>Demonstrated Implementations and Measured Performance</span>
              </a>
              <a href="#section-03" className="wp-toc-item">
                <span className="wp-toc-num">03</span>
                <span>Runtime Execution, Timing, and Memory Contract</span>
              </a>
              <a href="#section-07" className="wp-toc-item">
                <span className="wp-toc-num">07</span>
                <span>Ecosystem Integration</span>
              </a>
              <a href="#section-04" className="wp-toc-item">
                <span className="wp-toc-num">04</span>
                <span>Core Technical Architecture</span>
              </a>
              <a href="#section-08" className="wp-toc-item">
                <span className="wp-toc-num">08</span>
                <span>Target Applications</span>
              </a>
              <div className="wp-toc-item" style={{ gridColumn: "1 / -1" }}></div>
              <a href="#section-09" className="wp-toc-item">
                <span className="wp-toc-num">09</span>
                <span>Conclusion</span>
              </a>
            </div>
          </div>

          {/* BODY */}
          <div className="wp-body-section">
            {/* Section 01 */}
            <div className="wp-chapter" id="section-01">
              <div className="wp-ch-number">Section 01</div>
              <div className="wp-ch-title">Executive Summary</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreMCU is the MCU deployment tier of the AltiCore product
                family, providing hand-designed, validated inference runtime
                templates for supported MCU-class targets. Models are trained
                within the AltiCore mathematical framework, and the training
                process produces model parameter values that are compiled into a
                statically allocated parameter block matched to the selected
                runtime template. No new inference code is synthesized during
                deployment.
              </p>
              <p>
                AltiCoreMCU is designed for resource-constrained processors
                where dynamic memory allocation, variable execution timing, and
                dependence on specialized accelerators are unacceptable. It is
                not a conventional neural-network runtime and does not rely on
                tensor-centric floating-point execution. Instead, inference is
                executed through logic-dominant operator chains implemented
                primarily with hardware-native bitwise operations, with bounded
                integer arithmetic where required.
              </p>
              <p>
                For supported targets, AltiCoreMCU aligns to native word widths
                across 8-bit, 16-bit, 32-bit, 64-bit, and custom architectures,
                without requiring cloud connectivity, an external neural
                processing unit (NPU), or other dedicated AI accelerators for
                local inference. On compatible platforms, the same framework can
                also support on-device training or model-update flows where
                memory and compute headroom permit.
              </p>
              <p>
                Current collateral cites example benchmark configurations with
                model-state / parameter RAM as low as 521 bytes and
                approximately 9,000 inferences per second at 16 MHz. These
                figures are configuration-specific and should be interpreted
                within the benchmark conditions and memory definitions stated in
                this paper.
              </p>
              <div className="wp-callout">
                <div className="wp-callout-title">Key Benefits</div>
                <ul>
                  <li>
                    Zero dynamic memory allocation with statically bounded
                    runtime memory
                  </li>
                  <li>
                    Deterministic execution profile suitable for real-time
                    embedded integration
                  </li>
                  <li>
                    Validated runtime templates for standard embedded toolchains
                  </li>
                  <li>
                    Native word-width targeting across 8-bit, 16-bit, 32-bit,
                    64-bit, and custom architectures
                  </li>
                  <li>
                    No NPU, accelerator, or cloud dependency for local inference
                  </li>
                  <li>
                    Optional on-device training where memory and compute
                    capacity permit
                  </li>
                </ul>
              </div>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 02 */}
            <div className="wp-chapter" id="section-02">
              <div className="wp-ch-number">Section 02</div>
              <div className="wp-ch-title">
                Product Boundary and Integration Scope
              </div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreMCU is delivered as a set of hand-designed, validated
                inference runtime templates for supported model shapes and target
                platforms. Model training does not synthesize new executable
                inference code. Instead, the training process produces model
                parameter values, which are compiled into a statically allocated
                parameter block matched to the selected runtime template.
              </p>
              <p>The product boundary therefore consists of:</p>
              <ul className="wp-num-list">
                <li>
                  <span className="wp-num-badge">1</span>
                  <span>the validated inference runtime template</span>
                </li>
                <li>
                  <span className="wp-num-badge">2</span>
                  <span>
                    the static model parameter block consumed by that runtime
                  </span>
                </li>
                <li>
                  <span className="wp-num-badge">3</span>
                  <span>
                    the inference function interface exposed to the surrounding
                    firmware
                  </span>
                </li>
              </ul>
              <p>
                AltiCoreMCU makes no assumptions about the surrounding firmware
                architecture beyond standard embedded integration. It may be
                used in bare-metal systems or under an RTOS. System-level
                responsibilities including sensor acquisition, interrupt
                handling, peripheral I/O, DMA behavior, buffering strategy,
                watchdog policy, task scheduling, and end-to-end application
                latency remain outside the AltiCoreMCU runtime boundary and are
                the responsibility of the integrator.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 03 */}
            <div className="wp-chapter" id="section-03">
              <div className="wp-ch-number">Section 03</div>
              <div className="wp-ch-title">
                Runtime Execution, Timing, and Memory Contract
              </div>
              <div className="wp-ch-rule"></div>
              <p>
                Unless otherwise stated, this section describes baseline
                inference operation using a validated runtime template and its
                associated static parameter block. Optional on-device training
                or update flows, where supported, should be characterized
                separately.
              </p>

              <div className="wp-sub-title">
                3.1 &nbsp;Static Memory Guarantee
              </div>
              <p>
                AltiCoreMCU inference uses zero dynamic memory allocation. The
                inference runtime does not require malloc(), free(), or heap
                allocation during inference. Trained model parameter values are
                compiled into static storage, and the runtime operates by
                referencing that statically allocated parameter block during
                execution.
              </p>
              <p>
                For a given runtime template, model shape, and target build
                configuration, the required parameter-state memory can be
                established prior to deployment. This eliminates inference-time
                heap fragmentation risk and removes heap-exhaustion failure modes
                from the AltiCoreMCU inference path itself.
              </p>
              <p>
                Because deployment varies parameter data, not executable
                inference logic, the deployed code path remains within a
                pre-validated template set. Per-model variation is therefore
                confined to the statically compiled parameter block rather than
                model-specific generated source code.
              </p>

              <div className="wp-sub-title">
                3.2 &nbsp;Deterministic Timing
              </div>
              <p>
                For a fixed runtime template, model shape, parameter block,
                compiler configuration, and target platform, AltiCoreMCU
                executes according to a static inference schedule. This supports
                repeatable execution-time characterization at the
                inference-function boundary and enables bounded integration into
                time-constrained embedded systems.
              </p>
              <p>
                End-to-end real-time behavior remains dependent on
                platform-specific factors such as clocking, memory placement,
                wait states, cache behavior where applicable, and interrupt or
                preemption policy. Final schedule remains a system-integration
                responsibility.
              </p>

              <div className="wp-sub-title">
                3.3 &nbsp;No Cloud or NPU Dependency
              </div>
              <p>
                AltiCoreMCU inference executes entirely on the host MCU or CPU.
                It requires no cloud connectivity, no off-device inference
                service, and no external NPU or AI coprocessor.
              </p>

              <div className="wp-sub-title">
                3.4 &nbsp;Validation Boundary
              </div>
              <p>
                AltiCoreMCU deployment does not introduce newly synthesized
                inference code into the executable path. The deployed logic is
                selected from hand-designed, previously validated runtime
                templates; only the statically compiled model parameter block
                changes between trained models. This distinction is central to
                regression control, qualification, and controlled deployment in
                embedded environments.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 04 */}
            <div className="wp-chapter" id="section-04">
              <div className="wp-ch-number">Section 04</div>
              <div className="wp-ch-title">Core Technical Architecture</div>
              <div className="wp-ch-rule"></div>

              <div className="wp-sub-title">
                4.1 &nbsp;Logic-Dominant Computation
              </div>
              <p>
                AltiCoreMCU implements inference through logic-dominant operator
                chains rather than conventional arithmetic-heavy neural-network
                execution. Runtime behavior relies primarily on hardware-native
                bitwise and discrete logic operations, with bounded integer
                arithmetic where required. This reduces arithmetic intensity and
                aligns execution with MCU-class processors operating under tight
                memory, timing, and power constraints.
              </p>

              <div className="wp-sub-title">
                4.2 &nbsp;Template-Based Runtime Realization
              </div>
              <p>
                AltiCoreMCU uses hand-designed and validated runtime templates
                for supported model shapes and target platforms. Training does
                not generate new inference code. Instead, it produces the
                parameter values required by the selected template.
              </p>
              <p>
                At build time, the validated runtime template is combined with
                the trained static parameter block. During inference, the
                runtime reads that block to execute the model. This preserves a
                fixed, validated executable implementation while allowing
                deployed models to vary through parameterization alone.
              </p>

              <div className="wp-sub-title">
                4.3 &nbsp;Native Word-Width and Platform Matching
              </div>
              <p>
                The underlying AltiCore mathematical framework is not bound to a
                single tensor datatype or fixed accelerator format. AltiCoreMCU
                can therefore be realized across supported 8-bit, 16-bit, 32-bit,
                64-bit, and custom word-width targets using templates aligned to
                the native register and integration constraints of the host
                platform.
              </p>

              <div className="wp-sub-title">
                4.4 &nbsp;Optional Local Training
              </div>
              <p>
                Where supported, and where memory and compute headroom permit,
                AltiCoreMCU can support on-device training or local model
                updates. These capabilities are configuration-dependent and
                should be specified separately from the baseline inference
                runtime in terms of RAM consumption, persistent state, execution
                time, and deployment constraints.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 05 */}
            <div className="wp-chapter" id="section-05">
              <div className="wp-ch-number">Section 05</div>
              <div className="wp-ch-title">
                Deployment Workflow and Integration Model
              </div>
              <div className="wp-ch-rule"></div>

              <div className="wp-sub-title">
                5.1 &nbsp;Data Ingestion and Model Training
              </div>
              <p>
                A labeled training dataset is provided to the AltiCore training
                framework through CSV or API input. Training produces the
                parameter values associated with the target model shape within
                the AltiCore mathematical framework.
              </p>

              <div className="wp-sub-title">
                5.2 &nbsp;Runtime Template Selection
              </div>
              <p>
                For the intended deployment target, a hand-designed and
                validated inference runtime template is selected based on the
                supported model shape and platform characteristics.
              </p>

              <div className="wp-sub-title">
                5.3 &nbsp;Static Parameter Block Integration
              </div>
              <p>
                The trained model parameter values are exported and compiled as a
                statically allocated parameter block matched to the selected
                runtime template. No new inference source code is synthesized
                during this step.
              </p>

              <div className="wp-sub-title">
                5.4 &nbsp;Firmware Integration
              </div>
              <p>
                The selected runtime template and its static parameter block are
                integrated into the target firmware using the standard embedded
                build flow and IDE toolchains. The runtime is invoked through a
                stable inference function interface, while application-specific
                concerns such as input acquisition, buffering, scheduling, and
                output handling remain outside the AltiCoreMCU runtime boundary.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 06 */}
            <div className="wp-chapter" id="section-06">
              <div className="wp-ch-number">Section 06</div>
              <div className="wp-ch-title">
                Demonstrated Implementations and Measured Performance
              </div>
              <div className="wp-ch-rule"></div>

              <div className="wp-stat-bar">
                <div className="wp-stat">
                  <div className="wp-stat-val">521 B</div>
                  <div className="wp-stat-lbl">Min. parameter RAM</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">~9,000</div>
                  <div className="wp-stat-lbl">Inferences / sec @ 16 MHz</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">Zero</div>
                  <div className="wp-stat-lbl">Dynamic allocation</div>
                </div>
                <div className="wp-stat-div"></div>
                <div className="wp-stat">
                  <div className="wp-stat-val">No NPU</div>
                  <div className="wp-stat-lbl">CPU-only operation</div>
                </div>
              </div>

              <p>
                In benchmark example configurations, AltiCoreMCU has demonstrated
                model parameter / model-state RAM as low as 521 bytes and
                observed local inference throughput of approximately 9,000
                inferences per second at 16 MHz. These measured results are
                consistent with the AltiCoreMCU execution profile of zero dynamic
                allocation, deterministic execution, and CPU-only operation
                without cloud connectivity or external NPUs.
              </p>
              <p>
                These figures are benchmark results for specific model shapes,
                parameter blocks, runtime templates, and target-platform
                configurations. They are not universal guarantees for every
                AltiCoreMCU deployment. The 521-byte figure refers specifically
                to static model parameter / model-state memory, not total
                application memory consumption, and observed throughput will
                vary with the selected template, target MCU architecture,
                compiler settings, memory placement, clock frequency, and
                surrounding firmware integration conditions.
              </p>
              <p>
                Taken together, these benchmark examples establish that
                AltiCoreMCU can deliver useful local inference within an
                extremely small static memory footprint, making it practical for
                MCU-class deployments where memory limits, execution
                predictability, and integration simplicity are primary design
                constraints.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 07 */}
            <div className="wp-chapter" id="section-07">
              <div className="wp-ch-number">Section 07</div>
              <div className="wp-ch-title">Ecosystem Integration</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreMCU is one deployment tier within the broader AltiCoreAI
                product family. Alongside AltiCoreSWP and AltiCoreHDL, it is
                built on the same underlying AltiCore mathematical framework,
                allowing model development and training to proceed within a
                common technical foundation across software, MCU, and
                hardware-integrated targets.
              </p>
              <p>
                Within that ecosystem, each tier delivers the framework in a
                target-specific form: AltiCoreSWP for general-purpose software
                execution, AltiCoreMCU for constrained MCU-class deployment, and
                AltiCoreHDL for FPGA and ASIC implementation. For AltiCoreMCU
                specifically, deployment is realized through validated runtime
                templates bound to statically compiled model parameter blocks,
                preserving a controlled and reviewable executable path for
                embedded integration.
              </p>
              <p>
                This shared foundation provides a coherent multi-target
                deployment pathway. A model developed within AltiCore tooling
                can, where a corresponding supported deployment realization
                exists, be carried into the delivery tier that best matches the
                system constraint profile: general-purpose software for
                development and evaluation, MCU deployment for
                resource-constrained embedded operation, and HDL implementation
                for deterministic hardware-integrated execution at larger scale.
              </p>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 08 */}
            <div className="wp-chapter" id="section-08">
              <div className="wp-ch-number">Section 08</div>
              <div className="wp-ch-title">Target Applications</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreMCU is engineered for deployments prioritizing
                deterministic execution, static memory behavior, and low-overhead
                local inference, including:
              </p>
              <div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Legacy platform extension and BOM preservation
                  </div>
                  <p>
                    Where existing MCU platforms need added local intelligence
                    without processor replacement or Bill of Materials (BOM)
                    change, including legacy 8-bit devices and modern embedded
                    processors alike.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Always-on monitoring (&ldquo;sentinel&rdquo;)
                  </div>
                  <p>
                    Low-overhead local inference used for continuous detection
                    and wake-on-event behavior, allowing a higher-power subsystem
                    to remain idle until intervention is required.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Safety- and compliance-sensitive embedded
                    systems
                  </div>
                  <p>
                    Where predictable execution timing, zero dynamic allocation,
                    and repeatable runtime behavior support integration into
                    real-time and assurance-sensitive products.
                  </p>
                </div>
                <div className="wp-app-item">
                  <div className="wp-app-item-title">
                    <span>▸</span>Constrained edge inference
                  </div>
                  <p>
                    Where latency, connectivity, cost, or operational simplicity
                    favor local inference over cloud-dependent execution,
                    especially for compact-model workloads on highly
                    resource-constrained devices.
                  </p>
                </div>
              </div>
            </div>

            <hr className="wp-ch-divider" />

            {/* Section 09 */}
            <div className="wp-chapter" id="section-09">
              <div className="wp-ch-number">Section 09</div>
              <div className="wp-ch-title">Conclusion</div>
              <div className="wp-ch-rule"></div>
              <p>
                AltiCoreMCU is a deterministic embedded inference runtime for
                MCU-class devices built on the AltiCore mathematical framework.
                In the deployment model described for this paper, trained models
                vary through statically compiled parameter blocks while inference
                executes through validated runtime templates, preserving a
                controlled executable boundary.
              </p>
              <p>
                The core technical differentiators are local CPU execution, zero
                dynamic memory allocation, no cloud or NPU dependency, and a
                logic-dominant compute profile aligned to constrained processors
                across a wide range of MCU word sizes.
              </p>
              <p>
                Current MCU collateral cites benchmark example configurations
                with parameter RAM as low as 521 bytes and observed throughput
                of approximately 9,000 inferences per second at 16 MHz. These
                figures are configuration-specific, but they support the core
                conclusion: AltiCoreMCU provides a practical path for deploying
                compact-model intelligence in embedded systems where memory
                bounds, predictable execution, and BOM stability are primary
                requirements.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="wp-doc-footer">
            <span>
              <strong>EvoChip.ai</strong> — AltiCoreMCU Technical White Paper
            </span>
            <span>Version 1.0 &nbsp;|&nbsp; February 2026 &nbsp;|&nbsp; Public Distribution</span>
            <span>© 2026 EvoChip.ai. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}
