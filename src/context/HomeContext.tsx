import { createContext, Dispatch, SetStateAction } from 'react';
import { INote } from 'types/INote';

type ContextProps = {
  notes: INote[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
  onAddNote: () => void;
  onDeleteNote: (idDelete: string) => void;
  selectedNote: string;
  setSelectedNote: Dispatch<SetStateAction<string>>;
  getActiveNote: () => INote;
  onUpdateNote: (note: INote) => void;
  onDeleteTag: (idNote: string, idDelete: string) => void;
};

const HomeContext = createContext<ContextProps | null>(null);

export default HomeContext;
