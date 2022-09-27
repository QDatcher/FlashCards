import { createSlice } from "@reduxjs/toolkit";


const topicSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action)=>{
            // const newTopic = {[action.payload.id]: {...action.payload, quizIds: []}}
            // // newTopic.quizIds = [];
            // state.push(newTopic)
            console.log(state.topics.topics)

            const { id, name, icon} = action.payload;

            state.topics[id] = { id: id, name: name, icon: icon, quizIds: []}
            console.log(state.topics.topics)
        },
        addQuizId: (state, action)=>{
            const { quizId, topicId } = action.payload;

            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicSlice.actions;

export default topicSlice.reducer;