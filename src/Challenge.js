import ExerciseIcon from './asset/icon-exercise.png';
import StudyIcon from './asset/icon-study.png';
import MindIcon from './asset/icon-mind.png';

const Challenge = [
    {
      id: 0,
      category: "Study",
      icon: StudyIcon,
      content: "독서실에서 2시간 공부하기",
      difficulty: "Hard",
      points: 50
    },

    {
      id: 1,
      category: "Exercise",
      icon: ExerciseIcon,
      content: "팔굽혀펴기 20회",
      difficulty: "Medium",
      points: 30
    },

    {
      id: 2,
      category: "Mind",
      icon: MindIcon,
      content: "명상 30분",
      difficulty: "Medium",
      points: 30
    },

    {
      id: 3,
      category: "Exercise",
      icon: ExerciseIcon,
      content: "조깅 1시간",
      difficulty: "Easy",
      points: 10
    },

    {
      id: 4,
      category: "Study",
      icon: StudyIcon,
      content: "전공 공부 1시간",
      difficulty: "Medium",
      points: 30
    }

  ];

  export default Challenge;