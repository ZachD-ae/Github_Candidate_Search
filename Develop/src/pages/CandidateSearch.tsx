import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const fetchRandomCandidate = async () => {
    const baseUser = await searchGithub();
    if (!baseUser) return;

    const fullProfile = await searchGithubUser(baseUser.login);
    setCandidate(fullProfile as Candidate);
  };

  useEffect(() => {
    fetchRandomCandidate();
  }, []);

  const saveCandidate = () => {
    if (!candidate) return;
    const existing = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    const updated = [...existing, candidate];
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
    fetchRandomCandidate();
  };

  const rejectCandidate = () => {
    fetchRandomCandidate();
  };

  if (!candidate) return <h1 className="loading">Loading...</h1>;

  return (
    <main>
      <h1>Candidate Search</h1>
      <section className="candidate-card">
        <img src={candidate.avatar_url} alt={candidate.login} className="avatar" />
        <h2>
          {candidate.name || 'Unknown'} <em>({candidate.login})</em>
        </h2>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a></p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <p>Bio: {candidate.bio || 'N/A'}</p>
      </section>
      <div className="button-row">
        <button onClick={rejectCandidate}>−</button>
        <button onClick={saveCandidate}>+</button>
      </div>
    </main>
  );
};

export default CandidateSearch;
