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
        title: "When can variational inference provably recover target statistics?",
        speaker: "Lena Zellinger",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: " When approximating an intractable target distribution via variational inference (VI), the variational family is often chosen as a simple parametric family that does not contain the target. This raises the question: Under which conditions can we recover important summary statistics of the target despite misspecification of the variational family?\n\nIn this talk, I will discuss how symmetry in the target distribution can guarantee exact statistic recovery in polynomial time for VI with location-scale families. While existing results rely on simplifying assumptions such as log-concavity of the target, I will explain how we can guarantee exact mean and correlation recovery even for multi-modal and heavy-tailed targets by exploiting the flexibility of alpha-divergences. I will then discuss how these theoretical results can guide the choice of variational family and divergence in practice, and illustrate how optimization can fail to recover target statistics when our sufficient conditions are not satisfied. To conclude, I will touch on open theoretical questions on the approximation accuracy of VI and practical challenges that can arise in VI despite theoretical guarantees.",
      },
    ],
  },
  {
    datetime: "2026-11-25T15:00",
    talks: [
      {
        title: "Predicting Probability Distributions under Algebraic Constraints",
        speaker: "Leander Kurscheidt",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: "Machine learning models often treat predictions as unconstrained points, although real-world outputs must satisfy semantic constraints: trajectories should avoid obstacles, physical quantities must obey physical laws, and engineering designs must be feasible. While various projection-based approaches have been developed for constrained point predictions, ensuring that probability distributions satisfy such constraints is considerably less straightforward. This is particularly challenging for non-convex algebraic constraints, which can be expressed as conjunctions and disjunctions of linear inequalities.\n\nThe non-convex, potentially disconnected nature of these constraints rules out many standard reparameterization approaches. In this talk, I will introduce PAL, an approach to probabilistic predictions that cuts out infeasible probability mass and efficiently and exactly renormalizes the remaining distribution over the feasible space. I will discuss the general design of PAL and then dive into some of the challenges and solutions involved in scaling it to higher-dimensional problems.",
      },
      {
        title: "Gaming the Classifier: Strategic Classification Beyond Linear Models",
        speaker: "Jack Geary",
        affiliation: "University of Edinburgh (Informatics)",
        abstract: "When a decision rule is made public, people adapt to it. A bank whose model rewards applicants for holding several lines of credit will see applicants open even more credit cards; a recruiter whose software screens CVs for keywords will receive CVs stuffed with them. In neither case has the candidate actually improved, so a classifier that was accurate on the historical data becomes less accurate once deployed. This is Goodhart’s law in practice.\n\nStrategic Classification models this as a game between a Learner, who publishes a classifier, and Agents, who independently modify their features at a cost to obtain a favourable decision. Fitting a classifier in this context becomes a bilevel optimization problem whose inner problem, the Agent’s best response, is discontinuous and generally intractable outside of linear models. As a result most of the work in this area has been restricted to linear, deterministic classifiers.\n\nIn this talk I will introduce the field of Strategic Classification, then present results from my recent work attempting to overcome this restriction: I will show how the problem can be generalised to non-linear models such as neural networks by approximating the best response using constrained optimisation and the implicit function theorem; I will also propose an alternative approach, which is to allow the Learner to deploy a randomised classifier, which we show can never do worse than the best deterministic classifier, and can sometimes do strictly better.",
      },
    ],
  },
  {
    datetime: "2026-12-02T15:00",
    talks: [],
  },

  // Past seminars
];
