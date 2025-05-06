import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const removeCandidate = (id: number) => {
    const updated = saved.filter((c) => c.id !== id);
    setSaved(updated);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Potential Candidates</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Company</th>
            <th className="p-2 border">Bio</th>
            <th className="p-2 border">Reject</th>
          </tr>
        </thead>
        <tbody>
          {saved.map((c) => (
            <tr key={c.id} className="bg-gray-900 border">
              <td className="p-2 border"><img src={c.avatar_url} alt={c.login} className="w-12 h-12 rounded-full" /></td>
              <td className="p-2 border font-bold">{c.name} <span className="italic">({c.login})</span></td>
              <td className="p-2 border">{c.location || 'N/A'}</td>
              <td className="p-2 border text-blue-400">{c.email || 'N/A'}</td>
              <td className="p-2 border">{c.company || 'N/A'}</td>
              <td className="p-2 border">{c.bio || 'N/A'}</td>
              <td className="p-2 border text-center">
                <button onClick={() => removeCandidate(c.id)} className="text-2xl bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">−</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
