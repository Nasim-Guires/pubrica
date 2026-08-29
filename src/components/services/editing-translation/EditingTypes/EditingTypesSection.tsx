// "use client";

// import { useState } from "react";
// import EditingTypeCard from "./EditingTypeCard";
// import Link from "next/link";

// export default function EditingTypesSection() {
//   const [openCards, setOpenCards] = useState<Record<string, boolean>>({
//     proofreading: true,
//     manuscript: true,
//   });

//   const editingTypesList = [
//     {
//       id: "proofreading",
//       title: "Proofreading",
//       icon: "/images/editing-and-translation/Proofreading.png",
//       description:
//         "The final review stage focuses on catching surface errors such as misspellings, typographical mistakes, and basic grammar issues. Proofreading is the last step before submission or publication.",
//     },
//     {
//       id: "substantive",
//       title: "Substantive Editing",
//       icon: "/images/editing-and-translation/Substantive-Editing.png",
//       description:
//         "A deep editing process involving extensive revisions, including rewriting, reordering, and suggestions for additional content. It ensures the manuscript meets journal expectations and significantly enhances readability.",
//     },
//     {
//       id: "line",
//       title: "Line Editing",
//       icon: "/images/editing-and-translation/Line-Editing.png",
//       description:
//         "Concentrates on sentence- and paragraph-level clarity, enhancing tone, readability, and logical flow. It involves eliminating jargon, refining word choice, and smoothing language usage without a complete rewrite.",
//     },
//     {
//       id: "copyediting",
//       title: "Copyediting",
//       icon: "/images/editing-and-translation/Copyediting.png",
//       description:
//         "Ensures correctness, consistency, and accuracy in grammar, vocabulary, punctuation, and syntax. Copyediting also involves checking for style guide compliance (APA, AMA, Chicago, Vancouver, etc.) and maintaining uniform terminology.",
//     },
//     {
//       id: "content",
//       title: "Content Editing",
//       icon: "/images/editing-and-translation/Content-Editing.png",
//       description:
//         "Examines the accuracy, consistency, and relevance of content, ensuring the document fulfills its purpose. May include fact-checking, refining arguments, and restructuring for better readability and impact.",
//     },
//     {
//       id: "technical",
//       title: "Technical Editing",
//       icon: "/images/editing-and-translation/Technical-Editing.png",
//       description:
//         "Reviews documents for technical accuracy, completeness, and adherence to industry or scientific standards. Ensures terminology, data, and references meet field-specific requirements.",
//     },
//     {
//       id: "manuscript",
//       title: "Manuscript Editing",
//       icon: "/images/editing-and-translation/Manuscript-Editing.png",
//       description:
//         "Tailored for academic authors submitting to journals or book publishers, focusing on both language use and publisher guidelines. Helps improve acceptance chances in high-impact journals.",
//     },
//     {
//       id: "structural",
//       title: "Structural Editing",
//       icon: "/images/editing-and-translation/Structural-Editing.png",
//       description:
//         "Assesses and reshapes the document structure, ensuring that ideas are logically organized and presented in a coherent way. May involve reordering chapters, sections, or arguments for maximum impact.",
//     },
//     {
//       id: "formatting",
//       title: "Formatting & Style Editing",
//       icon: "/images/editing-and-translation/Formatting-Style-Editing.png",
//       description: (
//         <>
//           Ensures journal-specific{" "}
//           <Link
//             href="/services/publication-support/journal-manuscript-formatting-services/"
//             className="text-blue-700 no-underline hover:text-blue-800"
//           >
//             formatting
//           </Link>{" "}
//           (references, tables, figures, word limits) and style guide compliance
//           (APA, AMA, Vancouver, MLA, Chicago).
//         </>
//       ),
//     },
//     {
//       id: "reviewer",
//       title: "Reviewer Response Editing",
//       icon: "/images/editing-and-translation/Reviewer-Response-Editing.png",
//       description:
//         "Helps authors refine and polish responses to peer reviewer comments. Improves clarity, professionalism, and alignment with journal requirements.",
//     },
//     {
//       id: "plagiarism",
//       title: "Plagiarism Check & Ethical Editing",
//       icon: "/images/editing-and-translation/Plagiarism-Check-Ethical-Editing.png",
//       description: (
//         <>
//           Provides{" "}
//           <Link
//             href="/services/publication-support/plagiarism-services/"
//             className="text-blue-700 no-underline hover:text-blue-800"
//           >
//             plagiarism
//           </Link>{" "}
//           screening and ensures manuscripts meet ethical publishing standards by
//           improving originality, paraphrasing, and citation accuracy.
//         </>
//       ),
//     },
//     {
//       id: "developmental",
//       title: "Developmental Editing",
//       icon: "/images/editing-and-translation/Developmental-Editing.png",
//       description:
//         "Focuses on the structure and content of a document, helping authors develop their manuscript from initial concept to complete draft. This type of editing addresses big-picture aspects such as organization, coherence, research argument strength, and overall narrative flow.",
//     },
//     {
//       id: "language",
//       title: "Language Polishing (ESL Support)",
//       icon: "/images/editing-and-translation/Language-Polishing-ESL-Support.png",
//       description:
//         "Specialized service for non-native English authors, improving clarity, grammar, and flow while retaining author intent.",
//     },
//   ];
//   const toggleCard = (id: string) => {
//     setOpenCards((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };




//   return (
//     <section className="py-6 bg-white px-6 max-w-7xl mx-auto font-sans">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-[#0A4D4A] mb-3">
//             Types of Editing Services We Provide
//           </h2>

//           <p className="text-[14px] text-slate-600 max-w-5xl leading-relaxed">
//             Each type of editing serves a unique purpose and is suited to
//             different stages of the writing and publication process. By
//             selecting the appropriate kind of editing, authors can significantly
//             enhance the quality of their manuscripts and increase their chances
//             of achieving their publication, research visibility, and
//             communication objectives.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
//           {editingTypesList.map((type) => (
//             <EditingTypeCard
//               key={type.id}
//               type={type}
//               isOpen={!!openCards[type.id]}
//               toggleCard={toggleCard}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .truncate-two-lines {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-2px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }


import React from 'react'

const EditingTypesSection = () => {
  return (
    <div>EditingTypesSection</div>
  )
}

export default EditingTypesSection