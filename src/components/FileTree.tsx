// src/FileTree.tsx
import { GitHubFile } from '../types';

interface FileTreeProps {
  file: GitHubFile;
  selectedFiles: Set<string>;
  onSelection: (file: GitHubFile) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({
  file,
  selectedFiles,
  onSelection,
}) => {
  const isSelected = selectedFiles.has(file.path);
  return (
    <li className="pl-2 py-1">
      <label className="cursor-pointer flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelection(file)}
          className="form-checkbox text-blue-500"
        />
        <span
          className={`truncate w-full ${isSelected ? 'font-semibold' : ''}`}
        >
          {file.path}
        </span>
      </label>
    </li>
  );
};
