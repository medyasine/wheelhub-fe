function IntroSection() {
  return (
    <div className="card mb-3">
      <div className="card-header bg-body-tertiary">
        <h5 className="mb-0">Intro</h5>
      </div>
      <div className="card-body text-justify">
        <p className="mb-0 text-1000">
          Dedicated, passionate, and accomplished Full Stack Developer with 9+
          years of progressive experience working as an Independent Contractor
          for Google and developing and growing my educational social network
          that helps others learn programming, web design, game development,
          networking.
        </p>
        <div className="collapse show" id="profile-intro">
          <p className="mt-3 text-1000">
            I’ve acquired a wide depth of knowledge and expertise in using my
            technical skills in programming, computer science, software
            development, and mobile app development to developing solutions to
            help organizations increase productivity, and accelerate business
            performance.
          </p>
          <p className="text-1000">
            It’s great that we live in an age where we can share so much with
            technology but I’m but I’m ready for the next phase of my career,
            with a healthy balance between the virtual world and a workplace
            where I help others face-to-face.
          </p>
          <p className="text-1000 mb-0">
            There’s always something new to learn, especially in IT-related
            fields. People like working with me because I can explain technology
            to everyone, from staff to executives who need me to tie together
            the details and the big picture. I can also implement the
            technologies that successful projects need.
          </p>
        </div>
      </div>
      <div className="card-footer bg-body-tertiary p-0 border-top">
        <button
          className="btn btn-link d-block w-100 btn-intro-collapse"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#profile-intro"
          aria-expanded="true"
          aria-controls="profile-intro"
        >
          Show
          <span className="less">
            less<span className="fas fa-chevron-up ms-2 fs-11"></span>
          </span>
          <span className="full">
            full<span className="fas fa-chevron-down ms-2 fs-11"></span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default IntroSection;
