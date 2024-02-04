import { DndContext } from "@dnd-kit/core";

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

export const KanbanBoard = ({ children }: React.PropsWithChildren) => {
  return <DndContext>{children}</DndContext>;
};
