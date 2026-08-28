import type { Metadata } from "next";
import { Plus, Star } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Editors Have Their Say | Pubrica Expert Insights",
  description:
    "Read expert interviews with medical advisors, scientific writers, and editorial specialists discussing research publication and editorial feedback.",
};

const navItems = [
  { name: "MEET THE EXPERTS", active: true },
  { name: "SUBJECT AREA", active: false },
  { name: "THERAPEUTIC EXPERTISE", active: false },
  { name: "GLOBAL PARTNERS AND MEMBERSHIP", active: false },
  { name: "CONTACT US", active: false },
  { name: "CAREERS", active: false },
];

const experts = [
  {
    name: "Dr. Ravi Kumar",
    qualification: "PHD, FIAMS, DMRD, DMRE, DNB",
    image: "/images/academy/ravikumar.webp",
    experience:
      "Dr. Ravi Kumar is the chief medical & scientific advisor at Pubrica. He has more than 20 years of experience as a medical practitioner. He is a diplomat in cardiac CT and certified by the Cardiovascular Board of Computed Tomography. Dr. Ravi is qualified in advanced cardiovascular imaging from the University of Toronto, Canada. He is also an intervention radiologist consultant and manages scientific writing and publishing operations at Pubrica.",
    questions: [
      {
        q: "Is editorial feedback imperative and what do you have to say about the notion of giving reasons for some edits or comments you make?",
        a: "Providing clear rationale for revisions is essential, particularly when guiding authors. Explaining structural rules, language improvements, and scientific clarity helps authors improve manuscript quality.",
      },
      {
        q: "Tell us about your professional and academic repertoire?",
        a: "His professional background includes clinical practice, advanced cardiovascular imaging, research consulting, and scientific manuscript development.",
      },
      {
        q: "Is that why you became an editor and was it your choice?",
        a: "Combining medical expertise with scientific communication created a natural pathway into editorial review and manuscript improvement.",
      },
      {
        q: "What should authors with English as a Second Language (ESL) keep in mind?",
        a: "Authors should focus on clear, concise writing, proper sentence structure, and communicating scientific ideas effectively.",
      },
      {
        q: "Is editing always a good learning experience?",
        a: "Yes, most of the time. You must have an open mind to receive feedback from your peers. It is a learning curve always. It is not just correction of language but contribution to the community.. Yes, it is definitely a good learning experience.",
      },
      {
        q: "You have juggled many eleventh hour projects. How do you handle it?",
        a: "The way I work is always constant; I don’t think of editing a document until I know the big picture. Essentially, I scan the copy to the end so that I can see where the authors are beginning and what they are trying to communicate. Deadlines—I am very sensitive with such projects. Unless, you work through the manuscript you will not know it. I try to get the maximum information.",
      },
      {
        q: "What do people with English as Second Language (ESL) have to bear in mind?",
        a: "Be short and to the point; lengthy constructions are constructed two or more short sentences that have been tied together. Try to focus on quick communication and therefore break up long constructions into small sentences and then build on the author’s point. Some Asian authors have a major issue is working with definite and indefinite articles (the, a, and an) because English articles don’t have exact equivalents in their languages.",
      },
      {
        q: "Your subjects include medicine and nursing in addition to microbiology and humanities. How do you approach a document on science/medicine as opposed to a manuscript on humanities?",
        a: "The editing process is the same, because I focus on areas such as punctuation, grammar, and readability of the paper, notwithstanding medicine or sociology; nevertheless, I would probably ask more content-specific questions while editing a medical paper, simply because the developments in the field of medicine are multifarious and in some areas I would not be able to follow some of the technicalities. So, if there are issues involving the coherence of the content I try to provide some tips if I can, but sometimes I can only mark the vague passage and ask the authors to try to recast it.",
      },
    ],
  },
  {
    name: "Dr. Isaac Newton Rajkumar",
    qualification: "MD",
    image: "/images/academy/isac.webp",
    experience:
      "Dr. Isaac Newton Rajkumar is a widely respected orthopedic specialist in India. He is also a stem cell transplant surgeon. He received his training from elite national and international medical institutions. He has bagged many laurels for his contribution in the field of orthopedics right from the early ‘70s. He organized the first international conference on Computer Aided Surgery (CAS) in year 1998. He treats problems pertaining to musculoskeletal disorders; corrects spinal and bone deformities.",
    questions: [
      {
        q: "You said that you have been a medical writer and graphic artist. Can you tell us about that experience?",
        a: "I really like to travel, exercise, and read. Therefore, whenever I can, I like to go traveling, even if it’s just a short trip. Right now, I am hard pressed for time because I work full-time, freelance, and lecture at university; moreover, I’m also on the expert panel of Pubrica Scientific Publishing & Writing.",
      },
      {
        q: "What do you do when you are not editing?",
        a: "Understanding the manuscript objective first helps prioritize scientific accuracy, language correction, and formatting requirements efficiently.",
      },
      {
        q: "You had mentioned that you also do novel editing. How does that differ from copyediting?",
        a: "Well, it’s mainly pertaining to novels—fiction and non-fiction. On the internet, people don’t read blocks of text very well and they scan, but they don’t tend to go deep into the text; therefore, I prepare content that is readable online.",
      },
      {
        q: "What tools and options do you prefer?",
        a: "I use the macros in MS Word to repetitive tasks. I do know that many editors use shortcuts, and I’m quite familiar with keyboard shortcuts, which can be assigned as and when required; I use them a lot. It helps you in applying styles.",
      },
      {
        q: "How do you manage deadlines for editing?",
        a: "It depends on the project; manuscript editing takes time, especially substantive editing. I do request time for heavy editing work. Quality is imperative.",
      },
      {
        q: "What is your view on such assignments with tight timelines? And what are the effects on output quality?",
        a: "I plan and request time before I accept any assignment. The crucial task is when you are on a short deadline is to get the most important things right. Concentrate focus on mechanics (e.g., “shined” in place of “shone”). I follow style guides in technical editing to be on track.",
      },
    ],
  },
  {
    name: "Dr. Maria PHD",
    qualification: "MD",
    image: "/images/academy/Maria-1.webp",
    experience:
      "Dr. Maria has more than 10 years of writing and editing experience; she has PHD in cellular biology and immunology. Her expertise spans across the following subjects:",
    questions: [
      {
        q: "You mentioned that most of editorial institutions provide training camps. What kind of training do you provide at such camps?",
        a: "Well, there are several types of training workshops. I’ve attended one on punctuation and clarity seminar. I have also attended one on researching medical literature and one on writing in health and fitness publications. Also, there are workshops on some science topics (like genetics) for people who don’t have a good background in those areas. Then, there is a three-part e-learning based workshop on punctuation, which I really recommend. It can also be accessed through the AMWA website. It’s called Advanced Grammar 2 and 3 and includes tests and a final exam that is to be answered on paper and mailed to AMWA. I have also taken workshops on manuscript development, posters, and publishing.",
      },
      {
        q: "How does that add value to you as an editor?",
        a: "Well, the editorial association has helped me get a lot of full-time work too. Their online database helps authors get in touch with good editors, particularly because there aren’t many editors specializing in medical documents. The Board of Editors in the Life Sciences has awarded me a special certification in editing. They have very strict prerequisites for certifying medical editors, which benefits clients because they are assured of the ability and credentials of the editor. In addition, I belong to the European Medical Writers Association (EMWA). Its annual conference has workshops where I can polish my writing and editing skills. EMWA also has a monthly journal that covers medical writing and offers very insightful articles.",
      },
      {
        q: "Have you edited documents from subject areas other than medicine?",
        a: "Well, I have read quite a bit in other fields of science. I actually spent last winter working on an geology research vessel. So I have some familiarity with that field, which in itself covers areas like botany, zoology, microbiology, and chemistry. I have also taken a number of master’s level classes. Objective is the same in every project.",
      },
      {
        q: "According to you, how important is it for an editor to have a personal interest in the subject that he or she is editing?",
        a: "I think it is important, because it helps an editor be involved in greater detail when he is interested in the subject. So, if I were editing a banking-related document, I might not be able to read in depth because it’s not a subject that really interests me. But just about any science manuscript would have me hooked – even topics such as oceanography and physics. So it’s important to have a passion for editing, because what we are doing has great importance – the manuscripts are the ultimate result of hundreds of years of human endeavor.",
      },
      {
        q: "How do you ensure quality in your work?",
        a: "I always research new topics. I edit when I am mentally fresh and not drained out. I prefer a quite place to work without being distracted by other tasks. I take breaks often and so I am able to write well; quality improvement is unending process for me.",
      },
      {
        q: "In deep editing, do you shuffle sentences or change them?",
        a: "Not always. While working on a deep or substantive editing projects , you have to be vigil for avenues to enhance clarity of writing and this can be done by reviewing the sentences. Maybe 2 out of eight papers require high level editing.",
      },
      {
        q: "Distinguish copyediting and substantive editing work?",
        a: "Copyediting is concerned more with the mechanical aspect of language. Normally, with copyediting you would not change a word or recast a line; however, a copyeditor would just put in the correct punctuation and check grammar usage. Substantive editing accomplishes coherence in passages and review information in tables to avoid redundancy.",
      },
    ],
  },
  {
    name: "Dr. Julie PHD",
    qualification: "MD",
    image: "/images/academy/julie.webp",
    experience:
      "Dr. Julie has over 30 years of experience in medical and scientific writing; she is a subject-matter expert in the field of life sciences and her expertise spans across",
    questions: [
      {
        q: "What aspect of manuscript do you devote attention?",
        a: "Brevity and clarity—these are the aspects I consider; nevertheless, your reader has to grasp what you are trying to articulate; always visualize your audience. For example, when it comes to clinical measurements or quantities, you must communicate clearly so that your reader does not go back and forth trying to correlate the various figures.",
      },
      {
        q: "Do you prefer pencil or on-screen editing?",
        a: "On-screen, because I got used to it with the track revisions feature; however, editors have their own preferences. The amount of paper editing I do is negligible. For big projects, I edit on-screen and get it accepted by the client and then pencil in my second level of edits. Looking at a printout is a new perspective. I believe that there is no such notion as a perfect copy.",
      },
      {
        q: "What do you think of manuscripts written by authors whose native language is not English?",
        a: "First, look at the requirements of the client; second, ascertain the style and referencing requirements; third, ascertain the depth of editing required. Do couple of rounds of editing—I do three.",
      },
      {
        q: "How do you manage projects that are exactly your area of specialization?",
        a: "At Pubrica Scientific Writing & Publication, there is no dearth of writers; we have a team of SMEs who can write on almost any topics. We want to get everything right and so we take the help of other writers if required; we have a vast database of research work online. This is how we tackle different subjects. Finally, I look at the content and work on editing it.",
      },
      {
        q: "You have done your Master’s in technical communication and so what kind of knowledge does that provide? What does that course offer?",
        a: "I learned how to write technical documents for the software industry and then I took training in regulatory writing, clinical terminology, scientific editing, and grant writing. I learned writing for websites—completely different—with different audience and a different style. I learned the mechanics of language from linguistics and rhetoric classes.",
      },
      {
        q: "Do you edit your own work?",
        a: "Always ask someone to review your work because you are attached to your work. I prefer my peers to review my writing; I think everyone needs the help of another editor.",
      },
      {
        q: "Editor and a writer—distinguishing traits?",
        a: "The processes for each are quite different. While writing, I concentrate on just the content; however, with editing, I have to focus on not only the content, but also the mechanics, the grammar, the punctuation, etc. So, a slightly different skill set is involved. Being an editor and understanding the mechanics of language also helps me as a writer and on the other hand, being a writer and understanding how to structure a paper and the principles of flow help me while editing.",
      },
      {
        q: "Why did you decide to become an editor??",
        a: "Simply because I enjoyed it; reading and writing were always my hobbies. And something that I actually studied at university level. I get a lot of satisfaction.",
      },
    ],
  },
];

export default function EditorSpeakPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <header className="bg-[#1e2e2b] text-white py-6 px-4 text-center">
        <div className="max-w-3xl mx-auto border border-gray-500/60 py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Editors have their say
          </h1>
          <p className="text-sm text-gray-300 mt-2">Hear from experts</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-64">
          <div className="flex items-center gap-2 text-[#1a4a42] font-semibold text-lg mb-4">
            <Star className="w-5 h-5 fill-[#1a4a42]" />
            <h2>About Us</h2>
          </div>

          <nav className="border-t pt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full py-2 text-left"
              >
                <span
                  className={`border p-1 ${
                    item.active
                      ? "bg-gray-600 text-white border-gray-600"
                      : "border-gray-400 text-gray-500"
                  }`}
                >
                  <Plus size={12} />
                </span>

                <span
                  className={`text-xs font-semibold tracking-wide ${
                    item.active ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 space-y-12">
          {experts.map((expert, index) => (
            <article
              key={expert.name}
              className={`space-y-6 ${
                index !== 0 ? "border-t pt-5" : ""
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Image */}
                <div className="h-72 max-w-xs relative bg-gray-200 border-2 border-gray-400 rounded overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>

                {/* Details */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {expert.name}
                    <span className="text-sm font-normal text-gray-600 ml-2">
                      {expert.qualification}
                    </span>
                  </h2>

                  <div className="mt-4 text-sm leading-relaxed">
                    <p className="font-bold text-[#b94a48]">Experience:</p>
                    <p className="text-gray-700 mt-1">{expert.experience}</p>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-5 text-sm leading-relaxed">
                {expert.questions.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-bold text-gray-900">Q. {item.q}</h3>
                    <p className="mt-1 text-gray-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}