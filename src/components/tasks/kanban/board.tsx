import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

export const KanbanBoardContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        width: "calc(100%+64px)",
        height: "calc(100vh)",
        display: "flex",
        justifyContent: "column",
        margin: "-32px",
        border: "1px solid red",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "32px",
          overflow: "scroll",
          border: "1px solid blue",
        }}
      >
        {children}
      </div>
    </div>
  );
};

type Props = {
  onDragEnd: (event: DragEndEvent) => void;
};

export const KanbanBoard = ({
  children,
  onDragEnd,
}: React.PropsWithChildren<Props>) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { distance: 5 },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext onDragEnd={onDragEnd} sensors={sensors}>
      {children}
    </DndContext>
  );
};
