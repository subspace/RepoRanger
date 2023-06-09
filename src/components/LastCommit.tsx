interface LastCommitProps {
  repo: string;
  commit: {
    hash: string;
    message: string;
    timestamp: string;
  };
}

export const LastCommit: React.FC<LastCommitProps> = ({ commit, repo }) => {
  const timestamp = new Date(commit.timestamp).toLocaleString();
  return (
    <div className="mb-6">
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Last Commit:</div>
      <div className="text-gray-800 dark:text-gray-200 font-semibold mb-1">
        <a href={`https://github.com/${repo}/commit/${commit.hash}`} target="_blank" rel="noopener noreferrer">
          {commit.hash}
        </a>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{commit.message}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{timestamp}</div>
    </div>
  );
};
