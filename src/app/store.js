import { configureStore } from "@reduxjs/toolkit";
import topicReducer from '../features/topics/topicSlice.js';
import quizReducer from '../features/quizzes/quizSlice.js';
import cardReducer from '../features/cards/cardsSlice.js';
export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer
  },
});
