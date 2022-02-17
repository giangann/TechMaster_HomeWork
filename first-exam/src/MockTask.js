import {v4 as uuidv4} from 'uuid'

export const MockTask = [
  {
    id: uuidv4(),
    createdDate: uuidv4(),
    completedDate: null,
    taskName: "Mua gạo",
    isFavorite: true,
    isCompleted: true,
    user: "sylk",
  },
  {
    id: "e1765579-3c29-415a-a923-632f94d1f558",
    createdDate: uuidv4(),
    completedDate: null,
    taskName: "Làm bài tập",
    isFavorite: false,
    isCompleted: false,
    user: "sylk",
  },
  {
    id: "e35dbc87-ffd7-4eac-8acb-3313be1dad98",
    createdDate: uuidv4(),
    completedDate: "2022-02-17T03:36:56.8618202Z",
    taskName: "Lau nhà",
    isFavorite: true,
    isCompleted: false,
    user: "sylk",
  },
  {
    id: "8f959a8c-28c7-4428-b611-d0d86013fd1f",
    createdDate: uuidv4(),
    completedDate: "2022-02-17T03:12:26.1119436Z",
    taskName: "hey",
    isFavorite: true,
    isCompleted: false,
    user: "sylk",
  },
];
