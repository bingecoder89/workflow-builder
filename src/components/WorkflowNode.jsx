function WorkflowNode({ node, addAction, addBranch, addDelete, addSave }) {
  return (
    <div className="node-wrapper">
      <div className="node-box">
        <strong className="node-label">{node.label}</strong>
        {node.type !== "end" && <em className="node-type">({node.type})</em>}
        {node.type === "action" && node.type !== "End" && (
          <div className="buttons-wrapper">
            <button className="button" onClick={() => addAction(node.id)}>
              Add action <i className="fa-notdog fa-solid fa-plus"></i>
            </button>
            <button className="button" onClick={() => addBranch(node.id)}>
              Add branch <i className="fa-notdog fa-solid fa-plus"></i>
            </button>
            {node.id !== "start" && node.type !== "end" && (
              <button className="button" onClick={() => addDelete(node.id)}>
                Delete node <i className="fa-solid fa-trash-can"></i>
              </button>
            )}
          </div>
        )}
      </div>

      <div>
        {node.children.map((child) => (
          <WorkflowNode
            key={child.id}
            node={child}
            addAction={addAction}
            addBranch={addBranch}
            addDelete={addDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkflowNode;
