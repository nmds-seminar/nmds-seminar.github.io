// The seminar programme. Add one entry per seminar day, in any order —
// the page sorts them and splits them into next / upcoming / past by date.
//
// Each day has:
//   datetime  local start time, "YYYY-MM-DDTHH:MM"
//   talks     one or two talks (leave empty for "to be announced")
//
// Each talk has:
//   title, speaker          required
//   affiliation, abstract   optional (separate abstract paragraphs with a blank line)
//   links                   optional, e.g. [{ label: "Slides", url: "..." }]

const SESSIONS = [
  {
    datetime: "2026-11-11T15:00",
    talks: [
      {
        title: "The implicit midpoint discretization of Hamiltonian Monte Carlo and application to diffusion bridges",
        speaker: "Antony Harrison",
        affiliation: "University of Edinburgh (Maths)",
        abstract: "Diffusion bridge processes are stochastic processes conditioned on their endpoints. Sampling from them is widely used in settings such as molecule transition states, financial modelling, and population dynamics. Their sampling is an infinite-dimensional problem , making standard Markov Chain Monte Carlo methods (MALA, RWM, e.g.) increasingly inefficient as the dimension is increased. An alternative framework involves preserving the Gaussian reference measure inherent to the target distribution. I will describe one such proposal, the implicit midpoint discretisation, and its extension to Hamiltonian Monte Carlo. Using diffusion bridges as an example, I will compare its applicability to infinite dimensional problems with the preconditioned Crank-Nicolson algorithm.",
      },
      {
        title: "TBD",
        speaker: "Lena Zellinger",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: "",
      },
    ],
  },
  {
    datetime: "2026-11-25T15:00",
    talks: [
      {
        title: "TBD",
        speaker: "Leander Kurscheidt",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: "",
      },
      {
        title: "TBD",
        speaker: "Jack Geary",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: "",
      },
    ],
  },
  {
    datetime: "2026-12-02T15:00",
    talks: [],
  },

  // Past seminars
];
