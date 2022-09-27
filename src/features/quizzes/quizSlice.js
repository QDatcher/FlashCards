import { createSlice } from "@reduxjs/toolkit";

import { addQuizId } from "../topics/topicSlice";




const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {id: id, name: name, topicId: topicId, cardIds: cardIds}
        }
    }
})

export const newQuiz = (quiz) => {
    const {name, topicId, cardIds, id} = quiz;
    return (dispatch) => {
        dispatch(quizSlice.actions.addQuiz({id: id, topicId: topicId, name: name, cardIds: cardIds}))
        dispatch(addQuizId({topicId: topicId, quizId: id}))
    }
}


export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;