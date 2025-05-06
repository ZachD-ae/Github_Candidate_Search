import { useEffect, useState } from 'react';
import { searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const fetchRandomCandidate = async () => {
    const usernames = ['octocat', 'torvalds', 'gaearon', 'yyx990803'];
    const random = usernames[Math.floor(Math.random() * usernames.length)];
    const data = await searchGithubUser(random);
    setCandidate(data as Candidate);
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

  if (!candidate) return <h1>Loading...</h1>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Candidate Search</h1>
      <div className="bg-white rounded-xl text-black p-4 max-w-sm w-full text-center shadow-lg">
        <img src={candidate.avatar_url} alt={candidate.login} className="w-48 h-48 mx-auto rounded-full" />
        <h2 className="text-xl font-bold">{candidate.name} <span className="italic text-sm">({candidate.login})</span></h2>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: <a href={`mailto:${candidate.email}`} className="text-blue-600">{candidate.email || 'N/A'}</a></p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <p>Bio: {candidate.bio || 'N/A'}</p>
      </div>
      <div className="flex gap-8 mt-6">
        <button onClick={rejectCandidate} className="text-4xl text-white bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">−</button>
        <button onClick={saveCandidate} className="text-4xl text-white bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
