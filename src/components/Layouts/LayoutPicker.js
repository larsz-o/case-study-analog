import { useState, useEffect } from "react";
import lessonData from "../ChooseLesson/lessonData";
import DecisionLayout from "./DecisionLayout";
import Title from "./Title";
import TextOnlyLayout from "./TextOnlyLayout";
import ImageLayout from "./ImageLayout";
import LessonComplete from "./LessonComplete";
import DecisionLayoutPartB from "./DecisionLayoutPartB";

const LayoutPicker = () => {
  const [lesson] = useState(lessonData);
  const [scene, updateScene] = useState(lesson[2]);
  const [layoutNumber, updateLayoutNumber] = useState();


  useEffect(() => {
    updateLayoutNumber(scene.layoutNumber);

  }, [lesson, scene.layoutNumber, scene.scene_number]);
  return (
    <div>
      <div className="flex-box flex-end">

      </div>
      {layoutNumber === 7 && (
        <DecisionLayoutPartB
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 1 && (
        <ImageLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 4 && (
        <TextOnlyLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 3 && (
        <Title
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 9 && (
        <DecisionLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 6 && (
        <LessonComplete
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
    </div>
  );
};
export default LayoutPicker;
