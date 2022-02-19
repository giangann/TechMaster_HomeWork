import {v4 as uuidv4} from 'uuid'

export const MockTask = [
  {
    id: uuidv4(),
    createdDate: new Date(),
    completedDate: new Date(),
    taskName: "Mua gạo",
    isFavorite: true,
    isCompleted: true,
    user: "sylk",
  },
  {
    id: "e1765579-3c29-415a-a923-632f94d1f558",
    createdDate: new Date(),
    completedDate: null,
    taskName: "Làm bài tập",
    isFavorite: false,
    isCompleted: false,
    user: "sylk",
  },
  {
    id: "e35dbc87-ffd7-4eac-8acb-3313be1dad98",
    createdDate: new Date(),
    completedDate: null,
    taskName: "Lau nhà",
    isFavorite: true,
    isCompleted: false,
    user: "sylk",
  },
  {
    id: "8f959a8c-28c7-4428-b611-d0d86013fd1f",
    createdDate: new Date(),
    completedDate: null,
    taskName: "Fix bug",
    isFavorite: true,
    isCompleted: false,
    user: "sylk",
  },
];
