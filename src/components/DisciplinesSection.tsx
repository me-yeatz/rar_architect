import { CheckCircle2, BookOpen, Compass } from 'lucide-react';

const FIRM_INTRO =
  'Rosyatimah Abdul Rahman Architect & Engineer Sdn. Bhd. (RAR) shall be counted as a local consulting company with a difference:';

const FIRM_POINTS = [
  "An integrated powerhouse of people and innovative ideas that prides itself on it's ability to produce elegant & innovative solutions with practicality & economics top in mind",
  'A leader that conduct itself with the utmost moral & professional standarts that will only associate with like minded individual & organizations to provide the best there is to offer for our client.',
  "An organization that listen and hear both the client's stated & implied issues & concerns looking out for his interests today & tomorrow because we plan to be in the business for the long term",
];

export function DisciplinesSection() {
  return (
    <section
      id="disciplines"
      className="bg-[#F7F7F5] py-16 lg:py-24 border-b border-[#E5E5E3]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#E5E5E3]">
          <div>
            <p className="text-sm font-semibold text-[#A65604]">01. The Firm</p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F]"
              style={{ textWrap: 'balance' }}
            >
              A local consulting company with a difference.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A4A48] max-w-[52ch] leading-relaxed">
            {FIRM_INTRO}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIRM_POINTS.map((point, index) => (
            <article
              key={index}
              className="bg-white border border-[#E5E5E3] rounded-sm p-7 sm:p-8 flex flex-col gap-4 hover:border-[#0F0F0F] transition-colors"
            >
              <CheckCircle2
                className="w-7 h-7 text-[#EB8B1D] shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base leading-[1.7] text-[#4A4A48]">
                {point}
              </p>
            </article>
          ))}
        </div>

        {/* Corporate Philosophy */}
        <div className="mt-12 bg-white border border-[#E5E5E3] rounded-sm p-7 sm:p-10">
          <div className="flex items-start gap-4 pb-6 border-b border-[#E5E5E3]">
            <BookOpen
              className="w-7 h-7 text-[#EB8B1D] shrink-0 mt-1"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-[#A65604]">
                Corporate Philosophy
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0F0F0F]">
                Professionalism at the core of everything we do.
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-[1.7] text-[#4A4A48] max-w-[70ch]">
                The philosophy of RAR is greatly centered on professionalism. We
                will take the challenge of professionalism to drive ourselves to
                greater heights of establishment. Our goals will be achieved by
                focusing our attention to:
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm">
              <h4 className="font-display text-lg font-bold text-[#0F0F0F]">
                Our Client
              </h4>
              <p className="mt-3 text-sm leading-[1.7] text-[#4A4A48]">
                RAR will always be Clients focused, will don the utmost obligation
                to provide our client&apos;s need and interest efficiently as a
                professional corporate company. Enjoyable, productive and enduring
                living and working environments are the goals of our efforts. We
                are fair, courteous and professional. RAR recognize the difficult
                balance of quality architecture and economics and we will endeavor
                to continuously improve and innovate.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm">
              <h4 className="font-display text-lg font-bold text-[#0F0F0F]">
                Our Community
              </h4>
              <p className="mt-3 text-sm leading-[1.7] text-[#4A4A48]">
                RAR is committed to the enhancement of the communities in which
                we are a part, through the aesthetic value of our designs and the
                sensitive planning within context of each community. We will bring
                community development to greater extent by providing our vast
                experience in our various respective business fields.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm">
              <h4 className="font-display text-lg font-bold text-[#0F0F0F]">
                Our Industry
              </h4>
              <p className="mt-3 text-sm leading-[1.7] text-[#4A4A48]">
                RAR committed to participating in the architectural industry with
                integrity, innovation and client satisfaction. We respect the
                financial, construction, engineering, real estate and other
                related industries, which in mutual relationships, contribute
                greatly to our success.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F5] border border-[#E5E5E3] rounded-sm">
              <h4 className="font-display text-lg font-bold text-[#0F0F0F]">
                Our Employees
              </h4>
              <p className="mt-3 text-sm leading-[1.7] text-[#4A4A48]">
                We are committed to the recruitment and development of the best
                individuals in our industry. We provide our people opportunities
                to grow and encourage the flow of information and the exchange of
                ideas between all levels of the company. We value the entire well
                being of each individual and encourage family, physical and
                spiritual as well as professional development.
              </p>
            </div>
          </div>
        </div>

        {/* Design Approach */}
        <div className="mt-12 bg-white border border-[#E5E5E3] rounded-sm p-7 sm:p-10">
          <div className="flex items-start gap-4 pb-6 border-b border-[#E5E5E3]">
            <Compass
              className="w-7 h-7 text-[#EB8B1D] shrink-0 mt-1"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-[#A65604]">
                Design Approach
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0F0F0F]">
                From concept to enduring value.
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-4 max-w-[80ch]">
            <p className="text-sm sm:text-base leading-[1.7] text-[#4A4A48]">
              RAR is a multidisciplinary consultancy offering expertise in
              planning, architecture, engineering, interior design, and landscape
              architecture. Our portfolio spans a diverse range of developments,
              including hospitality, commercial, residential, institutional, and
              mixed-use projects.
            </p>
            <p className="text-sm sm:text-base leading-[1.7] text-[#4A4A48]">
              Our design philosophy is grounded in a deep understanding of client
              aspirations, user needs, and project context. We believe that
              successful architecture emerges from the seamless integration of
              functionality, aesthetics, sustainability, and technical excellence.
            </p>
            <p className="text-sm sm:text-base leading-[1.7] text-[#4A4A48]">
              Through collaboration, innovation, and attention to detail, we
              transform ideas into purposeful spaces that enrich communities,
              enhance user experiences, and create enduring value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}