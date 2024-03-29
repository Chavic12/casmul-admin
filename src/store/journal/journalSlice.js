import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }

    },
    reducers: {

        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {

            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
            // TODO: mensaje de error
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            // Para que las notas se actualicen en el listado
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                } else {
                    return note;
                }
            })
            // TODO: mostrar mensaje de actualización
            state.messageSaved = `${action.payload.title}, actualizada correctamente`;

        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false;

        },
        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [],
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.isSaving = false;
            state.messageSaved = '';
            state.active = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;