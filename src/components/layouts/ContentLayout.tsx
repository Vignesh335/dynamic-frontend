// ContentLayouts.jsx
import React from "react";

/**
 * UNIVERSAL CONTENT PAYLOAD FORMAT
 * -------------------------------------------------------------------
 * const contentData = {
 *   title?: string,
 *   subtitle?: string,
 *   description?: string,
 *   stats?: [{ label, value }],
 *   cards?: [{ title, subtitle?, description?, image?, button? }],
 *   table?: { columns: string[], rows: string[][] },
 *   form?: [{ label, type, placeholder?, options?: string[] }],
 *   media?: { type: "image" | "video", src },
 *   timeline?: [{ title, description?, date }],
 *   steps?: [{ title, description }],
 *   chat?: [{ from: "me" | "other", message, time }],
 * };
 */

/**
 * MAIN COMPONENT
 * templateId 1–15
 */
export default function ContentLayouts({
    templateId = 15,
    data = {},
    width = "100%",
    maxWidth = "1100px",
    className = "",
}: any) {
    const Section = ({ children }: any) => (
        <div
            className={`mx-auto w-full ${className}`}
            style={{ maxWidth, width }}
        >
            {children}
        </div>
    );

    const TitleBlock = () => (
        <div className="mb-6">
            {data.title && (
                <h1 className="text-3xl font-semibold tracking-tight mb-1">
                    {data.title}
                </h1>
            )}
            {data.subtitle && (
                <p className="text-lg text-gray-400 mb-1">{data.subtitle}</p>
            )}
            {data.description && (
                <p className="text-sm text-gray-400 max-w-2xl">{data.description}</p>
            )}
        </div>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C1 — FULL-WIDTH CONTENT PAGE                             ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C1 = () => (
        <Section>
            <TitleBlock />
            {data.media?.type === "image" && (
                <img
                    src={data.media.src}
                    className="w-full rounded-lg shadow-xl mb-6 object-cover"
                    alt=""
                />
            )}
            {data.media?.type === "video" && (
                <video
                    controls
                    className="w-full rounded-lg shadow-xl mb-6"
                    src={data.media.src}
                />
            )}
            <div className="prose prose-invert max-w-none mt-4">
                {data.description || "Content area goes here..."}
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C2 — TWO-COLUMN SPLIT                                    ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C2 = () => (
        <Section>
            <TitleBlock />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    {data.description ||
                        "Left content goes here. Paragraphs / components / widgets."}
                </div>
                <div className="bg-[#1b1f28] rounded-xl p-5 shadow-lg border border-[#2a2e39]">
                    {data.stats ? (
                        <div className="grid grid-cols-2 gap-4">
                            {data.stats.map((s: any) => (
                                <div
                                    key={s.label}
                                    className="bg-[#262b36] p-4 rounded-xl shadow flex flex-col"
                                >
                                    <span className="text-2xl font-bold text-indigo-400">
                                        {s.value}
                                    </span>
                                    <span className="text-xs opacity-60">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        "Right content (summary / stats) here..."
                    )}
                </div>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C3 — CONTENT + SUMMARY SIDEBAR                           ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C3 = () => (
        <Section>
            <TitleBlock />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* MAIN CONTENT (2/3) */}
                <div className="lg:col-span-2">
                    {data.description || "Main content goes here"}
                    {data.media && (
                        <div className="mt-6">
                            {data.media.type === "image" ? (
                                <img
                                    src={data.media.src}
                                    className="w-full rounded-lg shadow-xl"
                                />
                            ) : (
                                <video
                                    controls
                                    src={data.media.src}
                                    className="rounded-lg shadow-xl w-full"
                                />
                            )}
                        </div>
                    )}
                </div>
                {/* SUMMARY PANEL (1/3) */}
                <div className="bg-[#1b1f28] rounded-xl p-6 shadow-xl border border-[#2a2e39]">
                    <h2 className="font-semibold text-lg mb-4">Summary</h2>
                    {data.stats ? (
                        <div className="space-y-4">
                            {data.stats.map((s: any) => (
                                <div key={s.label} className="flex items-center justify-between">
                                    <span className="opacity-70">{s.label}</span>
                                    <span className="text-indigo-400 font-semibold text-lg">
                                        {s.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        "Add stats[] to show structured summary"
                    )}
                </div>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C4 — CARD GRID / DASHBOARD                               ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C4 = () => (
        <Section>
            <TitleBlock />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.cards?.map((card: any, index: any) => (
                    <div
                        key={index}
                        className="bg-[#1b1f28] rounded-xl p-5 shadow-xl border border-[#2a2e39] flex flex-col"
                    >
                        {card.image && (
                            <img
                                src={card.image}
                                className="h-36 w-full object-cover rounded-lg mb-4"
                            />
                        )}
                        <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                        {card.subtitle && (
                            <p className="text-sm opacity-60 mb-2">{card.subtitle}</p>
                        )}
                        {card.description && (
                            <p className="text-sm opacity-80 flex-grow">{card.description}</p>
                        )}
                        {card.button && (
                            <button className="mt-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition">
                                {card.button}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
     ║  C5 — FORM LAYOUT                                         ║
     ╚══════════════════════════════════════════════════════════╝ */
    const C5 = () => (
        <Section>
            <TitleBlock />
            <div className="bg-[#1b1f28] rounded-2xl p-6 shadow-xl border border-[#2a2e39] max-w-2xl">
                <form className="space-y-4">
                    {data.form?.map((field: any, idx: any) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-200">
                                {field.label}
                            </label>
                            {field.type === "select" ? (
                                <select
                                    className="bg-[#131721] border border-[#2a2e39] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        {field.placeholder || "Select an option"}
                                    </option>
                                    {field.options?.map((opt: any) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type || "text"}
                                    placeholder={field.placeholder}
                                    className="bg-[#131721] border border-[#2a2e39] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="mt-4 inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-medium transition active:scale-95"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C6 — TABLE / LIST VIEW                                   ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C6 = () => (
        <Section>
            <TitleBlock />
            <div className="bg-[#1b1f28] rounded-2xl shadow-xl border border-[#2a2e39] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-[#151822]">
                            <tr>
                                {(data.table?.columns || []).map((col: any) => (
                                    <th
                                        key={col}
                                        className="px-4 py-3 text-left font-semibold text-gray-300"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {(data.table?.rows || []).map((row: any, idx: any) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? "bg-[#10131c]" : "bg-[#131721]"}
                                >
                                    {row.map((cell: any, cIdx: any) => (
                                        <td
                                            key={cIdx}
                                            className="px-4 py-2 text-gray-300 border-t border-[#1e2230]"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {!data.table?.rows?.length && (
                                <tr>
                                    <td
                                        className="px-4 py-4 text-center text-gray-500"
                                        colSpan={data.table?.columns?.length || 1}
                                    >
                                        No data available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C7 — KANBAN BOARD (using cards[].subtitle as column)     ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C7 = () => {
        // Group cards by subtitle as "status/column"
        const columnsMap = new Map();
        (data.cards || []).forEach((card: any) => {
            const colKey = card.subtitle || "Backlog";
            if (!columnsMap.has(colKey)) columnsMap.set(colKey, []);
            columnsMap.get(colKey).push(card);
        });
        const columnEntries = Array.from(columnsMap.entries());

        return (
            <Section>
                <TitleBlock />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {columnEntries.map(([colTitle, cards]) => (
                        <div
                            key={colTitle}
                            className="bg-[#1b1f28] rounded-2xl p-4 shadow-xl border border-[#2a2e39] flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold">{colTitle}</span>
                                <span className="text-xs text-gray-400">{cards.length}</span>
                            </div>
                            <div className="space-y-3">
                                {cards.map((card: any, idx: any) => (
                                    <div
                                        key={idx}
                                        className="bg-[#131721] rounded-xl p-3 border border-[#262b36] shadow-sm"
                                    >
                                        <div className="text-sm font-medium mb-1">
                                            {card.title}
                                        </div>
                                        {card.description && (
                                            <div className="text-xs text-gray-400 line-clamp-3">
                                                {card.description}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {!columnEntries.length && (
                        <div className="text-sm text-gray-500">
                            Add <code>cards[]</code> with <code>subtitle</code> to render
                            Kanban columns.
                        </div>
                    )}
                </div>
            </Section>
        );
    };

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C8 — STEPPER / WIZARD (using steps[])                    ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C8 = () => {
        const steps = data.steps || [];
        return (
            <Section>
                <TitleBlock />
                {/* Stepper header */}
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
                    {steps.map((step: any, idx: any) => {
                        const active = idx === 0;
                        return (
                            <div key={idx} className="flex items-center">
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-semibold ${active
                                        ? "bg-indigo-500 border-indigo-400 text-white"
                                        : "bg-[#151822] border-[#2a2e39] text-gray-400"
                                        }`}
                                >
                                    {idx + 1}
                                </div>
                                <span className="ml-2 mr-3 text-xs text-gray-300 whitespace-nowrap">
                                    {step.title}
                                </span>
                                {idx < steps.length - 1 && (
                                    <div className="w-8 h-px bg-[#2a2e39]" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Current step content (show first as active) */}
                {steps[0] && (
                    <div className="bg-[#1b1f28] rounded-2xl p-6 shadow-xl border border-[#2a2e39]">
                        <h2 className="text-lg font-semibold mb-2">{steps[0].title}</h2>
                        <p className="text-sm text-gray-300">
                            {steps[0].description || "Step details go here."}
                        </p>
                        <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600 transition active:scale-95">
                                Next
                            </button>
                            <button className="px-4 py-2 text-sm rounded-lg border border-[#2a2e39] text-gray-300">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                {!steps.length && (
                    <p className="text-sm text-gray-500">
                        Add <code>steps[]</code> to render the wizard.
                    </p>
                )}
            </Section>
        );
    };

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C9 — CHAT / MESSAGING (using chat[])                     ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C9 = () => (
        <Section>
            <TitleBlock />
            <div className="bg-[#1b1f28] rounded-2xl shadow-xl border border-[#2a2e39] flex flex-col h-[420px] max-h-[70vh]">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {(data.chat || []).map((msg: any, idx: any) => {
                        const isMe = msg.from === "me";
                        return (
                            <div
                                key={idx}
                                className={`flex ${isMe ? "justify-end" : "justify-start"
                                    } text-sm`}
                            >
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-2xl shadow ${isMe
                                        ? "bg-indigo-500 text-white rounded-br-sm"
                                        : "bg-[#131721] text-gray-100 rounded-bl-sm"
                                        }`}
                                >
                                    <div>{msg.message}</div>
                                    {msg.time && (
                                        <div className="mt-1 text-[10px] opacity-60 text-right">
                                            {msg.time}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    {!data.chat?.length && (
                        <p className="text-xs text-gray-500">
                            Add <code>chat[]</code> messages to see the conversation.
                        </p>
                    )}
                </div>

                {/* Composer */}
                <div className="border-t border-[#2a2e39] p-3 flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-[#131721] border border-[#262b36] rounded-full px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-xs font-medium active:scale-95">
                        Send
                    </button>
                </div>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
   ║  C10 — MEDIA-FIRST PAGE                                   ║
   ╚══════════════════════════════════════════════════════════╝ */
    const C10 = () => (
        <Section>
            {data.media && (
                <div className="mb-6">
                    {data.media.type === "image" ? (
                        <img
                            src={data.media.src}
                            alt=""
                            className="w-full rounded-2xl shadow-2xl object-cover max-h-[420px]"
                        />
                    ) : (
                        <video
                            src={data.media.src}
                            controls
                            className="w-full rounded-2xl shadow-2xl max-h-[520px]"
                        />
                    )}
                </div>
            )}
            <TitleBlock />
            <div className="prose prose-invert max-w-none mt-4">
                {data.description || "Write compelling content below the media."}
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C11 — DOCUMENTATION PAGE (TOC + CONTENT)                 ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C11 = () => (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* TOC SIDEBAR */}
                <aside className="lg:col-span-1 bg-[#1b1f28] rounded-2xl p-5 border border-[#2a2e39] shadow-lg h-fit sticky top-4">
                    <h3 className="text-sm font-semibold mb-3 opacity-90">
                        Table of Contents
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {(data.sitemap || []).map((item: any) => (
                            <li key={item} className="opacity-70 hover:opacity-100 transition">
                                • {item}
                            </li>
                        ))}
                        {!data.sitemap?.length && (
                            <li className="text-gray-500 text-xs">
                                Add <code>sitemap[]</code> to populate table of contents
                            </li>
                        )}
                    </ul>
                </aside>

                {/* ARTICLE CONTENT */}
                <article className="lg:col-span-3">
                    <TitleBlock />
                    <div className="prose prose-invert max-w-none">
                        {data.description ||
                            "Main documentation article content will render here."}
                    </div>
                </article>
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C12 — PRICING / PLANS PAGE                               ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C12 = () => {
        const cards = data.cards || [];
        return (
            <Section>
                <TitleBlock />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.slice(0, 3).map((card: any, index: any) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 shadow-xl border transition hover:-translate-y-1 ${index === 1
                                    ? "bg-indigo-600 border-indigo-500"
                                    : "bg-[#1b1f28] border-[#2a2e39]"
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                            {card.subtitle && (
                                <p className="text-sm opacity-70 mb-4">{card.subtitle}</p>
                            )}

                            {/* PRICE */}
                            {card.description && (
                                <p className="text-3xl font-bold mb-6 text-indigo-300">
                                    {card.description}
                                    <span className="text-sm text-gray-400 ml-1">/mo</span>
                                </p>
                            )}

                            {/* FEATURES (reuse links array for features) */}
                            {card.links && (
                                <ul className="space-y-2 text-sm mb-6">
                                    {card.links.slice(0, 7).map((f: any) => (
                                        <li key={f} className="flex gap-2 items-center">
                                            <span className="text-indigo-400">✔</span> {f}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* CTA */}
                            {card.button && (
                                <button
                                    className={`mt-4 w-full py-2 rounded-lg text-sm font-medium active:scale-95 transition ${index === 1
                                            ? "bg-white text-indigo-700 hover:bg-gray-200"
                                            : "bg-indigo-500 hover:bg-indigo-600"
                                        }`}
                                >
                                    {card.button}
                                </button>
                            )}
                        </div>
                    ))}

                    {!cards.length && (
                        <p className="text-gray-500 text-sm">
                            Add <code>cards[]</code> with {`{title, description, links[], button}`}
                        </p>
                    )}
                </div>
            </Section>
        );
    };

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C13 — GALLERY / PORTFOLIO (USING cards[].image)          ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C13 = () => (
        <Section>
            <TitleBlock />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.cards?.map((card: any, idx: any) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl group cursor-pointer"
                    >
                        <img
                            src={card.image}
                            className="h-44 w-full object-cover rounded-xl transition group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                            <div>
                                <h4 className="text-sm font-semibold">{card.title}</h4>
                                {card.subtitle && (
                                    <p className="text-xs text-gray-300">{card.subtitle}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {!data.cards?.length && (
                    <p className="text-gray-500 text-sm">
                        Add <code>cards[]</code> with <code>image</code> to build galleries.
                    </p>
                )}
            </div>
        </Section>
    );
    /* ╔══════════════════════════════════════════════════════════╗
     ║  C14 — TIMELINE (using timeline[])                        ║
     ╚══════════════════════════════════════════════════════════╝ */
    const C14 = () => (
        <Section>
            <TitleBlock />
            <div className="relative pl-6 border-l-2 border-[#2a2e39] space-y-8">
                {(data.timeline || []).map((item: any, idx: any) => (
                    <div key={idx} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[13px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-2 border-[#0f1117]"></div>

                        {/* Body */}
                        <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                        {item.description && (
                            <p className="text-sm opacity-70 mb-1">{item.description}</p>
                        )}
                        {item.date && (
                            <p className="text-xs text-indigo-400 font-medium">{item.date}</p>
                        )}
                    </div>
                ))}

                {!data.timeline?.length && (
                    <p className="text-gray-500 text-sm">
                        Add <code>timeline[]</code> to visualize milestones.
                    </p>
                )}
            </div>
        </Section>
    );

    /* ╔══════════════════════════════════════════════════════════╗
       ║  C15 — DATA EXPLORER (filters + list + preview)           ║
       ╚══════════════════════════════════════════════════════════╝ */
    const C15 = () => {
        const cards = data.cards || [];
        const filters = data.stats || []; // Reusing stats[] as "filters"
        const preview = cards[0]; // First card as preview

        return (
            <Section>
                <TitleBlock />
                <div className="grid grid-cols-12 gap-6">
                    {/* FILTER PANEL (stats[]) */}
                    <aside className="col-span-12 md:col-span-3 bg-[#1b1f28] rounded-2xl p-5 shadow-xl border border-[#2a2e39] space-y-4">
                        <h3 className="text-sm font-semibold mb-2 opacity-90">
                            Filters
                        </h3>
                        {filters.map((f: any, i: any) => (
                            <div
                                key={i}
                                className="text-xs flex justify-between bg-[#131721] px-3 py-2 rounded-lg border border-[#262b36]"
                            >
                                <span className="opacity-70">{f.label}</span>
                                <span className="font-semibold text-indigo-400">{f.value}</span>
                            </div>
                        ))}
                        {!filters.length && (
                            <p className="text-xs text-gray-500">
                                Add <code>stats[]</code> to show filter controls.
                            </p>
                        )}
                    </aside>

                    {/* RESULTS LIST (cards[]) */}
                    <div className="col-span-12 md:col-span-5 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                        {cards.map((card: any, idx: any) => (
                            <div
                                key={idx}
                                className="bg-[#1b1f28] rounded-xl p-4 border border-[#262b36] shadow hover:bg-[#212633] cursor-pointer transition"
                            >
                                <h4 className="font-medium">{card.title}</h4>
                                {card.subtitle && (
                                    <p className="text-xs text-gray-400">{card.subtitle}</p>
                                )}
                            </div>
                        ))}
                        {!cards.length && (
                            <p className="text-gray-500 text-sm">
                                Add <code>cards[]</code> to list content items.
                            </p>
                        )}
                    </div>

                    {/* PREVIEW PANEL (first card) */}
                    <aside className="col-span-12 md:col-span-4 bg-[#1b1f28] rounded-2xl p-6 shadow-xl border border-[#2a2e39]">
                        {preview ? (
                            <>
                                {preview.image && (
                                    <img
                                        src={preview.image}
                                        className="rounded-xl w-full h-40 object-cover mb-4"
                                    />
                                )}
                                <h3 className="text-lg font-semibold mb-1">{preview.title}</h3>
                                {preview.subtitle && (
                                    <p className="text-sm text-gray-400 mb-3">
                                        {preview.subtitle}
                                    </p>
                                )}
                                {preview.description && (
                                    <p className="text-sm opacity-80">{preview.description}</p>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-500 text-sm">
                                Add <code>cards[0]</code> to enable preview.
                            </p>
                        )}
                    </aside>
                </div>
            </Section>
        );
    };

    // EXPORT SELECTED LAYOUT
    const layouts: any = {
        1: C1,
        2: C2,
        3: C3,
        4: C4,
        5: C5,
        6: C6,
        7: C7,
        8: C8,
        9: C9,
        10: C10,
        11: C11,
        12: C12,
        13: C13,
        14: C14,
        15: C15,
    };

    const LayoutComponent = layouts[templateId] || C1;
    return <LayoutComponent />;
}
