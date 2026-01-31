import { useState } from "react";
import WorkflowNode from "./WorkflowNode";
import SaveButton from "./SaveButton";

const initialWorkflow = {
  id: "start",
  type: "action",
  label: "Send Email",
  children: [],
};

function createActionNode() {
  const label = prompt("Enter action name");
  if (!label) return null;

  return {
    id: Date.now().toString(),
    type: "action",
    label: label,
    children: [],
  };
}

function createBranchNode(parentId) {
  const label = prompt("Enter action name");
  if (!label) return null;

  return {
    id: parentId + "-branch",
    type: "branch",
    label: label,
    children: [
      {
        id: parentId + "-true",
        type: "action",
        label: "True",
        children: [createEndNode(parentId + "-false")],
      },
      {
        id: parentId + "-false",
        type: "action",
        label: "False",
        children: [createEndNode(parentId + "-false")],
      },
    ],
  };
}

function createEndNode(parentId) {
  return {
    id: parentId + "-end",
    type: "end",
    label: "End",
    children: [],
  };
}

function WorkflowCanvas() {
  const [workflow, setWorkflow] = useState(initialWorkflow);

  function addActionToNode(node, targetId) {
    if (node.id === targetId) {
      const newAction = createActionNode();
      if (!newAction) return node;
      return {
        ...node,
        children: [...node.children, newAction],
      };
    }

    return {
      ...node,
      children: node.children.map((child) => addActionToNode(child, targetId)),
    };
  }

  function addBranchToNode(node, targetId) {
    if (node.id === targetId) {
      const newBranch = createBranchNode(node.id);
      if (!newBranch) return node;
      return {
        ...node,
        children: [...node.children, newBranch],
      };
    }

    return {
      ...node,
      children: node.children.map((child) => addBranchToNode(child, targetId)),
    };
  }

  function deleteNode(node, targetId) {
    return {
      ...node,
      children: node.children
        .filter((child) => child.id !== targetId)
        .map((child) => deleteNode(child, targetId)),
    };
  }

  function handleAddAction(nodeId) {
    setWorkflow((prev) => addActionToNode(prev, nodeId));
  }

  function handleAddBranch(nodeId) {
    setWorkflow((prev) => addBranchToNode(prev, nodeId));
  }

  function handleDeleteNode(nodeId) {
    setWorkflow((prev) => deleteNode(prev, nodeId));
  }

  function handleSave() {
    console.log("workflow:", workflow);
  }

  return (
    <div className="container-two">
      <SaveButton addSave={handleSave} />
      <WorkflowNode
        node={workflow}
        addAction={handleAddAction}
        addBranch={handleAddBranch}
        addDelete={handleDeleteNode}
        addSave={handleSave}
      />
    </div>
  );
}

export default WorkflowCanvas;
